import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse, urldefrag
from collections import deque
import time

START_URL = "https://poshaussie.com.au/"
TIMEOUT = 12
MAX_PAGES = 2000

session = requests.Session()
session.headers.update({
    "User-Agent": "POSH-Link-Scanner/1.0"
})

visited_pages = set()
checked_assets = set()
broken_internal = []
broken_external = []
page_errors = []
scanned_pages = []
asset_hits = []

start_domain = urlparse(START_URL).netloc


def normalize_url(base_url, href):
    if not href:
        return None
    href = href.strip()

    if href.startswith("mailto:") or href.startswith("tel:") or href.startswith("javascript:"):
        return None

    full = urljoin(base_url, href)
    full, _frag = urldefrag(full)
    return full


def is_internal(url):
    return urlparse(url).netloc == start_domain


def looks_like_asset(url):
    path = urlparse(url).path.lower()
    return path.endswith((
        ".pdf", ".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg",
        ".css", ".js", ".json", ".xml", ".txt", ".ico", ".woff",
        ".woff2", ".ttf", ".map"
    ))


def fetch(url):
    try:
        r = session.get(url, timeout=TIMEOUT, allow_redirects=True)
        return r
    except requests.RequestException as e:
        return e


def check_link(source_page, target_url):
    try:
        r = session.head(target_url, timeout=TIMEOUT, allow_redirects=True)
        if r.status_code >= 400 or r.status_code == 405:
            r = session.get(target_url, timeout=TIMEOUT, allow_redirects=True)
        status = getattr(r, "status_code", None)
        if status is None or status >= 400:
            return False, status
        return True, status
    except requests.RequestException:
        try:
            r = session.get(target_url, timeout=TIMEOUT, allow_redirects=True)
            status = getattr(r, "status_code", None)
            if status is None or status >= 400:
                return False, status
            return True, status
        except requests.RequestException:
            return False, "REQUEST FAILED"


def record_broken(source_page, target_url, status):
    item = {
        "source": source_page,
        "target": target_url,
        "status": status
    }
    if is_internal(target_url):
        broken_internal.append(item)
    else:
        broken_external.append(item)


def parse_page(url, html):
    soup = BeautifulSoup(html, "html.parser")
    found_links = set()
    found_assets = set()

    for tag in soup.find_all("a", href=True):
        u = normalize_url(url, tag.get("href"))
        if u:
            found_links.add(u)

    for tag in soup.find_all(["script", "img", "link", "source"]):
        attr = None
        if tag.name in ["script", "img", "source"]:
            attr = "src"
        elif tag.name == "link":
            attr = "href"

        if attr and tag.get(attr):
            u = normalize_url(url, tag.get(attr))
            if u:
                found_assets.add(u)

    return found_links, found_assets


def write_report():
    lines = []
    lines.append("POSH SITE SCAN REPORT")
    lines.append("=" * 80)
    lines.append(f"Start URL: {START_URL}")
    lines.append(f"Pages scanned: {len(scanned_pages)}")
    lines.append(f"Assets checked: {len(asset_hits)}")
    lines.append(f"Broken internal links: {len(broken_internal)}")
    lines.append(f"Broken external links: {len(broken_external)}")
    lines.append(f"Page fetch errors: {len(page_errors)}")
    lines.append("")

    lines.append("SCANNED PAGES")
    lines.append("-" * 80)
    for p in scanned_pages:
        lines.append(p)
    lines.append("")

    if page_errors:
        lines.append("PAGE ERRORS")
        lines.append("-" * 80)
        for e in page_errors:
            lines.append(f"Page: {e['page']}")
            lines.append(f"Error: {e['error']}")
            lines.append("")
    else:
        lines.append("PAGE ERRORS")
        lines.append("-" * 80)
        lines.append("None")
        lines.append("")

    if broken_internal:
        lines.append("BROKEN INTERNAL LINKS / ASSETS")
        lines.append("-" * 80)
        for b in broken_internal:
            lines.append(f"Source: {b['source']}")
            lines.append(f"Broken: {b['target']}")
            lines.append(f"Status: {b['status']}")
            lines.append("")
    else:
        lines.append("BROKEN INTERNAL LINKS / ASSETS")
        lines.append("-" * 80)
        lines.append("None")
        lines.append("")

    if broken_external:
        lines.append("BROKEN EXTERNAL LINKS / ASSETS")
        lines.append("-" * 80)
        for b in broken_external:
            lines.append(f"Source: {b['source']}")
            lines.append(f"Broken: {b['target']}")
            lines.append(f"Status: {b['status']}")
            lines.append("")
    else:
        lines.append("BROKEN EXTERNAL LINKS / ASSETS")
        lines.append("-" * 80)
        lines.append("None")
        lines.append("")

    with open("POSH-SCAN-REPORT.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(lines))


def main():
    queue = deque([START_URL])

    while queue and len(visited_pages) < MAX_PAGES:
        current = queue.popleft()
        if current in visited_pages:
            continue

        print(f"Scanning page: {current}")
        visited_pages.add(current)

        response = fetch(current)
        if isinstance(response, Exception):
            page_errors.append({"page": current, "error": str(response)})
            continue

        if response.status_code >= 400:
            page_errors.append({"page": current, "error": response.status_code})
            continue

        content_type = response.headers.get("Content-Type", "").lower()
        if "text/html" not in content_type:
            # not an HTML page, don't parse as page
            continue

        scanned_pages.append(current)
        links, assets = parse_page(current, response.text)

        for asset in assets:
            if asset in checked_assets:
                continue
            checked_assets.add(asset)
            ok, status = check_link(current, asset)
            asset_hits.append(asset)
            if not ok:
                record_broken(current, asset, status)

        for link in links:
            if looks_like_asset(link):
                if link in checked_assets:
                    continue
                checked_assets.add(link)
                ok, status = check_link(current, link)
                asset_hits.append(link)
                if not ok:
                    record_broken(current, link, status)
            else:
                ok, status = check_link(current, link)
                if not ok:
                    record_broken(current, link, status)
                if ok and is_internal(link) and link not in visited_pages:
                    queue.append(link)

        time.sleep(0.15)

    write_report()

    print("\n" + "=" * 80)
    print("SCAN COMPLETE")
    print(f"Pages scanned: {len(scanned_pages)}")
    print(f"Assets checked: {len(asset_hits)}")
    print(f"Broken internal links: {len(broken_internal)}")
    print(f"Broken external links: {len(broken_external)}")
    print(f"Page errors: {len(page_errors)}")
    print("Saved report: POSH-SCAN-REPORT.txt")
    print("=" * 80)


if __name__ == "__main__":
    main()

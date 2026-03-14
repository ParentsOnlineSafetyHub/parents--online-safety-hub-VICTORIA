import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

visited = set()
broken_links = []

start_url = "https://poshaussie.com.au"

def crawl(url):
    if url in visited:
        return

    visited.add(url)

    try:
        r = requests.get(url, timeout=10)
    except:
        broken_links.append((url, "PAGE FAILED"))
        return

    if r.status_code != 200:
        broken_links.append((url, r.status_code))
        return

    soup = BeautifulSoup(r.text, "html.parser")

    for link in soup.find_all("a"):
        href = link.get("href")

        if not href:
            continue

        full_url = urljoin(url, href)

        if urlparse(full_url).netloc != urlparse(start_url).netloc:
            continue

        try:
            response = requests.head(full_url, allow_redirects=True, timeout=10)

            if response.status_code >= 400:
                broken_links.append((url, full_url))

        except:
            broken_links.append((url, full_url))

        if full_url not in visited:
            crawl(full_url)


crawl(start_url)

print("\nBROKEN LINKS FOUND:\n")

for page, link in broken_links:
    print(f"Page: {page}")
    print(f"Broken: {link}\n")

print("Scan complete.")

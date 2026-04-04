(function () {
  "use strict";

  const navHTML = `
    <div class="nav-search-wrap">
      <input
        type="text"
        id="poshSearch"
        class="nav-search-input"
        placeholder="Search apps, games, devices, PDFs or topics"
        autocomplete="off"
        aria-label="Search POSH"
      />
      <div id="poshSearchResults" class="nav-search-results"></div>
    </div>

    <div class="nav-accordion">
      <!-- (NAV CONTENT UNCHANGED — KEEP YOUR ORIGINAL BLOCK HERE) -->
    </div>
  `;

  // 🔥 UPDATED FOOTER WITH SUPPORT SYSTEM
  const footerHTML = `
    <footer>

      <div class="footer-cta-block">
        <h3 class="footer-cta-title">Help Protect More Children</h3>
        <p class="footer-cta-text">
          POSH exists to help parents act earlier, understand more, and protect children online with clearer guidance and practical tools.
        </p>

        <div class="footer-actions">
          <a class="btn" href="v3-support.html">Support POSH</a>
          <a class="btn secondary" href="v3-community.html">Join Community</a>
          <a class="btn secondary" href="v3-downloads.html">Download Guides</a>
          <a class="btn secondary" href="v3-share.html">Share POSH</a>
        </div>
      </div>

      <div class="footer-cta-block" style="margin-top:30px;">
        <h3 class="footer-cta-title">Support This Mission Worldwide</h3>
        <p class="footer-cta-text">
          This platform is free for every parent. Support helps expand it globally, build more tools, and reach families before harm starts.
        </p>

        <div class="footer-actions">
          <a class="btn" href="https://gofund.me/eb912ad28" target="_blank" rel="noopener">🌍 Support via GoFundMe</a>
          <a class="btn secondary" href="https://buy.stripe.com/test_28E4gBbhJabPdvh9dJebu00" target="_blank" rel="noopener">💳 Monthly Support</a>
        </div>
      </div>

      <div class="footer-cta-block" style="margin-top:20px;">
        <h3 class="footer-cta-title">Not Ready to Donate?</h3>
        <p class="footer-cta-text">
          Sharing this with one parent can protect one child. That matters just as much.
        </p>

        <div class="footer-actions">
          <a class="btn secondary" href="https://www.facebook.com/sharer/sharer.php?u=https://poshaussie.com.au" target="_blank" rel="noopener">
            📢 Share on Facebook
          </a>
          <a class="btn secondary" href="v3-share.html">Share POSH</a>
        </div>
      </div>

      <div class="footer-meta">
        Built to educate parents. Designed to protect our children.<br/>
        <span class="small">Contact: allthewaycarpentry@gmail.com</span>
      </div>

    </footer>
  `;

  function escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\\s-]/g, " ")
      .replace(/\\s+/g, " ")
      .trim();
  }

  function score(item, query) {
    const q = normalize(query);
    const title = normalize(item.title || "");
    const keywords = normalize(item.keywords || "");
    const description = normalize(item.description || "");
    const category = normalize(item.category || "");
    const href = normalize(item.href || "");

    let s = 0;

    if (title === q) s += 120;
    if (title.indexOf(q) !== -1) s += 50;
    if (keywords.indexOf(q) !== -1) s += 30;
    if (description.indexOf(q) !== -1) s += 20;
    if (category.indexOf(q) !== -1) s += 10;
    if (href.indexOf(q) !== -1) s += 8;

    const tokens = q.split(/\\s+/).filter(Boolean);
    tokens.forEach(function (token) {
      if (title.indexOf(token) !== -1) s += 14;
      if (keywords.indexOf(token) !== -1) s += 9;
      if (description.indexOf(token) !== -1) s += 6;
      if (category.indexOf(token) !== -1) s += 4;
      if (href.indexOf(token) !== -1) s += 3;
    });

    return s;
  }

  function search(query, index) {
    return index
      .map(function (item) {
        return Object.assign({}, item, { score: score(item, query) });
      })
      .filter(function (item) {
        return item.score > 0;
      })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return String(a.title || "").localeCompare(String(b.title || ""));
      });
  }

  function goToSearchPage(query) {
    const q = String(query || "").trim();
    if (!q) return;
    window.location.href = "v3-search.html?q=" + encodeURIComponent(q);
  }

  function enhanceLinks() {
    const links = document.querySelectorAll("a.btn");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        link.classList.add("clicked");
      });
    });
  }

  function markActiveNav(navRoot) {
    const currentPage = (window.location.pathname.split("/").pop() || "index.html")
      .split("?")[0]
      .split("#")[0];

    const navLinks = navRoot.querySelectorAll(".nav-group nav a");

    navLinks.forEach(function (link) {
      const href = (link.getAttribute("href") || "")
        .split("?")[0]
        .split("#")[0];

      if (href === currentPage) {
        link.classList.add("nav-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupAccordion(navRoot) {
    const groups = navRoot.querySelectorAll(".nav-group");

    groups.forEach(function (group) {
      group.open = false;
    });

    groups.forEach(function (group) {
      group.addEventListener("toggle", function () {
        if (!group.open) return;

        groups.forEach(function (other) {
          if (other !== group) {
            other.open = false;
          }
        });
      });
    });
  }

  function buildFallbackSearchIndex(navRoot) {
    return Array.from(navRoot.querySelectorAll(".nav-group nav a")).map(function (link) {
      return {
        title: (link.textContent || "").trim(),
        href: link.getAttribute("href") || "#",
        keywords: link.getAttribute("data-keywords") || (link.textContent || "").trim(),
        description: "",
        category: link.getAttribute("data-type") || "Page"
      };
    });
  }

  function initNavSearch(navRoot) {
    const input = document.getElementById("poshSearch");
    const results = document.getElementById("poshSearchResults");
    if (!input || !results) return;

    let index = window.POSH_SEARCH_INDEX || [];
    if (!Array.isArray(index) || !index.length) {
      index = buildFallbackSearchIndex(navRoot);
    }

    input.addEventListener("input", function () {
      const q = this.value.trim();

      if (!q) {
        results.innerHTML = "";
        results.classList.remove("show");
        return;
      }

      const matches = search(q, index).slice(0, 8);

      if (!matches.length) {
        results.innerHTML = '<div class="nav-search-result nav-search-empty">No results found</div>';
        results.classList.add("show");
        return;
      }

      const quickResults = matches.map(function (item) {
        return '<a href="' + escapeHTML(item.href) + '" class="nav-search-result">' +
          escapeHTML(item.title) +
        "</a>";
      }).join("");

      const viewAll = '<a href="v3-search.html?q=' + encodeURIComponent(q) + '" class="nav-search-result nav-search-view-all">View all results</a>';

      results.innerHTML = quickResults + viewAll;
      results.classList.add("show");
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        goToSearchPage(input.value);
      }

      if (event.key === "Escape") {
        results.innerHTML = "";
        results.classList.remove("show");
        input.blur();
      }
    });

    document.addEventListener("click", function (event) {
      const clickedInsideSearch = event.target.closest(".nav-search-wrap");
      if (!clickedInsideSearch) {
        results.innerHTML = "";
        results.classList.remove("show");
      }
    });
  }

  function injectSupportStyles() {
    if (document.getElementById("poshSupportUiStyles")) return;

    const style = document.createElement("style");
    style.id = "poshSupportUiStyles";
    style.textContent = `
      .posh-sticky-support {
        position: fixed;
        right: 16px;
        bottom: 16px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 220px;
      }

      .posh-sticky-support a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        font-weight: 800;
        border-radius: 999px;
        padding: 12px 16px;
        box-shadow: 0 10px 28px rgba(0,0,0,.28);
      }

      .posh-sticky-main {
        background: linear-gradient(135deg, #19c2ff, #3c7cff);
        color: #fff;
      }

      .posh-sticky-sub {
        background: rgba(8,16,34,.92);
        color: #fff;
        border: 1px solid rgba(255,255,255,.12);
        font-size: .92rem;
      }

      .posh-exit-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,.6);
        z-index: 10000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
      }

      .posh-exit-overlay.show {
        display: flex;
      }

      .posh-exit-modal {
        width: min(680px, 96vw);
        background: linear-gradient(180deg, #0a1730, #081225);
        color: #fff;
        border: 1px solid rgba(255,255,255,.12);
        border-radius: 24px;
        padding: 24px;
        box-shadow: 0 22px 60px rgba(0,0,0,.45);
        text-align: center;
      }

      .posh-exit-kicker {
        font-size: .84rem;
        letter-spacing: .12em;
        text-transform: uppercase;
        opacity: .8;
        margin-bottom: 8px;
      }

      .posh-exit-title {
        font-size: clamp(1.4rem, 2.8vw, 2rem);
        line-height: 1.15;
        margin: 0 0 10px;
        font-weight: 900;
      }

      .posh-exit-copy {
        line-height: 1.7;
        opacity: .95;
        margin: 0 auto 16px;
        max-width: 58ch;
      }

      .posh-exit-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
        margin-top: 16px;
      }

      .posh-exit-actions a,
      .posh-exit-actions button {
        border: 0;
        border-radius: 999px;
        padding: 12px 16px;
        font-weight: 800;
        cursor: pointer;
        text-decoration: none;
      }

      .posh-exit-primary {
        background: linear-gradient(135deg, #19c2ff, #3c7cff);
        color: #fff;
      }

      .posh-exit-secondary {
        background: rgba(255,255,255,.08);
        color: #fff;
        border: 1px solid rgba(255,255,255,.12);
      }

      .posh-inline-support {
        margin: 22px 0 0;
        padding: 18px;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,.10);
        background: linear-gradient(180deg, rgba(10,24,49,.88), rgba(7,16,33,.88));
        text-align: center;
      }

      .posh-inline-support-title {
        font-size: 1.04rem;
        font-weight: 800;
        margin-bottom: 8px;
      }

      .posh-inline-support-copy {
        margin: 0 auto 14px;
        max-width: 58ch;
        line-height: 1.65;
        opacity: .95;
      }

      .posh-inline-support-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
      }

      .posh-inline-support-actions a {
        text-decoration: none;
      }

      @media (max-width: 640px) {
        .posh-sticky-support {
          left: 12px;
          right: 12px;
          bottom: 12px;
          max-width: none;
        }

        .posh-sticky-support a {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function buildStickySupportButton() {
    if (document.querySelector(".posh-sticky-support")) return;

    const wrap = document.createElement("div");
    wrap.className = "posh-sticky-support";
    wrap.innerHTML = `
      <a class="posh-sticky-main" href="v3-support.html" aria-label="Support POSH">
        Support POSH
      </a>
      <a class="posh-sticky-sub" href="https://gofund.me/eb912ad28" target="_blank" rel="noopener" aria-label="Support POSH via GoFundMe">
        Help Keep POSH Free
      </a>
    `;
    document.body.appendChild(wrap);
  }

  function buildExitIntentModal() {
    if (document.querySelector(".posh-exit-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "posh-exit-overlay";
    overlay.innerHTML = `
      <div class="posh-exit-modal" role="dialog" aria-modal="true" aria-labelledby="poshExitTitle">
        <div class="posh-exit-kicker">Before you go</div>
        <h3 class="posh-exit-title" id="poshExitTitle">If POSH helped you think clearer, help keep it free for the next parent.</h3>
        <p class="posh-exit-copy">
          POSH is being built to help overwhelmed families act earlier, understand more, and protect children with calmer guidance.
          Support helps grow the pages, tools, downloads, and awareness.
        </p>

        <div class="posh-exit-actions">
          <a class="posh-exit-primary" href="https://gofund.me/eb912ad28" target="_blank" rel="noopener">🌍 Support via GoFundMe</a>
          <a class="posh-exit-secondary" href="https://buy.stripe.com/test_28E4gBbhJabPdvh9dJebu00" target="_blank" rel="noopener">💳 Monthly Support</a>
          <a class="posh-exit-secondary" href="v3-share.html">📢 Share POSH</a>
          <button type="button" class="posh-exit-secondary" id="poshExitClose">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector("#poshExitClose");
    closeBtn.addEventListener("click", function () {
      overlay.classList.remove("show");
      sessionStorage.setItem("posh_exit_seen", "1");
    });

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        overlay.classList.remove("show");
        sessionStorage.setItem("posh_exit_seen", "1");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        overlay.classList.remove("show");
      }
    });

    let shown = false;

    function maybeShowExitIntent(event) {
      if (shown) return;
      if (sessionStorage.getItem("posh_exit_seen") === "1") return;
      if (window.innerWidth < 768) return;
      if (event.clientY > 12) return;

      shown = true;
      overlay.classList.add("show");
      sessionStorage.setItem("posh_exit_seen", "1");
      document.removeEventListener("mouseout", maybeShowExitIntent);
    }

    document.addEventListener("mouseout", maybeShowExitIntent);
  }

  function buildInlineSupportPrompt() {
    if (document.querySelector(".posh-inline-support")) return;

    const targetCandidates = [
      ".hero-warning:last-of-type",
      ".why-posh-block",
      "#footer"
    ];

    let target = null;
    for (let i = 0; i < targetCandidates.length; i++) {
      target = document.querySelector(targetCandidates[i]);
      if (target) break;
    }

    if (!target) return;

    const block = document.createElement("div");
    block.className = "posh-inline-support";
    block.innerHTML = `
      <div class="posh-inline-support-title">If this page helped you think clearer, help keep POSH growing.</div>
      <p class="posh-inline-support-copy">
        POSH is free for families. Support helps build more tools, more guidance, more downloads, and more early protection for the next parent who lands here overwhelmed.
      </p>
      <div class="posh-inline-support-actions">
        <a class="btn" href="v3-support.html">Support POSH</a>
        <a class="btn secondary" href="https://gofund.me/eb912ad28" target="_blank" rel="noopener">Support via GoFundMe</a>
        <a class="btn secondary" href="v3-share.html">Share POSH</a>
      </div>
    `;

    if (target.id === "footer") {
      target.parentNode.insertBefore(block, target);
    } else {
      target.insertAdjacentElement("afterend", block);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");

    if (nav) {
      nav.innerHTML = navHTML;
      setupAccordion(nav);
      markActiveNav(nav);
      initNavSearch(nav);
    }

    if (footer) {
      footer.innerHTML = footerHTML;
    }

    enhanceLinks();

    injectSupportStyles();
    buildStickySupportButton();
    buildExitIntentModal();
    buildInlineSupportPrompt();
  });
})();
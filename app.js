(function () {

  /* =========================
     NAV + FOOTER
  ========================= */

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
      <details class="nav-group">
        <summary>Start Here & Immediate Help</summary>
        <nav>
          <a href="index.html">Home</a>
          <a href="v3-start.html">Start Here</a>
          <a href="v3-entry-system.html">Start Here Fast</a>
          <a href="v3-safety-score.html">Safety Check</a>
          <a href="v3-what-now.html">What To Do Now</a>
          <a href="v3-first-24-hours.html">First 24 Hours</a>
          <a href="v3-posh-response-system.html">POSH Response System</a>
          <a href="v3-urgent-warning-signs.html">Urgent Warning Signs</a>
          <a href="v3-exposure-vs-danger.html">Exposure vs Danger</a>
          <a href="v3-reporting.html">Report & Get Help</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Parents & Conversations</summary>
        <nav>
          <a href="v3-parent-scripts.html">Parent Scripts</a>
          <a href="v3-parent-conversations.html">Parent Conversations</a>
          <a href="v3-what-to-say-if-your-child-opens-up.html">If Your Child Opens Up</a>
          <a href="v3-when-your-child-wont-talk.html">If Your Child Won’t Talk</a>
          <a href="v3-house-rules.html">House Rules</a>
          <a href="v3-age-guide.html">Age Guide</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Behaviour & Risk</summary>
        <nav>
          <a href="v3-redflags.html">Red Flags</a>
          <a href="v3-predators.html">Predators & Grooming</a>
          <a href="v3-playbook.html">Predator Playbook</a>
          <a href="v3-definitions.html">Understanding What’s Happening</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Apps, Games & Devices</summary>
        <nav>
          <a href="v3-devices.html">Devices</a>
          <a href="v3-device-controls.html">Device Safety</a>
          <a href="v3-all-applications.html">All Applications</a>
          <a href="v3-all-games.html">All Games</a>
          <a href="v3-dangerous-apps.html">Dangerous Apps</a>
        </nav>
      </details>
    </div>
  `;

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

      <div class="footer-meta">
        Built to educate parents. Designed to protect our children.<br/>
        <span class="small">Contact: allthewaycarpentry@gmail.com</span>
      </div>
    </footer>
  `;

  /* =========================
     SAFE HTML
  ========================= */

  function escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeText(value) {
    return String(value || "").trim();
  }

  /* =========================
     SEARCH ENGINE
  ========================= */

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(text) {
    return normalize(text).split(/\s+/).filter(Boolean);
  }

  function score(item, query) {
    const q = normalize(query);
    const tokens = tokenize(query);

    const title = normalize(item.title);
    const keywords = normalize(item.keywords);
    const description = normalize(item.description);
    const category = normalize(item.category);
    const href = normalize(item.href);

    let s = 0;

    if (!q) return 0;

    if (title === q) s += 120;
    if (title.startsWith(q)) s += 80;
    if (title.includes(q)) s += 50;
    if (keywords.includes(q)) s += 30;
    if (description.includes(q)) s += 20;
    if (category.includes(q)) s += 10;
    if (href.includes(q)) s += 6;

    tokens.forEach(function (token) {
      if (!token) return;

      if (title.includes(token)) s += 12;
      if (keywords.includes(token)) s += 8;
      if (description.includes(token)) s += 5;
      if (category.includes(token)) s += 4;
      if (href.includes(token)) s += 2;
    });

    return s;
  }

  function search(query, index) {
    return index
      .map(function (item) {
        return {
          title: safeText(item.title),
          href: safeText(item.href),
          keywords: safeText(item.keywords),
          description: safeText(item.description),
          category: safeText(item.category),
          score: score(item, query)
        };
      })
      .filter(function (item) {
        return item.score > 0 && item.href;
      })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return a.title.localeCompare(b.title);
      });
  }

  function goToSearchPage(query) {
    const q = safeText(query);
    if (!q) return;
    window.location.href = "v3-search.html?q=" + encodeURIComponent(q);
  }

  /* =========================
     ENGAGEMENT
  ========================= */

  function enhanceLinks() {
    const links = document.querySelectorAll("a.btn");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        link.classList.add("clicked");
      });
    });
  }

  /* =========================
     NAV HELPERS
  ========================= */

  function markActiveNav(navRoot) {
    const currentPage = (window.location.pathname.split("/").pop() || "index.html")
      .split("?")[0]
      .split("#")[0];

    const navLinks = navRoot.querySelectorAll(".nav-group nav a");

    navLinks.forEach(function (link) {
      const href = safeText(link.getAttribute("href"))
        .split("?")[0]
        .split("#")[0];

      if (href === currentPage) {
        link.classList.add("nav-active");
        link.setAttribute("aria-current", "page");

        const parentGroup = link.closest(".nav-group");
        if (parentGroup) parentGroup.open = true;
      }
    });
  }

  function setupAccordion(navRoot) {
    const groups = navRoot.querySelectorAll(".nav-group");

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
      const title = safeText(link.textContent);
      const href = safeText(link.getAttribute("href"));

      return {
        title: title,
        href: href || "#",
        keywords: title.toLowerCase(),
        description: "",
        category: ""
      };
    });
  }

  /* =========================
     QUICK SEARCH DROPDOWN
  ========================= */

  function renderQuickResults(container, matches, query) {
    if (!matches.length) {
      container.innerHTML = '<div class="nav-search-result nav-search-empty">No results found</div>';
      container.classList.add("show");
      return;
    }

    const quickMatches = matches.slice(0, 8);

    const itemsHTML = quickMatches.map(function (item, index) {
      return (
        '<a href="' + escapeHTML(item.href) + '" class="nav-search-result" data-result-index="' + index + '">' +
          escapeHTML(item.title) +
        '</a>'
      );
    }).join("");

    const viewAllHTML =
      '<a href="v3-search.html?q=' + encodeURIComponent(query) + '" class="nav-search-result nav-search-view-all" data-result-index="' + quickMatches.length + '">' +
        'View all results' +
      '</a>';

    container.innerHTML = itemsHTML + viewAllHTML;
    container.classList.add("show");
  }

  function clearQuickResults(container) {
    container.innerHTML = "";
    container.classList.remove("show");
  }

  /* =========================
     INIT
  ========================= */

  document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");

    if (nav) {
      nav.innerHTML = navHTML;
      markActiveNav(nav);
      setupAccordion(nav);
    }

    if (footer) {
      footer.innerHTML = footerHTML;
    }

    const input = document.getElementById("poshSearch");
    const results = document.getElementById("poshSearchResults");

    let index = window.POSH_SEARCH_INDEX || [];
    if ((!Array.isArray(index) || !index.length) && nav) {
      index = buildFallbackSearchIndex(nav);
    }

    if (input && results) {
      let activeIndex = -1;

      function updateActiveResult() {
        const items = results.querySelectorAll(".nav-search-result");
        items.forEach(function (item) {
          item.classList.remove("active");
        });

        if (activeIndex >= 0 && items[activeIndex]) {
          items[activeIndex].classList.add("active");
        }
      }

      input.addEventListener("input", function () {
        const q = safeText(this.value);
        activeIndex = -1;

        if (!q) {
          clearQuickResults(results);
          return;
        }

        const matches = search(q, index);
        renderQuickResults(results, matches, q);
      });

      input.addEventListener("focus", function () {
        const q = safeText(this.value);
        activeIndex = -1;

        if (!q) return;

        const matches = search(q, index);
        renderQuickResults(results, matches, q);
      });

      input.addEventListener("keydown", function (e) {
        const visibleItems = results.querySelectorAll(".nav-search-result");

        if (e.key === "Enter") {
          e.preventDefault();

          if (activeIndex >= 0 && visibleItems[activeIndex]) {
            window.location.href = visibleItems[activeIndex].getAttribute("href");
            return;
          }

          goToSearchPage(input.value);
        }

        if (e.key === "Escape") {
          clearQuickResults(results);
          input.blur();
        }

        if (e.key === "ArrowDown") {
          if (!visibleItems.length) return;
          e.preventDefault();
          activeIndex = Math.min(activeIndex + 1, visibleItems.length - 1);
          updateActiveResult();
        }

        if (e.key === "ArrowUp") {
          if (!visibleItems.length) return;
          e.preventDefault();
          activeIndex = Math.max(activeIndex - 1, 0);
          updateActiveResult();
        }
      });

      document.addEventListener("click", function (e) {
        const clickedInsideNavSearch = e.target.closest(".nav-search-wrap");
        if (!clickedInsideNavSearch) {
          clearQuickResults(results);
        }
      });
    }

    enhanceLinks();

  });

})();
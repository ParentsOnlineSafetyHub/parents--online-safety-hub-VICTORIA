(function () {

  /* =========================
     NAV + FOOTER (UNCHANGED STRUCTURE)
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
      .replace(/"/g, "&quot;");
  }

  /* =========================
     SEARCH ENGINE
  ========================= */

  function normalize(text) {
    return (text || "").toLowerCase().trim();
  }

  function score(item, query) {
    const q = normalize(query);
    let s = 0;

    if (normalize(item.title).includes(q)) s += 50;
    if ((item.keywords || "").toLowerCase().includes(q)) s += 30;
    if ((item.description || "").toLowerCase().includes(q)) s += 20;
    if ((item.category || "").toLowerCase().includes(q)) s += 10;

    return s;
  }

  function search(query, index) {
    return index
      .map(function (i) {
        return { ...i, score: score(i, query) };
      })
      .filter(function (i) {
        return i.score > 0;
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });
  }

  function goToSearchPage(query) {
    const q = query.trim();
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
      const href = (link.getAttribute("href") || "")
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
      return {
        title: (link.textContent || "").trim(),
        href: link.getAttribute("href") || "#",
        keywords: (link.textContent || "").trim().toLowerCase(),
        description: "",
        category: ""
      };
    });
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

        results.innerHTML = matches.map(function (m) {
          return `
            <a href="${escapeHTML(m.href)}" class="nav-search-result">
              ${escapeHTML(m.title)}
            </a>
          `;
        }).join("");

        results.classList.add("show");
      });

      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          goToSearchPage(input.value);
        }

        if (e.key === "Escape") {
          results.innerHTML = "";
          results.classList.remove("show");
          input.blur();
        }
      });

      document.addEventListener("click", function (e) {
        const clickedInsideNavSearch = e.target.closest(".nav-search-wrap");

        if (!clickedInsideNavSearch) {
          results.innerHTML = "";
          results.classList.remove("show");
        }
      });
    }

    enhanceLinks();

  });

})();
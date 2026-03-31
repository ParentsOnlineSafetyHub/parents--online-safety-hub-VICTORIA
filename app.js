(function () {

  /* =========================
     FULL NAV (UNCHANGED)
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
     SECURITY (XSS SAFE)
  ========================= */

  function escapeHTML(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* =========================
     SEARCH ENGINE (HARDENED)
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
    if (!Array.isArray(index)) return [];

    return index
      .map(i => ({ ...i, score: score(i, query) }))
      .filter(i => i.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  /* =========================
     REDIRECT SEARCH
  ========================= */

  function goToSearchPage(query) {
    const q = query.trim();
    if (!q) return;
    window.location.href = `v3-search.html?q=${encodeURIComponent(q)}`;
  }

  /* =========================
     ENGAGEMENT BOOST (NON-INTRUSIVE)
  ========================= */

  function addSearchHints(input) {
    const hints = [
      "Try: Snapchat risks",
      "Try: Roblox safety",
      "Try: warning signs",
      "Try: device controls"
    ];

    let i = 0;
    setInterval(() => {
      if (!input || input === document.activeElement) return;
      input.placeholder = hints[i % hints.length];
      i++;
    }, 4000);
  }

  /* =========================
     INIT
  ========================= */

  document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");

    if (nav) nav.innerHTML = navHTML;
    if (footer) footer.innerHTML = footerHTML;

    const index = window.POSH_SEARCH_INDEX || [];

    const input = document.getElementById("poshSearch");
    const results = document.getElementById("poshSearchResults");

    if (!input || !results) return;

    addSearchHints(input);

    /* LIVE SEARCH */
    input.addEventListener("input", function () {
      const q = this.value.trim();

      if (!q) {
        results.innerHTML = "";
        results.classList.remove("show");
        return;
      }

      const matches = search(q, index).slice(0, 8);

      if (!matches.length) {
        results.innerHTML = `<div class="nav-search-empty">No results found</div>`;
        results.classList.add("show");
        return;
      }

      results.innerHTML = matches.map(m => `
        <a href="${escapeHTML(m.href)}" class="nav-search-result">
          ${escapeHTML(m.title)}
        </a>
      `).join("");

      results.classList.add("show");
    });

    /* ENTER → SEARCH PAGE */
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        goToSearchPage(input.value);
      }
    });

    /* CLICK OUTSIDE CLOSE */
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) {
        results.innerHTML = "";
        results.classList.remove("show");
      }
    });

    /* ESC KEY CLOSE */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        results.innerHTML = "";
        results.classList.remove("show");
      }
    });

  });

})();
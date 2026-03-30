(function () {

  /* =========================
     FULL NAV (RESTORED)
  ========================= */

  const navHTML = `
    <div class="nav-search-wrap">
      <input
        type="text"
        id="poshSearch"
        class="nav-search-input"
        placeholder="Search apps, games, devices, PDFs or topics"
        autocomplete="off"
      />
      <div id="poshSearchResults" class="nav-search-results"></div>
    </div>

    <div class="nav-accordion">

      <details class="nav-group">
        <summary>Start Here & Immediate Help</summary>
        <nav>
          <a href="index.html" data-type="Page" data-keywords="home main posh">Home</a>
          <a href="v3-start.html" data-type="Page" data-keywords="start first safety">Start Here</a>
          <a href="v3-safety-score.html" data-type="Tool" data-keywords="score checklist audit">Safety Check</a>
          <a href="v3-first-24-hours.html" data-type="Urgent" data-keywords="urgent crisis help now">First 24 Hours</a>
          <a href="v3-urgent-warning-signs.html" data-type="Urgent" data-keywords="warning danger signs urgent">Urgent Warning Signs</a>
          <a href="v3-reporting.html" data-type="Help" data-keywords="report police help evidence">Report & Get Help</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Behaviour & Risk</summary>
        <nav>
          <a href="v3-redflags.html" data-type="Topic" data-keywords="red flags grooming warning">Red Flags</a>
          <a href="v3-playbook.html" data-type="Topic" data-keywords="grooming playbook pattern">Predator Playbook</a>
          <a href="v3-predators.html" data-type="Topic" data-keywords="predators grooming risk">Predators</a>
          <a href="v3-behaviours-hub.html" data-type="Topic" data-keywords="behaviour patterns manipulation">Behaviour Hub</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Devices & Apps</summary>
        <nav>
          <a href="v3-device-controls.html" data-type="Device" data-keywords="device safety phone controls">Device Safety</a>
          <a href="v3-parental-controls.html" data-type="Device" data-keywords="parental controls monitor safety">Parental Controls</a>
          <a href="v3-all-applications.html" data-type="App" data-keywords="apps list directory">All Applications</a>
          <a href="v3-all-games.html" data-type="Game" data-keywords="games roblox fortnite minecraft">All Games</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Parents & Support</summary>
        <nav>
          <a href="v3-parent-scripts.html" data-type="Guide" data-keywords="scripts what to say">Parent Scripts</a>
          <a href="v3-house-rules.html" data-type="Guide" data-keywords="rules boundaries kids">House Rules</a>
          <a href="v3-downloads.html" data-type="PDF" data-keywords="downloads guides pdf">Downloads</a>
          <a href="v3-awareness.html" data-type="Topic" data-keywords="awareness education">Awareness</a>
        </nav>
      </details>

    </div>
  `;


  const footerHTML = `
    <footer>
      <div class="footer-meta">
        POSH • Parents Online Safety Hub<br/>
        Built to help parents act earlier and protect children.
      </div>
    </footer>
  `;

  /* =========================
     SEARCH ENGINE (UPGRADED)
  ========================= */

  function expandQuery(query) {
    const map = {
      grooming: ["predator", "red flags", "playbook"],
      predator: ["grooming", "danger"],
      urgent: ["danger", "help", "first 24 hours"],
      discord: ["chat", "dm"],
      roblox: ["game", "chat"]
    };

    let expanded = [query.toLowerCase()];

    Object.keys(map).forEach(key => {
      if (query.toLowerCase().includes(key)) {
        expanded = expanded.concat(map[key]);
      }
    });

    return expanded;
  }

  function score(item, queries) {
    let s = 0;

    queries.forEach(q => {
      if (item.title.includes(q)) s += 40;
      if (item.keywords.includes(q)) s += 25;
      if (item.type.includes(q)) s += 10;
    });

    return s;
  }

  function classify(item) {
    const k = item.keywords;

    if (k.includes("urgent") || k.includes("danger")) return "🚨 Urgent";
    if (k.includes("warning")) return "⚠️ Warning Signs";
    if (item.type === "device" || item.type === "app" || item.type === "game") return "📱 Devices & Apps";
    if (item.type === "pdf" || item.type === "guide") return "📘 Guides";
    return "🧠 Learn";
  }

  function buildIndex(root) {
    return Array.from(root.querySelectorAll(".nav-group nav a")).map(link => ({
      title: link.textContent.toLowerCase(),
      href: link.getAttribute("href"),
      type: (link.dataset.type || "").toLowerCase(),
      keywords: (link.dataset.keywords || "").toLowerCase()
    }));
  }

  function runSearch(query, index) {
    const queries = expandQuery(query);

    const results = index
      .map(item => ({
        ...item,
        score: score(item, queries)
      }))
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score);

    return results;
  }

  function render(results) {
    const groups = {};

    results.forEach(r => {
      const group = classify(r);
      if (!groups[group]) groups[group] = [];
      groups[group].push(r);
    });

    let html = "";

    Object.keys(groups).forEach(group => {
      html += `<div class="search-group"><h3>${group}</h3>`;
      groups[group].forEach(r => {
        html += `<a href="${r.href}" class="search-result-card">${r.title}</a>`;
      });
      html += `</div>`;
    });

    return html;
  }

  /* =========================
     INIT
  ========================= */

  document.addEventListener("DOMContentLoaded", function () {

    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");

    if (nav) nav.innerHTML = navHTML;
    if (footer) footer.innerHTML = footerHTML;

    const index = buildIndex(document);

    window.POSH_SEARCH_INDEX = index;

    const input = document.getElementById("poshSearch");
    const resultsBox = document.getElementById("poshSearchResults");

    if (!input || !resultsBox) return;

    input.addEventListener("input", function () {
      const q = this.value.trim();
      if (!q) {
        resultsBox.innerHTML = "";
        return;
      }

      const results = runSearch(q, index);
      resultsBox.innerHTML = render(results).slice(0, 2000);
    });

  });

})();
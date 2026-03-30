(function () {

  /* =========================
     NAV + FOOTER (UNCHANGED)
  ========================= */

  const navHTML = `...KEEP YOUR EXISTING NAV HTML EXACTLY AS IS...`;
  const footerHTML = `...KEEP YOUR EXISTING FOOTER HTML EXACTLY AS IS...`;

  /* =========================
     SEARCH CORE
  ========================= */

  function tokenize(text) {
    return text.toLowerCase().trim().split(/\s+/).filter(Boolean);
  }

  function expandQuery(query) {
    const q = query.toLowerCase();

    const expansions = {
      grooming: ["predator", "manipulation", "red flags", "playbook"],
      predator: ["grooming", "manipulation", "danger"],
      discord: ["chat", "dm", "private messaging"],
      roblox: ["game", "chat", "kids game"],
      urgent: ["danger", "help", "first 24 hours"],
      selfharm: ["mental health", "distress", "warning signs"]
    };

    let expanded = [q];

    Object.keys(expansions).forEach(key => {
      if (q.includes(key)) {
        expanded = expanded.concat(expansions[key]);
      }
    });

    return expanded;
  }

  function scoreMatch(item, queries) {
    const title = item.title.toLowerCase();
    const keywords = (item.keywords || "").toLowerCase();
    const type = (item.type || "").toLowerCase();

    let score = 0;

    queries.forEach(q => {
      if (title.includes(q)) score += 50;
      if (keywords.includes(q)) score += 25;
      if (type.includes(q)) score += 10;
    });

    return score;
  }

  function classifyIntent(item) {
    const type = (item.type || "").toLowerCase();
    const keywords = (item.keywords || "").toLowerCase();

    if (keywords.includes("urgent") || keywords.includes("danger")) return "urgent";
    if (keywords.includes("warning") || keywords.includes("red flag")) return "warning";
    if (type === "device" || type === "app" || type === "game") return "platform";
    if (type === "pdf" || type === "guide") return "guide";
    if (keywords.includes("what to do") || keywords.includes("help")) return "action";

    return "education";
  }

  function groupResults(results) {
    const groups = {
      urgent: [],
      warning: [],
      action: [],
      platform: [],
      education: [],
      guide: []
    };

    results.forEach(item => {
      const group = classifyIntent(item);
      groups[group].push(item);
    });

    return groups;
  }

  function buildSearchIndex(root) {
    return Array.from(root.querySelectorAll(".nav-group nav a")).map(link => ({
      title: link.textContent.trim(),
      href: link.getAttribute("href"),
      type: link.dataset.type || "Page",
      keywords: link.dataset.keywords || ""
    }));
  }

  function findMatches(query, index) {
    if (!query.trim()) return [];

    const expandedQueries = expandQuery(query);

    return index
      .map(item => ({
        ...item,
        score: scoreMatch(item, expandedQueries)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  function renderGroupedResults(groups) {
    const labels = {
      urgent: "🚨 Urgent Help",
      warning: "⚠️ Warning Signs",
      action: "🛠 What To Do",
      platform: "📱 Apps, Games & Devices",
      education: "🧠 Learn & Understand",
      guide: "📘 Guides & Downloads"
    };

    let html = "";

    Object.keys(groups).forEach(key => {
      if (!groups[key].length) return;

      html += `<div class="search-group">`;
      html += `<h3>${labels[key]}</h3>`;

      groups[key].forEach(item => {
        html += `
          <a href="${item.href}" class="search-result-card">
            <strong>${item.title}</strong>
            <div class="search-result-type">${item.type}</div>
          </a>
        `;
      });

      html += `</div>`;
    });

    return html;
  }

  /* =========================
     INIT
  ========================= */

  document.addEventListener("DOMContentLoaded", function () {

    const navTarget = document.getElementById("nav");
    const footerTarget = document.getElementById("footer");

    if (navTarget) {
      navTarget.innerHTML = navHTML;
    }

    if (footerTarget) {
      footerTarget.innerHTML = footerHTML;
    }

    const searchInput = document.getElementById("poshSearch");
    const searchResults = document.getElementById("poshSearchResults");

    const searchPageList = document.getElementById("searchResultsList");

    const index = buildSearchIndex(document);

    function runSearch(query) {
      const matches = findMatches(query, index);
      const grouped = groupResults(matches);

      if (searchResults) {
        searchResults.innerHTML = renderGroupedResults(grouped);
        searchResults.classList.add("show");
      }

      if (searchPageList) {
        searchPageList.innerHTML = renderGroupedResults(grouped);
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        if (!this.value.trim()) return;
        runSearch(this.value);
      });

      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          window.location.href = `v3-search.html?q=${encodeURIComponent(this.value.trim())}`;
        }
      });
    }

  });

})();
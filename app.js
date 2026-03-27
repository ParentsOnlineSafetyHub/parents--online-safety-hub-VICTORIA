(function () {
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
        <summary>Start Here &amp; Immediate Help</summary>
        <nav>
          <a href="index.html" data-keywords="home posh main page">Home</a>
          <a href="v3-start.html" data-keywords="start first steps safety">Start Here</a>
          <a href="v3-entry-system.html" data-keywords="quick fast entry start">Start Here Fast</a>
          <a href="v3-safety-score.html" data-keywords="score audit checklist safety check">Safety Check</a>
          <a href="v3-what-now.html" data-keywords="what now immediate help next steps">What To Do Now</a>
          <a href="v3-first-24-hours.html" data-keywords="urgent first 24 hours evidence response crisis">First 24 Hours</a>
          <a href="v3-posh-response-system.html" data-keywords="response system notice check secure talk monitor escalate">POSH Response System</a>
          <a href="v3-urgent-warning-signs.html" data-keywords="urgent warning signs act now danger immediate concern">Urgent Warning Signs</a>
          <a href="v3-exposure-vs-danger.html" data-keywords="exposure vs danger risk levels high exposure active danger">Exposure vs Danger</a>
          <a href="v3-reporting.html" data-keywords="report help police support evidence hotline">Report &amp; Get Help</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Parents, Conversations &amp; House Rules</summary>
        <nav>
          <a href="v3-parent-scripts.html" data-keywords="what to say talk to child scripts conversation help">Parent Scripts</a>
          <a href="v3-parent-conversations.html" data-keywords="conversations difficult talks calm discussion">Parent Conversations</a>
          <a href="v3-what-to-say-if-your-child-opens-up.html" data-keywords="child opens up what to say disclosure support">If Your Child Opens Up</a>
          <a href="v3-when-your-child-wont-talk.html" data-keywords="child wont talk silence shutdown">If Your Child Won’t Talk</a>
          <a href="v3-house-rules.html" data-keywords="rules boundaries family device rules expectations">House Rules</a>
          <a href="v3-age-guide.html" data-keywords="age suitable age guide children teens">Age Guide</a>
          <a href="v3-mindset.html" data-keywords="mindset parent thinking awareness calm structure">Parent Mindset</a>
          <a href="v3-how-to-monitor-without-breaking-trust.html" data-keywords="monitor trust check child calmly">Monitor Without Breaking Trust</a>
          <a href="v3-how-to-check-a-device-without-causing-panic.html" data-keywords="check device calmly without panic evidence support">Check a Device Calmly</a>
          <a href="v3-how-to-rebuild-trust-after-an-online-scare.html" data-keywords="rebuild trust after online scare repair connection">Rebuild Trust After an Online Scare</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Behaviour, Grooming &amp; Risk</summary>
        <nav>
          <a href="v3-redflags.html" data-keywords="warning signs red flags grooming risk">Red Flags</a>
          <a href="v3-predators.html" data-keywords="predators grooming exploitation risk">Predators &amp; Grooming</a>
          <a href="v3-playbook.html" data-keywords="playbook grooming escalation pattern">Predator Playbook</a>
          <a href="v3-definitions.html" data-keywords="definitions explain predator victim manipulation behaviour">Understanding What’s Happening</a>
          <a href="v3-double-life-online.html" data-keywords="double life online hidden accounts secret identity secrecy">Double Life Online</a>
          <a href="v3-when-a-child-becomes-dependent-on-someone-online.html" data-keywords="online dependency emotional dependence attachment hidden relationship">Online Dependency</a>
          <a href="v3-known-person-risk.html" data-keywords="known person trusted adult family risk">Known Person Risk</a>
          <a href="v3-real-life-risk.html" data-keywords="offline real life risk meeting in person">Real Life Risk</a>
          <a href="v3-behaviours-hub.html" data-keywords="behaviour patterns control isolation manipulation hub">Behaviour Patterns Hub</a>
          <a href="v3-early-behaviours-that-can-signal-red-flags.html" data-keywords="early behaviour warning signs">Early Behaviour Red Flags</a>
          <a href="v3-why-my-child-is-acting-out-of-character.html" data-keywords="acting out of character changed behaviour shift">Acting Out of Character</a>
          <a href="v3-why-kids-dont-recognise-risk.html" data-keywords="kids dont recognise risk miss warning signs">Why Kids Don’t Recognise Risk</a>
          <a href="v3-how-adults-build-trust-before-control.html" data-keywords="trust before control grooming manipulation">Trust Before Control</a>
          <a href="v3-manipulation-behaviours.html" data-keywords="manipulation behaviours guilt pressure secrecy">Manipulation Behaviours</a>
          <a href="v3-controlling-behaviours.html" data-keywords="control controlling isolation narrative">Controlling Behaviours</a>
          <a href="v3-emotional-manipulation.html" data-keywords="emotional manipulation guilt control influence">Emotional Manipulation</a>
          <a href="v3-toxic-behaviour-patterns.html" data-keywords="toxic behaviour patterns control pressure secrecy">Toxic Behaviour Patterns</a>
          <a href="v3-why-isolation-hits-children-harder.html" data-keywords="isolation child risk dependency">Why Isolation Hits Children Harder</a>
          <a href="v3-when-a-child-is-turned-against-a-safe-parent.html" data-keywords="turned against safe parent alienation manipulation">Turned Against a Safe Parent</a>
          <a href="v3-self-harm-and-suicide-warning-signs.html" data-keywords="self harm suicide warning signs emotional collapse">Self Harm &amp; Suicide Warning Signs</a>
          <a href="v3-why-kids-self-harm.html" data-keywords="why kids self harm causes distress coping">Why Kids Self Harm</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Devices, Platforms, Apps &amp; Games</summary>
        <nav>
          <a href="v3-devices.html" data-keywords="devices phone tablet ipad iphone android windows computer">Devices</a>
          <a href="v3-device-controls.html" data-keywords="device safety controls phone tablet laptop pc">Device Safety</a>
          <a href="v3-parental-controls-by-device.html" data-keywords="controls by device parental controls">Parental Controls by Device</a>
          <a href="v3-how-to-set-parental-controls-and-passwords.html" data-keywords="passwords controls lock settings restrictions">Set Controls &amp; Passwords</a>
          <a href="v3-how-to-set-parental-controls-iphone.html" data-keywords="iphone apple screen time ios">iPhone Controls</a>
          <a href="v3-how-to-set-parental-controls-android.html" data-keywords="android google family link samsung">Android Controls</a>
          <a href="v3-best-parental-control-apps.html" data-keywords="best parental control apps qustodio bark family link">Best Parental Control Apps</a>
          <a href="v3-platforms.html" data-keywords="platforms xbox playstation nintendo steam">Platforms</a>
          <a href="v3-gaming.html" data-keywords="gaming games game safety">Gaming Safety</a>
          <a href="v3-all-games.html" data-keywords="all games roblox fortnite minecraft vrchat">All Games Directory</a>
          <a href="v3-socials.html" data-keywords="socials social media chat messaging">Social Media &amp; Chat</a>
          <a href="v3-all-applications.html" data-keywords="all apps applications directory">All Applications</a>
          <a href="v3-videochat.html" data-keywords="video chat livestream ome tv zoom facetime meet teams">Live Video &amp; Streaming</a>
          <a href="v3-streaming-video.html" data-keywords="streaming netflix disney youtube twitch">Streaming &amp; Video Apps</a>
          <a href="v3-dangerous-apps.html" data-keywords="dangerous apps risky apps snapchat discord telegram">Dangerous Apps</a>
          <a href="v3-safe-apps-and-games-for-kids.html" data-keywords="safe apps safe games kids safer choices">Safe Apps &amp; Games</a>
          <a href="v3-ai-chat-risks-for-children.html" data-keywords="ai chat character ai replika bots">AI Chat Risks</a>
          <a href="v3-is-chatgpt-safe-for-kids.html" data-keywords="chatgpt kids safe ai">Is ChatGPT Safe for Kids?</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Awareness, Downloads &amp; Support</summary>
        <nav>
          <a href="v3-awareness.html" data-keywords="awareness online safety risks parents education">Safety Awareness</a>
          <a href="v3-real-investigations.html" data-keywords="real investigations shawn ryan vigilance elite research">Real Investigations</a>
          <a href="v3-algorithm-awareness.html" data-keywords="algorithm recommendations tiktok youtube exposure">Algorithm Risks</a>
          <a href="v3-downloads.html" data-keywords="pdf downloads printable guides checklist">Downloads</a>
          <a href="v3-cancel-subscriptions.html" data-keywords="subscriptions recurring charges apple google microsoft">Cancel Subscriptions</a>
          <a href="v3-support.html" data-keywords="support donate posh movement">Support</a>
          <a href="v3-community.html" data-keywords="community facebook group discussion voice">Have Your Say</a>
          <a href="v3-share.html" data-keywords="share posh facebook x social movement">Share POSH</a>
          <a href="v3-why-posh-exists.html" data-keywords="why posh exists mission purpose movement">Why POSH Exists</a>
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

  document.addEventListener("DOMContentLoaded", function () {
    const navTarget = document.getElementById("nav");
    const footerTarget = document.getElementById("footer");

    if (navTarget) {
      navTarget.innerHTML = navHTML;

      const currentPage = (
        window.location.pathname.split("/").pop() || "index.html"
      ).split("?")[0].split("#")[0];

      const navLinks = navTarget.querySelectorAll("a");
      const navGroups = navTarget.querySelectorAll(".nav-group");

      navLinks.forEach((link) => {
        const href = (link.getAttribute("href") || "").split("?")[0].split("#")[0];

        if (href === currentPage) {
          link.classList.add("nav-active");
          link.setAttribute("aria-current", "page");

          const parentGroup = link.closest(".nav-group");
          if (parentGroup) parentGroup.open = true;
        }
      });

      navGroups.forEach((group) => {
        group.addEventListener("toggle", () => {
          if (!group.open) return;

          navGroups.forEach((otherGroup) => {
            if (otherGroup !== group) otherGroup.open = false;
          });
        });
      });

      const searchInput = document.getElementById("poshSearch");
      const searchResults = document.getElementById("poshSearchResults");
      let activeIndex = -1;
      let currentMatches = [];

      const searchIndex = Array.from(navTarget.querySelectorAll(".nav-group nav a")).map((link) => ({
        title: link.textContent.trim(),
        href: link.getAttribute("href"),
        keywords: link.dataset.keywords || ""
      }));

      function tokenize(text) {
        return text
          .toLowerCase()
          .trim()
          .split(/\s+/)
          .filter(Boolean);
      }

      function scoreMatch(item, query) {
        const q = query.toLowerCase().trim();
        const tokens = tokenize(q);
        const title = item.title.toLowerCase();
        const keywords = item.keywords.toLowerCase();
        const href = item.href.toLowerCase();

        let score = 0;

        if (title === q) score += 100;
        if (title.includes(q)) score += 40;
        if (keywords.includes(q)) score += 25;
        if (href.includes(q)) score += 10;

        tokens.forEach((token) => {
          if (title.includes(token)) score += 12;
          if (keywords.includes(token)) score += 6;
          if (href.includes(token)) score += 3;
        });

        return score;
      }

      function findMatches(query) {
        const q = query.trim();
        if (!q) return [];

        return searchIndex
          .map((item) => ({
            ...item,
            score: scoreMatch(item, q)
          }))
          .filter((item) => item.score > 0)
          .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
      }

      function renderSearchResults(matches) {
        currentMatches = matches.slice(0, 8);
        activeIndex = -1;

        if (!currentMatches.length) {
          searchResults.innerHTML = `<div class="nav-search-empty">No results found</div>`;
          searchResults.classList.add("show");
          return;
        }

        const quickResults = currentMatches
          .map((item, index) => `
            <a class="nav-search-result" href="${item.href}" data-index="${index}">
              ${item.title}
            </a>
          `)
          .join("");

        const viewAll = `
          <a class="nav-search-result nav-search-view-all" href="v3-search.html?q=${encodeURIComponent(searchInput.value.trim())}" data-index="view-all">
            View all results
          </a>
        `;

        searchResults.innerHTML = quickResults + viewAll;
        searchResults.classList.add("show");
      }

      function clearSearchResults() {
        currentMatches = [];
        activeIndex = -1;
        searchResults.innerHTML = "";
        searchResults.classList.remove("show");
      }

      function updateActiveResult() {
        const items = searchResults.querySelectorAll(".nav-search-result");

        items.forEach((item) => item.classList.remove("active"));

        if (activeIndex >= 0 && items[activeIndex]) {
          items[activeIndex].classList.add("active");
        }
      }

      function goToSearchPage(query) {
        const trimmed = query.trim();
        if (!trimmed) return;
        window.location.href = `v3-search.html?q=${encodeURIComponent(trimmed)}`;
      }

      if (searchInput && searchResults) {
        searchInput.addEventListener("input", function () {
          if (!this.value.trim()) {
            clearSearchResults();
            return;
          }

          renderSearchResults(findMatches(this.value));
        });

        searchInput.addEventListener("focus", function () {
          if (!this.value.trim()) return;
          renderSearchResults(findMatches(this.value));
        });

        searchInput.addEventListener("keydown", function (event) {
          const resultItems = searchResults.querySelectorAll(".nav-search-result");

          if (event.key === "ArrowDown") {
            event.preventDefault();
            if (!resultItems.length) return;
            activeIndex = Math.min(activeIndex + 1, resultItems.length - 1);
            updateActiveResult();
            return;
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            if (!resultItems.length) return;
            activeIndex = Math.max(activeIndex - 1, 0);
            updateActiveResult();
            return;
          }

          if (event.key === "Enter") {
            event.preventDefault();

            if (activeIndex >= 0 && resultItems[activeIndex]) {
              window.location.href = resultItems[activeIndex].getAttribute("href");
              return;
            }

            goToSearchPage(this.value);
          }
        });
      }

      document.addEventListener("click", (event) => {
        const clickedInsideNav = navTarget.contains(event.target);

        if (!clickedInsideNav) {
          navGroups.forEach((group) => {
            group.open = false;
          });
          clearSearchResults();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          navGroups.forEach((group) => {
            group.open = false;
          });
          clearSearchResults();
          if (searchInput) searchInput.blur();
        }
      });
    }

    if (footerTarget) {
      footerTarget.innerHTML = footerHTML;
    }
  });
})();
(function () {
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
        <summary>Start &amp; Safety</summary>
        <nav>
          <a href="index.html">Home</a>
          <a href="v3-start.html">Start Here</a>
          <a href="v3-entry-system.html">Start Here Fast</a>
          <a href="v3-safety-score.html">Safety Check</a>
          <a href="v3-what-now.html">What To Do Now</a>
          <a href="v3-first-24-hours.html">First 24 Hours</a>
          <a href="v3-redflags.html">Red Flags</a>
          <a href="v3-reporting.html">Report &amp; Get Help</a>
          <a href="v3-parent-scripts.html">Parent Scripts</a>
          <a href="v3-house-rules.html">House Rules</a>
          <a href="v3-age-guide.html">Age Guide</a>
          <a href="v3-mindset.html">Parent Mindset</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Devices &amp; Platform Controls</summary>
        <nav>
          <a href="v3-devices.html">Devices</a>
          <a href="v3-device-controls.html">Device Safety</a>
          <a href="v3-parental-controls-by-device.html">Parental Controls by Device</a>
          <a href="v3-how-to-set-parental-controls-and-passwords.html">Set Controls &amp; Passwords</a>
          <a href="v3-how-to-set-parental-controls-iphone.html">iPhone Controls</a>
          <a href="v3-how-to-set-parental-controls-android.html">Android Controls</a>
          <a href="v3-how-to-monitor-without-breaking-trust.html">Monitor Without Breaking Trust</a>
          <a href="v3-how-to-check-a-device-without-causing-panic.html">Check a Device Calmly</a>
          <a href="v3-best-parental-control-apps.html">Best Parental Control Apps</a>
          <a href="v3-platforms.html">Platforms</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Games, Apps &amp; Streaming</summary>
        <nav>
          <a href="v3-gaming.html">Gaming Safety</a>
          <a href="v3-all-games.html">All Games Directory</a>
          <a href="v3-socials.html">Social Media &amp; Chat</a>
          <a href="v3-all-applications.html">All Applications</a>
          <a href="v3-videochat.html">Live Video &amp; Streaming</a>
          <a href="v3-streaming-video.html">Streaming &amp; Video Apps</a>
          <a href="v3-dangerous-apps.html">Dangerous Apps</a>
          <a href="v3-safe-apps-and-games-for-kids.html">Safe Apps &amp; Games</a>
          <a href="v3-ai-chat-risks-for-children.html">AI Chat Risks</a>
          <a href="v3-is-chatgpt-safe-for-kids.html">Is ChatGPT Safe for Kids?</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Behaviour, Grooming &amp; Risk</summary>
        <nav>
          <a href="v3-predators.html">Predators &amp; Grooming</a>
          <a href="v3-playbook.html">Predator Playbook</a>
          <a href="v3-definitions.html">Understanding What’s Happening</a>
          <a href="v3-known-person-risk.html">Known Person Risk</a>
          <a href="v3-real-life-risk.html">Real Life Risk</a>
          <a href="v3-behaviours-hub.html">Behaviour Patterns Hub</a>
          <a href="v3-early-behaviours-that-can-signal-red-flags.html">Early Behaviour Red Flags</a>
          <a href="v3-why-my-child-is-acting-out-of-character.html">Acting Out of Character</a>
          <a href="v3-why-kids-dont-recognise-risk.html">Why Kids Don’t Recognise Risk</a>
          <a href="v3-how-adults-build-trust-before-control.html">Trust Before Control</a>
          <a href="v3-manipulation-behaviours.html">Manipulation Behaviours</a>
          <a href="v3-controlling-behaviours.html">Controlling Behaviours</a>
          <a href="v3-emotional-manipulation.html">Emotional Manipulation</a>
          <a href="v3-toxic-behaviour-patterns.html">Toxic Behaviour Patterns</a>
          <a href="v3-why-isolation-hits-children-harder.html">Why Isolation Hits Children Harder</a>
          <a href="v3-when-a-child-is-turned-against-a-safe-parent.html">Turned Against a Safe Parent</a>
          <a href="v3-self-harm-and-suicide-warning-signs.html">Self Harm &amp; Suicide Warning Signs</a>
          <a href="v3-why-kids-self-harm.html">Why Kids Self Harm</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Awareness &amp; Resources</summary>
        <nav>
          <a href="v3-awareness.html">Safety Awareness</a>
          <a href="v3-real-investigations.html">Real Investigations</a>
          <a href="v3-algorithm-awareness.html">Algorithm Risks</a>
          <a href="v3-downloads.html">Downloads</a>
          <a href="v3-cancel-subscriptions.html">Cancel Subscriptions</a>
          <a href="v3-support.html">Support</a>
          <a href="v3-community.html">Have Your Say</a>
          <a href="v3-share.html">Share POSH</a>
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
        <span class="small">
          Contact: allthewaycarpentry@gmail.com
        </span>
      </div>
    </footer>
  `;

  document.addEventListener("DOMContentLoaded", function () {
    const navTarget = document.getElementById("nav");
    const footerTarget = document.getElementById("footer");

    if (navTarget) {
      navTarget.innerHTML = navHTML;

      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      const navLinks = navTarget.querySelectorAll("a");
      const navGroups = navTarget.querySelectorAll(".nav-group");

      navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
          link.classList.add("nav-active");
          link.setAttribute("aria-current", "page");

          const parentGroup = link.closest(".nav-group");
          if (parentGroup) {
            parentGroup.open = true;
          }
        }
      });

      navGroups.forEach((group) => {
        group.addEventListener("toggle", () => {
          if (group.open) {
            navGroups.forEach((otherGroup) => {
              if (otherGroup !== group) {
                otherGroup.open = false;
              }
            });
          }
        });
      });

      const searchInput = document.getElementById("poshSearch");
      const searchResults = document.getElementById("poshSearchResults");

      const searchIndex = [
        { title: "Home", href: "index.html", keywords: "home posh main page" },
        { title: "Start Here", href: "v3-start.html", keywords: "start first steps safety" },
        { title: "Start Here Fast", href: "v3-entry-system.html", keywords: "quick fast entry start" },
        { title: "Safety Check", href: "v3-safety-score.html", keywords: "score audit checklist safety check" },
        { title: "What To Do Now", href: "v3-what-now.html", keywords: "what now immediate help" },
        { title: "First 24 Hours", href: "v3-first-24-hours.html", keywords: "urgent first 24 hours evidence response" },
        { title: "Red Flags", href: "v3-redflags.html", keywords: "warning signs red flags grooming risk" },
        { title: "Report & Get Help", href: "v3-reporting.html", keywords: "report help police support evidence" },
        { title: "Parent Scripts", href: "v3-parent-scripts.html", keywords: "what to say talk to child scripts" },
        { title: "House Rules", href: "v3-house-rules.html", keywords: "rules boundaries family device rules" },
        { title: "Age Guide", href: "v3-age-guide.html", keywords: "age suitable age guide children teens" },
        { title: "Parent Mindset", href: "v3-mindset.html", keywords: "mindset parent thinking awareness" },

        { title: "Devices", href: "v3-devices.html", keywords: "devices phone tablet ipad iphone android windows" },
        { title: "Device Safety", href: "v3-device-controls.html", keywords: "device safety controls phone tablet laptop pc" },
        { title: "Parental Controls by Device", href: "v3-parental-controls-by-device.html", keywords: "controls by device parental controls" },
        { title: "Set Controls & Passwords", href: "v3-how-to-set-parental-controls-and-passwords.html", keywords: "passwords controls lock settings" },
        { title: "iPhone Controls", href: "v3-how-to-set-parental-controls-iphone.html", keywords: "iphone apple screen time ios" },
        { title: "Android Controls", href: "v3-how-to-set-parental-controls-android.html", keywords: "android google family link samsung" },
        { title: "Monitor Without Breaking Trust", href: "v3-how-to-monitor-without-breaking-trust.html", keywords: "monitor trust check child calmly" },
        { title: "Check a Device Calmly", href: "v3-how-to-check-a-device-without-causing-panic.html", keywords: "check device calmly without panic" },
        { title: "Best Parental Control Apps", href: "v3-best-parental-control-apps.html", keywords: "best parental control apps qustodio bark family link" },
        { title: "Platforms", href: "v3-platforms.html", keywords: "platforms xbox playstation nintendo steam" },

        { title: "Gaming Safety", href: "v3-gaming.html", keywords: "gaming games game safety" },
        { title: "All Games Directory", href: "v3-all-games.html", keywords: "all games roblox fortnite minecraft vrchat" },
        { title: "Social Media & Chat", href: "v3-socials.html", keywords: "socials social media chat messaging" },
        { title: "All Applications", href: "v3-all-applications.html", keywords: "all apps applications directory" },
        { title: "Live Video & Streaming", href: "v3-videochat.html", keywords: "video chat livestream ome tv zoom facetime" },
        { title: "Streaming & Video Apps", href: "v3-streaming-video.html", keywords: "streaming netflix disney youtube twitch" },
        { title: "Dangerous Apps", href: "v3-dangerous-apps.html", keywords: "dangerous apps risky apps snapchat discord telegram" },
        { title: "Safe Apps & Games", href: "v3-safe-apps-and-games-for-kids.html", keywords: "safe apps safe games kids" },
        { title: "AI Chat Risks", href: "v3-ai-chat-risks-for-children.html", keywords: "ai chat character ai replika bots" },
        { title: "Is ChatGPT Safe for Kids?", href: "v3-is-chatgpt-safe-for-kids.html", keywords: "chatgpt kids safe ai" },

        { title: "Predators & Grooming", href: "v3-predators.html", keywords: "predators grooming exploitation" },
        { title: "Predator Playbook", href: "v3-playbook.html", keywords: "playbook grooming escalation pattern" },
        { title: "Understanding What’s Happening", href: "v3-definitions.html", keywords: "definitions explain predator victim manipulation" },
        { title: "Known Person Risk", href: "v3-known-person-risk.html", keywords: "known person trusted adult family risk" },
        { title: "Real Life Risk", href: "v3-real-life-risk.html", keywords: "offline real life risk" },
        { title: "Behaviour Patterns Hub", href: "v3-behaviours-hub.html", keywords: "behaviour patterns control isolation manipulation" },
        { title: "Early Behaviour Red Flags", href: "v3-early-behaviours-that-can-signal-red-flags.html", keywords: "early behaviour warning signs" },
        { title: "Acting Out of Character", href: "v3-why-my-child-is-acting-out-of-character.html", keywords: "acting out of character changed behaviour" },
        { title: "Why Kids Don’t Recognise Risk", href: "v3-why-kids-dont-recognise-risk.html", keywords: "kids dont recognise risk miss warning signs" },
        { title: "Trust Before Control", href: "v3-how-adults-build-trust-before-control.html", keywords: "trust before control grooming" },
        { title: "Manipulation Behaviours", href: "v3-manipulation-behaviours.html", keywords: "manipulation behaviours guilt pressure secrecy" },
        { title: "Controlling Behaviours", href: "v3-controlling-behaviours.html", keywords: "control controlling isolation narrative" },
        { title: "Emotional Manipulation", href: "v3-emotional-manipulation.html", keywords: "emotional manipulation guilt control" },
        { title: "Toxic Behaviour Patterns", href: "v3-toxic-behaviour-patterns.html", keywords: "toxic behaviour patterns" },
        { title: "Why Isolation Hits Children Harder", href: "v3-why-isolation-hits-children-harder.html", keywords: "isolation child risk" },
        { title: "Turned Against a Safe Parent", href: "v3-when-a-child-is-turned-against-a-safe-parent.html", keywords: "turned against safe parent" },
        { title: "Self Harm & Suicide Warning Signs", href: "v3-self-harm-and-suicide-warning-signs.html", keywords: "self harm suicide warning signs" },
        { title: "Why Kids Self Harm", href: "v3-why-kids-self-harm.html", keywords: "why kids self harm" },

        { title: "Safety Awareness", href: "v3-awareness.html", keywords: "awareness online safety risks parents" },
        { title: "Real Investigations", href: "v3-real-investigations.html", keywords: "real investigations shawn ryan vigilance elite" },
        { title: "Algorithm Risks", href: "v3-algorithm-awareness.html", keywords: "algorithm recommendations tiktok youtube exposure" },
        { title: "Downloads", href: "v3-downloads.html", keywords: "pdf downloads printable guides checklist" },
        { title: "Cancel Subscriptions", href: "v3-cancel-subscriptions.html", keywords: "subscriptions recurring charges apple google microsoft" },
        { title: "Support", href: "v3-support.html", keywords: "support donate posh" },
        { title: "Have Your Say", href: "v3-community.html", keywords: "community facebook group discussion" },
        { title: "Share POSH", href: "v3-share.html", keywords: "share posh facebook x social" }
      ];

      function renderSearchResults(matches) {
        if (!matches.length) {
          searchResults.innerHTML = '<div class="nav-search-empty">No results found</div>';
          searchResults.classList.add("show");
          return;
        }

        searchResults.innerHTML = matches
          .slice(0, 10)
          .map(
            (item) => `
              <a class="nav-search-result" href="${item.href}">
                ${item.title}
              </a>
            `
          )
          .join("");

        searchResults.classList.add("show");
      }

      function clearSearchResults() {
        searchResults.innerHTML = "";
        searchResults.classList.remove("show");
      }

      if (searchInput && searchResults) {
        searchInput.addEventListener("input", function () {
          const query = this.value.trim().toLowerCase();

          if (!query) {
            clearSearchResults();
            return;
          }

          const matches = searchIndex.filter((item) => {
            const haystack = `${item.title} ${item.keywords} ${item.href}`.toLowerCase();
            return haystack.includes(query);
          });

          renderSearchResults(matches);
        });

        searchInput.addEventListener("focus", function () {
          const query = this.value.trim().toLowerCase();

          if (!query) return;

          const matches = searchIndex.filter((item) => {
            const haystack = `${item.title} ${item.keywords} ${item.href}`.toLowerCase();
            return haystack.includes(query);
          });

          renderSearchResults(matches);
        });
      }

      document.addEventListener("click", (event) => {
        const clickedInsideNav = navTarget.contains(event.target);
        const clickedInsideSearch =
          searchInput && searchResults &&
          (searchInput.contains(event.target) || searchResults.contains(event.target));

        if (!clickedInsideNav) {
          navGroups.forEach((group) => {
            group.open = false;
          });
        }

        if (!clickedInsideSearch && searchResults) {
          clearSearchResults();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          navGroups.forEach((group) => {
            group.open = false;
          });

          if (searchResults) {
            clearSearchResults();
          }
        }
      });
    }

    if (footerTarget) {
      footerTarget.innerHTML = footerHTML;
    }
  });
})();

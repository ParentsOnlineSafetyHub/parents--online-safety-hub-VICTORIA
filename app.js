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

      <details class="nav-group">
        <summary>Start & Safety</summary>
        <nav>
          <a href="v3-start.html" data-type="Start" data-keywords="start safety first steps parent help online safety">Start Here</a>
          <a href="v3-entry-system.html" data-type="System" data-keywords="entry system start guide pathway">Entry System</a>
          <a href="v3-parent-questions.html" data-type="Parent Help" data-keywords="parent questions what to ask warning signs">Parent Questions</a>
          <a href="v3-safety-score.html" data-type="Assessment" data-keywords="safety score risk quiz check assessment">Safety Score</a>
          <a href="v3-redflags.html" data-type="Warning Signs" data-keywords="red flags warning signs grooming secrecy behaviour">Red Flags</a>
          <a href="v3-10-signs-targeted-online.html" data-type="Warning Signs" data-keywords="targeted online signs child targeted">10 Signs Targeted Online</a>
          <a href="v3-playbook.html" data-type="Awareness" data-keywords="grooming playbook escalation predator behaviour pattern">Grooming Playbook</a>
          <a href="v3-first-24-hours.html" data-type="Action" data-keywords="first 24 hours what to do immediately">First 24 Hours</a>
          <a href="v3-reporting.html" data-type="Reporting" data-keywords="reporting report abuse police help evidence">Reporting</a>
          <a href="v3-reporting-australia.html" data-type="Reporting" data-keywords="reporting australia esafety police child protection">Reporting Australia</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Parent Help</summary>
        <nav>
          <a href="v3-parent-scripts.html" data-type="Parent Scripts" data-keywords="scripts what to say conversations hard talks">Parent Scripts</a>
          <a href="v3-parent-conversations.html" data-type="Conversations" data-keywords="parent conversations difficult talks trust">Parent Conversations</a>
          <a href="v3-house-rules.html" data-type="Rules" data-keywords="house rules boundaries family device rules">House Rules</a>
          <a href="v3-age-guide.html" data-type="Guide" data-keywords="age guide age appropriate apps games devices">Age Guide</a>
          <a href="v3-how-to-talk-so-your-child-opens-up.html" data-type="Trust" data-keywords="opens up child trust disclosure conversation">How to Talk So Your Child Opens Up</a>
          <a href="v3-what-to-do-if-your-child-tells-you-something-serious.html" data-type="Response" data-keywords="child tells you something serious disclosure response">If Your Child Tells You Something Serious</a>
          <a href="v3-why-kids-hide-things.html" data-type="Behaviour" data-keywords="why kids hide things secrecy fear shame">Why Kids Hide Things</a>
          <a href="v3-why-behaviour-changes.html" data-type="Behaviour" data-keywords="behaviour changes warning signs mood change">Why Behaviour Changes</a>
          <a href="v3-how-to-check-a-device-without-causing-panic.html" data-type="Devices" data-keywords="check device without panic inspect calmly">Check a Device Without Causing Panic</a>
          <a href="v3-how-to-rebuild-trust-after-an-online-incident.html" data-type="Trust" data-keywords="rebuild trust after online incident scare">Rebuild Trust After an Online Incident</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Apps & Social Media</summary>
        <nav>
          <a href="v3-socials.html" data-type="Social Media" data-keywords="social media apps overview risks">All Socials</a>
          <a href="v3-all-applications.html" data-type="Apps" data-keywords="all apps applications app risks">All Applications</a>
          <a href="v3-social-discord.html" data-type="Social App" data-keywords="discord servers chat grooming risk">Discord</a>
          <a href="v3-social-snapchat.html" data-type="Social App" data-keywords="snapchat disappearing messages sextortion risk">Snapchat</a>
          <a href="v3-social-instagram.html" data-type="Social App" data-keywords="instagram dms reels strangers">Instagram</a>
          <a href="v3-social-tiktok.html" data-type="Social App" data-keywords="tiktok short form feed algorithm brainrot scrolling">TikTok</a>
          <a href="v3-social-youtube.html" data-type="Social App" data-keywords="youtube shorts content kids exposure">YouTube</a>
          <a href="v3-social-telegram.html" data-type="Social App" data-keywords="telegram privacy group chats risk">Telegram</a>
          <a href="v3-social-whatsapp.html" data-type="Social App" data-keywords="whatsapp messaging group chats safety">WhatsApp</a>
          <a href="v3-social-yubo.html" data-type="Social App" data-keywords="yubo meet strangers teen social app">Yubo</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Games & Platforms</summary>
        <nav>
          <a href="v3-gaming.html" data-type="Gaming" data-keywords="gaming games risks kids predators voice chat">Gaming</a>
          <a href="v3-all-games.html" data-type="Games" data-keywords="all games game list risks">All Games</a>
          <a href="v3-game-roblox.html" data-type="Game" data-keywords="roblox robux private chat predators">Roblox</a>
          <a href="v3-game-fortnite.html" data-type="Game" data-keywords="fortnite chat party strangers risk">Fortnite</a>
          <a href="v3-game-minecraft.html" data-type="Game" data-keywords="minecraft servers chat kids safety">Minecraft</a>
          <a href="v3-game-vrchat.html" data-type="Game" data-keywords="vrchat voice avatars strangers risk">VRChat</a>
          <a href="v3-game-apex.html" data-type="Game" data-keywords="apex legends chat team strangers">Apex Legends</a>
          <a href="v3-platform-playstation.html" data-type="Platform" data-keywords="playstation parental controls console">PlayStation</a>
          <a href="v3-platform-xbox.html" data-type="Platform" data-keywords="xbox parental controls console">Xbox</a>
          <a href="v3-platform-nintendo.html" data-type="Platform" data-keywords="nintendo switch parental controls">Nintendo</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Devices & Controls</summary>
        <nav>
          <a href="v3-devices.html" data-type="Devices" data-keywords="devices child safety device overview">Devices</a>
          <a href="v3-device-controls.html" data-type="Controls" data-keywords="device controls parental controls settings">Device Controls</a>
          <a href="v3-parental-controls-by-device.html" data-type="Controls" data-keywords="parental controls by device iphone android ipad windows">Parental Controls by Device</a>
          <a href="v3-device-iphone.html" data-type="Device" data-keywords="iphone apple screen time controls">iPhone</a>
          <a href="v3-device-ipad.html" data-type="Device" data-keywords="ipad apple screen time controls">iPad</a>
          <a href="v3-device-android.html" data-type="Device" data-keywords="android family link controls">Android</a>
          <a href="v3-device-windows.html" data-type="Device" data-keywords="windows microsoft family safety">Windows</a>
          <a href="v3-how-to-set-parental-controls-iphone.html" data-type="How To" data-keywords="set parental controls iphone">Set Parental Controls iPhone</a>
          <a href="v3-how-to-set-parental-controls-android.html" data-type="How To" data-keywords="set parental controls android">Set Parental Controls Android</a>
          <a href="v3-best-parental-control-apps.html" data-type="Apps" data-keywords="best parental control apps monitoring trust">Best Parental Control Apps</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Awareness & Deep Dive</summary>
        <nav>
          <a href="v3-awareness.html" data-type="Awareness" data-keywords="awareness risks education parents">Awareness</a>
          <a href="v3-algorithm-awareness.html" data-type="Awareness" data-keywords="algorithm awareness feed recommendation manipulation">Algorithm Awareness</a>
          <a href="v3-how-screens-affect-your-childs-brain.html" data-type="Awareness" data-keywords="how screens affect your childs brain dopamine boredom reactivity attention screen time effects">How Screens Affect the Brain</a>
          <a href="v3-brainrot.html" data-type="Awareness" data-keywords="brainrot short form content attention kids">Brain Rot</a>
          <a href="v3-why-kids-cant-stop-scrolling.html" data-type="Awareness" data-keywords="why kids cant stop scrolling dopamine reels shorts tiktok">Why Kids Can’t Stop Scrolling</a>
          <a href="v3-how-manipulative-groups-recruit-children-online.html" data-type="Awareness" data-keywords="manipulative groups recruit children online cult recruitment belonging secrecy">Manipulative Group Recruitment</a>
          <a href="v3-how-attention-is-used-to-control-behaviour.html" data-type="Awareness" data-keywords="how attention is used to control behaviour dopamine influence emotional triggers repeated exposure">How Attention Shapes Behaviour</a>
          <a href="v3-targeted-harassment-and-false-reports.html" data-type="Awareness" data-keywords="targeted harassment false reports malicious reporting family targeting">Targeted Harassment & False Reports</a>
          <a href="v3-predators.html" data-type="Awareness" data-keywords="predators online child safety">Predators</a>
          <a href="v3-sextortion.html" data-type="Awareness" data-keywords="sextortion blackmail nude image threats">Sextortion</a>
          <a href="v3-grooming.html" data-type="Awareness" data-keywords="grooming what is grooming stages">Grooming</a>
          <a href="v3-definitions.html" data-type="Definitions" data-keywords="definitions glossary terms online safety">Definitions</a>
          <a href="v3-real-investigations.html" data-type="Awareness" data-keywords="real investigations case examples">Real Investigations</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Downloads & Support</summary>
        <nav>
          <a href="v3-downloads.html" data-type="Downloads" data-keywords="downloads guides pdf checklists">Downloads</a>
          <a href="v3-all-downloads.html" data-type="Downloads" data-keywords="all downloads pdf resources">All Downloads</a>
          <a href="v3-cancel-subscriptions.html" data-type="Support" data-keywords="cancel subscriptions app store google play microsoft">Cancel Subscriptions</a>
          <a href="v3-support.html" data-type="Support" data-keywords="support donate help posh">Support POSH</a>
          <a href="v3-share.html" data-type="Share" data-keywords="share posh awareness parents">Share POSH</a>
          <a href="v3-community.html" data-type="Community" data-keywords="community parents voice support">Community</a>
          <a href="v3-collaboration.html" data-type="Collaboration" data-keywords="collaboration partner creator educator">Collaboration</a>
          <a href="v3-founder.html" data-type="Founder" data-keywords="founder jinglez why posh exists">Founder</a>
          <a href="v3-why-posh-exists.html" data-type="Mission" data-keywords="why posh exists mission purpose">Why POSH Exists</a>
          <a href="v3-warning.html" data-type="Warning" data-keywords="warning disclaimer important">Warning & Disclaimer</a>
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

  const PAGE_META = {
    "index.html": {
      cluster: "entry",
      title: "Home",
      next: ["v3-start.html", "v3-safety-score.html", "v3-what-now.html"]
    },
    "v3-start.html": {
      cluster: "entry",
      title: "Start Here",
      next: ["v3-safety-score.html", "v3-redflags.html", "v3-what-now.html"]
    },
    "v3-entry-system.html": {
      cluster: "entry",
      title: "Entry System",
      next: ["v3-start.html", "v3-safety-score.html", "v3-what-now.html"]
    },
    "v3-safety-score.html": {
      cluster: "entry",
      title: "Safety Score",
      next: ["v3-redflags.html", "v3-parent-scripts.html", "v3-what-now.html"]
    },
    "v3-what-now.html": {
      cluster: "entry",
      title: "What To Do Now",
      next: ["v3-redflags.html", "v3-first-24-hours.html", "v3-parent-scripts.html"]
    },

    "v3-redflags.html": {
      cluster: "warning",
      title: "Red Flags",
      next: ["v3-signs-my-child-is-being-groomed-online.html", "v3-parent-scripts.html", "v3-first-24-hours.html"]
    },
    "v3-10-signs-targeted-online.html": {
      cluster: "warning",
      title: "10 Signs Targeted Online",
      next: ["v3-redflags.html", "v3-parent-scripts.html", "v3-first-24-hours.html"]
    },
    "v3-signs-my-child-is-being-groomed-online.html": {
      cluster: "warning",
      title: "Grooming Signs",
      next: ["v3-playbook.html", "v3-parent-scripts.html", "v3-first-24-hours.html"]
    },
    "v3-playbook.html": {
      cluster: "warning",
      title: "Grooming Playbook",
      next: ["v3-redflags.html", "v3-first-24-hours.html", "v3-reporting.html"]
    },
    "v3-grooming.html": {
      cluster: "warning",
      title: "Grooming",
      next: ["v3-playbook.html", "v3-redflags.html", "v3-parent-scripts.html"]
    },
    "v3-predators.html": {
      cluster: "warning",
      title: "Predators",
      next: ["v3-how-predators-contact-kids-online.html", "v3-redflags.html", "v3-first-24-hours.html"]
    },
    "v3-sextortion.html": {
      cluster: "urgent",
      title: "Sextortion",
      next: ["v3-first-24-hours.html", "v3-evidence-reporting.html", "v3-reporting.html"]
    },

    "v3-parent-scripts.html": {
      cluster: "conversation",
      title: "Parent Scripts",
      next: ["v3-how-to-talk-so-your-child-opens-up.html", "v3-what-to-say-if-your-child-opens-up.html", "v3-first-24-hours.html"]
    },
    "v3-how-to-talk-so-your-child-opens-up.html": {
      cluster: "conversation",
      title: "How To Talk So Your Child Opens Up",
      next: ["v3-what-to-say-if-your-child-opens-up.html", "v3-when-your-child-wont-talk.html", "v3-first-24-hours.html"]
    },
    "v3-what-to-say-if-your-child-opens-up.html": {
      cluster: "conversation",
      title: "What To Say If Your Child Opens Up",
      next: ["v3-first-24-hours.html", "v3-evidence-reporting.html", "v3-reporting.html"]
    },
    "v3-what-to-say-if-your-child-thinks-it-was-their-fault.html": {
      cluster: "conversation",
      title: "If They Think It Was Their Fault",
      next: ["v3-what-to-say-if-your-child-opens-up.html", "v3-first-24-hours.html", "v3-parent-scripts.html"]
    },
    "v3-what-to-say-if-your-child-is-embarrassed-to-tell-you.html": {
      cluster: "conversation",
      title: "If They Feel Embarrassed",
      next: ["v3-what-to-say-if-your-child-opens-up.html", "v3-what-to-say-if-your-child-thinks-it-was-their-fault.html", "v3-parent-scripts.html"]
    },
    "v3-when-your-child-wont-talk.html": {
      cluster: "conversation",
      title: "When Your Child Won’t Talk",
      next: ["v3-how-to-talk-so-your-child-opens-up.html", "v3-redflags.html", "v3-how-to-check-a-device-without-causing-panic.html"]
    },
    "v3-why-kids-hide-things.html": {
      cluster: "conversation",
      title: "Why Kids Hide Things",
      next: ["v3-when-your-child-wont-talk.html", "v3-how-to-talk-so-your-child-opens-up.html", "v3-parent-scripts.html"]
    },
    "v3-why-behaviour-changes.html": {
      cluster: "conversation",
      title: "Why Behaviour Changes",
      next: ["v3-redflags.html", "v3-when-your-child-wont-talk.html", "v3-how-to-talk-so-your-child-opens-up.html"]
    },

    "v3-first-24-hours.html": {
      cluster: "urgent",
      title: "First 24 Hours",
      next: ["v3-evidence-reporting.html", "v3-reporting.html", "v3-parent-scripts.html"]
    },
    "v3-evidence-reporting.html": {
      cluster: "urgent",
      title: "Evidence & Reporting",
      next: ["v3-reporting.html", "v3-reporting-australia.html", "v3-first-24-hours.html"]
    },
    "v3-reporting.html": {
      cluster: "reporting",
      title: "Reporting",
      next: ["v3-reporting-australia.html", "v3-evidence-reporting.html", "v3-parent-scripts.html"]
    },
    "v3-reporting-australia.html": {
      cluster: "reporting",
      title: "Reporting Australia",
      next: ["v3-reporting.html", "v3-evidence-reporting.html", "v3-first-24-hours.html"]
    },

    "v3-game-roblox.html": {
      cluster: "platform",
      title: "Roblox",
      next: ["v3-social-discord.html", "v3-in-game-currency-grooming-risk.html", "v3-roblox-robux-scams-explained.html"]
    },
    "v3-social-discord.html": {
      cluster: "platform",
      title: "Discord",
      next: ["v3-redflags.html", "v3-first-24-hours.html", "v3-parent-scripts.html"]
    },
    "v3-social-snapchat.html": {
      cluster: "platform",
      title: "Snapchat",
      next: ["v3-sextortion.html", "v3-first-24-hours.html", "v3-parent-scripts.html"]
    },
    "v3-best-parental-control-apps.html": {
      cluster: "controls",
      title: "Best Parental Control Apps",
      next: ["v3-parental-controls-by-device.html", "v3-device-controls.html", "v3-house-rules.html"]
    },
    "v3-dangerous-apps.html": {
      cluster: "platform",
      title: "Dangerous Apps",
      next: ["v3-all-applications.html", "v3-redflags.html", "v3-first-24-hours.html"]
    },
    "v3-safe-apps-and-games-for-kids.html": {
      cluster: "platform",
      title: "Safe Apps and Games",
      next: ["v3-game-risks-by-age.html", "v3-best-parental-control-apps.html", "v3-house-rules.html"]
    },
    "v3-why-posh-exists.html": {
      cluster: "mission",
      title: "Why POSH Exists",
      next: ["v3-start.html", "v3-support.html", "v3-share.html"]
    }
  };

  const CLUSTER_DEFAULTS = {
    entry: ["v3-redflags.html", "v3-parent-scripts.html", "v3-first-24-hours.html"],
    warning: ["v3-parent-scripts.html", "v3-first-24-hours.html", "v3-reporting.html"],
    conversation: ["v3-first-24-hours.html", "v3-parent-scripts.html", "v3-what-now.html"],
    urgent: ["v3-evidence-reporting.html", "v3-reporting.html", "v3-parent-scripts.html"],
    reporting: ["v3-evidence-reporting.html", "v3-first-24-hours.html", "v3-parent-scripts.html"],
    platform: ["v3-redflags.html", "v3-parent-scripts.html", "v3-first-24-hours.html"],
    controls: ["v3-device-controls.html", "v3-house-rules.html", "v3-redflags.html"],
    mission: ["v3-start.html", "v3-support.html", "v3-share.html"],
    default: ["v3-what-now.html", "v3-redflags.html", "v3-first-24-hours.html"]
  };

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
      .replace(/[^a-z0-9\s-]/g, " ")
      .replace(/\s+/g, " ")
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

    const tokens = q.split(/\s+/).filter(Boolean);
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

  function getCurrentPage() {
    return (window.location.pathname.split("/").pop() || "index.html")
      .split("?")[0]
      .split("#")[0];
  }

  function markActiveNav(navRoot) {
    const currentPage = getCurrentPage();
    const navLinks = navRoot.querySelectorAll(".nav-group nav a");

    navLinks.forEach(function (link) {
      const href = (link.getAttribute("href") || "")
        .split("?")[0]
        .split("#")[0];

      if (href === currentPage) {
        link.classList.add("nav-active");
        link.setAttribute("aria-current", "page");

        const parentGroup = link.closest(".nav-group");
        if (parentGroup) {
          parentGroup.open = true;
        }
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

      .posh-system-next-step .card {
        margin-top: 22px;
      }

      .posh-next-kicker {
        font-size: .82rem;
        letter-spacing: .12em;
        text-transform: uppercase;
        opacity: .78;
        margin-bottom: 8px;
      }

      .posh-next-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 12px;
        margin-top: 16px;
      }

      .posh-next-card {
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,.08);
        background: rgba(255,255,255,.03);
        padding: 16px;
        text-align: left;
      }

      .posh-next-label {
        font-size: .75rem;
        text-transform: uppercase;
        letter-spacing: .08em;
        opacity: .7;
        margin-bottom: 8px;
      }

      .posh-next-card h3 {
        margin: 0 0 8px;
        font-size: 1rem;
        line-height: 1.3;
      }

      .posh-next-card p {
        margin: 0 0 12px;
        line-height: 1.55;
        opacity: .92;
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

  function uniquePages(list, currentPage) {
    const seen = new Set();
    return (list || []).filter(function (href) {
      if (!href) return false;
      if (href === currentPage) return false;
      if (seen.has(href)) return false;
      seen.add(href);
      return true;
    });
  }

  function getPageTitleFromNav(href) {
    const link = document.querySelector('.nav-group nav a[href="' + href + '"]');
    return link ? (link.textContent || "").trim() : href.replace(".html", "").replace(/^v3-/, "").replace(/-/g, " ");
  }

  function getReasonForLink(currentPage, href, index) {
    const currentMeta = PAGE_META[currentPage] || {};
    const cluster = currentMeta.cluster || "default";

    if (cluster === "entry") {
      return [
        "Best next step if you are still sorting the situation.",
        "Helpful if concern is starting to feel more real.",
        "Use this if you need clearer action, not more guessing."
      ][index] || "Helpful next step from here.";
    }

    if (cluster === "warning") {
      return [
        "Best next step if the pattern feels real now.",
        "Helps you say the right thing without shutting the child down.",
        "Use this if the situation may already need action."
      ][index] || "Helpful next step from here.";
    }

    if (cluster === "conversation") {
      return [
        "Best next step once the conversation starts opening up.",
        "Helps move from talking into safer action.",
        "Useful if you need a wider action pathway from here."
      ][index] || "Helpful next step from here.";
    }

    if (cluster === "urgent") {
      return [
        "Best next step if evidence and protection matter now.",
        "Use this if you need the correct support or reporting path.",
        "Helpful if you still need calmer parent response tools."
      ][index] || "Helpful next step from here.";
    }

    if (cluster === "reporting") {
      return [
        "Best next step after reporting begins.",
        "Helps preserve what matters properly.",
        "Useful if you still need calmer parent communication support."
      ][index] || "Helpful next step from here.";
    }

    if (cluster === "platform") {
      return [
        "Best next step if the app or game is only part of the bigger pattern.",
        "Helpful if you need warning signs and wider behaviour clues.",
        "Use this if the situation may need action now."
      ][index] || "Helpful next step from here.";
    }

    if (cluster === "controls") {
      return [
        "Best next step if you want stronger safety structure.",
        "Helps turn settings into clearer family boundaries.",
        "Useful if you want the risk signs, not just the controls."
      ][index] || "Helpful next step from here.";
    }

    return [
      "Best next step from this page.",
      "Helpful supporting page from here.",
      "Useful backup next move if you need it."
    ][index] || "Helpful next step from here.";
  }

  function getNextStepPages() {
    const currentPage = getCurrentPage();
    const currentMeta = PAGE_META[currentPage];

    if (currentMeta && Array.isArray(currentMeta.next) && currentMeta.next.length) {
      return uniquePages(currentMeta.next, currentPage);
    }

    const cluster = currentMeta && currentMeta.cluster ? currentMeta.cluster : "default";
    return uniquePages(CLUSTER_DEFAULTS[cluster] || CLUSTER_DEFAULTS.default, currentPage);
  }

  function buildSystemNextStepBlock() {
    const footer = document.getElementById("footer");
    if (!footer) return;
    if (document.querySelector(".posh-system-next-step")) return;

    const currentPage = getCurrentPage();
    const nextPages = getNextStepPages().slice(0, 3);

    const labels = ["Best next page", "Also helpful", "Then go here"];
    const cards = nextPages.map(function (href, index) {
      return `
        <div class="posh-next-card">
          <div class="posh-next-label">${labels[index] || "Next step"}</div>
          <h3>${escapeHTML(getPageTitleFromNav(href))}</h3>
          <p>${escapeHTML(getReasonForLink(currentPage, href, index))}</p>
          <a class="btn ${index === 0 ? "" : "secondary"}" href="${escapeHTML(href)}">Open Page</a>
        </div>
      `;
    }).join("");

    const wrap = document.createElement("div");
    wrap.className = "posh-system-next-step";
    wrap.innerHTML = `
      <div class="card center-card">
        <div class="posh-next-kicker">Best next step</div>
        <h2>Where should parents go next from here?</h2>
        <p class="note">
          This section is designed to keep parents moving forward instead of getting stuck between too many pages.
        </p>
        <div class="posh-next-grid">
          ${cards}
        </div>
        <div class="callout center-callout" style="margin-top:16px;">
          The goal is not to show every page. The goal is to show the right few pages next.
        </div>
      </div>
    `;

    footer.parentNode.insertBefore(wrap, footer);
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

    buildSystemNextStepBlock();

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
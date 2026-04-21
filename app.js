(function () {
  "use strict";

  /* =========================================================
     POSH MASTER APP.JS
     Premium full replacement
     - global nav
     - ranked live search
     - accordion stays closed on load
     - active-page highlighting
     - breadcrumbs
     - reading progress
     - back to top
     - share / copy
     - sticky action bar
     - support strip
     - smart CTA injection
     - related links
     - TOC builder
     - FAQ/details enhancement
     - outbound/download tracking
     - form enhancement
     - hero CTA upgrade
     - page context classes
     ========================================================= */

  const POSH = {
    brand: "POSH",
    siteName: "Parents Online Safety Hub",
    domain: "https://poshaussie.com.au/",
    home: "index.html",
    start: "v3-start.html",
    entry: "v3-entry-system.html",
    whatNow: "v3-what-to-do-now.html",
    response: "v3-response-system.html",
    parentQuestions: "v3-parent-questions.html",
    quiz: "v3-safety-score.html",
    redFlags: "v3-redflags.html",
    tenSigns: "v3-10-signs.html",
    playbook: "v3-playbook.html",
    predators: "v3-predators.html",
    reporting: "v3-reporting.html",
    platforms: "v3-platforms.html",
    gaming: "v3-gaming.html",
    allGames: "v3-all-games.html",
    socials: "v3-socials.html",
    devices: "v3-devices.html",
    downloads: "v3-all-downloads.html",
    downloadsLegacy: "v3-downloads.html",
    awareness: "v3-awareness.html",
    algorithm: "v3-algorithm-awareness.html",
    investigations: "v3-real-investigations.html",
    parentScripts: "v3-parent-scripts.html",
    houseRules: "v3-house-rules.html",
    ageGuide: "v3-age-guide.html",
    support: "v3-support-posh.html",
    supportLegacy: "v3-support.html",
    monthlySupport: "v3-support-monthly.html",
    petitionDigitalGifting: "v3-petition-parent-approval-digital-gifting.html",
    petitionDefaults: "v3-petition-safer-defaults-child-accounts.html",
    dangerousApps: "v3-dangerous-apps.html",
    bestParentalControlApps: "v3-best-parental-control-apps.html",
    cancelSubscriptions: "v3-cancel-subscriptions.html",
    videoChat: "v3-videochat.html",
    roblox: "v3-game-roblox.html",
    fortnite: "v3-game-fortnite.html",
    minecraft: "v3-game-minecraft.html",
    vrchat: "v3-game-vrchat.html",
    discord: "v3-social-discord.html",
    snapchat: "v3-social-snapchat.html",
    tiktok: "v3-social-tiktok.html",
    youtube: "v3-social-youtube.html",
    xbox: "V3gaming-xbox.html",
    playstation: "V3gaming-playstation.html",
    nintendo: "V3gaming-nintendo.html",
    pcGaming: "V3gaming-pc.html",
    vrGaming: "V3gaming-vr.html",
    disclaimer: "warning-disclaimer.html",
    shareText:
      "POSH Aussie helps parents understand online risks, spot warning signs earlier, and protect their children with clearer practical guidance.",
    searchPlaceholder: "Search apps, games, devices, PDFs or topics",
    helpKeepFreeText: "Help Keep POSH Free",
    maxSearchResults: 10,
    maxTocItems: 8,
    maxRelatedItems: 6
  };

  const NAV_GROUPS = [
    {
      title: "Start & Safety",
      links: [
        {
          href: POSH.home,
          label: "Home",
          type: "Home",
          keywords:
            "home index posh parents online safety hub australia victoria jinglez child safety support"
        },
        {
          href: POSH.start,
          label: "Start Here",
          type: "Start",
          keywords:
            "start first steps urgent where do i begin parent help safety"
        },
        {
          href: POSH.entry,
          label: "Entry System",
          type: "System",
          keywords:
            "entry system guided path pathway choose direction"
        },
        {
          href: POSH.whatNow,
          label: "What To Do Now",
          type: "Action",
          keywords:
            "what to do now immediate next steps act early concern"
        },
        {
          href: POSH.response,
          label: "POSH Response System",
          type: "Action",
          keywords:
            "response system posh response what parents do next concern structure"
        },
        {
          href: POSH.parentQuestions,
          label: "Parent Questions",
          type: "Questions",
          keywords:
            "parent questions what to ask child question prompts"
        },
        {
          href: POSH.quiz,
          label: "Safety Score",
          type: "Quiz",
          keywords:
            "safety score test audit checklist quiz risk score check"
        },
        {
          href: POSH.redFlags,
          label: "Red Flags",
          type: "Warning Signs",
          keywords:
            "red flags warning signs grooming behaviour sudden changes secrecy child concern"
        },
        {
          href: POSH.tenSigns,
          label: "10 Signs",
          type: "Warning Signs",
          keywords:
            "10 signs targeted online grooming signs child"
        },
        {
          href: POSH.playbook,
          label: "Predator Playbook",
          type: "Playbook",
          keywords:
            "playbook grooming escalation pattern trust private secrecy"
        },
        {
          href: POSH.predators,
          label: "Predator Tactics",
          type: "Predators",
          keywords:
            "predator tactics manipulation control grooming trust isolate secrets"
        },
        {
          href: POSH.reporting,
          label: "Report & Get Help",
          type: "Reporting",
          keywords:
            "report get help police esafety evidence accce sextortion urgent help"
        }
      ]
    },
    {
      title: "Platforms, Games & Apps",
      links: [
        {
          href: POSH.platforms,
          label: "All Platforms",
          type: "Directory",
          keywords:
            "all platforms apps games devices socials directory list"
        },
        {
          href: POSH.gaming,
          label: "Gaming Safety",
          type: "Gaming",
          keywords:
            "gaming safety games online game chat party voice stranger access"
        },
        {
          href: POSH.allGames,
          label: "All Games Directory",
          type: "Directory",
          keywords:
            "all games directory list gaming pages"
        },
        {
          href: POSH.roblox,
          label: "Roblox",
          type: "Game",
          keywords:
            "roblox robux private chat friend requests gifting groups voice"
        },
        {
          href: POSH.fortnite,
          label: "Fortnite",
          type: "Game",
          keywords:
            "fortnite party chat voice randoms squads epic games"
        },
        {
          href: POSH.minecraft,
          label: "Minecraft",
          type: "Game",
          keywords:
            "minecraft servers realms multiplayer mods private server"
        },
        {
          href: POSH.vrchat,
          label: "VRChat",
          type: "Game",
          keywords:
            "vrchat virtual reality avatars adults children headset voice"
        },
        {
          href: POSH.xbox,
          label: "Xbox",
          type: "Gaming Device",
          keywords:
            "xbox console party chat messages microsoft device"
        },
        {
          href: POSH.playstation,
          label: "PlayStation",
          type: "Gaming Device",
          keywords:
            "playstation psn party chat sony console"
        },
        {
          href: POSH.nintendo,
          label: "Nintendo",
          type: "Gaming Device",
          keywords:
            "nintendo switch nintendo online child safety"
        },
        {
          href: POSH.pcGaming,
          label: "PC Gaming",
          type: "Gaming Device",
          keywords:
            "pc gaming steam discord pc safety device"
        },
        {
          href: POSH.vrGaming,
          label: "VR Gaming",
          type: "Gaming Device",
          keywords:
            "vr gaming headset voice chat immersion meta quest"
        },
        {
          href: POSH.socials,
          label: "Social Media & Chat",
          type: "Socials",
          keywords:
            "socials social media apps chat platforms private messages"
        },
        {
          href: POSH.discord,
          label: "Discord",
          type: "App",
          keywords:
            "discord dms server voice chat grooming off platform"
        },
        {
          href: POSH.snapchat,
          label: "Snapchat",
          type: "App",
          keywords:
            "snapchat disappearing messages streaks quick add snap map"
        },
        {
          href: POSH.tiktok,
          label: "TikTok",
          type: "App",
          keywords:
            "tiktok algorithm live messages fyp trends exposure"
        },
        {
          href: POSH.youtube,
          label: "YouTube",
          type: "App",
          keywords:
            "youtube comments shorts live creators algorithm"
        },
        {
          href: POSH.videoChat,
          label: "Video Chat",
          type: "App",
          keywords:
            "video chat live video webcam random strangers calls"
        },
        {
          href: POSH.devices,
          label: "Device Safety",
          type: "Devices",
          keywords:
            "device safety phones tablets consoles browser passcodes permissions installs"
        },
        {
          href: POSH.bestParentalControlApps,
          label: "Best Parental Control Apps",
          type: "Guide",
          keywords:
            "best parental control apps monitor filters screen time devices"
        },
        {
          href: POSH.dangerousApps,
          label: "Top Dangerous Apps",
          type: "Guide",
          keywords:
            "dangerous apps risky apps for kids private contact secrecy"
        },
        {
          href: POSH.cancelSubscriptions,
          label: "Cancel Subscriptions",
          type: "Guide",
          keywords:
            "cancel subscriptions apple google microsoft xbox playstation support"
        }
      ]
    },
    {
      title: "Awareness & Resources",
      links: [
        {
          href: POSH.awareness,
          label: "Awareness Hub",
          type: "Awareness",
          keywords:
            "awareness hub education support parents grooming algorithms safety"
        },
        {
          href: POSH.algorithm,
          label: "Algorithm Risks",
          type: "Awareness",
          keywords:
            "algorithm awareness risks feed recommendations endless scroll influence"
        },
        {
          href: POSH.investigations,
          label: "Real Investigations",
          type: "Investigations",
          keywords:
            "real investigations shawn ryan vigilance elite interviews evidence"
        },
        {
          href: POSH.parentScripts,
          label: "Parent Scripts",
          type: "Scripts",
          keywords:
            "parent scripts talk to kids hard conversations online safety"
        },
        {
          href: POSH.houseRules,
          label: "House Rules",
          type: "Rules",
          keywords:
            "house rules boundaries devices charging bedrooms passcodes no private apps"
        },
        {
          href: POSH.ageGuide,
          label: "Age Guide",
          type: "Guide",
          keywords:
            "age guide age appropriate readiness apps games maturity"
        },
        {
          href: POSH.downloads,
          label: "All PDF Downloads",
          type: "Downloads",
          keywords:
            "pdf downloads guides framework playbook scripts printables checklists"
        },
        {
          href: POSH.downloadsLegacy,
          label: "Downloads",
          type: "Downloads",
          keywords:
            "downloads pdf printables framework scripts playbook resources"
        },
        {
          href: POSH.petitionDigitalGifting,
          label: "Digital Gifting Policy",
          type: "Policy",
          keywords:
            "petition digital gifting robux skins gifts parent approval policy"
        },
        {
          href: POSH.petitionDefaults,
          label: "Safer Defaults Policy",
          type: "Policy",
          keywords:
            "petition safer defaults child accounts settings design reform"
        },
        {
          href: POSH.support,
          label: "Support POSH",
          type: "Support",
          keywords:
            "support posh donate help keep posh free mission support"
        },
        {
          href: POSH.supportLegacy,
          label: "Support",
          type: "Support",
          keywords:
            "support help next steps services parent help australia"
        },
        {
          href: POSH.disclaimer,
          label: "Warning & Disclaimer",
          type: "Info",
          keywords:
            "warning disclaimer legal medical education guidance information"
        }
      ]
    }
  ];

  const SEARCH_ALIASES = {
    help: ["start here", "report & get help", "what to do now"],
    urgent: ["report & get help", "what to do now", "red flags"],
    robux: ["roblox", "digital gifting policy"],
    grooming: ["predator playbook", "red flags", "predator tactics"],
    device: ["device safety", "best parental control apps"],
    phone: ["device safety"],
    tablet: ["device safety"],
    discord: ["discord", "social media & chat"],
    snap: ["snapchat"],
    tt: ["tiktok"],
    algorithm: ["algorithm risks"],
    quiz: ["safety score"],
    score: ["safety score"],
    downloads: ["all pdf downloads", "downloads"],
    pdf: ["all pdf downloads", "downloads"],
    petition: ["digital gifting policy", "safer defaults policy"],
    "dangerous apps": ["top dangerous apps"],
    report: ["report & get help"],
    questions: ["parent questions"],
    rules: ["house rules"]
  };

  const PAGE_RELATIONS = {
    "index.html": [POSH.start, POSH.quiz, POSH.redFlags, POSH.gaming, POSH.devices, POSH.downloads],
    "v3-start.html": [POSH.quiz, POSH.redFlags, POSH.devices, POSH.parentQuestions, POSH.reporting],
    "v3-entry-system.html": [POSH.start, POSH.quiz, POSH.whatNow, POSH.response],
    "v3-what-to-do-now.html": [POSH.reporting, POSH.redFlags, POSH.devices, POSH.parentQuestions],
    "v3-response-system.html": [POSH.whatNow, POSH.reporting, POSH.parentQuestions, POSH.redFlags],
    "v3-parent-questions.html": [POSH.redFlags, POSH.parentScripts, POSH.devices],
    "v3-safety-score.html": [POSH.start, POSH.redFlags, POSH.devices, POSH.houseRules],
    "v3-redflags.html": [POSH.playbook, POSH.predators, POSH.reporting, POSH.parentScripts],
    "v3-playbook.html": [POSH.redFlags, POSH.predators, POSH.reporting, POSH.algorithm],
    "v3-predators.html": [POSH.playbook, POSH.redFlags, POSH.reporting, POSH.algorithm],
    "v3-reporting.html": [POSH.redFlags, POSH.whatNow, POSH.response, POSH.start],
    "v3-gaming.html": [POSH.allGames, POSH.roblox, POSH.discord, POSH.redFlags, POSH.playbook],
    "v3-game-roblox.html": [POSH.gaming, POSH.discord, POSH.redFlags, POSH.petitionDigitalGifting],
    "v3-game-fortnite.html": [POSH.gaming, POSH.discord, POSH.redFlags],
    "v3-game-minecraft.html": [POSH.gaming, POSH.discord, POSH.redFlags],
    "v3-game-vrchat.html": [POSH.gaming, POSH.discord, POSH.redFlags],
    "v3-social-discord.html": [POSH.socials, POSH.gaming, POSH.snapchat, POSH.redFlags],
    "v3-social-snapchat.html": [POSH.socials, POSH.discord, POSH.redFlags, POSH.reporting],
    "v3-social-tiktok.html": [POSH.socials, POSH.algorithm, POSH.redFlags],
    "v3-social-youtube.html": [POSH.socials, POSH.algorithm, POSH.redFlags],
    "v3-devices.html": [POSH.redFlags, POSH.houseRules, POSH.gaming, POSH.socials],
    "v3-best-parental-control-apps.html": [POSH.devices, POSH.houseRules, POSH.redFlags],
    "v3-dangerous-apps.html": [POSH.socials, POSH.gaming, POSH.redFlags, POSH.reporting],
    "v3-awareness.html": [POSH.algorithm, POSH.investigations, POSH.redFlags],
    "v3-algorithm-awareness.html": [POSH.awareness, POSH.socials, POSH.redFlags],
    "v3-all-downloads.html": [POSH.start, POSH.redFlags, POSH.devices, POSH.parentScripts],
    "v3-downloads.html": [POSH.start, POSH.redFlags, POSH.devices, POSH.parentScripts],
    "v3-petition-parent-approval-digital-gifting.html": [POSH.petitionDefaults, POSH.gaming, POSH.roblox],
    "v3-petition-safer-defaults-child-accounts.html": [POSH.petitionDigitalGifting, POSH.devices, POSH.gaming]
  };

  const ALL_LINKS = NAV_GROUPS.flatMap(group => group.links);

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function safeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function normalisePath(path) {
    if (!path) return POSH.home;
    const clean = path.split("#")[0].split("?")[0];
    const file = clean.substring(clean.lastIndexOf("/") + 1);
    return file || POSH.home;
  }

  function getCurrentPath() {
    return normalisePath(window.location.pathname);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function slugify(value) {
    return safeText(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function maybeTrack(name, extra = {}) {
    try {
      if (window.goatcounter && typeof window.goatcounter.count === "function") {
        window.goatcounter.count({
          event: true,
          path: location.pathname + location.search + location.hash,
          title: name,
          ...extra
        });
      }
    } catch (err) {
      // silent
    }
  }

  function isExternalHref(href) {
    return /^https?:\/\//i.test(href) && !href.includes(location.hostname);
  }

  function findLink(href) {
    const target = normalisePath(href);
    return ALL_LINKS.find(link => normalisePath(link.href) === target) || null;
  }

  function getPageTitle() {
    const titleEl = qs("h1.page-title") || qs("h1");
    if (titleEl && safeText(titleEl.textContent)) return safeText(titleEl.textContent);
    return safeText(document.title.replace(/\s*[•|-]\s*POSH.*$/i, ""));
  }

  function getPageIntro() {
    const el =
      qs(".tagline") ||
      qs(".intro") ||
      qs(".lead") ||
      qs(".page-intro") ||
      qs(".card p");
    return el ? safeText(el.textContent).slice(0, 220) : "";
  }

  function buildNavLink(link) {
    return `
      <a href="${link.href}"
         data-label="${escapeHtml(link.label)}"
         data-type="${escapeHtml(link.type || "")}"
         data-keywords="${escapeHtml(link.keywords || "")}">
         ${escapeHtml(link.label)}
      </a>
    `;
  }

  function buildNavHTML() {
    const groupsHtml = NAV_GROUPS.map(group => `
      <details class="nav-group">
        <summary>${escapeHtml(group.title)}</summary>
        <nav>
          ${group.links.map(buildNavLink).join("")}
        </nav>
      </details>
    `).join("");

    return `
      <div class="nav-shell">
        <div class="nav-search-wrap">
          <input
            type="text"
            id="poshSearch"
            class="nav-search-input"
            placeholder="${escapeHtml(POSH.searchPlaceholder)}"
            autocomplete="off"
            aria-label="Search POSH"
          />
          <button
            type="button"
            id="poshSearchClear"
            class="nav-search-clear"
            aria-label="Clear search"
          >×</button>
          <div id="poshSearchResults" class="nav-search-results" hidden></div>
        </div>

        <div class="nav-primary-cta-row">
          <a href="${POSH.start}" class="nav-primary-cta" data-track="nav_start">Start Here</a>
          <a href="${POSH.quiz}" class="nav-primary-cta secondary" data-track="nav_quiz">Safety Score</a>
          <a href="${POSH.reporting}" class="nav-primary-cta tertiary" data-track="nav_report">Report & Get Help</a>
        </div>

        <div class="nav-support-row">
          <a href="${POSH.support}" class="nav-support-link" data-track="nav_support">Support POSH</a>
          <a href="${POSH.monthlySupport}" class="nav-support-link" data-track="nav_help_keep_free">${escapeHtml(POSH.helpKeepFreeText)}</a>
          <button type="button" class="nav-support-link nav-share-trigger" data-track="nav_share">Share POSH</button>
        </div>

        <div class="nav-accordion">
          ${groupsHtml}
        </div>
      </div>
    `;
  }

  function setActiveNav(root) {
    const current = getCurrentPath();

    qsa(".nav-group", root).forEach(group => {
      group.open = false;
      group.classList.remove("has-active-page");
    });

    qsa("a[href]", root).forEach(anchor => {
      const href = normalisePath(anchor.getAttribute("href"));
      if (href === current) {
        anchor.classList.add("active", "nav-active");
        anchor.setAttribute("aria-current", "page");

        const group = anchor.closest(".nav-group");
        if (group) {
          group.classList.add("has-active-page");
          group.open = false;
        }
      }
    });
  }

  function setupNavAccordion(root) {
    const groups = qsa(".nav-group", root);

    groups.forEach(group => {
      group.open = false;

      group.addEventListener("toggle", () => {
        if (!group.open) return;
        groups.forEach(other => {
          if (other !== group) other.open = false;
        });
      });
    });

    document.addEventListener("click", event => {
      if (!root.contains(event.target)) {
        groups.forEach(group => {
          group.open = false;
        });
      }
    });
  }

  function setupNavTracking(root) {
    qsa("[data-track]", root).forEach(el => {
      el.addEventListener("click", () => {
        maybeTrack(el.getAttribute("data-track") || "nav_click");
      });
    });
  }

  function expandQueryAliases(query) {
    const q = query.toLowerCase().trim();
    const results = new Set([q]);

    Object.entries(SEARCH_ALIASES).forEach(([key, aliases]) => {
      if (q.includes(key)) {
        aliases.forEach(alias => results.add(alias));
      }
    });

    return Array.from(results);
  }

  function scoreLinkForQuery(link, query) {
    const label = (link.label || "").toLowerCase();
    const type = (link.type || "").toLowerCase();
    const keywords = (link.keywords || "").toLowerCase();
    const href = (link.href || "").toLowerCase();

    const queries = expandQueryAliases(query);
    let score = 0;

    queries.forEach(q => {
      const tokens = q.split(/\s+/).filter(Boolean);
      const haystack = `${label} ${type} ${keywords} ${href}`;

      if (label === q) score += 350;
      if (href === q || href.includes(q)) score += 140;
      if (label.startsWith(q)) score += 220;
      if (label.includes(q)) score += 120;
      if (type.includes(q)) score += 60;
      if (keywords.includes(q)) score += 45;
      if (href.includes(q)) score += 35;

      tokens.forEach(token => {
        if (label === token) score += 120;
        if (label.startsWith(token)) score += 70;
        if (label.includes(token)) score += 35;
        if (type.includes(token)) score += 20;
        if (keywords.includes(token)) score += 14;
        if (href.includes(token)) score += 10;
      });

      if (tokens.length > 1 && tokens.every(token => haystack.includes(token))) {
        score += 80;
      }
    });

    if (normalisePath(link.href) === getCurrentPath()) score -= 50;
    return score;
  }

  function buildSearchResult(link, query) {
    return `
      <a href="${link.href}" class="nav-search-result" data-query="${escapeHtml(query)}">
        <span class="nav-search-result-title">${escapeHtml(link.label)}</span>
        <span class="nav-search-result-meta">${escapeHtml(link.type || "Page")}</span>
        <span class="nav-search-result-desc">${escapeHtml(link.keywords || "")}</span>
      </a>
    `;
  }

  function setupSearch(root) {
    const input = qs("#poshSearch", root);
    const clearBtn = qs("#poshSearchClear", root);
    const results = qs("#poshSearchResults", root);
    if (!input || !clearBtn || !results) return;

    function hideResults() {
      results.hidden = true;
      results.innerHTML = "";
      root.classList.remove("search-open");
    }

    function showResults(html) {
      results.innerHTML = html;
      results.hidden = false;
      root.classList.add("search-open");
    }

    const runSearch = debounce(() => {
      const query = safeText(input.value);
      clearBtn.style.visibility = query ? "visible" : "hidden";

      if (!query) {
        hideResults();
        return;
      }

      const matches = ALL_LINKS
        .map(link => ({ link, score: scoreLinkForQuery(link, query) }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score || a.link.label.localeCompare(b.link.label))
        .slice(0, POSH.maxSearchResults)
        .map(item => item.link);

      if (!matches.length) {
        showResults(`
          <div class="nav-search-empty">
            No matches for "<strong>${escapeHtml(query)}</strong>"
          </div>
        `);
        return;
      }

      showResults(matches.map(link => buildSearchResult(link, query)).join(""));
    }, 90);

    input.addEventListener("input", runSearch);
    input.addEventListener("focus", () => {
      if (safeText(input.value)) runSearch();
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        hideResults();
        input.blur();
      }
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.style.visibility = "hidden";
      hideResults();
      input.focus();
    });

    results.addEventListener("click", event => {
      const target = event.target.closest(".nav-search-result");
      if (!target) return;

      maybeTrack("search_result_click", {
        label: target.getAttribute("href") || "",
        query: target.getAttribute("data-query") || ""
      });
    });

    document.addEventListener("click", event => {
      if (!root.contains(event.target)) {
        hideResults();
      }
    });
  }

  function mountNav() {
    const host = qs("#nav");
    if (!host) return;

    host.innerHTML = buildNavHTML();
    host.classList.add("posh-nav-ready");

    setActiveNav(host);
    setupNavAccordion(host);
    setupSearch(host);
    setupNavTracking(host);

    const shareBtn = qs(".nav-share-trigger", host);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  function injectBreadcrumbs() {
    if (getCurrentPath() === POSH.home) return;
    if (qs(".posh-breadcrumbs")) return;

    const currentLink = findLink(getCurrentPath());
    if (!currentLink) return;

    const group = NAV_GROUPS.find(g =>
      g.links.some(link => normalisePath(link.href) === getCurrentPath())
    );

    const bread = document.createElement("nav");
    bread.className = "posh-breadcrumbs";
    bread.setAttribute("aria-label", "Breadcrumb");
    bread.innerHTML = `
      <a href="${POSH.home}">Home</a>
      ${group ? `<span class="crumb-sep">/</span><span>${escapeHtml(group.title)}</span>` : ""}
      <span class="crumb-sep">/</span><span aria-current="page">${escapeHtml(currentLink.label)}</span>
    `;

    const wrap = qs(".wrap") || document.body;
    const pageTitle = qs(".page-title") || qs("h1");
    if (pageTitle && pageTitle.parentNode) {
      pageTitle.parentNode.insertBefore(bread, pageTitle);
    } else {
      wrap.prepend(bread);
    }
  }

  function ensureHeadingIds() {
    qsa("h2, h3, h4").forEach(heading => {
      if (!heading.id) {
        const id = slugify(heading.textContent);
        if (id) heading.id = id;
      }
    });
  }

  function buildTOC() {
    if (qs(".posh-toc")) return;

    const headings = qsa(".wrap h2").filter(h => safeText(h.textContent));
    if (headings.length < 3) return;

    const toc = document.createElement("aside");
    toc.className = "posh-toc";
    toc.innerHTML = `
      <div class="posh-toc-title">On this page</div>
      <nav>
        ${headings.slice(0, POSH.maxTocItems).map(h => `
          <a href="#${escapeHtml(h.id)}">${escapeHtml(safeText(h.textContent))}</a>
        `).join("")}
      </nav>
    `;

    const firstCard = qs(".wrap .card");
    if (firstCard && firstCard.parentNode) {
      firstCard.parentNode.insertBefore(toc, firstCard.nextSibling);
    }
  }

  function smoothAnchors() {
    qsa('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = qs(href);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        if (history.pushState) {
          history.pushState(null, "", href);
        } else {
          location.hash = href;
        }
      });
    });
  }

  function ensureProgressBar() {
    if (qs("#poshReadingProgress")) return;

    const bar = document.createElement("div");
    bar.id = "poshReadingProgress";
    bar.className = "posh-reading-progress";
    document.body.prepend(bar);
  }

  function updateProgressBar() {
    const bar = qs("#poshReadingProgress");
    if (!bar) return;

    const doc = document.documentElement;
    const top = window.scrollY || doc.scrollTop || 0;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, Math.max(0, (top / max) * 100)) : 0;
    bar.style.width = pct + "%";
  }

  function ensureBackToTop() {
    if (qs("#poshBackToTop")) return;

    const btn = document.createElement("button");
    btn.id = "poshBackToTop";
    btn.type = "button";
    btn.className = "posh-back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.textContent = "↑";
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      maybeTrack("back_to_top_click");
    });
  }

  function updateBackToTop() {
    const btn = qs("#poshBackToTop");
    if (!btn) return;
    btn.classList.toggle("visible", window.scrollY > 520);
  }

  function ensureMiniToast() {
    if (qs("#poshMiniToast")) return;

    const toast = document.createElement("div");
    toast.id = "poshMiniToast";
    toast.className = "posh-mini-toast";
    document.body.appendChild(toast);
  }

  function showMiniToast(message) {
    const toast = qs("#poshMiniToast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("visible");

    clearTimeout(showMiniToast._timer);
    showMiniToast._timer = setTimeout(() => {
      toast.classList.remove("visible");
    }, 1600);
  }

  async function copyCurrentLink() {
    try {
      await navigator.clipboard.writeText(location.href);
      maybeTrack("copy_link");
      showMiniToast("Link copied");
    } catch (err) {
      // silent
    }
  }

  async function nativeShare() {
    const data = {
      title: getPageTitle() || document.title,
      text: POSH.shareText,
      url: location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(data);
        maybeTrack("native_share");
      } else {
        await copyCurrentLink();
      }
    } catch (err) {
      // silent
    }
  }

  function injectStickyActionBar() {
    if (qs(".posh-action-bar")) return;

    const bar = document.createElement("div");
    bar.className = "posh-action-bar";
    bar.innerHTML = `
      <a href="${POSH.quiz}" class="posh-action-btn" data-track="sticky_quiz">Safety Score</a>
      <a href="${POSH.reporting}" class="posh-action-btn" data-track="sticky_report">Report & Get Help</a>
      <button type="button" class="posh-action-btn" id="poshStickyShare" data-track="sticky_share">Share POSH</button>
      <a href="${POSH.support}" class="posh-action-btn support" data-track="sticky_support">Support POSH</a>
    `;

    document.body.appendChild(bar);

    qsa("[data-track]", bar).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });

    const shareBtn = qs("#poshStickyShare", bar);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  function injectSupportStrip() {
    if (qs(".posh-support-strip")) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const strip = document.createElement("section");
    strip.className = "posh-support-strip";
    strip.innerHTML = `
      <div class="posh-support-strip-inner">
        <strong>If this page helped you think clearer, help keep POSH growing.</strong>
        <div class="posh-support-strip-actions">
          <a href="${POSH.support}" data-track="support_strip_support">Support POSH</a>
          <a href="${POSH.monthlySupport}" data-track="support_strip_monthly">${escapeHtml(POSH.helpKeepFreeText)}</a>
          <button type="button" id="poshSupportStripShare" data-track="support_strip_share">Share POSH</button>
        </div>
      </div>
    `;

    wrap.appendChild(strip);

    qsa("[data-track]", strip).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });

    const shareBtn = qs("#poshSupportStripShare", strip);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  function buildRelatedCardsHtml() {
    const current = getCurrentPath();
    const related = (PAGE_RELATIONS[current] || [])
      .map(findLink)
      .filter(Boolean)
      .slice(0, POSH.maxRelatedItems);

    if (!related.length) return "";

    return `
      <section class="posh-related-links">
        <h2>Best next pages from here</h2>
        <div class="posh-related-grid">
          ${related.map(link => `
            <a href="${link.href}" class="posh-related-card" data-track="related_click">
              <span class="posh-related-label">${escapeHtml(link.label)}</span>
              <span class="posh-related-type">${escapeHtml(link.type || "Page")}</span>
            </a>
          `).join("")}
        </div>
      </section>
    `;
  }

  function injectRelatedLinks() {
    if (qs(".posh-related-links")) return;

    const html = buildRelatedCardsHtml();
    if (!html) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const holder = document.createElement("div");
    holder.innerHTML = html;
    wrap.appendChild(holder.firstElementChild);

    qsa('[data-track="related_click"]', wrap).forEach(el => {
      el.addEventListener("click", () => maybeTrack("related_click"));
    });
  }

  function injectSharePanel() {
    if (qs(".posh-share-panel")) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const panel = document.createElement("section");
    panel.className = "posh-share-panel";
    panel.innerHTML = `
      <h2>Help protect another child</h2>
      <p>Many parents still think games, apps, and chats are harmless until a pattern becomes obvious. Sharing awareness earlier can help another family act sooner.</p>
      <div class="posh-share-panel-actions">
        <button type="button" id="poshShareMainBtn" data-track="share_panel_share">Share POSH</button>
        <button type="button" id="poshCopyMainBtn" data-track="share_panel_copy">Copy Link</button>
        <a href="${POSH.downloads}" data-track="share_panel_downloads">All PDF Downloads</a>
      </div>
    `;

    wrap.appendChild(panel);

    const shareBtn = qs("#poshShareMainBtn", panel);
    const copyBtn = qs("#poshCopyMainBtn", panel);

    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
    if (copyBtn) copyBtn.addEventListener("click", copyCurrentLink);

    qsa("[data-track]", panel).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });
  }

  function inferCTAByPage(page) {
    if (/^v3-game-/.test(page) || /^V3gaming-/.test(page) || page === POSH.gaming) {
      return {
        title: "Next safety steps",
        text: "Don’t stop at the game itself. Check the linked chat apps, warning signs, and the wider safety picture too.",
        actions: [
          { href: POSH.redFlags, label: "Red Flags" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.reporting, label: "Report & Get Help" },
          { href: POSH.discord, label: "Discord Safety" }
        ]
      };
    }

    if (page === POSH.devices) {
      return {
        title: "Best next safety pathways",
        text: "Device safety works best when it leads into platform safety, app safety, and clearer family rules.",
        actions: [
          { href: POSH.platforms, label: "Platforms" },
          { href: POSH.gaming, label: "Gaming" },
          { href: POSH.socials, label: "Social Media & Chat" },
          { href: POSH.houseRules, label: "House Rules" }
        ]
      };
    }

    if (/^v3-social-/.test(page) || page === POSH.socials) {
      return {
        title: "What parents should check next",
        text: "Social app safety works best when it connects back to house rules, warning signs, and reporting steps.",
        actions: [
          { href: POSH.redFlags, label: "Red Flags" },
          { href: POSH.houseRules, label: "House Rules" },
          { href: POSH.reporting, label: "Report & Get Help" },
          { href: POSH.algorithm, label: "Algorithm Risks" }
        ]
      };
    }

    if (page === POSH.start || page === POSH.quiz) {
      return {
        title: "What to do after this",
        text: "Start with the biggest risk first. Then move into warning signs, device settings, and practical conversations with your child.",
        actions: [
          { href: POSH.redFlags, label: "Red Flags" },
          { href: POSH.devices, label: "Device Safety" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.reporting, label: "Report & Get Help" }
        ]
      };
    }

    return {
      title: "Next safety steps",
      text: "Move from awareness into action with the pages that reduce risk fastest.",
      actions: [
        { href: POSH.start, label: "Start Here" },
        { href: POSH.quiz, label: "Safety Score" },
        { href: POSH.redFlags, label: "Red Flags" },
        { href: POSH.downloads, label: "All PDF Downloads" }
      ]
    };
  }

  function injectSmartCTA() {
    if (qs(".posh-smart-cta")) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const page = getCurrentPath();
    const cta = inferCTAByPage(page);
    if (!cta) return;

    const section = document.createElement("section");
    section.className = "posh-smart-cta";
    section.innerHTML = `
      <h2>${escapeHtml(cta.title)}</h2>
      <p>${escapeHtml(cta.text)}</p>
      <div class="posh-smart-cta-actions">
        ${cta.actions.map(action => `
          <a href="${action.href}" data-track="smart_cta_click">${escapeHtml(action.label)}</a>
        `).join("")}
      </div>
    `;

    wrap.appendChild(section);

    qsa('[data-track="smart_cta_click"]', section).forEach(el => {
      el.addEventListener("click", () => maybeTrack("smart_cta_click"));
    });
  }

  function ensureBodyFlags() {
    const current = getCurrentPath();
    const page = current.replace(/\.html$/i, "") || "home";

    document.body.classList.add("js-ready");
    document.body.dataset.page = page;

    if (current === POSH.home || current === "" || current === "/") {
      document.body.classList.add("home-page");
    }

    if (/^v3-game-/.test(current) || /^V3gaming-/.test(current)) {
      document.body.classList.add("page-is-game");
    }
    if (/^v3-social-/.test(current)) {
      document.body.classList.add("page-is-social");
    }
    if (current === POSH.devices) {
      document.body.classList.add("page-is-device");
    }
  }

  function addPageMetaAttributes() {
    const page = getCurrentPath();
    const title = getPageTitle();

    document.documentElement.dataset.page = page.replace(/\.html$/i, "");
    document.documentElement.dataset.pageTitle = slugify(title || page);
  }

  function addPageLeadClass() {
    const title = getPageTitle().toLowerCase();

    if (title.includes("roblox")) document.body.classList.add("topic-roblox");
    if (title.includes("discord")) document.body.classList.add("topic-discord");
    if (title.includes("tiktok")) document.body.classList.add("topic-tiktok");
    if (title.includes("youtube")) document.body.classList.add("topic-youtube");
    if (title.includes("snapchat")) document.body.classList.add("topic-snapchat");
    if (title.includes("device")) document.body.classList.add("topic-devices");
    if (title.includes("gaming")) document.body.classList.add("topic-gaming");
  }

  function enhanceFaqs() {
    qsa("details").forEach(detail => {
      const summary = detail.querySelector("summary");
      if (!summary) return;

      detail.classList.add("posh-details");
      detail.addEventListener("toggle", () => {
        if (detail.open) {
          maybeTrack("details_open", {
            label: safeText(summary.textContent).slice(0, 100)
          });
        }
      });
    });
  }

  function hardenExternalLinks() {
    qsa("a[target='_blank']").forEach(link => {
      const rel = (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      if (!rel.includes("noopener")) rel.push("noopener");
      if (!rel.includes("noreferrer")) rel.push("noreferrer");
      link.setAttribute("rel", rel.join(" "));
    });
  }

  function trackLinks() {
    qsa("a[href]").forEach(link => {
      const href = link.getAttribute("href") || "";

      if (isExternalHref(href)) {
        link.addEventListener("click", () => {
          maybeTrack("outbound_click", { label: href });
        });
      }

      if (/\.pdf(\?|$)/i.test(href) || link.hasAttribute("download")) {
        link.classList.add("is-download-link");
        link.addEventListener("click", () => {
          maybeTrack("download_click", { label: href });
        });
      }
    });
  }

  function enhanceCards() {
    qsa(".card").forEach(card => {
      if (!card.hasAttribute("tabindex")) {
        card.setAttribute("tabindex", "0");
      }
    });
  }

  function enhanceForms() {
    qsa("form").forEach(form => {
      form.setAttribute("novalidate", "novalidate");

      form.addEventListener("submit", () => {
        maybeTrack("form_submit_attempt", {
          label: form.getAttribute("id") || form.getAttribute("name") || getCurrentPath()
        });
      });

      qsa("input, textarea, select", form).forEach(field => {
        field.addEventListener("focus", () => {
          const wrap = field.closest(".field, .input-wrap, .form-row");
          if (wrap) wrap.classList.add("has-focus");
        });

        field.addEventListener("blur", () => {
          const wrap = field.closest(".field, .input-wrap, .form-row");
          if (wrap) wrap.classList.remove("has-focus");
        });
      });
    });
  }

  function injectHeroButtonsIfMissing() {
    const hero =
      qs(".home-intro-hero") ||
      qs(".home-intro") ||
      qs(".card.hero") ||
      qs(".hero-card");

    if (!hero || qs(".posh-hero-actions", hero)) return;

    const box = document.createElement("div");
    box.className = "posh-hero-actions";
    box.innerHTML = `
      <a href="${POSH.start}" data-track="hero_start">Start Here</a>
      <a href="${POSH.quiz}" class="secondary" data-track="hero_quiz">Safety Score</a>
      <a href="${POSH.reporting}" class="ghost" data-track="hero_report">Report & Get Help</a>
    `;

    hero.appendChild(box);

    qsa("[data-track]", box).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });
  }

  function injectSupportFooterPrompt() {
    if (qs(".posh-footer-prompt")) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const footer = document.createElement("section");
    footer.className = "posh-footer-prompt";
    footer.innerHTML = `
      <p><strong>POSH is free for families.</strong> Support helps build more tools, more guidance, more downloads, and more early protection for the next parent who lands here overwhelmed.</p>
      <div class="posh-footer-prompt-actions">
        <a href="${POSH.support}" data-track="footer_support">Support POSH</a>
        <a href="${POSH.monthlySupport}" data-track="footer_monthly">${escapeHtml(POSH.helpKeepFreeText)}</a>
        <button type="button" id="poshFooterShare" data-track="footer_share">Share POSH</button>
      </div>
    `;

    wrap.appendChild(footer);

    const shareBtn = qs("#poshFooterShare", footer);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);

    qsa("[data-track]", footer).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });
  }

  function injectPageSummaryMeta() {
    if (qs(".posh-page-summary-meta")) return;

    const wrap = qs(".wrap");
    const title = getPageTitle();
    const intro = getPageIntro();
    if (!wrap || !title || !intro) return;

    const block = document.createElement("div");
    block.className = "posh-page-summary-meta visually-hidden";
    block.setAttribute("aria-hidden", "true");
    block.dataset.pageTitle = title;
    block.dataset.pageIntro = intro;
    wrap.prepend(block);
  }

  function setupCopyLinkTriggers() {
    qsa("[data-copy-link], [data-copy-url]").forEach(btn => {
      btn.addEventListener("click", copyCurrentLink);
    });
  }

  function enhanceButtonsThatShare() {
    qsa("[data-share-posh]").forEach(btn => {
      btn.addEventListener("click", nativeShare);
    });
  }

  function addCurrentLocationToHomeButtons() {
    qsa(`a[href="${POSH.home}"]`).forEach(link => {
      if (!link.dataset.fromPage) {
        link.dataset.fromPage = getCurrentPath();
      }
    });
  }

  function markCurrentYear() {
    qsa("[data-current-year]").forEach(el => {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function setupScrollHandlers() {
    const onScroll = debounce(() => {
      updateProgressBar();
      updateBackToTop();
    }, 10);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    updateProgressBar();
    updateBackToTop();
  }

  function trackPageView() {
    maybeTrack("page_view_enhanced", { label: getCurrentPath() });
  }

  function safeInit(fn) {
    try {
      fn();
    } catch (err) {
      console.error("[POSH app.js]", err);
    }
  }

  function init() {
    safeInit(ensureBodyFlags);
    safeInit(addPageMetaAttributes);
    safeInit(addPageLeadClass);
    safeInit(mountNav);
    safeInit(injectBreadcrumbs);
    safeInit(ensureHeadingIds);
    safeInit(buildTOC);
    safeInit(smoothAnchors);
    safeInit(ensureProgressBar);
    safeInit(ensureBackToTop);
    safeInit(ensureMiniToast);
    safeInit(setupScrollHandlers);
    safeInit(injectStickyActionBar);
    safeInit(injectHeroButtonsIfMissing);
    safeInit(injectSmartCTA);
    safeInit(injectRelatedLinks);
    safeInit(injectSharePanel);
    safeInit(injectSupportStrip);
    safeInit(injectSupportFooterPrompt);
    safeInit(injectPageSummaryMeta);
    safeInit(enhanceFaqs);
    safeInit(hardenExternalLinks);
    safeInit(trackLinks);
    safeInit(enhanceCards);
    safeInit(markCurrentYear);
    safeInit(setupCopyLinkTriggers);
    safeInit(enhanceForms);
    safeInit(enhanceButtonsThatShare);
    safeInit(addCurrentLocationToHomeButtons);
    safeInit(trackPageView);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
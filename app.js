(function () {
  "use strict";

  const SITE = {
    name: "POSH",
    homeUrl: "index.html",
    quizUrl: "v3-safety-score.html",
    startUrl: "v3-start.html",
    reportUrl: "v3-reporting.html",
    shareText: "Take a look at POSH Aussie — practical online safety help for parents.",
    searchPlaceholder: "Search apps, games, devices, PDFs or topics"
  };

  const NAV_GROUPS = [
    {
      title: "Start & Safety",
      links: [
        {
          href: "index.html",
          label: "Home",
          type: "Home",
          keywords: "home posh parents online safety hub child safety australia grooming support"
        },
        {
          href: "v3-start.html",
          label: "Start Here",
          type: "Start",
          keywords: "start here first steps where do i begin urgent help parents safety"
        },
        {
          href: "v3-entry-system.html",
          label: "Entry System",
          type: "System",
          keywords: "entry system guided path risk pathway help decision"
        },
        {
          href: "v3-safety-score.html",
          label: "Safety Score",
          type: "Score",
          keywords: "safety score quiz audit checklist risk check test"
        },
        {
          href: "v3-redflags.html",
          label: "Red Flags",
          type: "Warning Signs",
          keywords: "red flags warning signs grooming child online concern behaviour"
        },
        {
          href: "v3-playbook.html",
          label: "Grooming Playbook",
          type: "Playbook",
          keywords: "grooming playbook escalation steps patterns manipulation secrecy trust"
        },
        {
          href: "v3-predators.html",
          label: "Predator Tactics",
          type: "Predators",
          keywords: "predator tactics manipulation control secrecy trust isolation"
        },
        {
          href: "v3-reporting.html",
          label: "Reporting Help",
          type: "Reporting",
          keywords: "reporting report police esafety evidence screenshots action help"
        }
      ]
    },
    {
      title: "Platforms, Games & Apps",
      links: [
        {
          href: "v3-platforms.html",
          label: "All Platforms",
          type: "Platforms",
          keywords: "all platforms apps games devices social media list"
        },
        {
          href: "v3-gaming.html",
          label: "Gaming Hub",
          type: "Gaming",
          keywords: "gaming hub games voice chat strangers headset multiplayer"
        },
        {
          href: "v3-all-games.html",
          label: "All Games",
          type: "Games",
          keywords: "all games list gaming safety roblox fortnite minecraft vrchat"
        },
        {
          href: "v3-game-roblox.html",
          label: "Roblox",
          type: "Game",
          keywords: "roblox robux friend requests private chat groups grooming"
        },
        {
          href: "v3-game-fortnite.html",
          label: "Fortnite",
          type: "Game",
          keywords: "fortnite voice chat parties epic randoms lobbies"
        },
        {
          href: "v3-game-minecraft.html",
          label: "Minecraft",
          type: "Game",
          keywords: "minecraft servers multiplayer mods realms chat"
        },
        {
          href: "v3-game-vrchat.html",
          label: "VRChat",
          type: "Game",
          keywords: "vrchat vr headset avatars adults children voice immersion"
        },
        {
          href: "v3-socials.html",
          label: "Social Media Hub",
          type: "Socials",
          keywords: "social media socials apps tiktok discord youtube snapchat instagram"
        },
        {
          href: "v3-social-discord.html",
          label: "Discord",
          type: "Social App",
          keywords: "discord servers dms voice chat private chats communities"
        },
        {
          href: "v3-social-tiktok.html",
          label: "TikTok",
          type: "Social App",
          keywords: "tiktok algorithm exposure trends live messages fyp"
        },
        {
          href: "v3-social-youtube.html",
          label: "YouTube",
          type: "Video App",
          keywords: "youtube shorts comments creators live streams algorithm"
        },
        {
          href: "v3-social-snapchat.html",
          label: "Snapchat",
          type: "Social App",
          keywords: "snapchat disappearing messages streaks snap map quick add"
        },
        {
          href: "v3-videochat.html",
          label: "Video Chat",
          type: "Video Chat",
          keywords: "video chat webcam strangers live video random chat calls"
        },
        {
          href: "v3-best-parental-control-apps.html",
          label: "Best Parental Control Apps",
          type: "Apps",
          keywords: "best parental control apps monitoring filters device management screen time"
        },
        {
          href: "v3-cancel-subscriptions.html",
          label: "Cancel Subscriptions",
          type: "Guide",
          keywords: "cancel subscriptions apple google microsoft xbox playstation support"
        }
      ]
    },
    {
      title: "Awareness & Resources",
      links: [
        {
          href: "v3-awareness.html",
          label: "Awareness Hub",
          type: "Awareness",
          keywords: "awareness education online dangers understanding parent learning"
        },
        {
          href: "v3-algorithm-awareness.html",
          label: "Algorithm Awareness",
          type: "Awareness",
          keywords: "algorithm awareness influence endless feed attention manipulation"
        },
        {
          href: "v3-real-investigations.html",
          label: "Real Investigations",
          type: "Investigations",
          keywords: "real investigations evidence interviews cases predators awareness"
        },
        {
          href: "v3-parent-scripts.html",
          label: "Parent Scripts",
          type: "Scripts",
          keywords: "parent scripts talk to your child conversation prompts online safety"
        },
        {
          href: "v3-house-rules.html",
          label: "House Rules",
          type: "Rules",
          keywords: "house rules family device boundaries phones bedrooms charging night"
        },
        {
          href: "v3-age-guide.html",
          label: "Age Guide",
          type: "Guide",
          keywords: "age guide age appropriate apps games readiness maturity"
        },
        {
          href: "v3-downloads.html",
          label: "Downloads",
          type: "Downloads",
          keywords: "downloads pdf printables framework scripts playbook resources"
        },
        {
          href: "v3-support.html",
          label: "Support",
          type: "Support",
          keywords: "support help next steps services parent help australia"
        },
        {
          href: "warning-disclaimer.html",
          label: "Warning & Disclaimer",
          type: "Info",
          keywords: "warning disclaimer legal medical educational only"
        }
      ]
    }
  ];

  const ALL_LINKS = NAV_GROUPS.flatMap(group => group.links);

  function $(selector, root = document) {
    return root.querySelector(selector);
  }

  function $all(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function normalisePath(path) {
    if (!path) return SITE.homeUrl;
    const clean = path.split("#")[0].split("?")[0];
    const file = clean.substring(clean.lastIndexOf("/") + 1);
    return file || SITE.homeUrl;
  }

  function currentPath() {
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
    return String(value || "")
      .toLowerCase()
      .trim()
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

  function trackEvent(name, data = {}) {
    try {
      if (window.goatcounter && typeof window.goatcounter.count === "function") {
        window.goatcounter.count({
          path: location.pathname + location.search + location.hash,
          event: true,
          title: name,
          ...data
        });
      }
    } catch (err) {
      // silent
    }
  }

  function safeText(text) {
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function findLinkByHref(href) {
    const file = normalisePath(href);
    return ALL_LINKS.find(link => normalisePath(link.href) === file) || null;
  }

  function getPageTitle() {
    const h1 = $("h1");
    if (h1 && safeText(h1.textContent)) return safeText(h1.textContent);
    return safeText(document.title.replace(/\s*[•|-]\s*POSH.*$/i, ""));
  }

  function linkMarkup(link) {
    return `
      <a href="${link.href}"
         data-type="${escapeHtml(link.type || "")}"
         data-keywords="${escapeHtml(link.keywords || "")}"
         data-label="${escapeHtml(link.label || "")}">
         ${escapeHtml(link.label)}
      </a>
    `;
  }

  function buildNavHTML() {
    const groups = NAV_GROUPS.map(group => `
      <details class="nav-group">
        <summary>${escapeHtml(group.title)}</summary>
        <nav>
          ${group.links.map(linkMarkup).join("")}
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
            placeholder="${escapeHtml(SITE.searchPlaceholder)}"
            autocomplete="off"
            aria-label="Search POSH"
          />
          <button type="button" class="nav-search-clear" id="poshSearchClear" aria-label="Clear search">×</button>
          <div id="poshSearchResults" class="nav-search-results" hidden></div>
        </div>

        <div class="nav-quick-actions">
          <a href="${SITE.startUrl}" class="nav-quick-link" data-track="Quick Start">Start</a>
          <a href="${SITE.quizUrl}" class="nav-quick-link" data-track="Quick Quiz">Safety Score</a>
          <a href="${SITE.reportUrl}" class="nav-quick-link" data-track="Quick Report">Reporting</a>
          <button type="button" class="nav-quick-link nav-share-trigger" data-track="Quick Share">Share</button>
        </div>

        <div class="nav-accordion">
          ${groups}
        </div>
      </div>
    `;
  }

  function setActiveNav(root) {
    const current = currentPath();
    $all("a[href]", root).forEach(anchor => {
      const href = normalisePath(anchor.getAttribute("href"));
      if (href === current) {
        anchor.classList.add("active");
        anchor.setAttribute("aria-current", "page");
        const group = anchor.closest("details");
        if (group) group.open = true;
      }
    });
  }

  function setupAccordion(root) {
    const groups = $all(".nav-group", root);

    groups.forEach(group => {
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

  function scoreLink(link, query) {
    const q = query.toLowerCase().trim();
    if (!q) return 0;

    const label = (link.label || "").toLowerCase();
    const type = (link.type || "").toLowerCase();
    const keywords = (link.keywords || "").toLowerCase();
    const href = (link.href || "").toLowerCase();

    const haystack = `${label} ${type} ${keywords} ${href}`;
    const tokens = q.split(/\s+/).filter(Boolean);

    let score = 0;

    if (label === q) score += 300;
    if (href === q || href.includes(q)) score += 140;
    if (label.startsWith(q)) score += 180;
    if (label.includes(q)) score += 120;
    if (type.includes(q)) score += 65;
    if (keywords.includes(q)) score += 45;

    tokens.forEach(token => {
      if (label === token) score += 100;
      if (label.startsWith(token)) score += 60;
      if (label.includes(token)) score += 30;
      if (type.includes(token)) score += 18;
      if (keywords.includes(token)) score += 15;
      if (href.includes(token)) score += 15;
    });

    if (tokens.length > 1 && tokens.every(token => haystack.includes(token))) {
      score += 70;
    }

    if (/roblox|discord|tiktok|youtube|snapchat|fortnite|minecraft|vrchat/.test(q) && label.toLowerCase().includes(q)) {
      score += 80;
    }

    return score;
  }

  function buildSearchResult(link, query) {
    const q = query.toLowerCase().trim();
    const label = link.label || "";
    const type = link.type || "Page";
    const desc = link.keywords || "";

    return `
      <a href="${link.href}" class="nav-search-result" data-track="Search Result" data-query="${escapeHtml(query)}">
        <span class="nav-search-result-title">${escapeHtml(label)}</span>
        <span class="nav-search-result-meta">${escapeHtml(type)}</span>
        <span class="nav-search-result-desc">${escapeHtml(desc)}</span>
      </a>
    `;
  }

  function setupSearch(root) {
    const input = $("#poshSearch", root);
    const clearBtn = $("#poshSearchClear", root);
    const results = $("#poshSearchResults", root);

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
      const query = input.value.trim();

      clearBtn.style.visibility = query ? "visible" : "hidden";

      if (!query) {
        hideResults();
        return;
      }

      const matches = ALL_LINKS
        .map(link => ({ link, score: scoreLink(link, query) }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score || a.link.label.localeCompare(b.link.label))
        .slice(0, 8)
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
    }, 100);

    input.addEventListener("input", runSearch);

    input.addEventListener("focus", () => {
      if (input.value.trim()) runSearch();
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
      trackEvent("search_result_click", {
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

  function injectNav() {
    const host = $("#nav");
    if (!host) return;

    host.innerHTML = buildNavHTML();
    host.classList.add("posh-nav-ready");

    setActiveNav(host);
    setupAccordion(host);
    setupSearch(host);

    $all("[data-track]", host).forEach(el => {
      el.addEventListener("click", () => {
        trackEvent(el.getAttribute("data-track") || "nav_click");
      });
    });

    const shareBtn = $(".nav-share-trigger", host);
    if (shareBtn) {
      shareBtn.addEventListener("click", handleShare);
    }
  }

  function injectBreadcrumbs() {
    const current = currentPath();
    const currentLink = findLinkByHref(current);
    if (!currentLink) return;
    if (current === SITE.homeUrl) return;
    if ($(".posh-breadcrumbs")) return;

    const host =
      $(".page-title")?.parentElement ||
      $(".brand")?.parentElement ||
      $("main") ||
      $(".wrap");

    if (!host) return;

    const group = NAV_GROUPS.find(g =>
      g.links.some(link => normalisePath(link.href) === current)
    );

    const nav = document.createElement("nav");
    nav.className = "posh-breadcrumbs";
    nav.setAttribute("aria-label", "Breadcrumb");
    nav.innerHTML = `
      <a href="${SITE.homeUrl}">Home</a>
      ${group ? `<span class="crumb-sep">/</span><span>${escapeHtml(group.title)}</span>` : ""}
      <span class="crumb-sep">/</span><span aria-current="page">${escapeHtml(currentLink.label)}</span>
    `;

    const pageTitle = $(".page-title");
    if (pageTitle) {
      host.insertBefore(nav, pageTitle);
    } else {
      host.prepend(nav);
    }
  }

  function injectQuickActionsBar() {
    if ($(".posh-action-bar")) return;

    const wrap = $(".wrap") || document.body;
    const bar = document.createElement("div");
    bar.className = "posh-action-bar";
    bar.innerHTML = `
      <a href="${SITE.quizUrl}" class="posh-action-btn" data-track="Sticky Quiz">Safety Score</a>
      <a href="${SITE.reportUrl}" class="posh-action-btn" data-track="Sticky Reporting">Reporting</a>
      <button type="button" class="posh-action-btn posh-share-btn" data-track="Sticky Share">Share</button>
    `;

    document.body.appendChild(bar);

    $all("[data-track]", bar).forEach(el => {
      el.addEventListener("click", () => {
        trackEvent(el.getAttribute("data-track") || "action_bar_click");
      });
    });

    const shareBtn = $(".posh-share-btn", bar);
    if (shareBtn) shareBtn.addEventListener("click", handleShare);
  }

  function ensureProgressBar() {
    if ($("#poshReadingProgress")) return;
    const bar = document.createElement("div");
    bar.id = "poshReadingProgress";
    bar.className = "posh-reading-progress";
    document.body.prepend(bar);
  }

  function updateReadingProgress() {
    const bar = $("#poshReadingProgress");
    if (!bar) return;

    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
    bar.style.width = progress + "%";
  }

  function ensureBackToTop() {
    if ($("#poshBackToTop")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "poshBackToTop";
    btn.className = "posh-back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.textContent = "↑";
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      trackEvent("back_to_top");
    });
  }

  function updateBackToTop() {
    const btn = $("#poshBackToTop");
    if (!btn) return;
    btn.classList.toggle("visible", window.scrollY > 500);
  }

  function markCurrentYear() {
    $all("[data-current-year]").forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }

  function hardenExternalLinks() {
    $all('a[target="_blank"]').forEach(link => {
      const rel = link.getAttribute("rel") || "";
      const parts = rel.split(/\s+/).filter(Boolean);
      if (!parts.includes("noopener")) parts.push("noopener");
      if (!parts.includes("noreferrer")) parts.push("noreferrer");
      link.setAttribute("rel", parts.join(" ").trim());
    });
  }

  function enhanceFaqs() {
    $all(".faq-item details, .faq details, details.faq").forEach(detail => {
      detail.addEventListener("toggle", () => {
        if (detail.open) {
          const label = safeText(detail.querySelector("summary")?.textContent || "faq_open");
          trackEvent("faq_open", { label });
        }
      });
    });
  }

  function smoothAnchorLinks() {
    $all('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
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

  function ensureSectionIds() {
    $all("h2, h3").forEach(heading => {
      if (!heading.id) {
        const text = safeText(heading.textContent);
        if (text) heading.id = slugify(text);
      }
    });
  }

  function setupCopyLinkButtons() {
    $all("[data-copy-link]").forEach(btn => {
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(location.href);
          const original = btn.textContent;
          btn.textContent = "Copied";
          trackEvent("copy_link");
          setTimeout(() => {
            btn.textContent = original;
          }, 1500);
        } catch (err) {
          // silent
        }
      });
    });
  }

  async function handleShare() {
    const shareData = {
      title: getPageTitle() || document.title,
      text: SITE.shareText,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        trackEvent("share_native");
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      trackEvent("share_copy_link");
      showMiniToast("Link copied");
    } catch (err) {
      // silent
    }
  }

  function showMiniToast(message) {
    let toast = $("#poshMiniToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "poshMiniToast";
      toast.className = "posh-mini-toast";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("visible");

    clearTimeout(showMiniToast._timer);
    showMiniToast._timer = setTimeout(() => {
      toast.classList.remove("visible");
    }, 1600);
  }

  function annotateBody() {
    document.body.classList.add("js-ready");
    document.body.setAttribute("data-page", currentPath().replace(/\.html$/i, "") || "home");
  }

  function enhanceCards() {
    $all(".card").forEach(card => {
      if (!card.hasAttribute("tabindex")) {
        card.setAttribute("tabindex", "0");
      }
    });
  }

  function enhanceDownloads() {
    $all('a[href$=".pdf"], a[href*=".pdf?"], a[download]').forEach(link => {
      link.classList.add("is-download-link");
      link.addEventListener("click", () => {
        trackEvent("download_click", {
          label: link.getAttribute("href") || ""
        });
      });
    });
  }

  function enhanceOutboundLinks() {
    $all("a[href]").forEach(link => {
      const href = link.getAttribute("href") || "";
      const isExternal = /^https?:\/\//i.test(href) && !href.includes(location.hostname);

      if (isExternal) {
        link.addEventListener("click", () => {
          trackEvent("outbound_click", { label: href });
        });
      }
    });
  }

  function setupScrollHandlers() {
    const onScroll = debounce(() => {
      updateReadingProgress();
      updateBackToTop();
    }, 10);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateReadingProgress();
    updateBackToTop();
  }

  function setupAutoCTAEnhancement() {
    const hero = $(".home-intro, .home-intro-hero, .card.hero, .card.home-intro");
    if (!hero) return;
    if ($(".posh-hero-actions", hero)) return;

    const actions = document.createElement("div");
    actions.className = "posh-hero-actions";
    actions.innerHTML = `
      <a href="${SITE.quizUrl}" class="posh-hero-btn" data-track="Hero Safety Score">Take the Safety Score</a>
      <a href="${SITE.startUrl}" class="posh-hero-btn secondary" data-track="Hero Start Here">Start Here</a>
    `;

    hero.appendChild(actions);

    $all("[data-track]", actions).forEach(el => {
      el.addEventListener("click", () => {
        trackEvent(el.getAttribute("data-track") || "hero_click");
      });
    });
  }

  function setupPageViewTracking() {
    trackEvent("page_view_enhanced", {
      label: currentPath()
    });
  }

  function init() {
    annotateBody();
    injectNav();
    injectBreadcrumbs();
    injectQuickActionsBar();
    ensureProgressBar();
    ensureBackToTop();
    ensureSectionIds();
    smoothAnchorLinks();
    hardenExternalLinks();
    enhanceFaqs();
    enhanceCards();
    enhanceDownloads();
    enhanceOutboundLinks();
    setupCopyLinkButtons();
    setupAutoCTAEnhancement();
    markCurrentYear();
    setupScrollHandlers();
    setupPageViewTracking();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
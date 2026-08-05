/**
 * ============================================================================
 * POSH app.js — Parents Online Safety Hub | Complete Safety Ecosystem
 * Version: 2026-08-05-v9-WorldClass-Executive-Amazon-Enterprise
 * Purpose:
 * - Keep POSH fast, accessible, intuitive, and easy to navigate across devices.
 * - Route users directly to live Amazon AU Buy Now pages for published books.
 * - Map all POSH Topic Pathways seamlessly to their Amazon paperback/eBook pages.
 * - Automatically inject smart CTAs, related links, support strips, and buy buttons.
 * - Maintain graceful fallback redirects for legacy URLs so existing links never 404.
 * ============================================================================
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. AMAZON AU BUY NOW BOOK CATALOGUE
     ========================================================================== */

  const POSH_AMAZON_CATALOGUE = {
    // --- Core Digital Resilience Series & Online Safety Books ---
    book1_parentSystem: {
      title: "Raising Digitally Resilient Kids",
      asin: "B0HC2G6KW5",
      url: "https://www.amazon.com.au/dp/B0HC2G6KW5",
      category: "Core Safety Series"
    },
    book2_platformRisks: {
      title: "The Digital Playground: Navigating Platform Risks",
      asin: "B0HC6LQDV9",
      url: "https://www.amazon.com.au/dp/B0HC6LQDV9",
      category: "Core Safety Series"
    },
    book3_redFlags: {
      title: "New Risks Families Face: Spotting Red Flags Early",
      asin: "B0HC21X6YT",
      url: "https://www.amazon.com.au/dp/B0HC21X6YT",
      category: "Core Safety Series"
    },
    book4_emotionalRegulation: {
      title: "Emotional Regulation Online",
      asin: "B0HC48DF2Q",
      url: "https://www.amazon.com.au/dp/B0HC48DF2Q",
      category: "Core Safety Series"
    },
    book5_frustrationTolerance: {
      title: "Frustration Tolerance in a Digital World",
      asin: "B0HBN1ZGXF",
      url: "https://www.amazon.com.au/dp/B0HBN1ZGXF",
      category: "Core Safety Series"
    },
    book6_criticalThinking: {
      title: "Thinking Before Clicking: Critical Digital Thinking",
      asin: "B0H99MD152",
      url: "https://www.amazon.com.au/dp/B0H99MD152",
      category: "Core Safety Series"
    },
    book7_manipulated: {
      title: "Spotting Manipulation & Misinformation",
      asin: "B0H6QQJ7B4",
      url: "https://www.amazon.com.au/dp/B0H6QQJ7B4",
      category: "Core Safety Series"
    },
    book8_executiveSafety: {
      title: "Executive Functioning for Online Safety",
      asin: "B0H6LWBHXB",
      url: "https://www.amazon.com.au/dp/B0H6LWBHXB",
      category: "Core Safety Series"
    },
    book9_confidence: {
      title: "Confidence is a Safety Skill",
      asin: "B0H42PPR5V",
      url: "https://www.amazon.com.au/dp/B0H42PPR5V",
      category: "Core Safety Series"
    },
    book10_houseRules: {
      title: "Healthy Boundaries Online & Offline",
      asin: "B0H6L82YW4",
      url: "https://www.amazon.com.au/dp/B0H6L82YW4",
      category: "Core Safety Series"
    },

    // --- Immersive Adventures, Algorithms & Digital Culture ---
    shortcutForest: {
      title: "Shortcut Forest: Rewrites Immersive Adventure",
      asin: "B0HCGXY4JM",
      url: "https://www.amazon.com.au/dp/B0HCGXY4JM",
      category: "Adventure & Resilience"
    },
    systemOverride: {
      title: "SYSTEM OVERRIDE: Outsmarting Algorithms & Surviving",
      asin: "B0HC6LQDV9",
      url: "https://www.amazon.com.au/dp/B0HC6LQDV9",
      category: "Algorithm Awareness"
    },
    smartphonesNoNonsense: {
      title: "Smartphones & No-Nonsense Digital Mastery",
      asin: "B0HC21X6YT",
      url: "https://www.amazon.com.au/dp/B0HC21X6YT",
      category: "Digital Culture"
    },
    wordWeather: {
      title: "WORDWEATHER: NOBODY STARTED by Graeme Ingle",
      asin: "B0H8SBBXRW",
      url: "https://www.amazon.com.au/dp/B0H8SBBXRW",
      category: "Author Publications"
    },
    digitalResilienceCompanion: {
      title: "POSH Digital Resilience Companion",
      asin: "B0HC9K7BJ2",
      url: "https://www.amazon.com.au/dp/B0HC9K7BJ2",
      category: "Parent Guides"
    },

    // --- Family Notebooks, Conversations & Humour ---
    weirdWonderfulNotebook: {
      title: "Weird & Wonderful Completely True Notebook",
      asin: "B0H8XTNM9T",
      url: "https://www.amazon.com.au/dp/B0H8XTNM9T",
      category: "Notebooks & Conversations"
    },
    questionsWorthAsking: {
      title: "Questions Worth Asking: Notebook & Conversations",
      asin: "B0H8Y279LP",
      url: "https://www.amazon.com.au/dp/B0H8Y279LP",
      category: "Notebooks & Conversations"
    },
    seriouslyDadJokes: {
      title: "Seriously Dad Jokes Notes (Groan-Worthy Edition)",
      asin: "B0H9538TX1",
      url: "https://www.amazon.com.au/dp/B0H9538TX1",
      category: "Family Humour & Notes"
    },
    seriouslyDadScienceJokes: {
      title: "Seriously Dad Science Jokes Notes",
      asin: "B0H99H39JN",
      url: "https://www.amazon.com.au/dp/B0H99H39JN",
      category: "Family Humour & Notes"
    }
  };

  /* ==========================================================================
     2. SITE CONFIGURATION & CORE ROUTES
     ========================================================================== */

  const POSH = {
    brand: "POSH",
    siteName: "Parents Online Safety Hub",
    domain: "https://poshaussie.com.au/",
    home: "index.html",

    heroCandidates: [
      "POSH-HERO.png",
      "/POSH-HERO.png",
      "POSH-HERO.PNG",
      "/POSH-HERO.PNG",
      "posh-hero.png",
      "/posh-hero.png",
      "posh-home.png",
      "/posh-home.png",
      "https://poshaussie.com.au/POSH-HERO.png",
      "https://poshaussie.com.au/posh-hero.png",
      "https://poshaussie.com.au/posh-home.png"
    ],

    heroAlt: "Parents Online Safety Hub — Raising Digitally Resilient Families",
    heroAriaLabel: "Return to Parents Online Safety Hub home",

    start: "v3-start.html",
    entry: "v3-entry-system.html",
    safetyLanes: "v3-posh-safety-lanes.html",
    parentSystem: "v3-posh-parent-system.html",
    whatNow: "v3-what-to-do-now.html",
    whatNowLegacy: "v3-what-now.html",
    response: "v3-response-system.html",
    responseLegacy: "v3-posh-response-system.html",
    parentQuestions: "v3-parent-questions.html",
    quiz: "v3-safety-score.html",

    smarterChildrenFree: "v3-smarter-children-safer-children-free-guide.html",
    topicHub: "v3-posh-digital-resilience-series.html",
    topicFinder: "v3-which-posh-book-should-i-read-first.html",

    urgentHelp: "v3-what-to-do-if-your-child-is-in-danger-online.html",
    first24: "v3-first-24-hours-online-incident.html",
    first24Legacy: "v3-first-24-hours.html",
    blackmail: "v3-my-child-is-being-blackmailed-online.html",
    photos: "v3-kid-sending-photos-online-what-to-do.html",
    sextortion: "v3-what-is-sextortion.html",
    sextortionLegacy: "v3-sextortion.html",
    evidence: "v3-evidence-reporting.html",
    reporting: "v3-reporting.html",
    reportingAustralia: "v3-reporting-australia.html",
    reportingUSA: "v3-reporting-usa.html",
    reportingUK: "v3-reporting-uk.html",
    reportingEurope: "v3-reporting-europe.html",
    officialReportingAustralia: "v3-official-reporting-pathways-australia.html",
    reportWithoutWorse: "v3-how-to-report-without-making-it-worse.html",
    evidenceMistakes: "v3-what-not-to-do-with-evidence.html",

    redFlags: "v3-redflags.html",
    tenSigns: "v3-10-signs-targeted-online.html",
    tenSignsLegacy: "v3-10-signs.html",
    groomingSigns: "v3-child-being-groomed-signs.html",
    groomingSignsLegacy: "v3-signs-my-child-is-being-groomed-online.html",
    groomingSignsAlt: "v3-signs-your-child-is-being-groomed.html",
    predatorWarning: "v3-online-predator-warning-signs.html",
    childHidingPhone: "v3-child-hiding-phone-from-parents.html",
    manipulated: "v3-my-child-is-being-manipulated-online.html",
    whyKidsDontTell: "v3-why-kids-dont-tell-parents-online-safety.html",
    stranger: "v3-my-child-is-talking-to-a-stranger-online.html",
    offPlatform: "v3-off-platform-movement-warning-signs.html",
    playbook: "v3-playbook.html",
    predators: "v3-predators.html",
    grooming: "v3-grooming.html",
    stepGrooming: "v3-how-grooming-actually-works-step-by-step.html",
    contactKids: "v3-how-predators-contact-kids-online.html",
    isolation: "v3-signs-your-child-is-being-isolated-online.html",
    onlineFriendRisk: "v3-when-an-online-friend-becomes-a-risk.html",
    sadisticOnlineExploitation: "v3-sadistic-online-exploitation.html",

    platforms: "v3-platforms.html",
    platformRisks: "v3-platform-risks-overview.html",
    allApplications: "v3-all-applications.html",
    dangerousApps: "v3-dangerous-apps.html",
    dangerousAppsKids: "v3-dangerous-apps-for-kids.html",
    safeAppsGames: "v3-safe-apps-and-games-for-kids.html",
    socials: "v3-socials.html",
    devices: "v3-devices.html",
    deviceControls: "v3-device-controls.html",
    parentalControls: "v3-parental-controls.html",
    parentalControlsByDevice: "v3-parental-controls-by-device.html",
    bestParentalControlApps: "v3-best-parental-control-apps.html",
    monitorTrust: "v3-how-to-monitor-without-breaking-trust.html",
    checkDeviceCalmly: "v3-how-to-check-a-device-without-causing-panic.html",
    trustProtection: "v3-it-is-not-about-not-trusting-your-child.html",
    houseRules: "v3-house-rules.html",
    familyAgreement: "v3-family-agreement.html",
    parentScripts: "v3-parent-scripts.html",
    talkOnlineSafety: "v3-how-to-talk-to-your-child-about-online-safety.html",

    trainingEveryone: "v3-online-safety-training-for-everyone.html",
    grandparents: "v3-grandparents-online-safety.html",
    parentsTraining: "v3-parents-online-safety-training.html",
    carersTraining: "v3-carers-online-safety-training.html",
    teachersTraining: "v3-teachers-online-safety-training.html",
    coachesTraining: "v3-coaches-online-safety-training.html",
    familyNetworkGuide: "v3-aunties-uncles-family-friends-online-safety.html",
    olderSiblings: "v3-older-siblings-online-safety-guide.html",
    youthWorkers: "v3-youth-workers-online-safety-training.html",
    babysitters: "v3-babysitters-online-safety-guide.html",
    safeAdultWarningSigns: "v3-safe-adult-warning-signs.html",
    safeAdultResponse: "v3-safe-adult-response-system.html",
    whatSafeAdultsSay: "v3-what-every-safe-adult-should-say.html",
    safeAdultNetworkCard: "v3-safe-adult-network-card.html",
    freeChildSafetyChecksAccountability: "v3-free-child-safety-checks-safe-adult-accountability.html",
    safeAdultAccountabilityStandard: "v3-posh-safe-adult-accountability-standard.html",

    gaming: "v3-gaming.html",
    allGames: "v3-all-games.html",
    gameRisksByAge: "v3-game-risks-by-age.html",
    roblox: "v3-game-roblox.html",
    robloxSupervision: "v3-why-roblox-requires-supervision.html",
    robuxScam: "v3-free-robux-scam-safety.html",
    robuxScamExplained: "v3-roblox-robux-scams-explained.html",
    inGameCurrency: "v3-in-game-currency-grooming-risk.html",
    brainrotRoblox: "v3-brainrot-roblox.html",
    fortnite: "v3-game-fortnite.html",
    minecraft: "v3-game-minecraft.html",
    vrchat: "v3-game-vrchat.html",
    apex: "v3-game-apex.html",

    xbox: "v3-platform-xbox.html",
    xboxLegacy: "V3gaming-xbox.html",
    playstation: "v3-platform-playstation.html",
    playstationLegacy: "V3gaming-playstation.html",
    nintendo: "v3-platform-nintendo.html",
    nintendoLegacy: "V3gaming-nintendo.html",
    pcGaming: "V3gaming-pc.html",
    vrGaming: "V3gaming-vr.html",

    discord: "v3-social-discord.html",
    snapchat: "v3-social-snapchat.html",
    instagram: "v3-social-instagram.html",
    tiktok: "v3-social-tiktok.html",
    youtube: "v3-social-youtube.html",
    telegram: "v3-social-telegram.html",
    whatsapp: "v3-social-whatsapp.html",
    yubo: "v3-social-yubo.html",
    videoChat: "v3-videochat.html",

    robloxScenarios: "v3-roblox-safety-scenarios.html",
    snapchatScenarios: "v3-snapchat-pressure-scenarios.html",
    sextortionScenarios: "v3-sextortion-scenarios.html",
    tiktokLiveScenarios: "v3-tiktok-live-scenarios.html",
    instagramDmScenarios: "v3-instagram-dm-scenarios.html",
    groupChatScenarios: "v3-group-chat-pressure-scenarios.html",
    youtubeCommentScenarios: "v3-youtube-comments-scenarios.html",
    gamingVoiceScenarios: "v3-gaming-voice-chat-scenarios.html",

    executiveFunctioning: "v3-executive-functioning.html",
    executiveOnlineSafety: "v3-executive-functioning-online-safety.html",
    executiveSystem: "v3-executive-functioning-system.html",
    executiveApplicationLayer: "v3-executive-functioning-application-layer.html",
    onlineScenarios: "v3-online-scenarios-training.html",
    neurodivergentExecutive: "v3-neurodivergent-executive-functioning.html",
    executiveAgeSystem: "v3-executive-functioning-age-system.html",
    emotionalRegulation: "v3-emotional-regulation-online-safety.html",
    pauseBeforeReacting: "v3-pause-before-reacting.html",
    flexibleThinking: "v3-flexible-thinking-online.html",
    criticalThinking: "v3-critical-thinking-online-safety.html",
    decisionMaking: "v3-online-decision-making.html",
    impulseControl: "v3-impulse-control-online.html",
    adhdExecutive: "v3-adhd-executive-functioning-online-safety.html",
    asdExecutive: "v3-asd-executive-functioning-online-safety.html",
    oddExecutive: "v3-odd-executive-functioning-online-safety.html",
    pdaExecutive: "v3-pda-executive-functioning-online-safety.html",
    ocdExecutive: "v3-ocd-executive-functioning-online-safety.html",
    fasdExecutive: "v3-fasd-executive-functioning-online-safety.html",
    frustrationIntolerance: "v3-frustration-intolerance-online-safety.html",

    aiNudifyDeepfakeRisks: "v3-ai-nudify-deepfake-risks.html",
    takeItDownImageRemoval: "v3-take-it-down-and-image-removal.html",
    firstDayPhotoSafety: "v3-first-day-photo-safety.html",

    awareness: "v3-awareness.html",
    algorithm: "v3-algorithm-awareness.html",
    screenBrain: "v3-how-screens-affect-your-childs-brain.html",
    brainrot: "v3-brainrot.html",
    scrolling: "v3-why-kids-cant-stop-scrolling.html",
    attentionControl: "v3-how-attention-is-used-to-control-behaviour.html",
    manipulativeGroups: "v3-how-manipulative-groups-recruit-children-online.html",
    targetedHarassment: "v3-targeted-harassment-and-false-reports.html",
    definitions: "v3-definitions.html",
    investigations: "v3-real-investigations.html",

    downloads: "v3-all-downloads.html",
    downloadsLegacy: "v3-downloads.html",
    support: "v3-support.html",
    share: "v3-share.html",
    community: "v3-community.html",
    collaboration: "v3-collaboration.html",
    founder: "v3-founder.html",
    whyPoshExists: "v3-why-posh-exists.html",
    warning: "v3-warning.html",
    disclaimerLegacy: "warning-disclaimer.html",

    cancelSubscriptions: "v3-cancel-subscriptions.html",
    petitionDigitalGifting: "v3-petition-parent-approval-digital-gifting.html",
    petitionDefaults: "v3-petition-safer-defaults-child-accounts.html",

    shareText:
      "POSH helps parents and safe adults build safer digital families with safety checks, topic pathways, device guidance, house rules, platform awareness, warning signs, and calm action pathways.",

    searchPlaceholder: "Search topics, apps, games, books, PDFs, or urgent help...",
    maxSearchResults: 10,
    maxTocItems: 8,
    maxRelatedItems: 6
  };

  POSH.confidence = "v3-confidence-is-a-safety-skill.html";

  // Map each book pathway to its live Amazon AU Buy Now page
  const TOPIC_PATHWAY_AMAZON_MAP = {
    [POSH.parentSystem]: POSH_AMAZON_CATALOGUE.book1_parentSystem.url,
    [POSH.platformRisks]: POSH_AMAZON_CATALOGUE.book2_platformRisks.url,
    [POSH.redFlags]: POSH_AMAZON_CATALOGUE.book3_redFlags.url,
    [POSH.emotionalRegulation]: POSH_AMAZON_CATALOGUE.book4_emotionalRegulation.url,
    [POSH.frustrationIntolerance]: POSH_AMAZON_CATALOGUE.book5_frustrationTolerance.url,
    [POSH.criticalThinking]: POSH_AMAZON_CATALOGUE.book6_criticalThinking.url,
    [POSH.manipulated]: POSH_AMAZON_CATALOGUE.book7_manipulated.url,
    [POSH.executiveOnlineSafety]: POSH_AMAZON_CATALOGUE.book8_executiveSafety.url,
    [POSH.confidence]: POSH_AMAZON_CATALOGUE.book9_confidence.url,
    [POSH.houseRules]: POSH_AMAZON_CATALOGUE.book10_houseRules.url
  };

  // Legacy page redirects ensuring zero broken internal links
  const LEGACY_PAGE_REDIRECTS = {
    "v3-smarter-children-safer-children.html": POSH.smarterChildrenFree,
    "v3-raising-digitally-resilient-kids.html": POSH.parentSystem,
    "v3-the-digital-playground.html": POSH.platformRisks,
    "v3-new-risks-families-face.html": POSH.redFlags,
    "v3-emotional-regulation-online.html": POSH.emotionalRegulation,
    "v3-frustration-tolerance-digital-world.html": POSH.frustrationIntolerance,
    "v3-thinking-before-clicking.html": POSH.criticalThinking,
    "v3-spotting-manipulation-misinformation.html": POSH.manipulated,
    "v3-healthy-boundaries-online-offline.html": POSH.houseRules,
    "v3-support-monthly.html": POSH.support,
    "v3-support-posh.html": POSH.support,
    "warning-disclaimer.html": POSH.warning,
    "v3-what-now.html": POSH.whatNow,
    "V3gaming-xbox.html": POSH.xbox,
    "V3gaming-playstation.html": POSH.playstation,
    "V3gaming-nintendo.html": POSH.nintendo,
    "v3-signs-my-child-is-being-groomed-online.html": POSH.groomingSigns,
    "v3-10-signs.html": POSH.tenSigns,
    "v3-sextortion.html": POSH.sextortion
  };

  /* ==========================================================================
     3. NAVIGATION GROUPS & TOPIC HIERARCHY
     ========================================================================== */

  const NAV_GROUPS = [
    {
      title: "Start & Safety Foundation",
      links: [
        { href: POSH.home, label: "Home", type: "Home", keywords: "home index posh parents online safety hub australia child safety" },
        { href: POSH.start, label: "Start Here", type: "Start", keywords: "start first steps where do i begin parent help safety" },
        { href: POSH.safetyLanes, label: "Choose Safety Path", type: "Start", keywords: "choose lane pathway situation urgent warning signs devices platforms" },
        { href: POSH.parentSystem, label: "POSH Parent System", type: "System", keywords: "parent system family plan rules visibility monitoring conversations digital resilience foundation book 1" },
        { href: POSH.entry, label: "Entry System", type: "System", keywords: "entry system guided pathway choose direction" },
        { href: POSH.whatNow, label: "What To Do Now", type: "Action", keywords: "what to do now immediate next steps concern act early" },
        { href: POSH.response, label: "POSH Response System", type: "Action", keywords: "response system what parents do next concern structure" },
        { href: POSH.parentQuestions, label: "Parent Questions", type: "Questions", keywords: "questions to ask child parent prompts conversation" },
        { href: POSH.quiz, label: "Safety Score Quiz", type: "Quiz", keywords: "safety score audit checklist quiz risk score check" }
      ]
    },
    {
      title: "Topic Pathways & Books (Amazon AU)",
      links: [
        { href: POSH.smarterChildrenFree, label: "Free Starter Guide", type: "Free Guide", keywords: "smarter children safer children free guide gateway download posh starter" },
        { href: POSH.topicHub, label: "Digital Resilience Topic Pathways", type: "Topic Hub", keywords: "digital resilience topic pathways series hub book topics parent guidance amazon buy now" },
        { href: POSH.topicFinder, label: "Which Book Should I Start With?", type: "Topic Finder", keywords: "which topic start guide parent teacher coach grandparent pathway book recommendation amazon" },
        { href: POSH.parentSystem, label: "Book 1: Raising Digitally Resilient Kids", type: "Book Pathway", keywords: "book 1 raising digitally resilient kids foundation digital resilience parent system amazon B0HC2G6KW5" },
        { href: POSH.platformRisks, label: "Book 2: The Digital Playground", type: "Book Pathway", keywords: "book 2 digital playground games chats apps algorithms livestreams dms amazon B0HC6LQDV9" },
        { href: POSH.redFlags, label: "Book 3: New Risks Families Face", type: "Book Pathway", keywords: "book 3 new risks family AI hidden access grooming pressure secrecy red flags amazon B0HC21X6YT" },
        { href: POSH.emotionalRegulation, label: "Book 4: Emotional Regulation Online", type: "Book Pathway", keywords: "book 4 emotional regulation screen stress shame big feelings gaming rage amazon B0HC48DF2Q" },
        { href: POSH.frustrationIntolerance, label: "Book 5: Frustration Tolerance", type: "Book Pathway", keywords: "book 5 frustration tolerance grit patience losing hearing no screen transitions amazon B0HBN1ZGXF" },
        { href: POSH.criticalThinking, label: "Book 6: Thinking Before Clicking", type: "Book Pathway", keywords: "book 6 thinking before clicking pause links downloads screenshots reply share post critical thinking amazon B0H99MD152" },
        { href: POSH.manipulated, label: "Book 7: Manipulation & Misinformation", type: "Book Pathway", keywords: "book 7 spotting manipulation misinformation scams fake content rumours AI influence amazon B0H6QQJ7B4" },
        { href: POSH.executiveOnlineSafety, label: "Book 8: Executive Functioning", type: "Book Pathway", keywords: "book 8 executive functioning planning focus memory organisation transitions follow through amazon B0H6LWBHXB" },
        { href: POSH.confidence, label: "Book 9: Confidence is a Safety Skill", type: "Book Pathway", keywords: "book 9 confidence safety skill self trust speaking up worth courage people pleasing amazon B0H42PPR5V" },
        { href: POSH.houseRules, label: "Book 10: Healthy Boundaries", type: "Book Pathway", keywords: "book 10 healthy boundaries online offline privacy respect consent no relationships house rules amazon B0H6L82YW4" }
      ]
    },
    {
      title: "Safe Adults & Whole-Family Training",
      links: [
        { href: POSH.trainingEveryone, label: "Training For Every Adult", type: "Training Hub", keywords: "online safety training everyone safe adult parents grandparents carers teachers coaches family network" },
        { href: POSH.grandparents, label: "Grandparents Guide", type: "Grandparents", keywords: "grandparents older generation oldies grandchildren technology apps games online safety" },
        { href: POSH.parentsTraining, label: "Parents & Step-Parents", type: "Training", keywords: "parents step parents training family safety plan home rules devices" },
        { href: POSH.carersTraining, label: "Carers & Guardians", type: "Training", keywords: "carers guardians foster kinship trauma trust safety online" },
        { href: POSH.teachersTraining, label: "Teachers & School Staff", type: "Training", keywords: "teachers school staff classroom disclosure behaviour changes safeguarding" },
        { href: POSH.coachesTraining, label: "Coaches & Activity Leaders", type: "Training", keywords: "coaches sport clubs activity leaders youth groups safe adult" },
        { href: POSH.familyNetworkGuide, label: "Aunties, Uncles & Family Friends", type: "Guide", keywords: "aunties uncles family friends trusted adults family network child safety" },
        { href: POSH.olderSiblings, label: "Older Siblings Guide", type: "Guide", keywords: "older siblings brothers sisters teens unsafe secrets tell safe adult" },
        { href: POSH.youthWorkers, label: "Youth Workers & Mentors", type: "Training", keywords: "youth workers mentors young people disclosure online pressure support" },
        { href: POSH.babysitters, label: "Babysitters & Sleepover Adults", type: "Guide", keywords: "babysitters sleepovers supervision devices bedtime online safety" },
        { href: POSH.safeAdultWarningSigns, label: "Safe Adult Warning Signs", type: "Warning Signs", keywords: "safe adult warning signs secrecy deleted messages mood changes hidden accounts" },
        { href: POSH.safeAdultResponse, label: "Safe Adult Response System", type: "Response", keywords: "safe adult response system stay calm listen evidence involve right adult" },
        { href: POSH.whatSafeAdultsSay, label: "What Safe Adults Should Say", type: "Scripts", keywords: "what safe adults should say calm words child opens up online safety" },
        { href: POSH.safeAdultNetworkCard, label: "Safe Adult Network Card", type: "Safe Adult", keywords: "safe adult network card village trusted adults whole family" },
        { href: POSH.freeChildSafetyChecksAccountability, label: "Free Checks & Adult Accountability", type: "POSH Position", keywords: "free child safety checks working with children check safe adult accountability agreement safeguarding boundaries" },
        { href: POSH.safeAdultAccountabilityStandard, label: "Safe Adult Accountability Standard", type: "POSH Standard", keywords: "posh safe adult accountability standard agreement qr code id verification child safety checks" }
      ]
    },
    {
      title: "Urgent Help & Official Reporting",
      links: [
        { href: POSH.urgentHelp, label: "My Child May Be in Danger", type: "Urgent Help", keywords: "danger emergency urgent child online help immediate" },
        { href: POSH.first24, label: "First 24 Hours: Online Incident", type: "Urgent Help", keywords: "first 24 hours incident happened what to do now evidence" },
        { href: POSH.first24Legacy, label: "First 24 Hours Parent Guide", type: "Urgent Help", keywords: "first 24 hours parent guide calm response protect preserve evidence" },
        { href: POSH.blackmail, label: "Blackmail or Threats", type: "Urgent Help", keywords: "blackmail threats sextortion pressure pay delete evidence" },
        { href: POSH.photos, label: "Child Sent Photos Online", type: "Urgent Help", keywords: "child sent photos images nudes what to do evidence" },
        { href: POSH.sextortion, label: "What is Sextortion?", type: "Definition", keywords: "sextortion blackmail threats images sexual extortion" },
        { href: POSH.sextortionLegacy, label: "Sextortion Response System", type: "Urgent Help", keywords: "sextortion response blackmail threats images evidence report" },
        { href: POSH.evidence, label: "Save Evidence Wisely", type: "Reporting", keywords: "evidence reporting screenshots messages links do not delete" },
        { href: POSH.evidenceMistakes, label: "What Not to Do With Evidence", type: "Evidence", keywords: "what not to do with evidence do not forward delete post screenshots child safety" },
        { href: POSH.reportWithoutWorse, label: "Report Without Making it Worse", type: "Reporting", keywords: "how to report safely without making worse evidence escalation child safety" },
        { href: POSH.reporting, label: "Report & Get Help Directory", type: "Reporting", keywords: "report get help police esafety accce sextortion urgent help" },
        { href: POSH.reportingAustralia, label: "Reporting in Australia", type: "Reporting", keywords: "australia report esafety police accce child safety" },
        { href: POSH.reportingUSA, label: "Reporting in the USA", type: "Reporting", keywords: "usa reporting ncmec cybertipline ic3 police child safety" },
        { href: POSH.reportingUK, label: "Reporting in the UK", type: "Reporting", keywords: "uk reporting ceop iwf childline police child safety" },
        { href: POSH.reportingEurope, label: "Reporting in Europe", type: "Reporting", keywords: "europe reporting inhope national hotline police child safety" },
        { href: POSH.officialReportingAustralia, label: "Official Australian Pathways", type: "Reporting", keywords: "official reporting pathways australia accce esafety police 000 child safety" },
        { href: POSH.takeItDownImageRemoval, label: "Take It Down Image Removal", type: "Image Safety", keywords: "take it down image removal ncmec esafety intimate image abuse child safety" },
        { href: POSH.firstDayPhotoSafety, label: "First-Day School Photo Safety", type: "Image Safety", keywords: "first day photo safety school photos uniforms location privacy child images" },
        { href: POSH.aiNudifyDeepfakeRisks, label: "AI Deepfake & Nudify Risks", type: "AI Safety", keywords: "ai nudify deepfake image abuse fake nude children online safety" },
        { href: POSH.sadisticOnlineExploitation, label: "Sadistic Online Exploitation", type: "Exploitation", keywords: "sadistic online exploitation coercion humiliation blackmail threats grooming" }
      ]
    },
    {
      title: "Warning Signs & Grooming Awareness",
      links: [
        { href: POSH.redFlags, label: "Red Flags & Warning Signs", type: "Warning Signs", keywords: "red flags warning signs grooming behaviour secrecy concern" },
        { href: POSH.tenSigns, label: "10 Signs Your Child is Targeted", type: "Warning Signs", keywords: "10 signs targeted online grooming child warning signs" },
        { href: POSH.grooming, label: "Grooming Signs & What to Do", type: "Grooming", keywords: "grooming signs what to do parent action" },
        { href: POSH.groomingSigns, label: "Grooming Behaviour Signs", type: "Warning Signs", keywords: "signs child being groomed online secrecy privacy pressure" },
        { href: POSH.predatorWarning, label: "Online Predator Warning Signs", type: "Warning Signs", keywords: "online predator warning signs grooming manipulation tactics" },
        { href: POSH.childHidingPhone, label: "Child Hiding Their Phone", type: "Warning Signs", keywords: "hiding phone deleted messages secrecy panic phone" },
        { href: POSH.manipulated, label: "Online Manipulation Tactics", type: "Warning Signs", keywords: "child manipulated online emotional pressure control secrecy misinformation" },
        { href: POSH.whyKidsDontTell, label: "Why Kids Don’t Tell Parents", type: "Parent Insight", keywords: "why kids do not tell shame fear punishment embarrassment" },
        { href: POSH.stranger, label: "Talking to Strangers Online", type: "Warning Signs", keywords: "online stranger chat friend contact unknown adult" },
        { href: POSH.offPlatform, label: "Off-Platform Movement Warning", type: "Warning Signs", keywords: "move to another app discord snapchat private chat off platform" },
        { href: POSH.playbook, label: "The Predator Playbook", type: "Playbook", keywords: "playbook grooming escalation pattern trust private secrecy" },
        { href: POSH.stepGrooming, label: "How Grooming Builds Step-by-Step", type: "Playbook", keywords: "grooming step by step access attention trust secrecy pressure" },
        { href: POSH.predators, label: "Predator Manipulation Tactics", type: "Predators", keywords: "predator tactics manipulation control grooming isolate secrets" }
      ]
    },
    {
      title: "Platforms, Socials & Applications",
      links: [
        { href: POSH.platformRisks, label: "Platform Risks Overview", type: "Hub", keywords: "platform risk overview apps games contact secrecy pressure digital playground book 2" },
        { href: POSH.platforms, label: "All Platforms Directory", type: "Directory", keywords: "all platforms apps games devices socials directory" },
        { href: POSH.allApplications, label: "All Applications Directory", type: "Directory", keywords: "all applications apps directory social chat" },
        { href: POSH.socials, label: "Social Media & Chat Apps", type: "Socials", keywords: "social media apps chat private messages" },
        { href: POSH.discord, label: "Discord Safety Guide", type: "App", keywords: "discord dms server voice chat grooming" },
        { href: POSH.snapchat, label: "Snapchat Safety Guide", type: "App", keywords: "snapchat disappearing messages streaks snap map" },
        { href: POSH.instagram, label: "Instagram Safety Guide", type: "App", keywords: "instagram dm reels followers private messages" },
        { href: POSH.tiktok, label: "TikTok Safety Guide", type: "App", keywords: "tiktok algorithm live messages fyp trends" },
        { href: POSH.youtube, label: "YouTube Safety Guide", type: "App", keywords: "youtube comments shorts live creators algorithm" },
        { href: POSH.telegram, label: "Telegram Safety Guide", type: "App", keywords: "telegram private groups encrypted chat channels" },
        { href: POSH.whatsapp, label: "WhatsApp Safety Guide", type: "App", keywords: "whatsapp private messages groups encrypted chat" },
        { href: POSH.yubo, label: "Yubo Safety Guide", type: "App", keywords: "yubo live social strangers teen app" },
        { href: POSH.dangerousApps, label: "Top Dangerous Apps for Kids", type: "Guide", keywords: "dangerous apps risky apps private contact secrecy" },
        { href: POSH.safeAppsGames, label: "Safer Apps & Games Choices", type: "Guide", keywords: "safe apps games age appropriate family choices" }
      ]
    },
    {
      title: "Gaming & Device Management",
      links: [
        { href: POSH.gaming, label: "Gaming Safety Overview", type: "Gaming", keywords: "gaming safety online game chat party voice strangers" },
        { href: POSH.allGames, label: "All Games Directory", type: "Directory", keywords: "all games directory gaming pages" },
        { href: POSH.gameRisksByAge, label: "Game Risks by Age", type: "Guide", keywords: "game risks age age appropriate" },
        { href: POSH.roblox, label: "Roblox Safety Guide", type: "Game", keywords: "roblox robux private chat gifting groups voice" },
        { href: POSH.robuxScam, label: "Free Robux Scam Safety", type: "Game", keywords: "free robux scam safety grooming gifting" },
        { href: POSH.inGameCurrency, label: "In-Game Currency Grooming Risk", type: "Game", keywords: "in game currency grooming risk gifting robux skins" },
        { href: POSH.fortnite, label: "Fortnite Safety Guide", type: "Game", keywords: "fortnite party chat squads epic games" },
        { href: POSH.minecraft, label: "Minecraft Safety Guide", type: "Game", keywords: "minecraft servers realms multiplayer mods" },
        { href: POSH.vrchat, label: "VRChat Safety Guide", type: "Game", keywords: "vrchat virtual reality avatars adults voice" },
        { href: POSH.apex, label: "Apex Legends Safety Guide", type: "Game", keywords: "apex legends gaming voice chat squads" },
        { href: POSH.devices, label: "Device Safety Overview", type: "Devices", keywords: "device safety phones tablets consoles passcodes permissions" },
        { href: POSH.deviceControls, label: "Device Screen Controls", type: "Devices", keywords: "device controls screen time restrictions settings" },
        { href: POSH.parentalControls, label: "Parental Controls Directory", type: "Devices", keywords: "parental controls device limits account restrictions" },
        { href: POSH.bestParentalControlApps, label: "Best Parental Control Apps", type: "Guide", keywords: "parental control apps monitor filters screen time" },
        { href: POSH.monitorTrust, label: "Monitor Without Breaking Trust", type: "Guide", keywords: "monitor without breaking trust visibility devices child talks" },
        { href: POSH.checkDeviceCalmly, label: "How to Check a Device Calmly", type: "Guide", keywords: "check device without panic screenshots messages apps" },
        { href: POSH.xbox, label: "Xbox Console Safety", type: "Gaming Device", keywords: "xbox console party chat messages microsoft" },
        { href: POSH.playstation, label: "PlayStation Console Safety", type: "Gaming Device", keywords: "playstation psn party chat sony console" },
        { href: POSH.nintendo, label: "Nintendo Switch Safety", type: "Gaming Device", keywords: "nintendo switch online child safety" }
      ]
    },
    {
      title: "Parent Tools, Scripts & Executive Skills",
      links: [
        { href: POSH.houseRules, label: "Healthy House Rules", type: "Rules", keywords: "house rules boundaries devices bedrooms passcodes healthy boundaries online offline book 10" },
        { href: POSH.familyAgreement, label: "Family Digital Agreement Builder", type: "Interactive Tool", keywords: "family agreement digital contract house rules screen limits boundaries printable parent tool interactive" },
        { href: POSH.parentScripts, label: "Parent Conversation Scripts", type: "Scripts", keywords: "parent scripts talk to kids conversations online safety" },
        { href: POSH.talkOnlineSafety, label: "How to Talk About Safety", type: "Scripts", keywords: "how to talk to your child online safety calm conversation" },
        { href: POSH.trustProtection, label: "Trust vs. Protection Insight", type: "Parent Insight", keywords: "not about not trusting child trust protection safety" },
        { href: POSH.onlineScenarios, label: "Interactive Scenario Training", type: "Training", keywords: "online scenarios training practise pressure response" },
        { href: POSH.robloxScenarios, label: "Roblox Safety Scenarios", type: "Training", keywords: "roblox safety scenarios robux chat pressure" },
        { href: POSH.snapchatScenarios, label: "Snapchat Pressure Scenarios", type: "Training", keywords: "snapchat pressure scenarios disappearing messages" },
        { href: POSH.sextortionScenarios, label: "Sextortion Scenario Response", type: "Training", keywords: "sextortion scenarios blackmail photos pressure" },
        { href: POSH.groupChatScenarios, label: "Group Chat Pressure Scenarios", type: "Training", keywords: "group chat pressure bullying secrecy screenshots" },
        { href: POSH.executiveOnlineSafety, label: "Executive Functioning & Safety", type: "Thinking Skills", keywords: "executive functioning online safety child thinking skills book 8" },
        { href: POSH.pauseBeforeReacting, label: "Pause Before Reacting Skill", type: "Thinking Skills", keywords: "pause before reacting impulse control" },
        { href: POSH.impulseControl, label: "Impulse Control & Online Choices", type: "Thinking Skills", keywords: "impulse control online decisions child safety" },
        { href: POSH.emotionalRegulation, label: "Emotional Regulation Strategies", type: "Thinking Skills", keywords: "emotional regulation online safety pressure book 4" },
        { href: POSH.decisionMaking, label: "Online Decision-Making Skills", type: "Thinking Skills", keywords: "online decision making safety choices" },
        { href: POSH.criticalThinking, label: "Critical Thinking Before Clicking", type: "Thinking Skills", keywords: "critical thinking online safety claims pressure thinking before clicking book 6" }
      ]
    },
    {
      title: "Awareness, Downloads & About POSH",
      links: [
        { href: POSH.awareness, label: "Digital Awareness Hub", type: "Awareness", keywords: "awareness education parents grooming algorithms safety" },
        { href: POSH.algorithm, label: "Algorithm Manipulation Risks", type: "Awareness", keywords: "algorithm risks feed recommendations endless scroll influence" },
        { href: POSH.screenBrain, label: "Screens & Your Child's Brain", type: "Awareness", keywords: "screens child brain attention sleep behaviour" },
        { href: POSH.brainrot, label: "Understanding Brainrot Content", type: "Awareness", keywords: "brainrot content endless scrolling low quality" },
        { href: POSH.definitions, label: "Online Safety Terminology", type: "Awareness", keywords: "definitions terms grooming sextortion online safety" },
        { href: POSH.investigations, label: "Real Investigations & Insights", type: "Investigations", keywords: "real investigations interviews evidence predator exposure" },
        { href: POSH.downloads, label: "All PDF Framework Downloads", type: "Downloads", keywords: "pdf downloads guides framework playbook scripts printables" },
        { href: POSH.share, label: "Share POSH With Families", type: "Support", keywords: "share posh awareness help families" },
        { href: POSH.support, label: "Support the POSH Mission", type: "Support", keywords: "support posh donate help keep free mission" },
        { href: POSH.community, label: "Community & Parent Movement", type: "Support", keywords: "community parents movement posh" },
        { href: POSH.founder, label: "About Founder Graeme Ingle", type: "POSH", keywords: "founder graeme ingle jinglez posh story mission australia" },
        { href: POSH.whyPoshExists, label: "Why POSH Exists", type: "POSH", keywords: "why posh exists mission awareness action protection" },
        { href: POSH.warning, label: "Warning & Legal Disclaimer", type: "Info", keywords: "warning disclaimer legal medical education guidance information" }
      ]
    }
  ];

  /* ==========================================================================
     4. CORE DOM, STRING & UTILITY FUNCTIONS
     ========================================================================== */

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
    const clean = String(path).split("#")[0].split("?")[0];
    const file = clean.substring(clean.lastIndexOf("/") + 1);
    return file || POSH.home;
  }

  function getCurrentPath() {
    return normalisePath(window.location.pathname);
  }

  function currentLivePath() {
    return LEGACY_PAGE_REDIRECTS[getCurrentPath()] || getCurrentPath();
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
      .replace(/&/g, " and ")
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

  function throttle(fn, limit) {
    let waiting = false;
    return function (...args) {
      if (waiting) return;
      waiting = true;
      window.requestAnimationFrame(() => {
        fn.apply(this, args);
        setTimeout(() => {
          waiting = false;
        }, limit);
      });
    };
  }

  function dedupeLinks(links) {
    const seen = new Set();
    return links.filter(link => {
      const key = normalisePath(link.href);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  const ALL_LINKS = dedupeLinks(NAV_GROUPS.flatMap(group => group.links));

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
      // Analytics fail silently
    }
  }

  /* ==========================================================================
     5. AMAZON DIRECT-BUY LINK & BOOK BUTTON UPGRADES
     ========================================================================== */

  function enhanceAmazonBuyLinks(root = document) {
    qsa("a[href], button[data-book-target]", root).forEach(el => {
      const href = el.getAttribute("href") || el.getAttribute("data-book-target") || "";
      const text = safeText(el.textContent).toLowerCase();

      if (href.includes("amazon.com.au")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        el.classList.add("posh-amazon-buy-link");
        return;
      }

      const isBookBuyTrigger =
        text.includes("buy book") ||
        text.includes("buy now") ||
        text.includes("order paperback") ||
        text.includes("get on amazon") ||
        el.classList.contains("book-buy-btn") ||
        el.hasAttribute("data-amazon-asin");

      if (isBookBuyTrigger) {
        const asin = el.getAttribute("data-amazon-asin");
        let amazonUrl = "";

        if (asin && /^[A-Z0-9]{10}$/i.test(asin)) {
          amazonUrl = `https://www.amazon.com.au/dp/${asin.toUpperCase()}`;
        } else if (TOPIC_PATHWAY_AMAZON_MAP[currentLivePath()]) {
          amazonUrl = TOPIC_PATHWAY_AMAZON_MAP[currentLivePath()];
        } else {
          amazonUrl = POSH_AMAZON_CATALOGUE.book1_parentSystem.url;
        }

        if (el.tagName === "A") {
          el.setAttribute("href", amazonUrl);
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener noreferrer");
          el.classList.add("posh-amazon-buy-link");
        } else {
          el.addEventListener("click", () => {
            maybeTrack("amazon_book_buy_click", { asin: asin || "default" });
            window.open(amazonUrl, "_blank", "noopener,noreferrer");
          });
        }
      }
    });
  }

  function fixKnownBrokenInternalLinks(root = document) {
    qsa("a[href]", root).forEach(link => {
      const raw = link.getAttribute("href");
      if (!raw || /^https?:\/\//i.test(raw) || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;

      const file = normalisePath(raw);
      if (!LEGACY_PAGE_REDIRECTS[file]) return;

      const hash = raw.includes("#") ? "#" + raw.split("#").slice(1).join("#") : "";
      link.setAttribute("href", LEGACY_PAGE_REDIRECTS[file] + hash);
      link.dataset.fixedOldHref = raw;
    });
  }

  function findLink(href) {
    const target = LEGACY_PAGE_REDIRECTS[normalisePath(href)] || normalisePath(href);
    return ALL_LINKS.find(link => normalisePath(link.href) === target) || null;
  }

  function getPageTitle() {
    const titleEl = qs("h1.page-title") || qs(".posh-page-title") || qs("h1");
    if (titleEl && safeText(titleEl.textContent)) return safeText(titleEl.textContent);
    return safeText(document.title.replace(/\s*[•|-]\s*POSH.*$/i, ""));
  }

  function getPageIntro() {
    const el =
      qs(".posh-hero-lead") ||
      qs(".section-lead") ||
      qs(".tagline") ||
      qs(".intro") ||
      qs(".lead") ||
      qs(".page-intro") ||
      qs(".card p");
    return el ? safeText(el.textContent).slice(0, 240) : "";
  }

  /* ==========================================================================
     6. HERO BANNER INJECTION & GRACEFUL FALLBACKS
     ========================================================================== */

  function loadImageFromCandidates(img, candidates, onSuccess, onFail) {
    if (!img || !Array.isArray(candidates) || !candidates.length) {
      if (typeof onFail === "function") onFail();
      return;
    }

    let index = 0;
    let loaded = false;

    function tryNext() {
      if (loaded) return;
      if (index >= candidates.length) {
        if (typeof onFail === "function") onFail();
        return;
      }
      img.src = candidates[index++];
    }

    img.addEventListener("load", () => {
      loaded = true;
      if (typeof onSuccess === "function") onSuccess(img);
    });
    img.addEventListener("error", tryNext);
    tryNext();
  }

  function existingHeroAlreadyPresent() {
    return !!(
      qs(".posh-global-hero-wrap") ||
      qs(".posh-global-hero-link") ||
      qs(".posh-global-hero-img") ||
      qs("[data-posh-main-hero]")
    );
  }

  function injectGlobalHeroBanner() {
    if (existingHeroAlreadyPresent()) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const heroWrap = document.createElement("div");
    heroWrap.className = "posh-global-hero-wrap";
    heroWrap.setAttribute("data-posh-main-hero", "true");
    heroWrap.innerHTML = `
      <a href="${POSH.home}" class="posh-global-hero-link" aria-label="${escapeHtml(POSH.heroAriaLabel)}" data-track="global_hero_home">
        <span class="posh-global-hero-media is-image-pending">
          <img alt="${escapeHtml(POSH.heroAlt)}" class="posh-global-hero-img" />
        </span>
      </a>
    `;
    wrap.prepend(heroWrap);

    const heroImg = qs(".posh-global-hero-img", heroWrap);
    const heroMedia = qs(".posh-global-hero-media", heroWrap);

    loadImageFromCandidates(
      heroImg,
      POSH.heroCandidates,
      () => {
        heroImg.classList.add("is-loaded");
        if (heroMedia) heroMedia.classList.remove("is-image-pending");
      },
      () => {
        heroWrap.innerHTML = `
          <a href="${POSH.home}" class="posh-global-hero-link posh-global-hero-fallback" aria-label="${escapeHtml(POSH.heroAriaLabel)}" data-track="global_hero_home">
            <span class="posh-global-hero-fallback-inner">
              <span class="posh-global-hero-fallback-kicker">Parents Online Safety Hub</span>
              <span class="posh-global-hero-fallback-title">POSH</span>
              <span class="posh-global-hero-fallback-sub">Return to Home</span>
            </span>
          </a>
        `;
      }
    );
  }

  /* ==========================================================================
     7. ACCESSIBLE NAVIGATION ACCORDION & INSTANT SEARCH ENGINE
     ========================================================================== */

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
        <nav>${group.links.map(buildNavLink).join("")}</nav>
      </details>
    `).join("");

    return `
      <div class="nav-shell">
        <div class="nav-search-wrap">
          <input
            id="poshSearch"
            class="nav-search-input"
            type="text"
            placeholder="${escapeHtml(POSH.searchPlaceholder)}"
            autocomplete="off"
            aria-label="Search POSH safety topics, books, and help guides"
          />
          <button type="button" id="poshSearchClear" class="nav-search-clear" aria-label="Clear search query">×</button>
          <div id="poshSearchResults" class="nav-search-results" role="listbox" hidden></div>
        </div>

        <div class="nav-primary-cta-row">
          <a href="${POSH.safetyLanes}" class="nav-primary-cta" data-track="nav_safety_lanes">Choose Safety Path</a>
          <a href="${POSH.quiz}" class="nav-primary-cta secondary" data-track="nav_quiz">Safety Score Quiz</a>
          <a href="${POSH.urgentHelp}" class="nav-primary-cta tertiary" data-track="nav_urgent">Urgent Help</a>
        </div>

        <div class="nav-support-row">
          <a href="${POSH.smarterChildrenFree}" class="nav-support-link" data-track="nav_free_guide">Free Starter Guide</a>
          <a href="${POSH.topicHub}" class="nav-support-link" data-track="nav_topics">Book Series (Amazon)</a>
          <a href="${POSH.support}" class="nav-support-link" data-track="nav_support">Support POSH</a>
          <button type="button" class="nav-support-link nav-share-trigger" data-track="nav_share">Share POSH</button>
        </div>

        <div class="nav-accordion">${groupsHtml}</div>
      </div>
    `;
  }

  function setActiveNav(root) {
    const current = currentLivePath();
    qsa(".nav-group", root).forEach(group => {
      group.open = false;
      group.classList.remove("has-active-page");
    });

    qsa("a[href]", root).forEach(anchor => {
      const href = LEGACY_PAGE_REDIRECTS[normalisePath(anchor.getAttribute("href"))] || normalisePath(anchor.getAttribute("href"));
      anchor.classList.remove("active", "nav-active");
      anchor.removeAttribute("aria-current");

      if (href === current) {
        anchor.classList.add("active", "nav-active");
        anchor.setAttribute("aria-current", "page");
        const group = anchor.closest(".nav-group");
        if (group) group.classList.add("has-active-page");
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

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        groups.forEach(group => {
          group.open = false;
        });
      }
    });
  }

  function setupDesktopHoverAccordion(root) {
    const mq = window.matchMedia("(hover:hover) and (pointer:fine) and (min-width:701px)");
    const groups = qsa(".nav-group", root);
    if (!groups.length) return;

    let closeTimer = null;

    function closeOtherGroups(activeGroup) {
      groups.forEach(group => {
        if (group !== activeGroup) group.open = false;
      });
    }

    groups.forEach(group => {
      if (group.dataset.poshHoverReady === "true") return;
      group.dataset.poshHoverReady = "true";

      group.addEventListener("mouseenter", () => {
        if (!mq.matches) return;
        clearTimeout(closeTimer);
        group.open = true;
        closeOtherGroups(group);
      });

      group.addEventListener("mouseleave", () => {
        if (!mq.matches) return;
        closeTimer = setTimeout(() => {
          if (!group.matches(":focus-within")) group.open = false;
        }, 160);
      });

      group.addEventListener("focusin", () => {
        if (!mq.matches) return;
        clearTimeout(closeTimer);
        group.open = true;
        closeOtherGroups(group);
      });

      group.addEventListener("focusout", () => {
        if (!mq.matches) return;
        closeTimer = setTimeout(() => {
          if (!group.matches(":focus-within")) group.open = false;
        }, 160);
      });
    });
  }

  function setupNavTracking(root) {
    qsa("[data-track]", root).forEach(el => {
      el.addEventListener("click", () => {
        maybeTrack(el.getAttribute("data-track") || "nav_click");
      });
    });
  }

  const SEARCH_ALIASES = {
    help: ["start here", "report & get help directory", "urgent help", "what to do now"],
    urgent: ["my child may be in danger", "first 24 hours: online incident", "report & get help directory", "blackmail or threats"],
    danger: ["my child may be in danger", "urgent help", "report & get help directory"],
    emergency: ["my child may be in danger", "first 24 hours: online incident", "report & get help directory"],
    blackmail: ["blackmail or threats", "what is sextortion?", "save evidence wisely"],
    threats: ["blackmail or threats", "report & get help directory", "save evidence wisely"],
    photos: ["child sent photos online", "blackmail or threats", "save evidence wisely"],
    sextortion: ["what is sextortion?", "sextortion response system", "blackmail or threats", "sextortion scenario response"],
    grooming: ["grooming signs & what to do", "grooming behaviour signs", "the predator playbook", "red flags & warning signs", "10 signs your child is targeted"],
    predator: ["the predator playbook", "online predator warning signs", "predator manipulation tactics"],
    secret: ["red flags & warning signs", "child hiding their phone", "why kids don’t tell parents", "safe adult warning signs"],
    secrecy: ["red flags & warning signs", "child hiding their phone", "why kids don’t tell parents", "safe adult warning signs"],
    hiding: ["child hiding their phone", "red flags & warning signs", "why kids don’t tell parents"],
    robux: ["free robux scam safety", "roblox safety guide", "in-game currency grooming risk"],
    gifting: ["in-game currency grooming risk", "free robux scam safety"],
    device: ["device safety overview", "device screen controls", "best parental control apps", "how to check a device calmly"],
    phone: ["device safety overview", "child hiding their phone", "how to check a device calmly"],
    tablet: ["device safety overview", "device screen controls"],
    console: ["gaming safety overview", "xbox console safety", "playstation console safety", "nintendo switch safety"],
    discord: ["discord safety guide", "off-platform movement warning", "gaming safety overview"],
    snap: ["snapchat safety guide", "snapchat pressure scenarios"],
    tiktok: ["tiktok safety guide", "tiktok live"],
    instagram: ["instagram safety guide", "instagram dms"],
    youtube: ["youtube safety guide", "youtube comments"],
    algorithm: ["algorithm manipulation risks", "screens & your child's brain", "why kids can’t stop scrolling", "system override"],
    quiz: ["safety score quiz"],
    score: ["safety score quiz"],
    check: ["safety score quiz", "how to check a device calmly", "free child safety checks"],
    downloads: ["all pdf framework downloads", "free starter guide"],
    pdf: ["all pdf framework downloads", "free starter guide"],
    report: ["report & get help directory", "save evidence wisely", "reporting in australia"],
    questions: ["parent questions", "parent conversation scripts"],
    scripts: ["parent conversation scripts", "how to talk about safety", "what safe adults should say"],
    rules: ["healthy house rules", "posh parent system", "family digital agreement builder"],
    agreement: ["family digital agreement builder", "healthy house rules"],
    contract: ["family digital agreement builder", "healthy house rules"],
    disclaimer: ["warning & legal disclaimer"],
    warning: ["warning & legal disclaimer", "red flags & warning signs", "safe adult warning signs"],
    support: ["support the posh mission"],
    book: ["digital resilience topic pathways", "which book should i start with", "raising digitally resilient kids", "amazon buy now"],
    books: ["digital resilience topic pathways", "which book should i start with", "raising digitally resilient kids", "amazon buy now"],
    series: ["digital resilience topic pathways", "which book should i start with", "posh parent system"],
    ebook: ["free starter guide", "digital resilience topic pathways"],
    paperback: ["digital resilience topic pathways", "which book should i start with", "amazon buy now"],
    amazon: ["digital resilience topic pathways", "which book should i start with", "raising digitally resilient kids", "the digital playground"],
    "smarter children": ["free starter guide", "digital resilience topic pathways"],
    "safer children": ["free starter guide", "digital resilience topic pathways"],
    "digital resilience": ["posh parent system", "digital resilience topic pathways", "raising digitally resilient kids"],
    "raising digitally resilient kids": ["posh parent system", "free starter guide"],
    "digital playground": ["platform risks overview", "gaming safety overview", "the digital playground"],
    "new risks": ["red flags & warning signs", "grooming behaviour signs", "the predator playbook"],
    "emotional regulation": ["emotional regulation strategies", "parent conversation scripts"],
    "frustration tolerance": ["frustration tolerance", "pause before reacting skill"],
    "thinking before clicking": ["critical thinking before clicking", "online decision-making skills"],
    misinformation: ["online manipulation tactics", "critical thinking before clicking"],
    manipulation: ["online manipulation tactics", "red flags & warning signs", "grooming behaviour signs"],
    executive: ["executive functioning & safety", "pause before reacting skill", "impulse control & online choices"],
    confidence: ["confidence is a safety skill", "what safe adults should say"],
    boundaries: ["healthy house rules", "family digital agreement builder", "trust vs. protection insight"],
    "which book": ["which book should i start with", "digital resilience topic pathways"],
    "which topic": ["which book should i start with", "digital resilience topic pathways"],
    grandparent: ["grandparents guide", "training for every adult", "safe adult warning signs"],
    grandparents: ["grandparents guide", "training for every adult", "what safe adults should say"],
    safeadult: ["training for every adult", "safe adult warning signs", "safe adult response system"],
    "safe adult": ["training for every adult", "safe adult warning signs", "safe adult response system"],
    carer: ["carers & guardians", "safe adult response system"],
    teacher: ["teachers & school staff", "safe adult warning signs"],
    coach: ["coaches & activity leaders", "safe adult response system"],
    sibling: ["older siblings guide", "what safe adults should say"],
    babysitter: ["babysitters & sleepover adults", "safe adult response system"],
    accce: ["official australian pathways", "reporting in australia", "report & get help directory"],
    esafety: ["official australian pathways", "reporting in australia", "take it down image removal"],
    evidence: ["save evidence wisely", "what not to do with evidence", "report without making it worse"],
    screenshots: ["save evidence wisely", "what not to do with evidence", "report without making it worse"],
    deepfake: ["ai deepfake & nudify risks", "take it down image removal", "first-day school photo safety"],
    nudify: ["ai deepfake & nudify risks", "take it down image removal"],
    "take it down": ["take it down image removal", "first-day school photo safety"],
    sadistic: ["sadistic online exploitation", "blackmail or threats", "what is sextortion?", "report & get help directory"],
    wwcc: ["free checks & adult accountability", "training for every adult"],
    accountability: ["free checks & adult accountability", "safe adult network card", "safe adult response system"],
    "safe adult standard": ["safe adult accountability standard", "free checks & adult accountability", "safe adult network card"]
  };

  function expandQueryAliases(query) {
    const q = query.toLowerCase().trim();
    const results = new Set([q]);

    Object.entries(SEARCH_ALIASES).forEach(([key, aliases]) => {
      if (q.includes(key)) {
        aliases.forEach(alias => results.add(alias.toLowerCase()));
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

      if (label === q) score += 360;
      if (label.startsWith(q)) score += 230;
      if (label.includes(q)) score += 130;
      if (type.includes(q)) score += 70;
      if (keywords.includes(q)) score += 50;
      if (href.includes(q)) score += 40;

      tokens.forEach(token => {
        if (label === token) score += 120;
        if (label.startsWith(token)) score += 75;
        if (label.includes(token)) score += 36;
        if (type.includes(token)) score += 22;
        if (keywords.includes(token)) score += 15;
        if (href.includes(token)) score += 10;
      });

      if (tokens.length > 1 && tokens.every(token => haystack.includes(token))) {
        score += 90;
      }
    });

    if (normalisePath(link.href) === currentLivePath()) score -= 45;
    return score;
  }

  function buildSearchResult(link, query) {
    return `
      <a href="${link.href}" class="nav-search-result" role="option" data-query="${escapeHtml(query)}">
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

    let activeIndex = -1;

    function currentItems() {
      return qsa(".nav-search-result", results);
    }

    function updateActiveItem(items) {
      items.forEach((item, index) => {
        item.classList.toggle("is-active", index === activeIndex);
        if (index === activeIndex) item.setAttribute("aria-selected", "true");
        else item.removeAttribute("aria-selected");
      });
    }

    function hideResults() {
      results.hidden = true;
      results.innerHTML = "";
      activeIndex = -1;
      root.classList.remove("search-open");
    }

    function showResults(html) {
      results.innerHTML = html;
      results.hidden = false;
      activeIndex = -1;
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
        showResults(`<div class="nav-search-empty">No matching topics or books found for "<strong>${escapeHtml(query)}</strong>"</div>`);
        return;
      }

      showResults(matches.map(link => buildSearchResult(link, query)).join(""));
    }, 90);

    input.addEventListener("input", runSearch);

    input.addEventListener("focus", () => {
      if (safeText(input.value)) runSearch();
    });

    input.addEventListener("keydown", event => {
      const items = currentItems();

      if (event.key === "Escape") {
        hideResults();
        input.blur();
        return;
      }

      if (!items.length) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = activeIndex < items.length - 1 ? activeIndex + 1 : 0;
        updateActiveItem(items);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = activeIndex > 0 ? activeIndex - 1 : items.length - 1;
        updateActiveItem(items);
      }

      if (event.key === "Enter" && activeIndex >= 0 && items[activeIndex]) {
        event.preventDefault();
        items[activeIndex].click();
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
      if (!root.contains(event.target)) hideResults();
    });
  }

  function mountNav() {
    const host = qs("#nav");
    if (!host) return;

    host.innerHTML = buildNavHTML();
    host.classList.add("posh-nav-ready");

    setActiveNav(host);
    setupNavAccordion(host);
    setupDesktopHoverAccordion(host);
    setupSearch(host);
    setupNavTracking(host);
    fixKnownBrokenInternalLinks(host);
    enhanceAmazonBuyLinks(host);

    const shareBtn = qs(".nav-share-trigger", host);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  /* ==========================================================================
     8. PAGE STRUCTURE, BREADCRUMBS & TABLE OF CONTENTS
     ========================================================================== */

  function injectBreadcrumbs() {
    if (currentLivePath() === POSH.home || qs(".posh-breadcrumbs")) return;
    const currentLink = findLink(currentLivePath());
    if (!currentLink) return;

    const group = NAV_GROUPS.find(g =>
      g.links.some(link => normalisePath(link.href) === currentLivePath())
    );

    const bread = document.createElement("nav");
    bread.className = "posh-breadcrumbs";
    bread.setAttribute("aria-label", "Breadcrumb navigation");
    bread.innerHTML = `
      <a href="${POSH.home}">Home</a>
      ${group ? `<span class="crumb-sep">/</span><span>${escapeHtml(group.title)}</span>` : ""}
      <span class="crumb-sep">/</span><span aria-current="page">${escapeHtml(currentLink.label)}</span>
    `;

    const nav = qs("#nav");
    if (nav && nav.parentNode) nav.parentNode.insertBefore(bread, nav.nextSibling);
    else (qs(".wrap") || document.body).prepend(bread);
  }

  function ensureHeadingIds() {
    qsa("h2, h3, h4").forEach(heading => {
      if (!heading.id) {
        const id = slugify(heading.textContent);
        if (id) heading.id = id;
      }
    });
  }

  function shouldBuildTOC() {
    if (currentLivePath() === POSH.home) return false;
    if (document.body.hasAttribute("data-no-toc")) return false;
    return qsa(".wrap h2").filter(h => safeText(h.textContent)).length >= 4;
  }

  function buildTOC() {
    if (qs(".posh-toc") || !shouldBuildTOC()) return;
    const headings = qsa(".wrap h2").filter(h => safeText(h.textContent));
    if (!headings.length) return;

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

    const nav = qs("#nav");
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(toc, nav.nextSibling);
    } else {
      const firstCard = qs(".wrap .card");
      if (firstCard && firstCard.parentNode) {
        firstCard.parentNode.insertBefore(toc, firstCard.nextSibling);
      }
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

        if (history.pushState) history.pushState(null, "", href);
        else location.hash = href;
      });
    });
  }

  /* ==========================================================================
     9. READING PROGRESS & FLOATING ACTION CONTROLS
     ========================================================================== */

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
    btn.setAttribute("aria-label", "Scroll back to top");
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
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  function showMiniToast(message) {
    const toast = qs("#poshMiniToast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(showMiniToast._timer);
    showMiniToast._timer = setTimeout(() => toast.classList.remove("visible"), 1800);
  }

  async function copyCurrentLink() {
    try {
      await navigator.clipboard.writeText(location.href);
      maybeTrack("copy_link");
      showMiniToast("Link copied to clipboard");
    } catch (err) {
      showMiniToast("Clipboard access unavailable");
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
      // User cancelled or browser denied share
    }
  }

  function injectStickyActionBar() {
    if (qs(".posh-action-bar")) return;
    const bar = document.createElement("div");
    bar.className = "posh-action-bar";
    bar.innerHTML = `
      <a href="${POSH.quiz}" class="posh-action-btn" data-track="sticky_quiz">Safety Score</a>
      <a href="${POSH.smarterChildrenFree}" class="posh-action-btn" data-track="sticky_free_guide">Free Guide</a>
      <button type="button" class="posh-action-btn" id="poshStickyShare" data-track="sticky_share">Share</button>
      <a href="${POSH.urgentHelp}" class="posh-action-btn support" data-track="sticky_urgent">Urgent Help</a>
    `;

    document.body.appendChild(bar);

    qsa("[data-track]", bar).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });

    const shareBtn = qs("#poshStickyShare", bar);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  /* ==========================================================================
     10. DYNAMIC CTAS, RELATED CARDS & AMAZON PURCHASE STRIPS
     ========================================================================== */

  const PAGE_RELATIONS = {
    "index.html": [POSH.smarterChildrenFree, POSH.topicHub, POSH.topicFinder, POSH.quiz, POSH.parentSystem, POSH.trainingEveryone, POSH.urgentHelp],
    "v3-start.html": [POSH.smarterChildrenFree, POSH.topicHub, POSH.safetyLanes, POSH.quiz, POSH.parentSystem, POSH.redFlags, POSH.devices, POSH.reporting],
    "v3-smarter-children-safer-children-free-guide.html": [POSH.topicHub, POSH.topicFinder, POSH.parentSystem, POSH.platformRisks, POSH.downloads, POSH.share],
    "v3-posh-digital-resilience-series.html": [POSH.smarterChildrenFree, POSH.topicFinder, POSH.parentSystem, POSH.platformRisks, POSH.redFlags, POSH.houseRules],
    "v3-which-posh-book-should-i-read-first.html": [POSH.smarterChildrenFree, POSH.topicHub, POSH.parentSystem, POSH.platformRisks, POSH.redFlags, POSH.trainingEveryone],
    "v3-posh-safety-lanes.html": [POSH.urgentHelp, POSH.redFlags, POSH.platformRisks, POSH.parentSystem, POSH.onlineScenarios],
    "v3-posh-parent-system.html": [POSH.houseRules, POSH.familyAgreement, POSH.monitorTrust, POSH.parentScripts, POSH.onlineScenarios, POSH.quiz, POSH.smarterChildrenFree],
    "v3-entry-system.html": [POSH.start, POSH.quiz, POSH.whatNow, POSH.response],
    "v3-what-to-do-now.html": [POSH.urgentHelp, POSH.reporting, POSH.redFlags, POSH.evidence],
    "v3-response-system.html": [POSH.whatNow, POSH.reporting, POSH.parentQuestions, POSH.redFlags],
    "v3-parent-questions.html": [POSH.redFlags, POSH.parentScripts, POSH.talkOnlineSafety],
    "v3-safety-score.html": [POSH.parentSystem, POSH.redFlags, POSH.devices, POSH.houseRules, POSH.topicFinder],
    "v3-online-safety-training-for-everyone.html": [POSH.smarterChildrenFree, POSH.freeChildSafetyChecksAccountability, POSH.grandparents, POSH.parentsTraining, POSH.safeAdultWarningSigns, POSH.safeAdultResponse],
    "v3-grandparents-online-safety.html": [POSH.trainingEveryone, POSH.safeAdultWarningSigns, POSH.whatSafeAdultsSay, POSH.parentScripts, POSH.devices],
    "v3-parents-online-safety-training.html": [POSH.parentSystem, POSH.houseRules, POSH.familyAgreement, POSH.safeAdultWarningSigns, POSH.devices, POSH.parentScripts],
    "v3-carers-online-safety-training.html": [POSH.safeAdultResponse, POSH.safeAdultWarningSigns, POSH.parentScripts, POSH.reporting],
    "v3-teachers-online-safety-training.html": [POSH.safeAdultWarningSigns, POSH.safeAdultResponse, POSH.whatSafeAdultsSay, POSH.reporting],
    "v3-coaches-online-safety-training.html": [POSH.safeAdultWarningSigns, POSH.safeAdultResponse, POSH.whatSafeAdultsSay, POSH.reporting],
    "v3-aunties-uncles-family-friends-online-safety.html": [POSH.trainingEveryone, POSH.safeAdultWarningSigns, POSH.safeAdultResponse, POSH.whatSafeAdultsSay],
    "v3-older-siblings-online-safety-guide.html": [POSH.whatSafeAdultsSay, POSH.safeAdultWarningSigns, POSH.urgentHelp, POSH.reporting],
    "v3-youth-workers-online-safety-training.html": [POSH.safeAdultResponse, POSH.safeAdultWarningSigns, POSH.whatSafeAdultsSay, POSH.reporting],
    "v3-babysitters-online-safety-guide.html": [POSH.safeAdultWarningSigns, POSH.safeAdultResponse, POSH.urgentHelp, POSH.reporting],
    "v3-safe-adult-warning-signs.html": [POSH.safeAdultResponse, POSH.whatSafeAdultsSay, POSH.trainingEveryone, POSH.redFlags, POSH.urgentHelp],
    "v3-safe-adult-response-system.html": [POSH.safeAdultWarningSigns, POSH.whatSafeAdultsSay, POSH.evidence, POSH.reporting, POSH.urgentHelp],
    "v3-what-every-safe-adult-should-say.html": [POSH.safeAdultResponse, POSH.safeAdultWarningSigns, POSH.parentScripts, POSH.trainingEveryone],
    "v3-safe-adult-network-card.html": [POSH.safeAdultAccountabilityStandard, POSH.freeChildSafetyChecksAccountability, POSH.trainingEveryone, POSH.safeAdultWarningSigns, POSH.safeAdultResponse],
    "v3-free-child-safety-checks-safe-adult-accountability.html": [POSH.safeAdultAccountabilityStandard, POSH.trainingEveryone, POSH.safeAdultNetworkCard, POSH.safeAdultWarningSigns, POSH.safeAdultResponse],
    "v3-posh-safe-adult-accountability-standard.html": [POSH.freeChildSafetyChecksAccountability, POSH.safeAdultNetworkCard, POSH.safeAdultWarningSigns, POSH.safeAdultResponse, POSH.reporting],
    "v3-what-to-do-if-your-child-is-in-danger-online.html": [POSH.first24, POSH.first24Legacy, POSH.blackmail, POSH.evidence, POSH.reporting],
    "v3-first-24-hours-online-incident.html": [POSH.first24Legacy, POSH.evidence, POSH.blackmail, POSH.reporting, POSH.parentScripts],
    "v3-first-24-hours.html": [POSH.first24, POSH.evidence, POSH.reporting, POSH.parentScripts, POSH.redFlags],
    "v3-my-child-is-being-blackmailed-online.html": [POSH.sextortion, POSH.sextortionLegacy, POSH.evidence, POSH.reporting, POSH.first24],
    "v3-kid-sending-photos-online-what-to-do.html": [POSH.blackmail, POSH.sextortionLegacy, POSH.evidence, POSH.reporting],
    "v3-sextortion.html": [POSH.blackmail, POSH.evidence, POSH.reporting, POSH.first24Legacy, POSH.parentScripts],
    "v3-what-is-sextortion.html": [POSH.sextortionLegacy, POSH.blackmail, POSH.evidence, POSH.reporting],
    "v3-evidence-reporting.html": [POSH.reporting, POSH.evidenceMistakes, POSH.reportWithoutWorse, POSH.first24, POSH.urgentHelp],
    "v3-what-not-to-do-with-evidence.html": [POSH.evidence, POSH.reportWithoutWorse, POSH.first24Legacy, POSH.reporting, POSH.takeItDownImageRemoval],
    "v3-how-to-report-without-making-it-worse.html": [POSH.evidenceMistakes, POSH.evidence, POSH.officialReportingAustralia, POSH.reporting, POSH.parentScripts],
    "v3-reporting.html": [POSH.officialReportingAustralia, POSH.reportingAustralia, POSH.reportingUSA, POSH.reportingUK, POSH.reportingEurope, POSH.reportWithoutWorse],
    "v3-reporting-australia.html": [POSH.officialReportingAustralia, POSH.reportWithoutWorse, POSH.evidenceMistakes, POSH.evidence, POSH.first24Legacy],
    "v3-official-reporting-pathways-australia.html": [POSH.reportingAustralia, POSH.reportWithoutWorse, POSH.evidenceMistakes, POSH.takeItDownImageRemoval, POSH.evidence],
    "v3-take-it-down-and-image-removal.html": [POSH.aiNudifyDeepfakeRisks, POSH.firstDayPhotoSafety, POSH.evidenceMistakes, POSH.reporting, POSH.officialReportingAustralia],
    "v3-ai-nudify-deepfake-risks.html": [POSH.takeItDownImageRemoval, POSH.evidenceMistakes, POSH.reportWithoutWorse, POSH.reporting, POSH.parentScripts],
    "v3-first-day-photo-safety.html": [POSH.takeItDownImageRemoval, POSH.aiNudifyDeepfakeRisks, POSH.safeAdultNetworkCard, POSH.trainingEveryone, POSH.houseRules],
    "v3-sadistic-online-exploitation.html": [POSH.blackmail, POSH.sextortionLegacy, POSH.evidence, POSH.reporting, POSH.parentScripts],
    "v3-redflags.html": [POSH.tenSigns, POSH.groomingSigns, POSH.safeAdultWarningSigns, POSH.playbook, POSH.whyKidsDontTell, POSH.reporting],
    "v3-10-signs-targeted-online.html": [POSH.redFlags, POSH.playbook, POSH.predatorWarning, POSH.reporting],
    "v3-child-being-groomed-signs.html": [POSH.grooming, POSH.redFlags, POSH.playbook, POSH.predatorWarning, POSH.parentScripts],
    "v3-grooming.html": [POSH.groomingSigns, POSH.playbook, POSH.evidence, POSH.reporting, POSH.parentScripts],
    "v3-online-predator-warning-signs.html": [POSH.redFlags, POSH.playbook, POSH.groomingSigns, POSH.reporting],
    "v3-playbook.html": [POSH.redFlags, POSH.tenSigns, POSH.predators, POSH.reporting, POSH.algorithm],
    "v3-predators.html": [POSH.playbook, POSH.redFlags, POSH.reporting, POSH.algorithm],
    "v3-my-child-is-being-manipulated-online.html": [POSH.redFlags, POSH.groomingSigns, POSH.parentScripts, POSH.urgentHelp, POSH.criticalThinking],
    "v3-platform-risks-overview.html": [POSH.roblox, POSH.discord, POSH.snapchat, POSH.gaming, POSH.devices, POSH.parentSystem],
    "v3-gaming.html": [POSH.allGames, POSH.roblox, POSH.discord, POSH.redFlags, POSH.playbook],
    "v3-game-roblox.html": [POSH.robuxScam, POSH.inGameCurrency, POSH.discord, POSH.redFlags, POSH.petitionDigitalGifting],
    "v3-free-robux-scam-safety.html": [POSH.roblox, POSH.inGameCurrency, POSH.groomingSigns, POSH.parentScripts],
    "v3-social-discord.html": [POSH.socials, POSH.offPlatform, POSH.gaming, POSH.redFlags],
    "v3-social-snapchat.html": [POSH.socials, POSH.snapchatScenarios, POSH.redFlags, POSH.reporting],
    "v3-social-instagram.html": [POSH.socials, POSH.instagramDmScenarios, POSH.redFlags],
    "v3-social-tiktok.html": [POSH.socials, POSH.algorithm, POSH.tiktokLiveScenarios, POSH.redFlags],
    "v3-social-youtube.html": [POSH.socials, POSH.algorithm, POSH.youtubeCommentScenarios, POSH.redFlags],
    "v3-devices.html": [POSH.deviceControls, POSH.bestParentalControlApps, POSH.houseRules, POSH.checkDeviceCalmly],
    "v3-device-controls.html": [POSH.devices, POSH.bestParentalControlApps, POSH.houseRules],
    "v3-best-parental-control-apps.html": [POSH.devices, POSH.houseRules, POSH.monitorTrust, POSH.redFlags],
    "v3-house-rules.html": [POSH.parentSystem, POSH.familyAgreement, POSH.devices, POSH.monitorTrust, POSH.parentScripts],
    "v3-family-agreement.html": [POSH.houseRules, POSH.parentSystem, POSH.parentScripts, POSH.devices, POSH.monitorTrust],
    "v3-parent-scripts.html": [POSH.talkOnlineSafety, POSH.whyKidsDontTell, POSH.parentQuestions, POSH.whatSafeAdultsSay, POSH.redFlags],
    "v3-online-scenarios-training.html": [POSH.robloxScenarios, POSH.snapchatScenarios, POSH.sextortionScenarios, POSH.executiveOnlineSafety],
    "v3-executive-functioning.html": [POSH.onlineScenarios, POSH.pauseBeforeReacting, POSH.impulseControl, POSH.emotionalRegulation],
    "v3-executive-functioning-online-safety.html": [POSH.executiveFunctioning, POSH.onlineScenarios, POSH.neurodivergentExecutive, POSH.confidence],
    "v3-emotional-regulation-online-safety.html": [POSH.parentScripts, POSH.pauseBeforeReacting, POSH.frustrationIntolerance, POSH.whyKidsDontTell],
    "v3-frustration-intolerance-online-safety.html": [POSH.emotionalRegulation, POSH.pauseBeforeReacting, POSH.parentScripts, POSH.houseRules],
    "v3-critical-thinking-online-safety.html": [POSH.decisionMaking, POSH.impulseControl, POSH.manipulated, POSH.algorithm],
    "v3-confidence-is-a-safety-skill.html": [POSH.whatSafeAdultsSay, POSH.houseRules, POSH.manipulated, POSH.parentScripts],
    "v3-awareness.html": [POSH.algorithm, POSH.investigations, POSH.redFlags],
    "v3-algorithm-awareness.html": [POSH.awareness, POSH.socials, POSH.redFlags],
    "v3-all-downloads.html": [POSH.downloadsLegacy, POSH.smarterChildrenFree, POSH.start, POSH.redFlags, POSH.devices, POSH.parentScripts],
    "v3-downloads.html": [POSH.downloads, POSH.smarterChildrenFree, POSH.start, POSH.redFlags, POSH.devices, POSH.parentScripts],
    "v3-support.html": [POSH.start, POSH.downloads, POSH.quiz, POSH.share, POSH.topicHub],
    "v3-warning.html": [POSH.start, POSH.reporting, POSH.redFlags, POSH.downloads],
    "v3-why-posh-exists.html": [POSH.smarterChildrenFree, POSH.topicHub, POSH.start, POSH.parentSystem, POSH.share, POSH.support]
  };

  const HOME_AUTOPANELS = [
    ".posh-smart-cta",
    ".posh-related-links",
    ".posh-share-panel",
    ".posh-support-strip",
    ".posh-footer-prompt",
    ".posh-next-step-strip"
  ];

  const SAFE_ADULT_PAGES = [
    POSH.trainingEveryone, POSH.grandparents, POSH.parentsTraining, POSH.carersTraining,
    POSH.teachersTraining, POSH.coachesTraining, POSH.familyNetworkGuide, POSH.olderSiblings,
    POSH.youthWorkers, POSH.babysitters, POSH.safeAdultWarningSigns, POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay, POSH.safeAdultNetworkCard, POSH.freeChildSafetyChecksAccountability,
    POSH.safeAdultAccountabilityStandard
  ];

  const REPORTING_PAGES = [
    POSH.reporting, POSH.reportingAustralia, POSH.reportingUSA, POSH.reportingUK,
    POSH.reportingEurope, POSH.officialReportingAustralia, POSH.reportWithoutWorse, POSH.evidenceMistakes
  ];

  const IMAGE_SAFETY_PAGES = [POSH.takeItDownImageRemoval, POSH.aiNudifyDeepfakeRisks, POSH.firstDayPhotoSafety];

  const URGENT_PAGES = [
    POSH.urgentHelp, POSH.first24, POSH.first24Legacy, POSH.blackmail, POSH.photos,
    POSH.evidence, POSH.sadisticOnlineExploitation
  ];

  const TOPIC_PAGES = [
    POSH.smarterChildrenFree, POSH.topicHub, POSH.topicFinder, POSH.parentSystem,
    POSH.platformRisks, POSH.redFlags, POSH.emotionalRegulation, POSH.frustrationIntolerance,
    POSH.criticalThinking, POSH.manipulated, POSH.executiveOnlineSafety, POSH.confidence, POSH.houseRules
  ];

  function buildRelatedCardsHtml() {
    const related = (PAGE_RELATIONS[currentLivePath()] || [])
      .map(findLink)
      .filter(Boolean)
      .slice(0, POSH.maxRelatedItems);

    if (!related.length) return "";

    return `
      <section class="posh-related-links" aria-label="Recommended next safety pages">
        <h2>Recommended Next Safety Pages</h2>
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
    if (qs(".posh-related-links") || currentLivePath() === POSH.home) return;
    const html = buildRelatedCardsHtml();
    if (!html) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const holder = document.createElement("div");
    holder.innerHTML = html;
    wrap.appendChild(holder.firstElementChild);

    qsa('[data-track="related_click"]', wrap).forEach(el => {
      el.addEventListener("click", () => {
        maybeTrack("related_click", { label: el.getAttribute("href") || "" });
      });
    });
  }

  function injectSharePanel() {
    if (qs(".posh-share-panel") || currentLivePath() === POSH.home) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const panel = document.createElement("section");
    panel.className = "posh-share-panel";
    panel.innerHTML = `
      <h2>Help Another Family Recognise Online Risks Earlier</h2>
      <p>Many families only search for guidance after an incident occurs. Sharing POSH equips parents, grandparents, carers, teachers, and sports coaches with calm, preventative safeguarding strategies.</p>
      <div class="posh-share-panel-actions">
        <button type="button" id="poshShareMainBtn" data-track="share_panel_share">Share POSH</button>
        <button type="button" id="poshCopyMainBtn" data-track="share_panel_copy">Copy Link</button>
        <a href="${POSH.smarterChildrenFree}" data-track="share_panel_free_guide">Free Starter Guide</a>
        <a href="${POSH.downloads}" data-track="share_panel_downloads">All Framework Downloads</a>
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
    if (page === POSH.home) return null;

    if (page === POSH.familyAgreement) {
      return {
        title: "Combine Your Digital Agreement With Healthy Household Rules",
        text: "Interactive agreements work best when paired with clear physical boundaries around bedrooms, charging stations, and open family communication.",
        actions: [
          { href: POSH.houseRules, label: "Healthy House Rules" },
          { href: POSH.parentSystem, label: "POSH Parent System" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.quiz, label: "Safety Score Quiz" }
        ]
      };
    }

    if (TOPIC_PAGES.includes(page)) {
      const amazonUrl = TOPIC_PATHWAY_AMAZON_MAP[page] || POSH_AMAZON_CATALOGUE.book1_parentSystem.url;
      return {
        title: "Build Digital Resilience With the POSH Book Series",
        text: "The full POSH Digital Resilience Series is now available worldwide in paperback and eBook editions. Get your copy on Amazon AU or download our free introductory family guide.",
        actions: [
          { href: amazonUrl, label: "Buy Book on Amazon AU", isAmazon: true },
          { href: POSH.smarterChildrenFree, label: "Free Starter Guide" },
          { href: POSH.topicHub, label: "All Topic Pathways" },
          { href: POSH.quiz, label: "Safety Score Quiz" }
        ]
      };
    }

    if (SAFE_ADULT_PAGES.includes(page)) {
      return {
        title: "Build Consistent Safety Standards Around Your Child",
        text: "Children are safer when every trusted adult understands warning signs, remains calm, avoids shaming, and knows when to involve official reporting pathways.",
        actions: [
          { href: POSH.safeAdultWarningSigns, label: "Warning Signs" },
          { href: POSH.safeAdultResponse, label: "Safe Adult Response" },
          { href: POSH.whatSafeAdultsSay, label: "What to Say" },
          { href: POSH.trainingEveryone, label: "Training Hub" }
        ]
      };
    }

    if (REPORTING_PAGES.includes(page)) {
      return {
        title: "Report Calmly and Maintain Structural Order",
        text: "Effective reporting begins with child support, evidence preservation, correct channel selection, and avoiding actions that could escalate harm.",
        actions: [
          { href: POSH.evidence, label: "Save Evidence Wisely" },
          { href: POSH.evidenceMistakes, label: "Evidence Mistakes" },
          { href: POSH.reportWithoutWorse, label: "Report Safely" },
          { href: POSH.reporting, label: "Report Directory" }
        ]
      };
    }

    if (IMAGE_SAFETY_PAGES.includes(page)) {
      return {
        title: "Image Safety Requires Careful, Methodical Steps",
        text: "When intimate images or AI deepfakes are involved, never forward, repost, or threaten. Preserve essential proof and engage official removal channels.",
        actions: [
          { href: POSH.takeItDownImageRemoval, label: "Take It Down Removal" },
          { href: POSH.evidenceMistakes, label: "Evidence Mistakes" },
          { href: POSH.reporting, label: "Report & Get Help" },
          { href: POSH.parentScripts, label: "Parent Scripts" }
        ]
      };
    }

    if (URGENT_PAGES.includes(page)) {
      return {
        title: "Stay Calm, Preserve Proof, and Take Structure Action",
        text: "In acute online emergencies, prioritise your child's emotional safety, document usernames and URLs without altering messages, and contact appropriate authorities.",
        actions: [
          { href: POSH.evidence, label: "Save Evidence Wisely" },
          { href: POSH.reporting, label: "Official Reporting Directory" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.first24Legacy, label: "First 24 Hours Guide" }
        ]
      };
    }

    if (/^v3-game-/.test(page) || page === POSH.gaming || page === POSH.robuxScam || page === POSH.inGameCurrency) {
      return {
        title: "Look Beyond the Game Platform Itself",
        text: "Online gaming risks frequently migrate through voice chat, virtual gifting, and private messaging platforms like Discord or Snapchat. Inspect the full pathway.",
        actions: [
          { href: POSH.platformRisks, label: "Platform Risks Overview" },
          { href: POSH.discord, label: "Discord Safety Guide" },
          { href: POSH.redFlags, label: "Red Flags & Signs" },
          { href: POSH.parentScripts, label: "Parent Scripts" }
        ]
      };
    }

    if (/^v3-social-/.test(page) || page === POSH.socials || page === POSH.platformRisks) {
      return {
        title: "Pair App Awareness With Clear Household Boundaries",
        text: "Understanding application features is only half the solution. Visibility, device restrictions, house rules, and open dialogues build real resilience.",
        actions: [
          { href: POSH.platformRisks, label: "Platform Risks Overview" },
          { href: POSH.houseRules, label: "Healthy House Rules" },
          { href: POSH.familyAgreement, label: "Digital Agreement Builder" },
          { href: POSH.devices, label: "Device Screen Controls" }
        ]
      };
    }

    if (page === POSH.devices || page === POSH.deviceControls || page === POSH.bestParentalControlApps) {
      return {
        title: "Technical Controls Work Best When Supported by Dialogue",
        text: "Parental filters reduce accidental exposure, but children still require household boundaries, mutual trust, and practical communication skills.",
        actions: [
          { href: POSH.houseRules, label: "Healthy House Rules" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.platformRisks, label: "Platform Risks Overview" },
          { href: POSH.quiz, label: "Safety Score Quiz" }
        ]
      };
    }

    if (
      page === POSH.redFlags ||
      page === POSH.tenSigns ||
      page === POSH.grooming ||
      page === POSH.groomingSigns ||
      page === POSH.groomingSignsLegacy ||
      page === POSH.playbook ||
      page === POSH.predatorWarning
    ) {
      return {
        title: "Turn Early Warning Signs Into Calm, Protective Action",
        text: "Recognising behavioural warning signs allows you to slow the situation down, ask better questions, inspect devices calmly, and intervene early.",
        actions: [
          { href: POSH.redFlags, label: "Red Flags & Warning Signs" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.checkDeviceCalmly, label: "Check a Device Calmly" },
          { href: POSH.urgentHelp, label: "Urgent Help Directory" }
        ]
      };
    }

    return {
      title: "Your Next Protective Step",
      text: "Transition from understanding into calm, actionable safety measures that safeguard your family's digital environment.",
      actions: [
        { href: POSH.smarterChildrenFree, label: "Free Starter Guide" },
        { href: POSH.safetyLanes, label: "Choose Safety Path" },
        { href: POSH.quiz, label: "Safety Score Quiz" },
        { href: POSH.parentSystem, label: "POSH Parent System" }
      ]
    };
  }

  function injectSmartCTA() {
    if (qs(".posh-smart-cta")) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const cta = inferCTAByPage(currentLivePath());
    if (!cta) return;

    const section = document.createElement("section");
    section.className = "posh-smart-cta";
    section.innerHTML = `
      <h2>${escapeHtml(cta.title)}</h2>
      <p>${escapeHtml(cta.text)}</p>
      <div class="posh-smart-cta-actions">
        ${cta.actions.map(action => {
          const targetAttr = action.isAmazon ? 'target="_blank" rel="noopener noreferrer"' : '';
          const cssClass = action.isAmazon ? 'posh-cta-btn is-amazon-cta' : 'posh-cta-btn';
          return `<a href="${action.href}" class="${cssClass}" ${targetAttr} data-track="smart_cta_click">${escapeHtml(action.label)}</a>`;
        }).join("")}
      </div>
    `;

    wrap.appendChild(section);

    qsa('[data-track="smart_cta_click"]', section).forEach(el => {
      el.addEventListener("click", () => {
        maybeTrack("smart_cta_click", { label: el.getAttribute("href") || "" });
      });
    });
  }

  function injectNextStepStrip() {
    if (currentLivePath() === POSH.home || qs(".posh-next-step-strip")) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const strip = document.createElement("section");
    strip.className = "posh-next-step-strip";
    strip.innerHTML = `
      <h2>Unsure Where to Navigate Next?</h2>
      <p>Choose the most relevant pathway. POSH is structured to guide families step-by-step without panic, blame, or dead ends.</p>
      <div class="posh-next-step-actions">
        <a href="${POSH.home}">Home</a>
        <a href="${POSH.start}">Start Here</a>
        <a href="${POSH.quiz}">Safety Score Quiz</a>
        <a href="${POSH.redFlags}">Red Flags &amp; Signs</a>
        <a href="${POSH.devices}">Device Screen Controls</a>
        <a href="${POSH.reporting}">Report &amp; Get Help</a>
      </div>
    `;
    wrap.appendChild(strip);
  }

  function injectSupportStrip() {
    if (qs(".posh-support-strip") || currentLivePath() === POSH.home) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const strip = document.createElement("section");
    strip.className = "posh-support-strip";
    strip.innerHTML = `
      <div class="posh-support-strip-inner">
        <strong>If POSH provided clarity for your family, help us keep these resources free and accessible for others.</strong>
        <div class="posh-support-strip-actions">
          <a href="${POSH.support}" data-track="support_strip_support">Support POSH</a>
          <a href="${POSH.smarterChildrenFree}" data-track="support_strip_free_guide">Free Starter Guide</a>
          <button type="button" id="poshSupportStripShare" data-track="support_strip_share">Share POSH</button>
        </div>
      </div>
    `;

    wrap.appendChild(strip);

    const shareBtn = qs("#poshSupportStripShare", strip);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);

    qsa("[data-track]", strip).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });
  }

  function injectHeroButtonsIfMissing() {
    const hero = qs(".posh-premium-hero") || qs(".home-intro-hero") || qs(".home-intro") || qs(".card.hero") || qs(".hero-card");
    if (!hero) return;
    if (qs(".posh-hero-actions", hero) || qs(".btn-grid a, .btn-row a, a.btn", hero)) return;

    const box = document.createElement("div");
    box.className = "posh-hero-actions";
    box.innerHTML = `
      <a href="${POSH.safetyLanes}" data-track="hero_safety_lanes">Choose Safety Path</a>
      <a href="${POSH.smarterChildrenFree}" class="secondary" data-track="hero_free_guide">Free Starter Guide</a>
      <a href="${POSH.quiz}" class="secondary" data-track="hero_quiz">Safety Score Quiz</a>
      <a href="${POSH.urgentHelp}" class="ghost" data-track="hero_urgent">Urgent Help</a>
    `;

    hero.appendChild(box);

    qsa("[data-track]", box).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });
  }

  function injectSupportFooterPrompt() {
    if (qs(".posh-footer-prompt") || currentLivePath() === POSH.home) return;
    const wrap = qs(".wrap");
    if (!wrap) return;

    const footer = document.createElement("section");
    footer.className = "posh-footer-prompt";
    footer.innerHTML = `
      <p><strong>POSH is built for families.</strong> Supporting our work enables us to develop clearer guides, printable framework downloads, and safer digital pathways for parents and carers worldwide.</p>
      <div class="posh-footer-prompt-actions">
        <a href="${POSH.support}" data-track="footer_support">Support POSH</a>
        <a href="${POSH.smarterChildrenFree}" data-track="footer_free_guide">Free Starter Guide</a>
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

  /* ==========================================================================
     11. METADATA, FORMS, ACCESSIBILITY & ANALYTICS ENHANCERS
     ========================================================================== */

  function ensureBodyFlags() {
    const current = currentLivePath();
    const page = current.replace(/\.html$/i, "") || "home";

    document.body.classList.add("js-ready");
    document.body.dataset.page = page;

    if (current === POSH.home) document.body.classList.add("home-page", "posh-home-v4");
    if (TOPIC_PAGES.includes(current)) document.body.classList.add("page-is-topic-pathway");
    if (/^v3-game-/.test(current)) document.body.classList.add("page-is-game");
    if (/^v3-social-/.test(current)) document.body.classList.add("page-is-social");
    if (current === POSH.devices || current === POSH.deviceControls) document.body.classList.add("page-is-device");
    if (URGENT_PAGES.includes(current)) document.body.classList.add("page-is-urgent");
    if (SAFE_ADULT_PAGES.includes(current)) document.body.classList.add("page-is-safe-adult");
    if (REPORTING_PAGES.includes(current)) document.body.classList.add("page-is-reporting");
    if (IMAGE_SAFETY_PAGES.includes(current)) document.body.classList.add("page-is-image-safety");
  }

  function addPageMetaAttributes() {
    const page = currentLivePath();
    const title = getPageTitle();
    document.documentElement.dataset.page = page.replace(/\.html$/i, "");
    document.documentElement.dataset.pageTitle = slugify(title || page);
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
      if (link.dataset.poshTracked === "true") return;
      link.dataset.poshTracked = "true";

      const href = link.getAttribute("href") || "";

      if (/^https?:\/\//i.test(href) && !href.includes(location.hostname)) {
        link.addEventListener("click", () => maybeTrack("outbound_click", { label: href }));
      }

      if (/\.pdf(\?|$)/i.test(href) || link.hasAttribute("download")) {
        link.classList.add("is-download-link");
        link.addEventListener("click", () => maybeTrack("download_click", { label: href }));
      }

      if (
        !/^https?:\/\//i.test(href) &&
        !href.startsWith("#") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:")
      ) {
        link.addEventListener("click", () => maybeTrack("internal_click", { label: href }));
      }
    });
  }

  function enhanceCards() {
    qsa(".card").forEach(card => {
      if (!card.hasAttribute("tabindex") && card.querySelector("a, button, input, textarea, select")) return;
      if (!card.hasAttribute("tabindex")) card.setAttribute("tabindex", "0");
    });
  }

  function enhanceForms() {
    qsa("form").forEach(form => {
      form.setAttribute("novalidate", "novalidate");
      form.addEventListener("submit", () => {
        maybeTrack("form_submit_attempt", {
          label: form.getAttribute("id") || form.getAttribute("name") || currentLivePath()
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
      if (!link.dataset.fromPage) link.dataset.fromPage = currentLivePath();
    });
  }

  function markCurrentYear() {
    qsa("[data-current-year]").forEach(el => {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function removeHomepageAutoPanels() {
    if (currentLivePath() !== POSH.home) return;
    window.setTimeout(() => {
      qsa(HOME_AUTOPANELS.join(",")).forEach(el => el.remove());
    }, 150);
  }

  function setupScrollHandlers() {
    const onScroll = throttle(() => {
      updateProgressBar();
      updateBackToTop();
    }, 20);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    updateProgressBar();
    updateBackToTop();
  }

  function hidePrematureQuizResults() {
    const page = currentLivePath();
    if (page !== POSH.quiz && page !== POSH.start) return;

    const possibleResults = qsa(
      "#result, #results, #scoreResult, #quizResult, .result, .results, .score-result, .quiz-result, .risk-result, .score-card"
    );

    const hidden = [];

    possibleResults.forEach(el => {
      const text = safeText(el.textContent).toLowerCase();
      const looksPremature =
        text.includes("0 / 100") ||
        text.includes("0/100") ||
        text.includes("high grooming exposure risk") ||
        text.includes("your score") ||
        text.includes("score:");

      if (!looksPremature) return;

      el.dataset.poshHiddenUntilAction = "true";
      el.style.display = "none";
      hidden.push(el);
    });

    if (!hidden.length) return;

    function showHiddenResults() {
      hidden.forEach(el => {
        el.style.display = "";
        el.dataset.poshHiddenUntilAction = "false";
      });
    }

    qsa("button, input[type='button'], input[type='submit'], a.btn").forEach(control => {
      const label = safeText(control.textContent || control.value).toLowerCase();
      if (/calculate|score|result|check|start|show|next|submit/.test(label)) {
        control.addEventListener("click", showHiddenResults, { once: true });
      }
    });

    qsa("input, select, textarea").forEach(input => {
      input.addEventListener("change", () => {
        document.body.classList.add("posh-quiz-started");
      }, { once: true });
    });
  }

  function trackPageView() {
    maybeTrack("page_view_enhanced", { label: currentLivePath() });
  }

  /* ==========================================================================
     12. SAFE INITIALISATION & EXECUTION PIPELINE
     ========================================================================== */

  function safeInit(fn) {
    try {
      fn();
    } catch (err) {
      console.error("[POSH app.js error]", err);
    }
  }

  function init() {
    safeInit(fixKnownBrokenInternalLinks);
    safeInit(ensureBodyFlags);
    safeInit(addPageMetaAttributes);
    safeInit(injectGlobalHeroBanner);
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
    safeInit(injectNextStepStrip);
    safeInit(injectSupportStrip);
    safeInit(injectSupportFooterPrompt);
    safeInit(injectPageSummaryMeta);
    safeInit(enhanceFaqs);
    safeInit(hardenExternalLinks);
    safeInit(fixKnownBrokenInternalLinks);
    safeInit(enhanceAmazonBuyLinks);
    safeInit(trackLinks);
    safeInit(enhanceCards);
    safeInit(markCurrentYear);
    safeInit(setupCopyLinkTriggers);
    safeInit(enhanceForms);
    safeInit(enhanceButtonsThatShare);
    safeInit(addCurrentLocationToHomeButtons);
    safeInit(hidePrematureQuizResults);
    safeInit(removeHomepageAutoPanels);
    safeInit(trackPageView);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
(function () {
  "use strict";

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

    heroAlt: "Parents Online Safety Hub",
    heroAriaLabel: "Back to POSH home",

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
      "POSH helps parents and safe adults build safer digital families with practical safety checks, device guidance, family rules, platform awareness, warning signs, and calm action pathways.",

    searchPlaceholder: "Search apps, games, devices, PDFs or topics",
    maxSearchResults: 10,
    maxTocItems: 8,
    maxRelatedItems: 6
  };

  const REDIRECT_MAP = {
    "v3-support-monthly.html": POSH.support,
    "v3-support-posh.html": POSH.support,
    "warning-disclaimer.html": POSH.warning,
    "v3-what-now.html": POSH.whatNow,
    "V3gaming-xbox.html": POSH.xbox,
    "V3gaming-playstation.html": POSH.playstation,
    "V3gaming-nintendo.html": POSH.nintendo
  };

  const NAV_GROUPS = [
    {
      title: "Start & Safety",
      links: [
        { href: POSH.home, label: "Home", type: "Home", keywords: "home index posh parents online safety hub australia child safety" },
        { href: POSH.start, label: "Start Here", type: "Start", keywords: "start first steps where do i begin parent help safety" },
        { href: POSH.safetyLanes, label: "Choose Safety Path", type: "Start", keywords: "choose lane pathway situation urgent warning signs devices platforms" },
        { href: POSH.parentSystem, label: "POSH Parent System", type: "System", keywords: "parent system family plan rules visibility monitoring conversations" },
        { href: POSH.entry, label: "Entry System", type: "System", keywords: "entry system guided pathway choose direction" },
        { href: POSH.whatNow, label: "What To Do Now", type: "Action", keywords: "what to do now immediate next steps concern act early" },
        { href: POSH.response, label: "POSH Response System", type: "Action", keywords: "response system what parents do next concern structure" },
        { href: POSH.responseLegacy, label: "POSH Response System Legacy", type: "Action", keywords: "legacy response system parent action structure" },
        { href: POSH.parentQuestions, label: "Parent Questions", type: "Questions", keywords: "questions to ask child parent prompts conversation" },
        { href: POSH.quiz, label: "Safety Score", type: "Quiz", keywords: "safety score audit checklist quiz risk score check" }
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
        { href: POSH.whatSafeAdultsSay, label: "What Safe Adults Should Say", type: "Scripts", keywords: "what safe adults should say calm words child opens up online safety" }
      ]
    },
    {
      title: "Urgent Help & Reporting",
      links: [
        { href: POSH.urgentHelp, label: "My Child May Be In Danger", type: "Urgent Help", keywords: "danger emergency urgent child online help immediate" },
        { href: POSH.first24, label: "First 24 Hours Online Incident", type: "Urgent Help", keywords: "first 24 hours incident happened what to do now evidence" },
        { href: POSH.first24Legacy, label: "First 24 Hours Parent Guide", type: "Urgent Help", keywords: "first 24 hours parent guide calm response protect preserve evidence" },
        { href: POSH.blackmail, label: "Blackmail Or Threats", type: "Urgent Help", keywords: "blackmail threats sextortion pressure pay delete evidence" },
        { href: POSH.photos, label: "Child Sent Photos", type: "Urgent Help", keywords: "child sent photos images nudes what to do evidence" },
        { href: POSH.sextortion, label: "What Is Sextortion?", type: "Definition", keywords: "sextortion blackmail threats images sexual extortion" },
        { href: POSH.sextortionLegacy, label: "Sextortion Response", type: "Urgent Help", keywords: "sextortion response blackmail threats images evidence report" },
        { href: POSH.evidence, label: "Save Evidence", type: "Reporting", keywords: "evidence reporting screenshots messages usernames links do not delete" },
        { href: POSH.reporting, label: "Report & Get Help", type: "Reporting", keywords: "report get help police esafety accce sextortion urgent help" },
        { href: POSH.reportingAustralia, label: "Reporting Australia", type: "Reporting", keywords: "australia report esafety police accce child safety" }
      ]
    },
    {
      title: "Warning Signs & Grooming",
      links: [
        { href: POSH.redFlags, label: "Red Flags", type: "Warning Signs", keywords: "red flags warning signs grooming behaviour secrecy concern" },
        { href: POSH.tenSigns, label: "10 Signs Targeted Online", type: "Warning Signs", keywords: "10 signs targeted online grooming child warning signs" },
        { href: POSH.tenSignsLegacy, label: "10 Signs Legacy", type: "Warning Signs", keywords: "10 signs targeted warning signs legacy" },
        { href: POSH.grooming, label: "Grooming Signs & What To Do", type: "Grooming", keywords: "grooming signs what to do parent action" },
        { href: POSH.groomingSigns, label: "Grooming Signs", type: "Warning Signs", keywords: "signs child being groomed online secrecy privacy pressure" },
        { href: POSH.groomingSignsLegacy, label: "Signs My Child Is Being Groomed", type: "Warning Signs", keywords: "signs my child is being groomed online grooming checklist" },
        { href: POSH.groomingSignsAlt, label: "Deeper Grooming Pattern Guide", type: "Warning Signs", keywords: "signs your child is being groomed deeper pattern guide" },
        { href: POSH.predatorWarning, label: "Predator Warning Signs", type: "Warning Signs", keywords: "online predator warning signs grooming manipulation tactics" },
        { href: POSH.childHidingPhone, label: "Child Hiding Phone", type: "Warning Signs", keywords: "hiding phone deleted messages secrecy panic phone" },
        { href: POSH.manipulated, label: "Manipulation", type: "Warning Signs", keywords: "child manipulated online emotional pressure control secrecy" },
        { href: POSH.whyKidsDontTell, label: "Why Kids Don’t Tell", type: "Parent Insight", keywords: "why kids do not tell shame fear punishment embarrassment" },
        { href: POSH.stranger, label: "Talking To A Stranger", type: "Warning Signs", keywords: "online stranger chat friend contact unknown adult" },
        { href: POSH.offPlatform, label: "Off-Platform Movement", type: "Warning Signs", keywords: "move to another app discord snapchat private chat off platform" },
        { href: POSH.playbook, label: "Predator Playbook", type: "Playbook", keywords: "playbook grooming escalation pattern trust private secrecy" },
        { href: POSH.stepGrooming, label: "How Grooming Builds", type: "Playbook", keywords: "grooming step by step access attention trust secrecy pressure" },
        { href: POSH.predators, label: "Predator Tactics", type: "Predators", keywords: "predator tactics manipulation control grooming isolate secrets" }
      ]
    },
    {
      title: "Platforms, Apps & Games",
      links: [
        { href: POSH.platformRisks, label: "Platform Risk Overview", type: "Hub", keywords: "platform risk overview apps games contact secrecy pressure" },
        { href: POSH.platforms, label: "All Platforms", type: "Directory", keywords: "all platforms apps games devices socials directory" },
        { href: POSH.allApplications, label: "All Applications", type: "Directory", keywords: "all applications apps directory social chat" },
        { href: POSH.socials, label: "Social Media & Chat", type: "Socials", keywords: "social media apps chat private messages" },
        { href: POSH.discord, label: "Discord", type: "App", keywords: "discord dms server voice chat grooming" },
        { href: POSH.snapchat, label: "Snapchat", type: "App", keywords: "snapchat disappearing messages streaks snap map" },
        { href: POSH.instagram, label: "Instagram", type: "App", keywords: "instagram dm reels followers private messages" },
        { href: POSH.tiktok, label: "TikTok", type: "App", keywords: "tiktok algorithm live messages fyp trends" },
        { href: POSH.youtube, label: "YouTube", type: "App", keywords: "youtube comments shorts live creators algorithm" },
        { href: POSH.telegram, label: "Telegram", type: "App", keywords: "telegram private groups encrypted chat channels" },
        { href: POSH.whatsapp, label: "WhatsApp", type: "App", keywords: "whatsapp private messages groups encrypted chat" },
        { href: POSH.yubo, label: "Yubo", type: "App", keywords: "yubo live social strangers teen app" },
        { href: POSH.dangerousApps, label: "Top Dangerous Apps", type: "Guide", keywords: "dangerous apps risky apps private contact secrecy" },
        { href: POSH.safeAppsGames, label: "Safer Apps & Games", type: "Guide", keywords: "safe apps games age appropriate family choices" }
      ]
    },
    {
      title: "Gaming & Devices",
      links: [
        { href: POSH.gaming, label: "Gaming Safety", type: "Gaming", keywords: "gaming safety online game chat party voice strangers" },
        { href: POSH.allGames, label: "All Games Directory", type: "Directory", keywords: "all games directory gaming pages" },
        { href: POSH.gameRisksByAge, label: "Game Risks By Age", type: "Guide", keywords: "game risks age age appropriate" },
        { href: POSH.roblox, label: "Roblox", type: "Game", keywords: "roblox robux private chat gifting groups voice" },
        { href: POSH.robuxScam, label: "Free Robux Scam Safety", type: "Game", keywords: "free robux scam safety grooming gifting" },
        { href: POSH.inGameCurrency, label: "In-Game Currency Risk", type: "Game", keywords: "in game currency grooming risk gifting robux skins" },
        { href: POSH.fortnite, label: "Fortnite", type: "Game", keywords: "fortnite party chat squads epic games" },
        { href: POSH.minecraft, label: "Minecraft", type: "Game", keywords: "minecraft servers realms multiplayer mods" },
        { href: POSH.vrchat, label: "VRChat", type: "Game", keywords: "vrchat virtual reality avatars adults voice" },
        { href: POSH.apex, label: "Apex Legends", type: "Game", keywords: "apex legends gaming voice chat squads" },
        { href: POSH.devices, label: "Device Safety", type: "Devices", keywords: "device safety phones tablets consoles passcodes permissions" },
        { href: POSH.deviceControls, label: "Device Controls", type: "Devices", keywords: "device controls screen time restrictions settings" },
        { href: POSH.parentalControls, label: "Parental Controls", type: "Devices", keywords: "parental controls device limits account restrictions" },
        { href: POSH.bestParentalControlApps, label: "Best Control Apps", type: "Guide", keywords: "parental control apps monitor filters screen time" },
        { href: POSH.monitorTrust, label: "Monitor Without Breaking Trust", type: "Guide", keywords: "monitor without breaking trust visibility devices child talks" },
        { href: POSH.checkDeviceCalmly, label: "Check A Device Calmly", type: "Guide", keywords: "check device without panic screenshots messages apps" },
        { href: POSH.xbox, label: "Xbox", type: "Gaming Device", keywords: "xbox console party chat messages microsoft" },
        { href: POSH.playstation, label: "PlayStation", type: "Gaming Device", keywords: "playstation psn party chat sony console" },
        { href: POSH.nintendo, label: "Nintendo", type: "Gaming Device", keywords: "nintendo switch online child safety" }
      ]
    },
    {
      title: "Parent Tools & Training",
      links: [
        { href: POSH.houseRules, label: "House Rules", type: "Rules", keywords: "house rules boundaries devices bedrooms passcodes" },
        { href: POSH.parentScripts, label: "Parent Scripts", type: "Scripts", keywords: "parent scripts talk to kids conversations online safety" },
        { href: POSH.talkOnlineSafety, label: "How To Talk", type: "Scripts", keywords: "how to talk to your child online safety calm conversation" },
        { href: POSH.trustProtection, label: "Trust Vs Protection", type: "Parent Insight", keywords: "not about not trusting child trust protection safety" },
        { href: POSH.onlineScenarios, label: "Scenario Training", type: "Training", keywords: "online scenarios training practise pressure response" },
        { href: POSH.robloxScenarios, label: "Roblox Scenarios", type: "Training", keywords: "roblox safety scenarios robux chat pressure" },
        { href: POSH.snapchatScenarios, label: "Snapchat Pressure Scenarios", type: "Training", keywords: "snapchat pressure scenarios disappearing messages" },
        { href: POSH.sextortionScenarios, label: "Sextortion Scenarios", type: "Training", keywords: "sextortion scenarios blackmail photos pressure" },
        { href: POSH.groupChatScenarios, label: "Group Chat Pressure", type: "Training", keywords: "group chat pressure bullying secrecy screenshots" },
        { href: POSH.executiveFunctioning, label: "Executive Functioning", type: "Thinking Skills", keywords: "executive functioning online safety child thinking skills" },
        { href: POSH.pauseBeforeReacting, label: "Pause Before Reacting", type: "Thinking Skills", keywords: "pause before reacting impulse control" },
        { href: POSH.impulseControl, label: "Impulse Control", type: "Thinking Skills", keywords: "impulse control online decisions child safety" },
        { href: POSH.emotionalRegulation, label: "Emotional Regulation", type: "Thinking Skills", keywords: "emotional regulation online safety pressure" },
        { href: POSH.decisionMaking, label: "Decision Making", type: "Thinking Skills", keywords: "online decision making safety choices" },
        { href: POSH.criticalThinking, label: "Critical Thinking", type: "Thinking Skills", keywords: "critical thinking online safety claims pressure" }
      ]
    },
    {
      title: "Awareness, Downloads & POSH",
      links: [
        { href: POSH.awareness, label: "Awareness Hub", type: "Awareness", keywords: "awareness education parents grooming algorithms safety" },
        { href: POSH.algorithm, label: "Algorithm Risks", type: "Awareness", keywords: "algorithm risks feed recommendations endless scroll influence" },
        { href: POSH.screenBrain, label: "Screens & The Brain", type: "Awareness", keywords: "screens child brain attention sleep behaviour" },
        { href: POSH.brainrot, label: "Brainrot", type: "Awareness", keywords: "brainrot content endless scrolling low quality" },
        { href: POSH.definitions, label: "Definitions", type: "Awareness", keywords: "definitions terms grooming sextortion online safety" },
        { href: POSH.investigations, label: "Real Investigations", type: "Investigations", keywords: "real investigations interviews evidence predator exposure" },
        { href: POSH.downloads, label: "All PDF Downloads", type: "Downloads", keywords: "pdf downloads guides framework playbook scripts printables" },
        { href: POSH.downloadsLegacy, label: "Download Guides", type: "Downloads", keywords: "downloads guides printables parent framework scripts" },
        { href: POSH.share, label: "Share POSH", type: "Support", keywords: "share posh awareness help families" },
        { href: POSH.support, label: "Support POSH", type: "Support", keywords: "support posh donate help keep free mission" },
        { href: POSH.community, label: "Community", type: "Support", keywords: "community parents movement posh" },
        { href: POSH.collaboration, label: "Collaboration", type: "Support", keywords: "collaboration creators educators parents partners" },
        { href: POSH.founder, label: "Founder", type: "POSH", keywords: "founder jinglez posh story mission" },
        { href: POSH.whyPoshExists, label: "Why POSH Exists", type: "POSH", keywords: "why posh exists mission awareness action protection" },
        { href: POSH.warning, label: "Warning & Disclaimer", type: "Info", keywords: "warning disclaimer legal medical education guidance information" }
      ]
    }
  ];

  const SEARCH_ALIASES = {
    help: ["start here", "report & get help", "urgent help", "what to do now"],
    urgent: ["my child may be in danger", "first 24 hours", "report & get help", "blackmail or threats"],
    danger: ["my child may be in danger", "urgent help", "report & get help"],
    emergency: ["my child may be in danger", "first 24 hours", "report & get help"],
    blackmail: ["blackmail or threats", "what is sextortion", "save evidence"],
    threats: ["blackmail or threats", "report & get help", "save evidence"],
    photos: ["child sent photos", "blackmail or threats", "save evidence"],
    sextortion: ["what is sextortion", "sextortion response", "blackmail or threats", "sextortion scenarios"],
    grooming: ["grooming signs & what to do", "grooming signs", "predator playbook", "red flags", "predator warning signs", "10 signs targeted online"],
    predator: ["predator playbook", "predator warning signs", "predator tactics"],
    secret: ["red flags", "child hiding phone", "why kids don’t tell", "safe adult warning signs"],
    secrecy: ["red flags", "child hiding phone", "why kids don’t tell", "safe adult warning signs"],
    hiding: ["child hiding phone", "red flags", "why kids don’t tell"],
    robux: ["free robux scam safety", "roblox", "in-game currency risk"],
    gifting: ["in-game currency risk", "free robux scam safety", "digital gifting policy"],
    device: ["device safety", "device controls", "best control apps", "check a device calmly"],
    phone: ["device safety", "child hiding phone", "check a device calmly"],
    tablet: ["device safety", "device controls"],
    console: ["gaming safety", "xbox", "playstation", "nintendo"],
    discord: ["discord", "off-platform movement", "gaming safety"],
    snap: ["snapchat", "snapchat pressure scenarios"],
    tiktok: ["tiktok", "tiktok live"],
    tt: ["tiktok"],
    instagram: ["instagram", "instagram dms"],
    youtube: ["youtube", "youtube comments"],
    algorithm: ["algorithm risks", "screens & the brain", "why kids can’t stop scrolling"],
    quiz: ["safety score"],
    score: ["safety score"],
    check: ["safety score", "check a device calmly"],
    downloads: ["all pdf downloads", "download guides"],
    pdf: ["all pdf downloads", "download guides"],
    petition: ["digital gifting policy", "safer defaults policy"],
    report: ["report & get help", "save evidence", "reporting australia"],
    questions: ["parent questions", "parent scripts"],
    scripts: ["parent scripts", "how to talk", "what safe adults should say"],
    rules: ["house rules", "posh parent system"],
    disclaimer: ["warning & disclaimer"],
    warning: ["warning & disclaimer", "red flags", "safe adult warning signs"],
    support: ["support posh"],
    executive: ["executive functioning", "pause before reacting", "impulse control"],
    adhd: ["executive functioning", "adhd executive functioning"],
    autism: ["executive functioning", "asd executive functioning"],
    scenario: ["scenario training", "roblox scenarios", "sextortion scenarios"],

    grandparent: ["grandparents guide", "training for every adult", "safe adult warning signs"],
    grandparents: ["grandparents guide", "training for every adult", "what safe adults should say"],
    oldies: ["grandparents guide", "training for every adult"],
    elder: ["grandparents guide", "training for every adult"],
    elderly: ["grandparents guide", "training for every adult"],
    safeadult: ["training for every adult", "safe adult warning signs", "safe adult response system"],
    "safe adult": ["training for every adult", "safe adult warning signs", "safe adult response system"],
    carer: ["carers & guardians", "safe adult response system"],
    carers: ["carers & guardians", "safe adult response system"],
    guardian: ["carers & guardians", "safe adult response system"],
    teacher: ["teachers & school staff", "safe adult warning signs"],
    teachers: ["teachers & school staff", "safe adult warning signs"],
    school: ["teachers & school staff", "safe adult warning signs"],
    coach: ["coaches & activity leaders", "safe adult response system"],
    coaches: ["coaches & activity leaders", "safe adult response system"],
    sibling: ["older siblings guide", "what safe adults should say"],
    siblings: ["older siblings guide", "what safe adults should say"],
    babysitter: ["babysitters & sleepover adults", "safe adult response system"],
    babysitters: ["babysitters & sleepover adults", "safe adult response system"],
    sleepover: ["babysitters & sleepover adults", "safe adult warning signs"],
    mentor: ["youth workers & mentors", "safe adult response system"],
    mentors: ["youth workers & mentors", "safe adult response system"],
    "family friend": ["aunties, uncles & family friends", "safe adult warning signs"],
    auntie: ["aunties, uncles & family friends"],
    uncle: ["aunties, uncles & family friends"]
  };

  const PAGE_RELATIONS = {
    "index.html": [POSH.quiz, POSH.parentSystem, POSH.trainingEveryone, POSH.grandparents, POSH.safeAdultWarningSigns, POSH.urgentHelp],
    "v3-start.html": [POSH.safetyLanes, POSH.quiz, POSH.parentSystem, POSH.redFlags, POSH.devices, POSH.reporting],
    "v3-posh-safety-lanes.html": [POSH.urgentHelp, POSH.redFlags, POSH.platformRisks, POSH.parentSystem, POSH.onlineScenarios],
    "v3-posh-parent-system.html": [POSH.houseRules, POSH.monitorTrust, POSH.parentScripts, POSH.onlineScenarios, POSH.quiz],
    "v3-entry-system.html": [POSH.start, POSH.quiz, POSH.whatNow, POSH.response],
    "v3-what-to-do-now.html": [POSH.urgentHelp, POSH.reporting, POSH.redFlags, POSH.evidence],
    "v3-response-system.html": [POSH.whatNow, POSH.reporting, POSH.parentQuestions, POSH.redFlags],
    "v3-posh-response-system.html": [POSH.response, POSH.whatNow, POSH.reporting, POSH.parentQuestions],
    "v3-parent-questions.html": [POSH.redFlags, POSH.parentScripts, POSH.talkOnlineSafety],
    "v3-safety-score.html": [POSH.parentSystem, POSH.redFlags, POSH.devices, POSH.houseRules],

    "v3-online-safety-training-for-everyone.html": [POSH.grandparents, POSH.parentsTraining, POSH.safeAdultWarningSigns, POSH.safeAdultResponse, POSH.whatSafeAdultsSay, POSH.reporting],
    "v3-grandparents-online-safety.html": [POSH.trainingEveryone, POSH.safeAdultWarningSigns, POSH.whatSafeAdultsSay, POSH.parentScripts, POSH.devices],
    "v3-parents-online-safety-training.html": [POSH.parentSystem, POSH.houseRules, POSH.safeAdultWarningSigns, POSH.devices, POSH.parentScripts],
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

    "v3-what-to-do-if-your-child-is-in-danger-online.html": [POSH.first24, POSH.first24Legacy, POSH.blackmail, POSH.evidence, POSH.reporting],
    "v3-first-24-hours-online-incident.html": [POSH.first24Legacy, POSH.evidence, POSH.blackmail, POSH.reporting, POSH.parentScripts],
    "v3-first-24-hours.html": [POSH.first24, POSH.evidence, POSH.reporting, POSH.parentScripts, POSH.redFlags],
    "v3-my-child-is-being-blackmailed-online.html": [POSH.sextortion, POSH.sextortionLegacy, POSH.evidence, POSH.reporting, POSH.first24],
    "v3-kid-sending-photos-online-what-to-do.html": [POSH.blackmail, POSH.sextortionLegacy, POSH.evidence, POSH.reporting],
    "v3-sextortion.html": [POSH.blackmail, POSH.evidence, POSH.reporting, POSH.first24Legacy, POSH.parentScripts],
    "v3-what-is-sextortion.html": [POSH.sextortionLegacy, POSH.blackmail, POSH.evidence, POSH.reporting],
    "v3-evidence-reporting.html": [POSH.reporting, POSH.first24, POSH.first24Legacy, POSH.blackmail, POSH.urgentHelp],
    "v3-reporting.html": [POSH.evidence, POSH.first24, POSH.urgentHelp, POSH.redFlags],
    "v3-redflags.html": [POSH.tenSigns, POSH.groomingSigns, POSH.groomingSignsLegacy, POSH.safeAdultWarningSigns, POSH.playbook, POSH.whyKidsDontTell, POSH.reporting],
    "v3-10-signs-targeted-online.html": [POSH.redFlags, POSH.playbook, POSH.predatorWarning, POSH.reporting],
    "v3-10-signs.html": [POSH.tenSigns, POSH.redFlags, POSH.playbook, POSH.reporting],
    "v3-child-being-groomed-signs.html": [POSH.grooming, POSH.groomingSignsLegacy, POSH.redFlags, POSH.playbook, POSH.predatorWarning, POSH.parentScripts],
    "v3-signs-my-child-is-being-groomed-online.html": [POSH.grooming, POSH.groomingSigns, POSH.redFlags, POSH.playbook, POSH.evidence],
    "v3-signs-your-child-is-being-groomed.html": [POSH.grooming, POSH.groomingSigns, POSH.redFlags, POSH.playbook],
    "v3-grooming.html": [POSH.groomingSignsLegacy, POSH.playbook, POSH.evidence, POSH.reporting, POSH.parentScripts],
    "v3-online-predator-warning-signs.html": [POSH.redFlags, POSH.playbook, POSH.groomingSigns, POSH.reporting],
    "v3-playbook.html": [POSH.redFlags, POSH.tenSigns, POSH.predators, POSH.reporting, POSH.algorithm],
    "v3-predators.html": [POSH.playbook, POSH.redFlags, POSH.reporting, POSH.algorithm],

    "v3-platform-risks-overview.html": [POSH.roblox, POSH.discord, POSH.snapchat, POSH.gaming, POSH.devices],
    "v3-gaming.html": [POSH.allGames, POSH.roblox, POSH.discord, POSH.redFlags, POSH.playbook],
    "v3-game-roblox.html": [POSH.robuxScam, POSH.inGameCurrency, POSH.discord, POSH.redFlags, POSH.petitionDigitalGifting],
    "v3-free-robux-scam-safety.html": [POSH.roblox, POSH.inGameCurrency, POSH.groomingSigns, POSH.parentScripts],
    "v3-game-fortnite.html": [POSH.gaming, POSH.discord, POSH.redFlags],
    "v3-game-minecraft.html": [POSH.gaming, POSH.discord, POSH.redFlags],
    "v3-game-vrchat.html": [POSH.gaming, POSH.discord, POSH.redFlags],

    "v3-social-discord.html": [POSH.socials, POSH.offPlatform, POSH.gaming, POSH.redFlags],
    "v3-social-snapchat.html": [POSH.socials, POSH.snapchatScenarios, POSH.redFlags, POSH.reporting],
    "v3-social-instagram.html": [POSH.socials, POSH.instagramDmScenarios, POSH.redFlags],
    "v3-social-tiktok.html": [POSH.socials, POSH.algorithm, POSH.tiktokLiveScenarios, POSH.redFlags],
    "v3-social-youtube.html": [POSH.socials, POSH.algorithm, POSH.youtubeCommentScenarios, POSH.redFlags],

    "v3-devices.html": [POSH.deviceControls, POSH.bestParentalControlApps, POSH.houseRules, POSH.checkDeviceCalmly],
    "v3-device-controls.html": [POSH.devices, POSH.bestParentalControlApps, POSH.houseRules],
    "v3-best-parental-control-apps.html": [POSH.devices, POSH.houseRules, POSH.monitorTrust, POSH.redFlags],
    "v3-house-rules.html": [POSH.parentSystem, POSH.devices, POSH.monitorTrust, POSH.parentScripts],
    "v3-parent-scripts.html": [POSH.talkOnlineSafety, POSH.whyKidsDontTell, POSH.parentQuestions, POSH.whatSafeAdultsSay, POSH.redFlags],
    "v3-online-scenarios-training.html": [POSH.robloxScenarios, POSH.snapchatScenarios, POSH.sextortionScenarios, POSH.executiveFunctioning],
    "v3-executive-functioning.html": [POSH.onlineScenarios, POSH.pauseBeforeReacting, POSH.impulseControl, POSH.emotionalRegulation],

    "v3-awareness.html": [POSH.algorithm, POSH.investigations, POSH.redFlags],
    "v3-algorithm-awareness.html": [POSH.awareness, POSH.socials, POSH.redFlags],
    "v3-all-downloads.html": [POSH.downloadsLegacy, POSH.start, POSH.redFlags, POSH.devices, POSH.parentScripts],
    "v3-downloads.html": [POSH.downloads, POSH.start, POSH.redFlags, POSH.devices, POSH.parentScripts],
    "v3-support.html": [POSH.start, POSH.downloads, POSH.quiz, POSH.share],
    "v3-warning.html": [POSH.start, POSH.reporting, POSH.redFlags, POSH.downloads],
    "v3-why-posh-exists.html": [POSH.start, POSH.parentSystem, POSH.share, POSH.support]
  };

  /* =========================================================
     POSH ADDITIONS — REPORTING / SAFE ADULT / IMAGE SAFETY CLUSTER
     Append-only. Keeps legacy pages and existing systems alive.
  ========================================================= */

  Object.assign(POSH, {
    reportingUSA: "v3-reporting-usa.html",
    reportingUK: "v3-reporting-uk.html",
    reportingEurope: "v3-reporting-europe.html",

    officialReportingAustralia: "v3-official-reporting-pathways-australia.html",
    reportWithoutWorse: "v3-how-to-report-without-making-it-worse.html",
    evidenceMistakes: "v3-what-not-to-do-with-evidence.html",

    sadisticOnlineExploitation: "v3-sadistic-online-exploitation.html",
    aiNudifyDeepfakeRisks: "v3-ai-nudify-deepfake-risks.html",
    takeItDownImageRemoval: "v3-take-it-down-and-image-removal.html",
    firstDayPhotoSafety: "v3-first-day-photo-safety.html",

    safeAdultNetworkCard: "v3-safe-adult-network-card.html"
  });

  function poshFileKey(href) {
    return String(href || "")
      .split("#")[0]
      .split("?")[0]
      .replace(/^.*\//, "");
  }

  function addLinksToGroupByTitle(titlePart, links) {
    const group = NAV_GROUPS.find(item =>
      String(item.title || "").toLowerCase().includes(String(titlePart || "").toLowerCase())
    );

    if (!group || !Array.isArray(group.links)) return;

    const existing = new Set(group.links.map(link => poshFileKey(link.href)));

    links.forEach(link => {
      const key = poshFileKey(link.href);
      if (!key || existing.has(key)) return;

      group.links.push(link);
      existing.add(key);
    });
  }

  addLinksToGroupByTitle("Safe Adults", [
    {
      href: POSH.safeAdultNetworkCard,
      label: "Safe Adult Network Card",
      type: "Safe Adult",
      keywords: "safe adult network card village protect children trusted adults whole family"
    }
  ]);

  addLinksToGroupByTitle("Urgent Help", [
    {
      href: POSH.reportingUSA,
      label: "Reporting USA",
      type: "Reporting",
      keywords: "usa reporting ncmec cybertipline ic3 police child safety"
    },
    {
      href: POSH.reportingUK,
      label: "Reporting UK",
      type: "Reporting",
      keywords: "uk reporting ceop iwf childline police child safety"
    },
    {
      href: POSH.reportingEurope,
      label: "Reporting Europe",
      type: "Reporting",
      keywords: "europe reporting inhope national hotline police child safety"
    },
    {
      href: POSH.officialReportingAustralia,
      label: "Official Australia Pathways",
      type: "Reporting",
      keywords: "official reporting pathways australia accce esafety police 000 child safety"
    },
    {
      href: POSH.reportWithoutWorse,
      label: "Report Without Making It Worse",
      type: "Reporting",
      keywords: "how to report safely without making worse evidence escalation child safety"
    },
    {
      href: POSH.evidenceMistakes,
      label: "Evidence Mistakes",
      type: "Evidence",
      keywords: "what not to do with evidence do not forward delete post screenshots child safety"
    },
    {
      href: POSH.takeItDownImageRemoval,
      label: "Image Removal",
      type: "Image Safety",
      keywords: "take it down image removal ncmec esafety intimate image abuse child safety"
    },
    {
      href: POSH.firstDayPhotoSafety,
      label: "First-Day Photo Safety",
      type: "Image Safety",
      keywords: "first day photo safety school photos uniforms location privacy child images"
    },
    {
      href: POSH.aiNudifyDeepfakeRisks,
      label: "AI Deepfake Risks",
      type: "AI Safety",
      keywords: "ai nudify deepfake image abuse fake nude children online safety"
    },
    {
      href: POSH.sadisticOnlineExploitation,
      label: "Sadistic Online Exploitation",
      type: "Exploitation",
      keywords: "sadistic online exploitation coercion humiliation blackmail threats grooming"
    }
  ]);

  Object.assign(SEARCH_ALIASES, {
    "safe adult": ["safe adult network card", "safe adult response system", "what safe adults should say", "safe adult warning signs"],
    safeadult: ["safe adult network card", "safe adult response system"],
    village: ["safe adult network card", "training for every adult", "grandparents guide"],

    accce: ["official australia pathways", "reporting australia", "report & get help"],
    esafety: ["official australia pathways", "reporting australia", "image removal"],
    "official reporting": ["official australia pathways", "report & get help"],
    "report safely": ["report without making it worse", "evidence mistakes", "official australia pathways"],
    "making it worse": ["report without making it worse", "evidence mistakes"],

    evidence: ["save evidence", "evidence mistakes", "report without making it worse"],
    screenshots: ["save evidence", "evidence mistakes", "report without making it worse"],
    "do not forward": ["evidence mistakes", "image removal", "first-day photo safety"],
    "do not delete": ["evidence mistakes", "save evidence"],
    "what not": ["evidence mistakes"],

    deepfake: ["ai deepfake risks", "image removal", "first-day photo safety"],
    nudify: ["ai deepfake risks", "image removal"],
    "ai nude": ["ai deepfake risks", "image removal"],
    "fake image": ["ai deepfake risks", "image removal"],
    "take it down": ["image removal", "first-day photo safety"],
    takedown: ["image removal", "official australia pathways"],
    "image removal": ["image removal", "ai deepfake risks", "first-day photo safety"],

    sadistic: ["sadistic online exploitation", "blackmail or threats", "what is sextortion", "report & get help"],
    humiliation: ["sadistic online exploitation", "blackmail or threats", "evidence mistakes"],
    exploitation: ["sadistic online exploitation", "what is sextortion", "report & get help"]
  });

  Object.assign(PAGE_RELATIONS, {
    "v3-reporting.html": [
      POSH.officialReportingAustralia,
      POSH.reportingAustralia,
      POSH.reportingUSA,
      POSH.reportingUK,
      POSH.reportingEurope,
      POSH.reportWithoutWorse
    ],

    "v3-reporting-australia.html": [
      POSH.officialReportingAustralia,
      POSH.reportWithoutWorse,
      POSH.evidenceMistakes,
      POSH.evidence,
      POSH.first24Legacy
    ],

    "v3-reporting-usa.html": [
      POSH.reporting,
      POSH.evidence,
      POSH.reportWithoutWorse,
      POSH.first24Legacy,
      POSH.sextortionLegacy
    ],

    "v3-reporting-uk.html": [
      POSH.reporting,
      POSH.evidence,
      POSH.reportWithoutWorse,
      POSH.first24Legacy,
      POSH.sextortionLegacy
    ],

    "v3-reporting-europe.html": [
      POSH.reporting,
      POSH.evidence,
      POSH.reportWithoutWorse,
      POSH.first24Legacy,
      POSH.sextortionLegacy
    ],

    "v3-official-reporting-pathways-australia.html": [
      POSH.reportingAustralia,
      POSH.reportWithoutWorse,
      POSH.evidenceMistakes,
      POSH.takeItDownImageRemoval,
      POSH.evidence
    ],

    "v3-how-to-report-without-making-it-worse.html": [
      POSH.evidenceMistakes,
      POSH.evidence,
      POSH.officialReportingAustralia,
      POSH.reporting,
      POSH.parentScripts
    ],

    "v3-what-not-to-do-with-evidence.html": [
      POSH.evidence,
      POSH.reportWithoutWorse,
      POSH.first24Legacy,
      POSH.reporting,
      POSH.takeItDownImageRemoval
    ],

    "v3-take-it-down-and-image-removal.html": [
      POSH.aiNudifyDeepfakeRisks,
      POSH.firstDayPhotoSafety,
      POSH.evidenceMistakes,
      POSH.reporting,
      POSH.officialReportingAustralia
    ],

    "v3-ai-nudify-deepfake-risks.html": [
      POSH.takeItDownImageRemoval,
      POSH.evidenceMistakes,
      POSH.reportWithoutWorse,
      POSH.reporting,
      POSH.parentScripts
    ],

    "v3-first-day-photo-safety.html": [
      POSH.takeItDownImageRemoval,
      POSH.aiNudifyDeepfakeRisks,
      POSH.safeAdultNetworkCard,
      POSH.trainingEveryone,
      POSH.houseRules
    ],

    "v3-sadistic-online-exploitation.html": [
      POSH.blackmail,
      POSH.sextortionLegacy,
      POSH.evidence,
      POSH.reporting,
      POSH.parentScripts
    ],

    "v3-safe-adult-network-card.html": [
      POSH.trainingEveryone,
      POSH.safeAdultWarningSigns,
      POSH.safeAdultResponse,
      POSH.whatSafeAdultsSay,
      POSH.grandparents
    ]
  });

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
    return REDIRECT_MAP[getCurrentPath()] || getCurrentPath();
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

/* =========================================================
   POSH ADDITION — FREE CHILD-SAFETY CHECKS / ADULT ACCOUNTABILITY
   Adds official POSH position page into Safe Adult navigation.
========================================================= */

Object.assign(POSH, {
  freeChildSafetyChecksAccountability: "v3-free-child-safety-checks-safe-adult-accountability.html"
});

addLinksToGroupByTitle("Safe Adults", [
  {
    href: POSH.freeChildSafetyChecksAccountability,
    label: "Free Checks & Adult Accountability",
    type: "POSH Position",
    keywords: "free child safety checks working with children check safe adult accountability agreement safeguarding boundaries child protection false allegations transparency"
  }
]);

Object.assign(SEARCH_ALIASES, {
  "free checks": ["free checks & adult accountability", "training for every adult", "safe adult warning signs"],
  "working with children": ["free checks & adult accountability", "safe adult network card", "training for every adult"],
  "working with childrens": ["free checks & adult accountability", "safe adult network card", "training for every adult"],
  "wwcc": ["free checks & adult accountability", "training for every adult"],
  accountability: ["free checks & adult accountability", "safe adult network card", "safe adult response system"],
  "false allegations": ["free checks & adult accountability", "safe adult network card"],
  "safe adult agreement": ["free checks & adult accountability", "safe adult network card"],
  "child safety checks": ["free checks & adult accountability", "safe adult warning signs", "training for every adult"]
});

Object.assign(PAGE_RELATIONS, {
  "v3-free-child-safety-checks-safe-adult-accountability.html": [
    POSH.trainingEveryone,
    POSH.safeAdultNetworkCard,
    POSH.safeAdultWarningSigns,
    POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay,
    POSH.reporting
  ],

  "v3-online-safety-training-for-everyone.html": [
    POSH.freeChildSafetyChecksAccountability,
    POSH.grandparents,
    POSH.parentsTraining,
    POSH.safeAdultWarningSigns,
    POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay
  ],

  "v3-safe-adult-network-card.html": [
    POSH.freeChildSafetyChecksAccountability,
    POSH.trainingEveryone,
    POSH.safeAdultWarningSigns,
    POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay,
    POSH.grandparents
  ]
});

/* =========================================================
   POSH ADDITION — SAFE ADULT ACCOUNTABILITY STANDARD
   Adds the official standard page into Safe Adult navigation.
========================================================= */

Object.assign(POSH, {
  safeAdultAccountabilityStandard: "v3-posh-safe-adult-accountability-standard.html"
});

addLinksToGroupByTitle("Safe Adults", [
  {
    href: POSH.safeAdultAccountabilityStandard,
    label: "Safe Adult Accountability Standard",
    type: "POSH Standard",
    keywords: "posh safe adult accountability standard agreement qr code id verification child safety checks false misleading information malicious reports safeguarding"
  }
]);

Object.assign(SEARCH_ALIASES, {
  "safe adult standard": ["safe adult accountability standard", "free checks & adult accountability", "safe adult network card"],
  "accountability standard": ["safe adult accountability standard", "safe adult network card"],
  "posh standard": ["safe adult accountability standard", "training for every adult"],
  "qr code": ["safe adult accountability standard", "free checks & adult accountability"],
  "posh id": ["safe adult accountability standard", "free checks & adult accountability"],
  "misleading information": ["safe adult accountability standard", "free checks & adult accountability"],
  "false information": ["safe adult accountability standard", "free checks & adult accountability"],
  "malicious reports": ["safe adult accountability standard", "free checks & adult accountability"],
  "misuse": ["safe adult accountability standard", "free checks & adult accountability"]
});

Object.assign(PAGE_RELATIONS, {
  "v3-posh-safe-adult-accountability-standard.html": [
    POSH.freeChildSafetyChecksAccountability,
    POSH.safeAdultNetworkCard,
    POSH.safeAdultWarningSigns,
    POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay,
    POSH.reporting
  ],

  "v3-free-child-safety-checks-safe-adult-accountability.html": [
    POSH.safeAdultAccountabilityStandard,
    POSH.trainingEveryone,
    POSH.safeAdultNetworkCard,
    POSH.safeAdultWarningSigns,
    POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay
  ],

  "v3-safe-adult-network-card.html": [
    POSH.safeAdultAccountabilityStandard,
    POSH.freeChildSafetyChecksAccountability,
    POSH.trainingEveryone,
    POSH.safeAdultWarningSigns,
    POSH.safeAdultResponse,
    POSH.whatSafeAdultsSay
  ]
});
  /*
    Important:
    ALL_LINKS must be created after every NAV_GROUPS addition above.
    This keeps search, related links, breadcrumbs, and active nav working.
  */
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
    } catch (err) {}
  }

  function fixKnownBrokenInternalLinks(root = document) {
    qsa("a[href]", root).forEach(link => {
      const raw = link.getAttribute("href");

      if (
        !raw ||
        /^https?:\/\//i.test(raw) ||
        raw.startsWith("mailto:") ||
        raw.startsWith("tel:")
      ) {
        return;
      }

      const file = normalisePath(raw);
      if (!REDIRECT_MAP[file]) return;

      const hash = raw.includes("#") ? "#" + raw.split("#").slice(1).join("#") : "";
      link.setAttribute("href", REDIRECT_MAP[file] + hash);
      link.dataset.fixedOldHref = raw;
    });
  }

  function findLink(href) {
    const target = REDIRECT_MAP[normalisePath(href)] || normalisePath(href);
    return ALL_LINKS.find(link => normalisePath(link.href) === target) || null;
  }

  function getPageTitle() {
    const titleEl = qs("h1.page-title") || qs("h1");

    if (titleEl && safeText(titleEl.textContent)) {
      return safeText(titleEl.textContent);
    }

    return safeText(document.title.replace(/\s*[•|-]\s*POSH.*$/i, ""));
  }

  function getPageIntro() {
    const el =
      qs(".section-lead") ||
      qs(".tagline") ||
      qs(".intro") ||
      qs(".lead") ||
      qs(".page-intro") ||
      qs(".card p");

    return el ? safeText(el.textContent).slice(0, 240) : "";
  }

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

  function shouldInjectGlobalHero() {
    if (existingHeroAlreadyPresent()) return false;
    if (!qs(".wrap")) return false;
    return true;
  }

  function injectGlobalHeroBanner() {
    if (!shouldInjectGlobalHero()) return;

    const wrap = qs(".wrap");

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
              <span class="posh-global-hero-fallback-sub">Back to Home</span>
            </span>
          </a>
        `;
      }
    );
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
            aria-label="Search POSH"
          />
          <button type="button" id="poshSearchClear" class="nav-search-clear" aria-label="Clear search">×</button>
          <div id="poshSearchResults" class="nav-search-results" hidden></div>
        </div>

        <div class="nav-primary-cta-row">
          <a href="${POSH.safetyLanes}" class="nav-primary-cta" data-track="nav_safety_lanes">Choose Safety Path</a>
          <a href="${POSH.quiz}" class="nav-primary-cta secondary" data-track="nav_quiz">Safety Score</a>
          <a href="${POSH.urgentHelp}" class="nav-primary-cta tertiary" data-track="nav_urgent">Urgent Help</a>
        </div>

        <div class="nav-support-row">
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
      const href =
        REDIRECT_MAP[normalisePath(anchor.getAttribute("href"))] ||
        normalisePath(anchor.getAttribute("href"));

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
      if (event.key !== "Escape") return;

      groups.forEach(group => {
        group.open = false;
      });
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

    if (mq.addEventListener) {
      mq.addEventListener("change", () => {
        if (!mq.matches) {
          groups.forEach(group => {
            group.open = false;
          });
        }
      });
    }
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
        showResults(`<div class="nav-search-empty">No matches for "<strong>${escapeHtml(query)}</strong>"</div>`);
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

    const shareBtn = qs(".nav-share-trigger", host);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  function injectBreadcrumbs() {
    if (currentLivePath() === POSH.home || qs(".posh-breadcrumbs")) return;

    const currentLink = findLink(currentLivePath());
    if (!currentLink) return;

    const group = NAV_GROUPS.find(g =>
      g.links.some(link => normalisePath(link.href) === currentLivePath())
    );

    const bread = document.createElement("nav");
    bread.className = "posh-breadcrumbs";
    bread.setAttribute("aria-label", "Breadcrumb");

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
    showMiniToast._timer = setTimeout(() => toast.classList.remove("visible"), 1600);
  }

  async function copyCurrentLink() {
    try {
      await navigator.clipboard.writeText(location.href);
      maybeTrack("copy_link");
      showMiniToast("Link copied");
    } catch (err) {
      showMiniToast("Copy not available");
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
    } catch (err) {}
  }

  function injectStickyActionBar() {
    if (qs(".posh-action-bar")) return;

    const bar = document.createElement("div");
    bar.className = "posh-action-bar";

    bar.innerHTML = `
      <a href="${POSH.quiz}" class="posh-action-btn" data-track="sticky_quiz">Safety Score</a>
      <a href="${POSH.urgentHelp}" class="posh-action-btn" data-track="sticky_urgent">Urgent Help</a>
      <button type="button" class="posh-action-btn" id="poshStickyShare" data-track="sticky_share">Share</button>
      <a href="${POSH.support}" class="posh-action-btn support" data-track="sticky_support">Support</a>
    `;

    document.body.appendChild(bar);

    qsa("[data-track]", bar).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });

    const shareBtn = qs("#poshStickyShare", bar);
    if (shareBtn) shareBtn.addEventListener("click", nativeShare);
  }

  function buildRelatedCardsHtml() {
    const related = (PAGE_RELATIONS[currentLivePath()] || [])
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
      el.addEventListener("click", () => {
        maybeTrack("related_click", { label: el.getAttribute("href") || "" });
      });
    });
  }

  function injectSharePanel() {
    if (qs(".posh-share-panel")) return;
    if (currentLivePath() === POSH.home) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const panel = document.createElement("section");
    panel.className = "posh-share-panel";

    panel.innerHTML = `
      <h2>Help another parent or safe adult find this earlier</h2>
      <p>Many families only start searching after something feels wrong. Sharing POSH can help another parent, grandparent, carer, teacher, coach, or trusted adult recognise the pattern sooner.</p>
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
    if (page === POSH.home) {
      return null;
    }

    const safeAdultPages = [
  POSH.trainingEveryone,
  POSH.grandparents,
  POSH.parentsTraining,
  POSH.carersTraining,
  POSH.teachersTraining,
  POSH.coachesTraining,
  POSH.familyNetworkGuide,
  POSH.olderSiblings,
  POSH.youthWorkers,
  POSH.babysitters,
  POSH.safeAdultWarningSigns,
  POSH.safeAdultResponse,
  POSH.whatSafeAdultsSay,
  POSH.safeAdultNetworkCard,
  POSH.freeChildSafetyChecksAccountability
    ];

    if (safeAdultPages.includes(page)) {
      return {
        title: "Build the same safety language around the child",
        text: "Children are safer when every trusted adult knows the warning signs, stays calm, avoids shame, and knows when to involve the right adult or reporting pathway.",
        actions: [
          { href: POSH.safeAdultWarningSigns, label: "Warning Signs" },
          { href: POSH.safeAdultResponse, label: "Safe Adult Response" },
          { href: POSH.whatSafeAdultsSay, label: "What To Say" },
          { href: POSH.trainingEveryone, label: "Training Hub" }
        ]
      };
    }

    const reportPages = [
      POSH.reporting,
      POSH.reportingAustralia,
      POSH.reportingUSA,
      POSH.reportingUK,
      POSH.reportingEurope,
      POSH.officialReportingAustralia,
      POSH.reportWithoutWorse,
      POSH.evidenceMistakes
    ];

    if (reportPages.includes(page)) {
      return {
        title: "Report calmly and keep the order right",
        text: "Good reporting starts with safety, evidence, the right pathway, and avoiding steps that could spread harm or make the situation harder to manage.",
        actions: [
          { href: POSH.evidence, label: "Save Evidence" },
          { href: POSH.evidenceMistakes, label: "Evidence Mistakes" },
          { href: POSH.reportWithoutWorse, label: "Report Safely" },
          { href: POSH.reporting, label: "Report & Get Help" }
        ]
      };
    }

    const imageSafetyPages = [
      POSH.takeItDownImageRemoval,
      POSH.aiNudifyDeepfakeRisks,
      POSH.firstDayPhotoSafety
    ];

    if (imageSafetyPages.includes(page)) {
      return {
        title: "Image safety needs calm, careful steps",
        text: "When images are involved, avoid spreading, forwarding, reposting, or threatening. Preserve what is needed, reduce exposure, and use the right reporting or removal pathway.",
        actions: [
          { href: POSH.takeItDownImageRemoval, label: "Image Removal" },
          { href: POSH.evidenceMistakes, label: "Evidence Mistakes" },
          { href: POSH.reporting, label: "Report & Get Help" },
          { href: POSH.parentScripts, label: "Parent Scripts" }
        ]
      };
    }

    if (
      page === POSH.urgentHelp ||
      page === POSH.first24 ||
      page === POSH.first24Legacy ||
      page === POSH.blackmail ||
      page === POSH.photos ||
      page === POSH.evidence ||
      page === POSH.sadisticOnlineExploitation
    ) {
      return {
        title: "Stay calm and move in order",
        text: "In serious situations, the safest next step is calm structure: support your child, preserve evidence, reduce contact, and report through the right pathway.",
        actions: [
          { href: POSH.evidence, label: "Save Evidence" },
          { href: POSH.reporting, label: "Report & Get Help" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.first24Legacy, label: "First 24 Hours" }
        ]
      };
    }

    if (/^v3-game-/.test(page) || page === POSH.gaming || page === POSH.robuxScam || page === POSH.inGameCurrency) {
      return {
        title: "Don’t stop at the game itself",
        text: "Game risk often moves through voice chat, gifting, private messages, Discord, Snapchat, or another platform. Check the wider pathway.",
        actions: [
          { href: POSH.platformRisks, label: "Platform Overview" },
          { href: POSH.discord, label: "Discord" },
          { href: POSH.redFlags, label: "Red Flags" },
          { href: POSH.parentScripts, label: "Parent Scripts" }
        ]
      };
    }

    if (/^v3-social-/.test(page) || page === POSH.socials || page === POSH.platformRisks) {
      return {
        title: "Connect app awareness to family rules",
        text: "Understanding the app is only part of the job. Safer settings, visible devices, clear rules, and calm conversations matter too.",
        actions: [
          { href: POSH.houseRules, label: "House Rules" },
          { href: POSH.devices, label: "Device Safety" },
          { href: POSH.redFlags, label: "Red Flags" },
          { href: POSH.monitorTrust, label: "Monitor With Trust" }
        ]
      };
    }

    if (page === POSH.devices || page === POSH.deviceControls || page === POSH.bestParentalControlApps) {
      return {
        title: "Controls work best with conversations",
        text: "Settings reduce exposure, but children still need rules, trust, visibility, and words they can use when pressure appears.",
        actions: [
          { href: POSH.houseRules, label: "House Rules" },
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.platformRisks, label: "Platform Risks" },
          { href: POSH.quiz, label: "Safety Score" }
        ]
      };
    }

    if (
      page === POSH.redFlags ||
      page === POSH.tenSigns ||
      page === POSH.tenSignsLegacy ||
      page === POSH.grooming ||
      page === POSH.groomingSigns ||
      page === POSH.groomingSignsLegacy ||
      page === POSH.groomingSignsAlt ||
      page === POSH.playbook ||
      page === POSH.predatorWarning
    ) {
      return {
        title: "Turn warning signs into calm action",
        text: "Warning signs are not about panic. Use them to slow the situation down, ask better questions, check visibility, and act earlier.",
        actions: [
          { href: POSH.parentScripts, label: "Parent Scripts" },
          { href: POSH.checkDeviceCalmly, label: "Check Device Calmly" },
          { href: POSH.urgentHelp, label: "Urgent Help" },
          { href: POSH.evidence, label: "Save Evidence" }
        ]
      };
    }

    return {
      title: "Next safety steps",
      text: "Move from awareness into action with the pages that reduce risk fastest.",
      actions: [
        { href: POSH.safetyLanes, label: "Choose Safety Path" },
        { href: POSH.quiz, label: "Safety Score" },
        { href: POSH.parentSystem, label: "Parent System" },
        { href: POSH.downloads, label: "All PDF Downloads" }
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
        ${cta.actions.map(action => `
          <a href="${action.href}" data-track="smart_cta_click">${escapeHtml(action.label)}</a>
        `).join("")}
      </div>
    `;

    wrap.appendChild(section);

    qsa('[data-track="smart_cta_click"]', section).forEach(el => {
      el.addEventListener("click", () => {
        maybeTrack("smart_cta_click", { label: el.getAttribute("href") || "" });
      });
    });
  }

  function injectSupportStrip() {
    if (qs(".posh-support-strip")) return;
    if (currentLivePath() === POSH.home) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const strip = document.createElement("section");
    strip.className = "posh-support-strip";

    strip.innerHTML = `
      <div class="posh-support-strip-inner">
        <strong>If POSH helped you think clearer, help keep it available for the next family.</strong>
        <div class="posh-support-strip-actions">
          <a href="${POSH.support}" data-track="support_strip_support">Support POSH</a>
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
    const hero = qs(".home-intro-hero") || qs(".home-intro") || qs(".card.hero") || qs(".hero-card");
    if (!hero) return;
    if (qs(".posh-hero-actions", hero)) return;
    if (qs(".btn-grid a, .btn-row a, a.btn", hero)) return;

    const box = document.createElement("div");
    box.className = "posh-hero-actions";

    box.innerHTML = `
      <a href="${POSH.safetyLanes}" data-track="hero_safety_lanes">Choose Safety Path</a>
      <a href="${POSH.quiz}" class="secondary" data-track="hero_quiz">Safety Score</a>
      <a href="${POSH.urgentHelp}" class="ghost" data-track="hero_urgent">Urgent Help</a>
    `;

    hero.appendChild(box);

    qsa("[data-track]", box).forEach(el => {
      el.addEventListener("click", () => maybeTrack(el.getAttribute("data-track")));
    });
  }

  function injectSupportFooterPrompt() {
    if (qs(".posh-footer-prompt")) return;
    if (currentLivePath() === POSH.home) return;

    const wrap = qs(".wrap");
    if (!wrap) return;

    const footer = document.createElement("section");
    footer.className = "posh-footer-prompt";

    footer.innerHTML = `
      <p><strong>POSH is built for families.</strong> Support helps build more tools, clearer guides, printable downloads, and safer pathways for parents and safe adults who land here overwhelmed.</p>
      <div class="posh-footer-prompt-actions">
        <a href="${POSH.support}" data-track="footer_support">Support POSH</a>
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

  function ensureBodyFlags() {
    const current = currentLivePath();
    const page = current.replace(/\.html$/i, "") || "home";

    document.body.classList.add("js-ready");
    document.body.dataset.page = page;

    if (current === POSH.home) document.body.classList.add("home-page");
    if (/^v3-game-/.test(current)) document.body.classList.add("page-is-game");
    if (/^v3-social-/.test(current)) document.body.classList.add("page-is-social");
    if (current === POSH.devices || current === POSH.deviceControls) document.body.classList.add("page-is-device");

    if ([
      POSH.urgentHelp,
      POSH.first24,
      POSH.first24Legacy,
      POSH.blackmail,
      POSH.photos,
      POSH.evidence,
      POSH.sadisticOnlineExploitation
    ].includes(current)) {
      document.body.classList.add("page-is-urgent");
    }

   if ([
  POSH.trainingEveryone,
  POSH.grandparents,
  POSH.parentsTraining,
  POSH.carersTraining,
  POSH.teachersTraining,
  POSH.coachesTraining,
  POSH.familyNetworkGuide,
  POSH.olderSiblings,
  POSH.youthWorkers,
  POSH.babysitters,
  POSH.safeAdultWarningSigns,
  POSH.safeAdultResponse,
  POSH.whatSafeAdultsSay,
  POSH.safeAdultNetworkCard,
  POSH.freeChildSafetyChecksAccountability
].includes(current)) {
  document.body.classList.add("page-is-safe-adult");
}

    if ([
      POSH.reporting,
      POSH.reportingAustralia,
      POSH.reportingUSA,
      POSH.reportingUK,
      POSH.reportingEurope,
      POSH.officialReportingAustralia,
      POSH.reportWithoutWorse,
      POSH.evidenceMistakes
    ].includes(current)) {
      document.body.classList.add("page-is-reporting");
    }

    if ([
      POSH.takeItDownImageRemoval,
      POSH.aiNudifyDeepfakeRisks,
      POSH.firstDayPhotoSafety
    ].includes(current)) {
      document.body.classList.add("page-is-image-safety");
    }
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

  function trackPageView() {
    maybeTrack("page_view_enhanced", { label: currentLivePath() });
  }

  function safeInit(fn) {
    try {
      fn();
    } catch (err) {
      console.error("[POSH app.js]", err);
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
(function () {
  "use strict";

  const HERO_IMAGE = "https://poshaussie.com.au/posh-hero.png";
  const HOME_URL = "index.html";

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
        <summary>Start &amp; Safety</summary>
        <nav>
          <a href="index.html" data-type="Home" data-keywords="home posh parents online safety hub">Home</a>
          <a href="v3-start.html" data-type="Start" data-keywords="start safety first steps parent help online safety">Start Here</a>
          <a href="v3-entry-system.html" data-type="System" data-keywords="entry system start guide pathway">Entry System</a>
          <a href="v3-what-now.html" data-type="Action Hub" data-keywords="what now worried child online next step action hub">What To Do Now</a>
          <a href="v3-posh-response-system.html" data-type="System" data-keywords="posh response system notice check secure talk monitor escalate">POSH Response System</a>
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
          <a href="v3-how-to-talk-so-your-child-opens-up.html" data-type="Trust" data-keywords="opens up child trust disclosure conversation">How To Talk So Your Child Opens Up</a>
          <a href="v3-what-to-say-if-your-child-opens-up.html" data-type="Scripts" data-keywords="what to say if your child opens up disclosure response">If Your Child Opens Up</a>
          <a href="v3-what-to-say-if-your-child-thinks-it-was-their-fault.html" data-type="Scripts" data-keywords="child thinks it was their fault shame blame scripts">If They Think It Was Their Fault</a>
          <a href="v3-what-to-say-if-your-child-is-embarrassed-to-tell-you.html" data-type="Scripts" data-keywords="child embarrassed to tell you shame awkward scripts">If They Feel Embarrassed</a>
          <a href="v3-when-your-child-wont-talk.html" data-type="Trust" data-keywords="child wont talk shutdown silence parent help">When Your Child Won’t Talk</a>
          <a href="v3-why-kids-hide-things.html" data-type="Behaviour" data-keywords="why kids hide things secrecy fear shame">Why Kids Hide Things</a>
          <a href="v3-why-behaviour-changes.html" data-type="Behaviour" data-keywords="behaviour changes warning signs mood change">Why Behaviour Changes</a>
          <a href="v3-how-to-check-a-device-without-causing-panic.html" data-type="Devices" data-keywords="check device without panic inspect calmly">Check a Device Without Causing Panic</a>
          <a href="v3-how-to-rebuild-trust-after-an-online-incident.html" data-type="Trust" data-keywords="rebuild trust after online incident scare">Rebuild Trust After an Online Incident</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Apps &amp; Social Media</summary>
        <nav>
          <a href="v3-socials.html" data-type="Social Media" data-keywords="social media apps overview risks">All Socials</a>
          <a href="v3-all-applications.html" data-type="Apps" data-keywords="all apps applications app risks">All Applications</a>
          <a href="v3-dangerous-apps.html" data-type="Apps" data-keywords="dangerous apps high risk apps kids private messaging stranger access">Dangerous Apps</a>
          <a href="v3-safe-apps-and-games-for-kids.html" data-type="Apps" data-keywords="safe apps safe games kids safer options">Safe Apps &amp; Games</a>
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
        <summary>Games &amp; Platforms</summary>
        <nav>
          <a href="v3-gaming.html" data-type="Gaming" data-keywords="gaming games risks kids predators voice chat">Gaming</a>
          <a href="v3-all-games.html" data-type="Games" data-keywords="all games game list risks">All Games</a>
          <a href="v3-game-risks-by-age.html" data-type="Games" data-keywords="games by age guide risk by age">Games by Age Guide</a>
          <a href="v3-game-roblox.html" data-type="Game" data-keywords="roblox robux private chat predators">Roblox</a>
          <a href="v3-why-roblox-requires-supervision.html" data-type="Game" data-keywords="why roblox requires supervision roblox safety">Why Roblox Requires Supervision</a>
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
        <summary>Devices &amp; Controls</summary>
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
        <summary>Awareness &amp; Deep Dive</summary>
        <nav>
          <a href="v3-awareness.html" data-type="Awareness" data-keywords="awareness risks education parents">Awareness</a>
          <a href="v3-algorithm-awareness.html" data-type="Awareness" data-keywords="algorithm awareness feed recommendation manipulation">Algorithm Awareness</a>
          <a href="v3-how-screens-affect-your-childs-brain.html" data-type="Awareness" data-keywords="how screens affect your childs brain dopamine boredom reactivity attention screen time effects">How Screens Affect the Brain</a>
          <a href="v3-brainrot.html" data-type="Awareness" data-keywords="brainrot short form content attention kids">Brain Rot</a>
          <a href="v3-why-kids-cant-stop-scrolling.html" data-type="Awareness" data-keywords="why kids cant stop scrolling dopamine reels shorts tiktok">Why Kids Can’t Stop Scrolling</a>
          <a href="v3-how-manipulative-groups-recruit-children-online.html" data-type="Awareness" data-keywords="manipulative groups recruit children online cult recruitment belonging secrecy">Manipulative Group Recruitment</a>
          <a href="v3-how-attention-is-used-to-control-behaviour.html" data-type="Awareness" data-keywords="how attention is used to control behaviour dopamine influence emotional triggers repeated exposure">How Attention Shapes Behaviour</a>
          <a href="v3-targeted-harassment-and-false-reports.html" data-type="Awareness" data-keywords="targeted harassment false reports malicious reporting family targeting">Targeted Harassment &amp; False Reports</a>
          <a href="v3-predators.html" data-type="Awareness" data-keywords="predators online child safety">Predators</a>
          <a href="v3-sextortion.html" data-type="Awareness" data-keywords="sextortion blackmail nude image threats">Sextortion</a>
          <a href="v3-grooming.html" data-type="Awareness" data-keywords="grooming what is grooming stages">Grooming</a>
          <a href="v3-definitions.html" data-type="Definitions" data-keywords="definitions glossary terms online safety">Definitions</a>
          <a href="v3-real-investigations.html" data-type="Awareness" data-keywords="real investigations case examples">Real Investigations</a>
          <a href="v3-medication-vs-environment.html" data-type="Awareness" data-keywords="medication vs environment routine structure adhd melatonin">Medication vs Environment</a>
          <a href="v3-diagnosis-without-shame.html" data-type="Awareness" data-keywords="diagnosis without shame label understanding neurodivergent child">Diagnosis Without Shame</a>
          <a href="v3-parent-absence.html" data-type="Awareness" data-keywords="parent absence child emotional impact support">Parent Absence</a>
          <a href="v3-teen-suicide-warning-signs.html" data-type="Awareness" data-keywords="teen suicide warning signs mental health red flags">Teen Suicide Warning Signs</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Downloads &amp; Support</summary>
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
          <a href="v3-warning.html" data-type="Warning" data-keywords="warning disclaimer important">Warning &amp; Disclaimer</a>
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
          <a class="btn secondary" href="https://www.facebook.com/sharer/sharer.php?u=https://poshaussie.com.au" target="_blank" rel="noopener">📢 Share on Facebook</a>
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
      title: "Parents Online Safety Hub",
      subtitle: "Clear online child safety guidance for parents, carers, and families.",
      next: [
        { href: "v3-start.html", label: "Start Here" },
        { href: "v3-safety-score.html", label: "Safety Score", secondary: true },
        { href: "v3-what-now.html", label: "What To Do Now", secondary: true }
      ]
    },

    "v3-start.html": { cluster: "entry", title: "Start Here", subtitle: "Begin with the clearest first step for your situation." },
    "v3-entry-system.html": { cluster: "entry", title: "Entry System", subtitle: "Use the structured POSH entry flow to find the right lane." },
    "v3-safety-score.html": { cluster: "entry", title: "Safety Check", subtitle: "10 quick checks. Clear score. Clear next step." },
    "v3-what-now.html": { cluster: "entry", title: "What To Do Now", subtitle: "Choose the next move that fits what you are seeing right now." },
    "v3-posh-response-system.html": { cluster: "entry", title: "POSH Response System", subtitle: "Notice, check, secure, talk, monitor, escalate." },

    "v3-redflags.html": { cluster: "warning", title: "Online Red Flags Parents Should Never Ignore", subtitle: "Learn the warning signs earlier so you can interrupt the pattern sooner." },
    "v3-10-signs-targeted-online.html": { cluster: "warning", title: "10 Signs Your Child May Be Targeted Online", subtitle: "Spot the pattern before it becomes harder to stop." },
    "v3-signs-my-child-is-being-groomed-online.html": { cluster: "warning", title: "Signs Your Child Is Being Groomed Online", subtitle: "Recognise the real signs of grooming, secrecy, and growing dependence." },
    "v3-how-predators-contact-kids-online.html": { cluster: "warning", title: "How Predators Contact Kids Online", subtitle: "See how contact starts, builds trust, and moves into private spaces." },
    "v3-when-an-online-friend-becomes-a-risk.html": { cluster: "warning", title: "When an Online Friend Becomes a Risk", subtitle: "Know when friendly contact stops being harmless." },
    "v3-signs-your-child-is-being-isolated-online.html": { cluster: "warning", title: "Signs Your Child Is Being Isolated Online", subtitle: "Notice the emotional and behavioural shifts that often come first." },
    "v3-urgent-warning-signs.html": { cluster: "warning", title: "Urgent Warning Signs", subtitle: "The signs that should move parents from watching mode into action mode." },
    "v3-grooming.html": { cluster: "warning", title: "Grooming Signs & What To Do", subtitle: "Know the pattern. Stay calm. Act early." },
    "v3-playbook.html": { cluster: "warning", title: "Grooming Playbook", subtitle: "Understand how grooming and manipulation usually escalate." },
    "v3-predators.html": { cluster: "warning", title: "Predators", subtitle: "Learn the behaviours, contact patterns, and risks parents should understand." },

    "v3-parent-scripts.html": { cluster: "conversation", title: "Parent Scripts", subtitle: "Use calmer words that help children stay open." },
    "v3-parent-conversations.html": { cluster: "conversation", title: "Parent Conversations", subtitle: "Build trust and keep the conversation going." },
    "v3-how-to-talk-so-your-child-opens-up.html": { cluster: "conversation", title: "How To Talk So Your Child Opens Up", subtitle: "Make honesty feel safer than hiding." },
    "v3-what-to-say-if-your-child-opens-up.html": { cluster: "conversation", title: "If Your Child Opens Up", subtitle: "The first response matters more than most parents realise." },
    "v3-what-to-say-if-your-child-thinks-it-was-their-fault.html": { cluster: "conversation", title: "If They Think It Was Their Fault", subtitle: "Remove blame immediately and keep the child talking." },
    "v3-what-to-say-if-your-child-is-embarrassed-to-tell-you.html": { cluster: "conversation", title: "If They Feel Embarrassed", subtitle: "Lower pressure and make disclosure feel safer again." },
    "v3-when-your-child-wont-talk.html": { cluster: "conversation", title: "When Your Child Won’t Talk", subtitle: "Reduce pressure, rebuild safety, and keep the door open." },
    "v3-why-kids-hide-things.html": { cluster: "conversation", title: "Why Kids Hide Things", subtitle: "Understand the fear, shame, secrecy, and pressure underneath." },
    "v3-why-behaviour-changes.html": { cluster: "conversation", title: "Why Behaviour Changes", subtitle: "Behaviour shifts often show the pressure before the words do." },

    "v3-first-24-hours.html": { cluster: "urgent", title: "What Parents Should Do in the First 24 Hours", subtitle: "Stay calm, protect the child, preserve evidence, and act in the right order." },
    "v3-evidence-reporting.html": { cluster: "urgent", title: "What Evidence Parents Should Save Before Reporting", subtitle: "Save the right things before they disappear." },
    "v3-sextortion.html": { cluster: "urgent", title: "Sextortion", subtitle: "What parents should do if threats, pressure, or blackmail are already active." },
    "v3-when-it-goes-deeper.html": { cluster: "urgent", title: "When It Goes Deeper", subtitle: "What to do when the situation becomes more serious emotionally or psychologically." },

    "v3-reporting.html": { cluster: "reporting", title: "Report & Get Help", subtitle: "Protect first. Preserve evidence. Use the right reporting lane." },
    "v3-reporting-australia.html": { cluster: "reporting", title: "Reporting Australia", subtitle: "Australia-specific reporting pathways and next steps." },
    "v3-reporting-usa.html": { cluster: "reporting", title: "Reporting USA", subtitle: "USA-specific reporting pathways and next steps." },
    "v3-reporting-uk.html": { cluster: "reporting", title: "Reporting UK", subtitle: "UK-specific reporting pathways and next steps." },
    "v3-reporting-europe.html": { cluster: "reporting", title: "Reporting Europe", subtitle: "Europe-specific reporting pathways and next steps." },

    "v3-social-discord.html": { cluster: "social", title: "Discord", subtitle: "Servers, DMs, voice chat, and private movement can escalate risk fast." },
    "v3-social-snapchat.html": { cluster: "social", title: "Snapchat", subtitle: "Disappearing messages, pressure, and private contact can hide risk quickly." },
    "v3-social-instagram.html": { cluster: "social", title: "Instagram", subtitle: "DMs, reels, stranger reach, and repeated algorithm exposure all matter." },
    "v3-social-tiktok.html": { cluster: "social", title: "TikTok", subtitle: "Short-form exposure, trends, and algorithm influence move faster than most parents expect." },
    "v3-social-telegram.html": { cluster: "social", title: "Telegram", subtitle: "Private messaging and hidden movement can reduce parent visibility quickly." },
    "v3-social-whatsapp.html": { cluster: "social", title: "WhatsApp", subtitle: "Private group chats and direct messaging matter more than many parents realise." },
    "v3-social-youtube.html": { cluster: "social", title: "YouTube", subtitle: "Content exposure, Shorts, and repeated influence can shape behaviour over time." },
    "v3-social-yubo.html": { cluster: "social", title: "Yubo", subtitle: "Teen social contact and stranger access create a higher-risk environment." },

    "v3-gaming.html": { cluster: "game", title: "Gaming", subtitle: "Games are often the doorway. Private contact is where the bigger risk grows." },
    "v3-all-games.html": { cluster: "game", title: "All Games", subtitle: "Find the game and move quickly into the right safety page." },
    "v3-game-risks-by-age.html": { cluster: "game-guide", title: "Games by Age Guide", subtitle: "Age matters, but communication risk matters even more." },
    "v3-game-roblox.html": { cluster: "game", title: "Roblox", subtitle: "Robux, chat, gifting, and off-platform movement can create real risk." },
    "v3-why-roblox-requires-supervision.html": { cluster: "game", title: "Why Roblox Requires Supervision", subtitle: "Roblox needs stronger parent visibility than most families realise." },
    "v3-game-fortnite.html": { cluster: "game", title: "Fortnite", subtitle: "Voice chat, squads, and off-platform movement matter more than the game alone." },
    "v3-game-minecraft.html": { cluster: "game", title: "Minecraft", subtitle: "Servers, chat, and who has access to your child all matter." },
    "v3-game-vrchat.html": { cluster: "game", title: "VRChat", subtitle: "Voice, avatars, immersion, and stranger access can escalate risk quickly." },
    "v3-game-apex.html": { cluster: "game", title: "Apex Legends", subtitle: "Team contact and voice communication can build familiarity fast." },

    "v3-devices.html": { cluster: "controls", title: "Devices", subtitle: "Start with the device first. Then tighten apps, communication, and routines." },
    "v3-device-controls.html": { cluster: "controls", title: "Device Controls", subtitle: "Use device settings to reduce exposure and improve visibility fast." },
    "v3-parental-controls-by-device.html": { cluster: "controls", title: "Parental Controls by Device", subtitle: "Choose your device and lock down the biggest exposure points first." },
    "v3-parental-controls.html": { cluster: "controls", title: "Parental Controls", subtitle: "Controls help — but they are not the full solution." },
    "v3-device-iphone.html": { cluster: "controls", title: "iPhone", subtitle: "Use iPhone settings to reduce hidden access and improve visibility." },
    "v3-device-ipad.html": { cluster: "controls", title: "iPad", subtitle: "Use iPad settings to build safer defaults for children." },
    "v3-device-android.html": { cluster: "controls", title: "Android", subtitle: "Use Android and Family Link settings to tighten risk pathways." },
    "v3-device-windows.html": { cluster: "controls", title: "Windows", subtitle: "Use Microsoft family settings to control access and visibility." },
    "v3-how-to-set-parental-controls-iphone.html": { cluster: "controls", title: "Set Parental Controls iPhone", subtitle: "Tighten iPhone restrictions, privacy, and app access properly." },
    "v3-how-to-set-parental-controls-android.html": { cluster: "controls", title: "Set Parental Controls Android", subtitle: "Tighten Android restrictions, privacy, and app access properly." },
    "v3-best-parental-control-apps.html": { cluster: "controls", title: "Best Parental Control Apps", subtitle: "Choose the tools that match your real visibility needs." },

    "v3-awareness.html": { cluster: "awareness", title: "Awareness", subtitle: "Understand the digital environment more clearly so you can act earlier." },
    "v3-algorithm-awareness.html": { cluster: "awareness", title: "Algorithm Awareness", subtitle: "Learn how repeated exposure influences what children see and feel." },
    "v3-how-screens-affect-your-childs-brain.html": { cluster: "screens", title: "How Screens Affect the Brain", subtitle: "Understand stimulation, boredom, attention, and emotional reactivity." },
    "v3-brainrot.html": { cluster: "screens", title: "Brain Rot", subtitle: "Short-form content trains the brain to expect constant stimulation." },
    "v3-dangerous-apps.html": { cluster: "high-risk-tech", title: "Dangerous Apps", subtitle: "Some apps make stranger access, hidden movement, and private contact much easier." },
    "v3-safe-apps-and-games-for-kids.html": { cluster: "safe-tech", title: "Safe Apps & Games", subtitle: "Safer does not mean zero risk — but it does mean fewer risky pathways." },
    "v3-ai-chat-risks-for-children.html": { cluster: "ai", title: "AI Chat Risks for Children", subtitle: "Understand how AI chat can change privacy, dependence, and disclosure." },
    "v3-is-chatgpt-safe-for-kids.html": { cluster: "ai", title: "Is ChatGPT Safe for Kids?", subtitle: "Safe use depends on age, purpose, supervision, and healthy boundaries." },
    "v3-ai-fake-relationships.html": { cluster: "ai", title: "AI Fake Relationships", subtitle: "AI companionship can blur emotional boundaries if parents are not watching." },
    "v3-ai-roleplay-bots.html": { cluster: "ai", title: "AI Roleplay Bots", subtitle: "Roleplay bots can create secrecy, intensity, and emotional immersion quickly." },

    "v3-why-posh-exists.html": { cluster: "mission", title: "Why POSH Exists", subtitle: "Why this platform was built and why earlier clarity matters." },
    "v3-support.html": { cluster: "mission", title: "Support POSH", subtitle: "Help keep POSH free and growing for more families." },
    "v3-share.html": { cluster: "mission", title: "Share POSH", subtitle: "One share can help another family act sooner." },
    "v3-community.html": { cluster: "mission", title: "Community", subtitle: "Community voice, support, and shared awareness." },
    "v3-downloads.html": { cluster: "support", title: "Downloads", subtitle: "Guides, PDFs, and practical tools parents can use immediately." },
    "v3-all-downloads.html": { cluster: "support", title: "All Downloads", subtitle: "Find all downloadable POSH resources in one place." }
  };

  const CLUSTER_DEFAULTS = {
    entry: {
      heading: "What should you do next?",
      text: "Choose the lane that best matches what you're seeing right now.",
      buttons: [
        { href: "v3-redflags.html", label: "Check Red Flags" },
        { href: "v3-real-scenarios.html", label: "Match a Real Scenario", secondary: true },
        { href: "v3-first-24-hours.html", label: "Act Now", secondary: true }
      ],
      callout: "You do not need the full answer yet — just the right lane."
    },
    warning: {
      heading: "What should you do next?",
      text: "If this pattern feels familiar, move into the right next step now.",
      buttons: [
        { href: "v3-what-now.html", label: "Find My Next Step" },
        { href: "v3-first-24-hours.html", label: "Act Now", secondary: true },
        { href: "v3-parent-scripts.html", label: "What Should I Say?", secondary: true }
      ],
      callout: "Recognition matters most when it leads to action."
    },
    conversation: {
      heading: "What should you do next?",
      text: "Once the conversation stays open, move into the next protective step.",
      buttons: [
        { href: "v3-first-24-hours.html", label: "First 24 Hours" },
        { href: "v3-what-now.html", label: "Find My Next Step", secondary: true },
        { href: "v3-reporting.html", label: "Report & Get Help", secondary: true }
      ],
      callout: "Calm words first. Protective action next."
    },
    urgent: {
      heading: "What should you do next?",
      text: "If the situation is active, preserve what matters and move into the correct help pathway.",
      buttons: [
        { href: "v3-reporting.html", label: "Report & Get Help" },
        { href: "v3-evidence-reporting.html", label: "Save Evidence", secondary: true },
        { href: "v3-parent-scripts.html", label: "What Should I Say?", secondary: true }
      ],
      callout: "Protect the child. Preserve the evidence. Move early."
    },
    reporting: {
      heading: "What should you do next?",
      text: "Once reporting is underway, keep supporting your child and follow the next safety steps.",
      buttons: [
        { href: "v3-evidence-reporting.html", label: "Evidence Help" },
        { href: "v3-first-24-hours.html", label: "First 24 Hours", secondary: true },
        { href: "v3-parent-scripts.html", label: "What Should I Say?", secondary: true }
      ],
      callout: "Reporting is one step. Ongoing support still matters."
    },
    social: {
      heading: "Best next pages from here",
      text: "Social app pages work best when they point parents to risk signs, scripts, and action.",
      buttons: [
        { href: "v3-redflags.html", label: "Red Flags" },
        { href: "v3-parent-scripts.html", label: "Parent Scripts", secondary: true },
        { href: "v3-first-24-hours.html", label: "First 24 Hours", secondary: true }
      ],
      callout: "The best next page depends on whether you need recognition, conversation help, or urgent action."
    },
    game: {
      heading: "Best next pages from here",
      text: "Game pages work best when they move parents from platform awareness into practical protection.",
      buttons: [
        { href: "v3-redflags.html", label: "Red Flags" },
        { href: "v3-parental-controls-by-device.html", label: "Parental Controls by Device", secondary: true },
        { href: "v3-parent-scripts.html", label: "Parent Scripts", secondary: true }
      ],
      callout: "The game is often the doorway. Private contact is where the bigger risk grows."
    },
    "game-guide": {
      heading: "Best next pages from here",
      text: "Age-based game guidance works best when paired with device controls and clearer family boundaries.",
      buttons: [
        { href: "v3-safe-apps-and-games-for-kids.html", label: "Safe Apps & Games" },
        { href: "v3-parental-controls-by-device.html", label: "Parental Controls by Device", secondary: true },
        { href: "v3-house-rules.html", label: "House Rules", secondary: true }
      ],
      callout: "Age matters — but communication risk matters even more."
    },
    controls: {
      heading: "Best next pages from here",
      text: "Settings matter most when they connect back to trust, house rules, and warning signs.",
      buttons: [
        { href: "v3-house-rules.html", label: "House Rules" },
        { href: "v3-how-to-monitor-without-breaking-trust.html", label: "Monitor Without Breaking Trust", secondary: true },
        { href: "v3-redflags.html", label: "Red Flags", secondary: true }
      ],
      callout: "The best parental control setup supports both safety and communication."
    },
    awareness: {
      heading: "Best next pages from here",
      text: "Awareness pages work best when they guide parents into practical action.",
      buttons: [
        { href: "v3-redflags.html", label: "Red Flags" },
        { href: "v3-what-now.html", label: "What To Do Now", secondary: true },
        { href: "v3-parent-questions.html", label: "Parent Questions", secondary: true }
      ],
      callout: "Understanding matters most when it leads to earlier protection."
    },
    screens: {
      heading: "Best next pages from here",
      text: "Screen-impact pages should guide parents into structure, boundaries, and practical reset steps.",
      buttons: [
        { href: "v3-house-rules.html", label: "House Rules" },
        { href: "v3-device-controls.html", label: "Device Controls", secondary: true },
        { href: "v3-parent-questions.html", label: "Parent Questions", secondary: true }
      ],
      callout: "Understanding screen impact helps parents tighten the whole family system."
    },
    ai: {
      heading: "Best next pages from here",
      text: "AI-related pages work best when they guide parents into conversation, awareness, and safer boundaries.",
      buttons: [
        { href: "v3-how-to-talk-to-your-child-about-ai.html", label: "Talk To Your Child About AI" },
        { href: "v3-parent-scripts.html", label: "Parent Scripts", secondary: true },
        { href: "v3-what-now.html", label: "What To Do Now", secondary: true }
      ],
      callout: "AI risk is not only about the tool — it is about secrecy, emotional intensity, and parent visibility."
    },
    wellbeing: {
      heading: "Best next pages from here",
      text: "Wellbeing pages should guide parents into deeper understanding, calmer support, and stronger family structure.",
      buttons: [
        { href: "v3-diagnosis-without-shame.html", label: "Diagnosis Without Shame" },
        { href: "v3-parent-questions.html", label: "Parent Questions", secondary: true },
        { href: "v3-why-posh-exists.html", label: "Why POSH Exists", secondary: true }
      ],
      callout: "The goal is not shame, panic, or labels — it is stronger understanding and safer support."
    },
    "high-risk-tech": {
      heading: "Best next pages from here",
      text: "High-risk app pages should guide parents into safer alternatives, controls, and action.",
      buttons: [
        { href: "v3-safe-apps-and-games-for-kids.html", label: "Safer App & Game Choices" },
        { href: "v3-parental-controls-by-device.html", label: "Parental Controls by Device", secondary: true },
        { href: "v3-what-now.html", label: "What To Do Now", secondary: true }
      ],
      callout: "The app name matters — but the pattern matters more."
    },
    "safe-tech": {
      heading: "Best next pages from here",
      text: "Safer app and game pages work best when they connect to device controls and family rules.",
      buttons: [
        { href: "v3-game-risks-by-age.html", label: "Games by Age Guide" },
        { href: "v3-parental-controls-by-device.html", label: "Parental Controls by Device", secondary: true },
        { href: "v3-house-rules.html", label: "House Rules", secondary: true }
      ],
      callout: "Safer does not mean zero risk. It means fewer risky pathways and better visibility."
    },
    mission: {
      heading: "Keep POSH moving forward",
      text: "If this page aligns with why POSH exists, the strongest next step is helping the mission grow.",
      buttons: [
        { href: "v3-support.html", label: "Support POSH" },
        { href: "v3-share.html", label: "Share POSH", secondary: true },
        { href: "v3-community.html", label: "Join Community", secondary: true }
      ],
      callout: "One parent sharing POSH can help protect another child."
    },
    support: {
      heading: "Best next pages from here",
      text: "Downloads and support pages work best when they connect back to the main parent action system.",
      buttons: [
        { href: "v3-what-now.html", label: "What To Do Now" },
        { href: "v3-start.html", label: "Start Here", secondary: true },
        { href: "v3-parent-questions.html", label: "Parent Questions", secondary: true }
      ],
      callout: "Tools help most when parents know which next step fits their situation."
    },
    default: {
      heading: "What should you do next?",
      text: "Based on what you're seeing right now, choose the next step.",
      buttons: [
        { href: "v3-what-now.html", label: "Find My Next Step" },
        { href: "v3-first-24-hours.html", label: "Act Now", secondary: true },
        { href: "v3-reporting.html", label: "Report & Get Help", secondary: true }
      ],
      callout: "You don’t need the full answer — just the right next move."
    }
  };

  const CLUSTER_RULES = [
    {
      cluster: "social",
      pages: [
        "v3-socials.html",
        "v3-social-discord.html",
        "v3-social-snapchat.html",
        "v3-social-instagram.html",
        "v3-social-tiktok.html",
        "v3-social-telegram.html",
        "v3-social-youtube.html",
        "v3-social-youtubekids.html",
        "v3-social-twitch.html",
        "v3-social-facebook.html",
        "v3-social-messenger.html",
        "v3-social-messengerkids.html",
        "v3-social-whatsapp.html",
        "v3-social-reddit.html",
        "v3-social-pinterest.html",
        "v3-social-steam.html",
        "v3-social-bluesky.html",
        "v3-social-threads.html",
        "v3-social-signal.html",
        "v3-social-wechat.html",
        "v3-social-yubo.html",
        "v3-social-omegle-alternatives.html",
        "v3-videochat.html",
        "v3-video-facetime.html",
        "v3-video-googlemeet.html",
        "v3-video-skype.html",
        "v3-video-teams.html",
        "v3-video-webex.html",
        "v3-video-zoom.html",
        "v3-streaming-video.html",
        "v3-streaming-netflix.html",
        "v3-streaming-disneyplus.html",
        "v3-streaming-primevideo.html",
        "v3-streaming-tubi.html"
      ]
    },
    {
      cluster: "game",
      pages: [
        "v3-gaming.html",
        "v3-all-games.html",
        "v3-game-roblox.html",
        "v3-why-roblox-requires-supervision.html",
        "v3-game-fortnite.html",
        "v3-game-minecraft.html",
        "v3-game-vrchat.html",
        "v3-game-apex.html",
        "v3-game-cod.html",
        "v3-game-gta.html",
        "v3-game-overwatch.html",
        "v3-game-pubg.html",
        "v3-game-rainbowsix.html",
        "v3-game-rocketleague.html",
        "v3-game-valorant.html",
        "v3-game-halo.html",
        "v3-game-gorillatag.html",
        "v3-game-recroom.html",
        "v3-game-garrysmod.html",
        "v3-game-splatoon.html",
        "v3-game-terraria.html",
        "v3-game-rust.html",
        "v3-game-amongus.html",
        "v3-game-animalcrossing.html",
        "v3-game-counterstrike.html",
        "v3-game-destiny2.html",
        "v3-game-fallguys.html",
        "v3-game-fivem.html",
        "v3-game-brawlstars.html",
        "v3-game-clashofclans.html",
        "v3-is-roblox-safe-for-my-child.html",
        "v3-in-game-currency-grooming-risk.html",
        "v3-roblox-robux-scams-explained.html",
        "v3-brainrot-roblox.html"
      ]
    },
    {
      cluster: "controls",
      pages: [
        "v3-devices.html",
        "v3-device-controls.html",
        "v3-parental-controls-by-device.html",
        "v3-device-iphone.html",
        "v3-device-ipad.html",
        "v3-device-apple.html",
        "v3-device-android.html",
        "v3-device-windows.html",
        "v3-how-to-set-parental-controls-and-passwords.html",
        "v3-how-to-set-parental-controls-iphone.html",
        "v3-how-to-set-parental-controls-android.html",
        "v3-best-parental-control-apps.html",
        "v3-how-to-monitor-without-breaking-trust.html",
        "v3-how-to-monitor-your-childs-device-without-spying.html",
        "v3-how-to-check-a-device-without-causing-panic.html",
        "v3-platform-playstation.html",
        "v3-platform-xbox.html",
        "v3-platform-nintendo.html",
        "v3-platform-pc.html",
        "v3-platform-vr.html",
        "v3-platforms.html",
        "v3-parental-controls.html"
      ]
    },
    {
      cluster: "support",
      pages: [
        "v3-downloads.html",
        "v3-all-downloads.html",
        "v3-cancel-subscriptions.html",
        "v3-guide.html",
        "v3-parent-questions.html"
      ]
    }
  ];

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
      .replace(/[^a-z0-9\\s-]/g, " ")
      .replace(/\\s+/g, " ")
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

    const tokens = q.split(/\\s+/).filter(Boolean);
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

  function markActiveNav(navRoot) {
    const currentPage = (window.location.pathname.split("/").pop() || "index.html")
      .split("?")[0]
      .split("#")[0];

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
      .posh-global-hero-wrap{
        margin:0 0 20px;
      }

      .posh-global-hero-link{
        display:block;
        width:100%;
        text-decoration:none;
        border-radius:20px;
        overflow:hidden;
        border:1.5px solid rgba(217,182,90,.68);
        box-shadow:
          0 18px 44px rgba(0,0,0,.34),
          0 0 0 1px rgba(255,255,255,.04) inset,
          0 0 24px rgba(217,182,90,.10);
        background:rgba(8,25,50,.42);
        position:relative;
        transform:translateZ(0);
      }

      .posh-global-hero-link::before{
        content:"";
        position:absolute;
        inset:0;
        border-radius:20px;
        pointer-events:none;
        background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0));
        z-index:2;
      }

      .posh-global-hero-link:hover{
        transform:translateY(-2px);
        box-shadow:
          0 24px 56px rgba(0,0,0,.40),
          0 0 0 1px rgba(255,255,255,.05) inset,
          0 0 30px rgba(217,182,90,.14);
      }

      .posh-global-hero-link:focus-visible{
        outline:3px solid rgba(34,230,211,.74);
        outline-offset:4px;
      }

      .posh-global-hero-media{
        display:block;
        width:100%;
      }

      .posh-global-hero-img{
        display:block;
        width:100%;
        height:auto;
        object-fit:cover;
        object-position:center center;
        transform:scale(1);
        transition:transform 4.8s ease, filter .28s ease;
        will-change:transform;
      }

      .posh-global-hero-link:hover .posh-global-hero-img{
        filter:brightness(1.02) saturate(1.03);
      }

      .posh-global-hero-img.is-loaded{
        animation:poshHeroSlowZoom 7s ease-out both;
      }

      @keyframes poshHeroSlowZoom{
        0%{ transform:scale(1.015); }
        100%{ transform:scale(1.06); }
      }

      .posh-page-header{
        margin:0 0 18px;
        padding:20px 20px 18px;
        border-radius:20px;
        border:1px solid rgba(217,182,90,.22);
        background:
          radial-gradient(900px 420px at 50% 0%, rgba(217,182,90,.06), transparent 62%),
          linear-gradient(180deg, rgba(15,42,85,.92), rgba(12,35,70,.92));
        box-shadow:0 16px 38px rgba(0,0,0,.30);
        text-align:center;
      }

      .posh-page-kicker{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        padding:8px 14px;
        margin:0 0 12px;
        border-radius:999px;
        border:1px solid rgba(217,182,90,.26);
        background:rgba(217,182,90,.08);
        color:rgba(244,247,255,.88);
        font-size:.82rem;
        font-weight:800;
        letter-spacing:.12em;
        text-transform:uppercase;
      }

      .posh-page-title{
        margin:0;
        font-family:"Montserrat", sans-serif;
        font-weight:900;
        font-size:clamp(2rem, 4vw, 3rem);
        line-height:1.08;
        letter-spacing:.01em;
        color:#f4f7ff;
        text-shadow:0 12px 28px rgba(0,0,0,.32);
      }

      .posh-page-subtitle{
        max-width:900px;
        margin:12px auto 0;
        color:rgba(244,247,255,.82);
        line-height:1.7;
        font-size:1.05rem;
      }

      .nav-accordion{
        gap:12px;
      }

      .nav-group summary{
        border-radius:16px;
        border:1.35px solid rgba(217,182,90,.50);
        background:linear-gradient(180deg, rgba(15,42,85,.96), rgba(12,35,70,.96));
        box-shadow:
          0 12px 26px rgba(0,0,0,.24),
          0 0 0 1px rgba(255,255,255,.03) inset;
      }

      .nav-group summary::after{
        color:rgba(217,182,90,.95);
      }

      .nav-group summary:hover{
        transform:translateY(-2px);
        border-color:rgba(217,182,90,.78);
        box-shadow:
          0 16px 30px rgba(0,0,0,.30),
          0 0 18px rgba(217,182,90,.10);
      }

      .nav-group[open] summary{
        border-color:rgba(217,182,90,.82);
        background:linear-gradient(180deg, rgba(19,49,94,.98), rgba(13,34,68,.98));
        box-shadow:
          0 18px 34px rgba(0,0,0,.34),
          0 0 20px rgba(217,182,90,.12);
      }

      .nav-group nav{
        border-radius:20px;
      }

      .nav-group nav a{
        border-radius:15px;
      }

      a.btn,
      button.btn,
      .btn{
        border-radius:13px;
        border:1.25px solid rgba(184,115,51,.50);
        box-shadow:
          0 10px 22px rgba(0,0,0,.28),
          0 0 0 1px rgba(255,255,255,.03) inset;
      }

      a.btn:hover,
      button.btn:hover,
      .btn:hover{
        border-color:rgba(198,127,63,.72);
      }

      .btn.secondary{
        border-radius:18px;
        border:1.15px solid rgba(184,115,51,.38);
      }

      .btn.secondary:hover{
        border-color:rgba(198,127,63,.60);
      }

      .footer-actions .btn,
      .btn-grid .btn{
        transform-origin:center;
      }

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
        border-radius: 16px;
        padding: 12px 16px;
        box-shadow: 0 10px 28px rgba(0,0,0,.28);
      }

      .posh-sticky-main {
        background: linear-gradient(135deg, #19c2ff, #3c7cff);
        color: #fff;
        border:1.15px solid rgba(184,115,51,.46);
      }

      .posh-sticky-sub {
        background: rgba(8,16,34,.92);
        color: #fff;
        border: 1.15px solid rgba(184,115,51,.38);
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
        border-radius: 18px;
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
        border-radius: 20px;
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
        margin-top: 24px;
      }

      @media (max-width: 900px){
        .posh-global-hero-link,
        .posh-page-header{
          border-radius:18px;
        }
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

        .posh-global-hero-link{
          border-radius:15px;
          border-width:1.25px;
        }

        .posh-page-header{
          padding:18px 16px 16px;
          border-radius:16px;
        }

        .posh-page-title{
          font-size:clamp(1.65rem, 8vw, 2.35rem);
        }

        .posh-page-subtitle{
          font-size:.98rem;
        }

        .nav-group summary{
          border-radius:14px;
        }

        .btn{
          border-radius:12px;
        }

        .btn.secondary{
          border-radius:16px;
        }
      }

      @media (prefers-reduced-motion: reduce){
        .posh-global-hero-img,
        .posh-global-hero-img.is-loaded{
          animation:none !important;
          transition:none !important;
          transform:none !important;
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

  function getCurrentPage() {
    return (window.location.pathname.split("/").pop() || "index.html")
      .split("?")[0]
      .split("#")[0];
  }

  function resolveClusterFromRules(currentPage) {
    for (let i = 0; i < CLUSTER_RULES.length; i++) {
      if (CLUSTER_RULES[i].pages.indexOf(currentPage) !== -1) {
        return CLUSTER_RULES[i].cluster;
      }
    }

    if (currentPage.indexOf("v3-social-") === 0) return "social";
    if (currentPage.indexOf("v3-game-") === 0) return "game";
    if (currentPage.indexOf("v3-device-") === 0) return "controls";
    if (currentPage.indexOf("v3-platform-") === 0) return "controls";
    if (currentPage.indexOf("v3-ai-") === 0) return "ai";
    if (currentPage.indexOf("v3-video-") === 0) return "social";
    if (currentPage.indexOf("v3-streaming-") === 0) return "social";

    return "default";
  }

  function getNextStepPages() {
    const currentPage = getCurrentPage();
    const page = PAGE_META[currentPage] || null;

    if (page && Array.isArray(page.next) && page.next.length) {
      return {
        heading: "Best next pages from here",
        text: "These are the strongest next steps for this exact page.",
        buttons: page.next,
        callout: "The best next step is usually recognition first, then communication, then action."
      };
    }

    let cluster = "default";

    if (page && page.cluster) {
      cluster = page.cluster;
    } else {
      cluster = resolveClusterFromRules(currentPage);
    }

    return CLUSTER_DEFAULTS[cluster] || CLUSTER_DEFAULTS.default;
  }

  function buttonHTML(button) {
    return '<a class="btn' + (button.secondary ? ' secondary' : '') + '" href="' +
      escapeHTML(button.href) + '">' + escapeHTML(button.label) + "</a>";
  }

  function buildSystemNextStepBlock() {
    const footer = document.getElementById("footer");
    if (!footer) return;
    if (document.querySelector(".posh-system-next-step")) return;

    const config = getNextStepPages();

    const wrap = document.createElement("div");
    wrap.className = "posh-system-next-step";
    wrap.innerHTML = `
      <div class="card center-card">
        <h2>${escapeHTML(config.heading)}</h2>
        <p class="note">${escapeHTML(config.text)}</p>
        <div class="btn-grid btn-grid-soft">
          ${config.buttons.map(buttonHTML).join("")}
        </div>
        <div class="callout center-callout">${escapeHTML(config.callout)}</div>
      </div>
    `;

    footer.parentNode.insertBefore(wrap, footer);
  }

  function buildGlobalHero() {
    if (document.querySelector(".posh-global-hero-wrap")) return;

    const wrap = document.querySelector(".wrap");
    if (!wrap) return;

    const heroWrap = document.createElement("div");
    heroWrap.className = "posh-global-hero-wrap";
    heroWrap.innerHTML = `
      <a href="${HOME_URL}" class="posh-global-hero-link" aria-label="Go to POSH home page">
        <div class="posh-global-hero-media">
          <img
            src="${HERO_IMAGE}"
            alt="POSH hero banner"
            class="posh-global-hero-img"
            loading="eager"
            decoding="async"
          />
        </div>
      </a>
    `;

    wrap.insertBefore(heroWrap, wrap.firstChild);

    const img = heroWrap.querySelector(".posh-global-hero-img");
    if (img) {
      if (img.complete) {
        img.classList.add("is-loaded");
      } else {
        img.addEventListener("load", function () {
          img.classList.add("is-loaded");
        }, { once: true });
      }
    }
  }

  function buildGlobalPageHeader() {
    if (document.querySelector(".posh-page-header")) return;

    const currentPage = getCurrentPage();
    if (currentPage === "index.html") return;

    const wrap = document.querySelector(".wrap");
    const nav = document.getElementById("nav");
    if (!wrap || !nav) return;

    const fallbackTitle = document.title
      .replace(/\s*\|\s*POSH\s*$/i, "")
      .replace(/\s*•\s*POSH\s*$/i, "")
      .trim();

    const page = PAGE_META[currentPage] || {};
    const title = page.title || fallbackTitle || "POSH";
    const subtitle = page.subtitle || "Clear guidance to help parents move into the right next step.";

    const cluster = page.cluster || resolveClusterFromRules(currentPage);
    const kickerMap = {
      entry: "Start & Safety",
      warning: "Warning Signs",
      conversation: "Parent Help",
      urgent: "Immediate Action",
      reporting: "Reporting",
      social: "Apps & Social Media",
      game: "Games & Platforms",
      "game-guide": "Games & Platforms",
      controls: "Devices & Controls",
      awareness: "Awareness & Deep Dive",
      screens: "Awareness & Deep Dive",
      ai: "Awareness & Deep Dive",
      wellbeing: "Awareness & Deep Dive",
      "high-risk-tech": "Apps & Social Media",
      "safe-tech": "Apps & Social Media",
      mission: "Support & Mission",
      support: "Downloads & Support",
      default: "POSH"
    };

    const header = document.createElement("div");
    header.className = "posh-page-header";
    header.innerHTML = `
      <div class="posh-page-kicker">${escapeHTML(kickerMap[cluster] || "POSH")}</div>
      <h1 class="posh-page-title">${escapeHTML(title)}</h1>
      <p class="posh-page-subtitle">${escapeHTML(subtitle)}</p>
    `;

    wrap.insertBefore(header, nav);
  }

  function hideOldHeaders() {
    const oldBrand = document.querySelector(".brand");
    const oldTitle = document.querySelector(".page-title");
    const oldTagline = document.querySelector(".tagline");

    if (oldBrand) oldBrand.style.display = "none";
    if (oldTitle) oldTitle.style.display = "none";
    if (oldTagline && getCurrentPage() !== "index.html") {
      oldTagline.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const footer = document.getElementById("footer");

    injectSupportStyles();
    buildGlobalHero();
    hideOldHeaders();
    buildGlobalPageHeader();

    if (nav) {
      nav.innerHTML = navHTML;
      setupAccordion(nav);
      markActiveNav(nav);
      initNavSearch(nav);
    }

    if (footer) {
      footer.innerHTML = footerHTML;
    }

    buildSystemNextStepBlock();
    enhanceLinks();
    buildStickySupportButton();
    buildExitIntentModal();
    buildInlineSupportPrompt();
  });
})();
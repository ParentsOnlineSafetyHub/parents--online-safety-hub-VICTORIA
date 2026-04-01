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
        <summary>Start Here &amp; Immediate Help</summary>
        <nav>
          <a href="index.html" data-type="Page" data-keywords="home posh main page parents online safety hub">Home</a>
          <a href="v3-start.html" data-type="Page" data-keywords="start first steps safety start here quiz score">Start Here</a>
          <a href="v3-entry-system.html" data-type="Page" data-keywords="quick fast entry start fast concern check">Start Here Fast</a>
          <a href="v3-parent-questions.html" data-type="Hub" data-keywords="parent questions search concerns real questions">Parent Questions</a>
          <a href="v3-safety-score.html" data-type="Tool" data-keywords="score audit checklist safety check risk quiz">Safety Check</a>
          <a href="v3-what-now.html" data-type="Action" data-keywords="what now immediate help next steps">What To Do Now</a>
          <a href="v3-first-24-hours.html" data-type="Urgent" data-keywords="urgent first 24 hours evidence response crisis">First 24 Hours</a>
          <a href="v3-posh-response-system.html" data-type="System" data-keywords="response system notice check secure talk monitor escalate">POSH Response System</a>
          <a href="v3-urgent-warning-signs.html" data-type="Topic" data-keywords="urgent warning signs act now danger immediate concern">Urgent Warning Signs</a>
          <a href="v3-exposure-vs-danger.html" data-type="Topic" data-keywords="exposure vs danger risk levels high exposure active danger">Exposure vs Danger</a>
          <a href="v3-real-scenarios.html" data-type="Topic" data-keywords="real scenarios examples identify what this is">Real Scenarios</a>
          <a href="v3-reporting.html" data-type="Page" data-keywords="report help police support evidence hotline">Report &amp; Get Help</a>
          <a href="v3-reporting-australia.html" data-type="Page" data-keywords="reporting australia esafety police">Report in Australia</a>
          <a href="v3-reporting-uk.html" data-type="Page" data-keywords="reporting uk support">Report in the UK</a>
          <a href="v3-reporting-usa.html" data-type="Page" data-keywords="reporting usa support">Report in the USA</a>
          <a href="v3-reporting-europe.html" data-type="Page" data-keywords="reporting europe support">Report in Europe</a>
          <a href="v3-evidence-reporting.html" data-type="Guide" data-keywords="evidence reporting save screenshots report properly">Evidence &amp; Reporting</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Parents, Conversations &amp; House Rules</summary>
        <nav>
          <a href="v3-parent-scripts.html" data-type="Topic" data-keywords="what to say talk to child scripts conversation help">Parent Scripts</a>
          <a href="v3-parent-conversations.html" data-type="Topic" data-keywords="conversations difficult talks calm discussion">Parent Conversations</a>
          <a href="v3-what-to-say-if-your-child-opens-up.html" data-type="Topic" data-keywords="child opens up what to say disclosure support">If Your Child Opens Up</a>
          <a href="v3-when-your-child-wont-talk.html" data-type="Topic" data-keywords="child wont talk silence shutdown">If Your Child Won’t Talk</a>
          <a href="v3-what-to-say-if-your-child-thinks-it-was-their-fault.html" data-type="Topic" data-keywords="child thinks it was their fault shame blame">If They Think It Was Their Fault</a>
          <a href="v3-what-to-say-if-your-child-is-embarrassed-to-tell-you.html" data-type="Topic" data-keywords="embarrassed to tell you disclosure shame">If They’re Embarrassed to Tell You</a>
          <a href="v3-how-to-talk-so-your-child-opens-up.html" data-type="Topic" data-keywords="talk so child opens up communication trust">How To Talk So Your Child Opens Up</a>
          <a href="v3-how-to-explain-grooming-and-predators-to-a-child.html" data-type="Topic" data-keywords="explain grooming predators to child">Explain Grooming to a Child</a>
          <a href="v3-house-rules.html" data-type="Topic" data-keywords="rules boundaries family device rules expectations">House Rules</a>
          <a href="v3-age-guide.html" data-type="Topic" data-keywords="age suitable age guide children teens">Age Guide</a>
          <a href="v3-mindset.html" data-type="Topic" data-keywords="mindset parent thinking awareness calm structure">Parent Mindset</a>
          <a href="v3-it-is-not-about-not-trusting-your-child.html" data-type="Topic" data-keywords="not about not trusting your child trust protect">Trust Your Child, Still Protect Them</a>
          <a href="v3-how-to-monitor-without-breaking-trust.html" data-type="Topic" data-keywords="monitor trust check child calmly">Monitor Without Breaking Trust</a>
          <a href="v3-how-to-monitor-your-childs-device-without-spying.html" data-type="Topic" data-keywords="monitor device without spying">Monitor a Device Without Spying</a>
          <a href="v3-how-to-check-a-device-without-causing-panic.html" data-type="Topic" data-keywords="check device calmly without panic evidence support">Check a Device Calmly</a>
          <a href="v3-how-to-rebuild-trust-after-an-online-scare.html" data-type="Topic" data-keywords="rebuild trust after online scare repair connection">Rebuild Trust After an Online Scare</a>
          <a href="v3-parent-mistakes.html" data-type="Topic" data-keywords="parent mistakes what parents get wrong">Common Parent Mistakes</a>
          <a href="v3-what-most-parents-get-wrong.html" data-type="Topic" data-keywords="most parents get wrong">What Most Parents Get Wrong</a>
          <a href="v3-why-kids-dont-ask-for-help.html" data-type="Topic" data-keywords="why kids dont ask for help">Why Kids Don’t Ask for Help</a>
          <a href="v3-why-kids-hide-things.html" data-type="Topic" data-keywords="why kids hide things secrecy">Why Kids Hide Things</a>
          <a href="v3-why-behaviour-changes.html" data-type="Topic" data-keywords="why behaviour changes">Why Behaviour Changes</a>
          <a href="v3-neurodivergent-communication.html" data-type="Topic" data-keywords="neurodivergent communication">Neurodivergent Communication</a>
          <a href="v3-adhd-and-online-safety-communication.html" data-type="Topic" data-keywords="adhd communication online safety">ADHD &amp; Online Safety Communication</a>
          <a href="v3-autism-and-online-safety-communication.html" data-type="Topic" data-keywords="autism communication online safety">Autism &amp; Online Safety Communication</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Behaviour, Grooming &amp; Risk</summary>
        <nav>
          <a href="v3-redflags.html" data-type="Topic" data-keywords="warning signs red flags grooming risk">Red Flags</a>
          <a href="v3-10-signs-targeted-online.html" data-type="Topic" data-keywords="10 signs targeted online">10 Signs Targeted Online</a>
          <a href="v3-signs-my-child-is-being-groomed-online.html" data-type="Topic" data-keywords="signs child being groomed online">Signs My Child Is Being Groomed Online</a>
          <a href="v3-predators.html" data-type="Topic" data-keywords="predators grooming exploitation risk">Predators &amp; Grooming</a>
          <a href="v3-playbook.html" data-type="Topic" data-keywords="playbook grooming escalation pattern">Predator Playbook</a>
          <a href="v3-grooming.html" data-type="Topic" data-keywords="grooming overview">Grooming</a>
          <a href="v3-how-predators-contact-kids-online.html" data-type="Topic" data-keywords="how predators contact kids online">How Predators Contact Kids Online</a>
          <a href="v3-how-to-tell-if-it-is-grooming-or-just-bad-judgement.html" data-type="Topic" data-keywords="grooming or bad judgement">Grooming or Bad Judgement?</a>
          <a href="v3-definitions.html" data-type="Topic" data-keywords="definitions explain predator victim manipulation behaviour">Understanding What’s Happening</a>
          <a href="v3-double-life-online.html" data-type="Topic" data-keywords="double life online hidden accounts secret identity secrecy">Double Life Online</a>
          <a href="v3-when-a-child-becomes-dependent-on-someone-online.html" data-type="Topic" data-keywords="online dependency emotional dependence attachment hidden relationship">Online Dependency</a>
          <a href="v3-signs-your-child-is-being-isolated-online.html" data-type="Topic" data-keywords="child isolated online signs">Signs Your Child Is Being Isolated Online</a>
          <a href="v3-when-an-online-friend-becomes-a-risk.html" data-type="Topic" data-keywords="online friend becomes risk">When an Online Friend Becomes a Risk</a>
          <a href="v3-known-person-risk.html" data-type="Topic" data-keywords="known person trusted adult family risk">Known Person Risk</a>
          <a href="v3-real-life-risk.html" data-type="Topic" data-keywords="offline real life risk meeting in person">Real Life Risk</a>
          <a href="v3-behaviours-hub.html" data-type="Topic" data-keywords="behaviour patterns control isolation manipulation hub">Behaviour Patterns Hub</a>
          <a href="v3-early-behaviours-that-can-signal-red-flags.html" data-type="Topic" data-keywords="early behaviour warning signs">Early Behaviour Red Flags</a>
          <a href="v3-why-my-child-is-acting-out-of-character.html" data-type="Topic" data-keywords="acting out of character changed behaviour shift">Acting Out of Character</a>
          <a href="v3-why-kids-dont-recognise-risk.html" data-type="Topic" data-keywords="kids dont recognise risk miss warning signs">Why Kids Don’t Recognise Risk</a>
          <a href="v3-how-adults-build-trust-before-control.html" data-type="Topic" data-keywords="trust before control grooming manipulation">Trust Before Control</a>
          <a href="v3-when-attention-becomes-manipulation.html" data-type="Topic" data-keywords="attention becomes manipulation">When Attention Becomes Manipulation</a>
          <a href="v3-fast-trust-building-warning-signs.html" data-type="Topic" data-keywords="fast trust building warning signs">Fast Trust-Building Warning Signs</a>
          <a href="v3-secret-keeping-vs-private-space.html" data-type="Topic" data-keywords="secret keeping vs private space">Secret Keeping vs Private Space</a>
          <a href="v3-manipulation-behaviours.html" data-type="Topic" data-keywords="manipulation behaviours guilt pressure secrecy">Manipulation Behaviours</a>
          <a href="v3-controlling-behaviours.html" data-type="Topic" data-keywords="control controlling isolation narrative">Controlling Behaviours</a>
          <a href="v3-emotional-manipulation.html" data-type="Topic" data-keywords="emotional manipulation guilt control influence">Emotional Manipulation</a>
          <a href="v3-toxic-behaviour-patterns.html" data-type="Topic" data-keywords="toxic behaviour patterns control pressure secrecy">Toxic Behaviour Patterns</a>
          <a href="v3-why-isolation-hits-children-harder.html" data-type="Topic" data-keywords="isolation child risk dependency">Why Isolation Hits Children Harder</a>
          <a href="v3-when-a-child-is-turned-against-a-safe-parent.html" data-type="Topic" data-keywords="turned against safe parent alienation manipulation">Turned Against a Safe Parent</a>
          <a href="v3-self-harm-and-suicide-warning-signs.html" data-type="Topic" data-keywords="self harm suicide warning signs emotional collapse">Self Harm &amp; Suicide Warning Signs</a>
          <a href="v3-why-kids-self-harm.html" data-type="Topic" data-keywords="why kids self harm causes distress coping">Why Kids Self Harm</a>
          <a href="v3-sextortion.html" data-type="Topic" data-keywords="sextortion blackmail images threats">Sextortion</a>
          <a href="v3-when-it-goes-deeper.html" data-type="Topic" data-keywords="when it goes deeper more serious">When It Goes Deeper</a>
          <a href="v3-if-you-do-nothing.html" data-type="Topic" data-keywords="if you do nothing consequences">If You Do Nothing</a>
          <a href="v3-secret-accounts.html" data-type="Topic" data-keywords="secret accounts hidden accounts alt accounts">Secret Accounts</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Devices, Platforms, Apps &amp; Games</summary>
        <nav>
          <a href="v3-devices.html" data-type="Device" data-keywords="devices phone tablet ipad iphone android windows computer">Devices</a>
          <a href="v3-device-controls.html" data-type="Device" data-keywords="device safety controls phone tablet laptop pc">Device Safety</a>
          <a href="v3-parental-controls.html" data-type="Device" data-keywords="parental controls overview restrictions">Parental Controls</a>
          <a href="v3-parental-controls-by-device.html" data-type="Device" data-keywords="controls by device parental controls">Parental Controls by Device</a>
          <a href="v3-how-to-set-parental-controls-and-passwords.html" data-type="Device" data-keywords="passwords controls lock settings restrictions">Set Controls &amp; Passwords</a>
          <a href="v3-how-to-set-parental-controls-iphone.html" data-type="Device" data-keywords="iphone apple screen time ios">iPhone Controls</a>
          <a href="v3-how-to-set-parental-controls-android.html" data-type="Device" data-keywords="android google family link samsung">Android Controls</a>
          <a href="v3-how-to-set-parental-controls-ipad.html" data-type="Device" data-keywords="ipad tablet screen time apple">iPad Controls</a>
          <a href="v3-best-parental-control-apps.html" data-type="Device" data-keywords="best parental control apps bark qustodio family link">Best Parental Control Apps</a>
          <a href="v3-device-iphone.html" data-type="Device" data-keywords="device iphone">iPhone</a>
          <a href="v3-device-ipad.html" data-type="Device" data-keywords="device ipad">iPad</a>
          <a href="v3-device-apple.html" data-type="Device" data-keywords="device apple">Apple Devices</a>
          <a href="v3-device-android.html" data-type="Device" data-keywords="device android">Android Devices</a>
          <a href="v3-device-windows.html" data-type="Device" data-keywords="device windows">Windows Devices</a>

          <a href="v3-platforms.html" data-type="Platform" data-keywords="platforms xbox playstation nintendo steam">Platforms</a>
          <a href="v3-platform-pc.html" data-type="Platform" data-keywords="pc platform">PC</a>
          <a href="v3-platform-playstation.html" data-type="Platform" data-keywords="playstation platform">PlayStation</a>
          <a href="v3-platform-xbox.html" data-type="Platform" data-keywords="xbox platform">Xbox</a>
          <a href="v3-platform-nintendo.html" data-type="Platform" data-keywords="nintendo switch platform">Nintendo</a>
          <a href="v3-platform-vr.html" data-type="Platform" data-keywords="vr platform">VR</a>

          <a href="v3-gaming.html" data-type="Game" data-keywords="gaming games game safety">Gaming Safety</a>
          <a href="v3-all-games.html" data-type="Game" data-keywords="all games roblox fortnite minecraft vrchat">All Games Directory</a>
          <a href="v3-game-risks-by-age.html" data-type="Game" data-keywords="games risks by age">Games by Age</a>
          <a href="v3-game-roblox.html" data-type="Game" data-keywords="roblox">Roblox</a>
          <a href="v3-game-fortnite.html" data-type="Game" data-keywords="fortnite">Fortnite</a>
          <a href="v3-game-minecraft.html" data-type="Game" data-keywords="minecraft">Minecraft</a>
          <a href="v3-game-vrchat.html" data-type="Game" data-keywords="vrchat">VRChat</a>
          <a href="v3-game-cod.html" data-type="Game" data-keywords="call of duty cod">Call of Duty</a>
          <a href="v3-game-gta.html" data-type="Game" data-keywords="gta gta online">GTA Online</a>
          <a href="v3-game-overwatch.html" data-type="Game" data-keywords="overwatch">Overwatch</a>
          <a href="v3-game-pubg.html" data-type="Game" data-keywords="pubg">PUBG</a>
          <a href="v3-game-rainbowsix.html" data-type="Game" data-keywords="rainbow six siege">Rainbow Six Siege</a>
          <a href="v3-game-rocketleague.html" data-type="Game" data-keywords="rocket league">Rocket League</a>
          <a href="v3-game-valorant.html" data-type="Game" data-keywords="valorant">Valorant</a>
          <a href="v3-game-halo.html" data-type="Game" data-keywords="halo">Halo</a>
          <a href="v3-game-gorillatag.html" data-type="Game" data-keywords="gorilla tag">Gorilla Tag</a>
          <a href="v3-game-recroom.html" data-type="Game" data-keywords="rec room">Rec Room</a>
          <a href="v3-game-garrysmod.html" data-type="Game" data-keywords="garrys mod">Garry's Mod</a>
          <a href="v3-game-splatoon.html" data-type="Game" data-keywords="splatoon">Splatoon</a>
          <a href="v3-game-terraria.html" data-type="Game" data-keywords="terraria">Terraria</a>
          <a href="v3-game-rust.html" data-type="Game" data-keywords="rust">Rust</a>
          <a href="v3-game-amongus.html" data-type="Game" data-keywords="among us">Among Us</a>
          <a href="v3-game-animalcrossing.html" data-type="Game" data-keywords="animal crossing">Animal Crossing</a>
          <a href="v3-game-apex.html" data-type="Game" data-keywords="apex legends">Apex Legends</a>
          <a href="v3-game-counterstrike.html" data-type="Game" data-keywords="counter strike">Counter-Strike</a>
          <a href="v3-game-destiny2.html" data-type="Game" data-keywords="destiny 2">Destiny 2</a>
          <a href="v3-game-fallguys.html" data-type="Game" data-keywords="fall guys">Fall Guys</a>
          <a href="v3-game-fivem.html" data-type="Game" data-keywords="fivem">FiveM</a>
          <a href="v3-game-brawlstars.html" data-type="Game" data-keywords="brawl stars">Brawl Stars</a>
          <a href="v3-game-clashofclans.html" data-type="Game" data-keywords="clash of clans">Clash of Clans</a>
          <a href="v3-is-roblox-safe-for-my-child.html" data-type="Game" data-keywords="is roblox safe for my child">Is Roblox Safe?</a>

          <a href="v3-socials.html" data-type="App" data-keywords="socials social media chat messaging">Social Media &amp; Chat</a>
          <a href="v3-all-applications.html" data-type="App" data-keywords="all apps applications directory">All Applications</a>
          <a href="v3-dangerous-apps.html" data-type="App" data-keywords="dangerous apps risky apps hidden chats">Dangerous Apps</a>
          <a href="v3-safe-apps-and-games-for-kids.html" data-type="App" data-keywords="safe apps safe games kids safer choices">Safe Apps &amp; Games</a>
          <a href="v3-videochat.html" data-type="App" data-keywords="video chat livestream facetime zoom google meet">Live Video &amp; Streaming</a>
          <a href="v3-streaming-video.html" data-type="App" data-keywords="streaming netflix disney youtube twitch">Streaming &amp; Video Apps</a>
          <a href="v3-social-discord.html" data-type="App" data-keywords="discord">Discord</a>
          <a href="v3-social-snapchat.html" data-type="App" data-keywords="snapchat">Snapchat</a>
          <a href="v3-social-instagram.html" data-type="App" data-keywords="instagram">Instagram</a>
          <a href="v3-social-tiktok.html" data-type="App" data-keywords="tiktok">TikTok</a>
          <a href="v3-social-telegram.html" data-type="App" data-keywords="telegram">Telegram</a>
          <a href="v3-social-youtube.html" data-type="App" data-keywords="youtube">YouTube</a>
          <a href="v3-social-youtubekids.html" data-type="App" data-keywords="youtube kids">YouTube Kids</a>
          <a href="v3-social-twitch.html" data-type="App" data-keywords="twitch">Twitch</a>
          <a href="v3-social-facebook.html" data-type="App" data-keywords="facebook">Facebook</a>
          <a href="v3-social-messenger.html" data-type="App" data-keywords="messenger">Messenger</a>
          <a href="v3-social-messengerkids.html" data-type="App" data-keywords="messenger kids">Messenger Kids</a>
          <a href="v3-social-whatsapp.html" data-type="App" data-keywords="whatsapp">WhatsApp</a>
          <a href="v3-social-reddit.html" data-type="App" data-keywords="reddit">Reddit</a>
          <a href="v3-social-pinterest.html" data-type="App" data-keywords="pinterest">Pinterest</a>
          <a href="v3-social-steam.html" data-type="App" data-keywords="steam">Steam</a>
          <a href="v3-social-bluesky.html" data-type="App" data-keywords="bluesky">Bluesky</a>
          <a href="v3-social-threads.html" data-type="App" data-keywords="threads">Threads</a>
          <a href="v3-social-signal.html" data-type="App" data-keywords="signal">Signal</a>
          <a href="v3-social-wechat.html" data-type="App" data-keywords="wechat">WeChat</a>
          <a href="v3-social-yubo.html" data-type="App" data-keywords="yubo">Yubo</a>
          <a href="v3-social-character-ai.html" data-type="AI" data-keywords="character ai">Character AI</a>
          <a href="v3-social-replika.html" data-type="AI" data-keywords="replika">Replika</a>
          <a href="v3-social-omegle-alternatives.html" data-type="App" data-keywords="omegle alternatives">Omegle Alternatives</a>
          <a href="v3-is-discord-safe-for-kids.html" data-type="App" data-keywords="is discord safe for kids">Is Discord Safe?</a>

          <a href="v3-video-facetime.html" data-type="Video" data-keywords="facetime">FaceTime</a>
          <a href="v3-video-googlemeet.html" data-type="Video" data-keywords="google meet">Google Meet</a>
          <a href="v3-video-skype.html" data-type="Video" data-keywords="skype">Skype</a>
          <a href="v3-video-teams.html" data-type="Video" data-keywords="teams microsoft teams">Teams</a>
          <a href="v3-video-webex.html" data-type="Video" data-keywords="webex">Webex</a>
          <a href="v3-video-zoom.html" data-type="Video" data-keywords="zoom">Zoom</a>

          <a href="v3-streaming-netflix.html" data-type="Streaming" data-keywords="netflix">Netflix</a>
          <a href="v3-streaming-disneyplus.html" data-type="Streaming" data-keywords="disney plus disney+">Disney+</a>
          <a href="v3-streaming-primevideo.html" data-type="Streaming" data-keywords="prime video">Prime Video</a>
          <a href="v3-streaming-tubi.html" data-type="Streaming" data-keywords="tubi">Tubi</a>

          <a href="v3-ai-chat-risks-for-children.html" data-type="AI" data-keywords="ai chat risks children bots">AI Chat Risks</a>
          <a href="v3-is-chatgpt-safe-for-kids.html" data-type="AI" data-keywords="chatgpt safe kids">Is ChatGPT Safe for Kids?</a>
          <a href="v3-ai-fake-relationships.html" data-type="AI" data-keywords="ai fake relationships">AI Fake Relationships</a>
          <a href="v3-ai-roleplay-bots.html" data-type="AI" data-keywords="ai roleplay bots">AI Roleplay Bots</a>
          <a href="v3-can-ai-chats-make-kids-more-secretive.html" data-type="AI" data-keywords="ai chats more secretive">Can AI Chats Make Kids More Secretive?</a>
          <a href="v3-how-to-talk-to-your-child-about-ai.html" data-type="AI" data-keywords="talk to child about ai">How To Talk to Your Child About AI</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Awareness, Downloads, Community &amp; Support</summary>
        <nav>
          <a href="v3-awareness.html" data-type="Topic" data-keywords="awareness online safety risks parents education">Safety Awareness</a>
          <a href="v3-algorithm-awareness.html" data-type="Topic" data-keywords="algorithm recommendations tiktok youtube exposure">Algorithm Risks</a>
          <a href="v3-real-investigations.html" data-type="Topic" data-keywords="real investigations shawn ryan vigilance elite research">Real Investigations</a>
          <a href="v3-downloads.html" data-type="PDF" data-keywords="pdf downloads printable guides checklist">Downloads</a>
          <a href="v3-all-downloads.html" data-type="PDF" data-keywords="all downloads pdf">All Downloads</a>
          <a href="v3-cancel-subscriptions.html" data-type="Guide" data-keywords="subscriptions recurring charges apple google microsoft">Cancel Subscriptions</a>
          <a href="v3-checklist.html" data-type="Guide" data-keywords="checklist safety checklist">Checklist</a>
          <a href="v3-guide.html" data-type="Guide" data-keywords="guide overview">Guide</a>
          <a href="v3-community.html" data-type="Page" data-keywords="community voice have your say">Community Voice</a>
          <a href="v3-collaboration.html" data-type="Page" data-keywords="collaboration work together organisations">Collaboration</a>
          <a href="v3-founder.html" data-type="Page" data-keywords="founder jinglez">Founder</a>
          <a href="v3-why-posh-exists.html" data-type="Page" data-keywords="why posh exists mission purpose">Why POSH Exists</a>
          <a href="v3-warning.html" data-type="Page" data-keywords="warning disclaimer">Warning &amp; Disclaimer</a>
          <a href="v3-share.html" data-type="Page" data-keywords="share posh facebook movement">Share POSH</a>
          <a href="v3-support.html" data-type="Page" data-keywords="support donate gofundme stripe help posh">Support POSH</a>
          <a href="online-safety-foundations.html" data-type="Page" data-keywords="online safety foundations">Online Safety Foundations</a>
          <a href="v3-policy-parent-approval-for-digital-gifting.html" data-type="Policy" data-keywords="parent approval digital gifting policy">Parent Approval for Digital Gifting</a>
          <a href="v3-petition-parent-approval-digital-gifting.html" data-type="Policy" data-keywords="petition parent approval digital gifting">Digital Gifting Petition</a>
          <a href="v3-policy-safer-defaults-for-child-accounts.html" data-type="Policy" data-keywords="safer defaults child accounts policy">Safer Defaults for Child Accounts</a>
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
      .map(function (i) {
        return Object.assign({}, i, { score: score(i, query) });
      })
      .filter(function (i) {
        return i.score > 0;
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
        if (parentGroup) parentGroup.open = true;
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

      const items = matches.map(function (m) {
        return '<a href="' + escapeHTML(m.href) + '" class="nav-search-result">' +
          escapeHTML(m.title) +
        "</a>";
      }).join("");

      const viewAll = '<a href="v3-search.html?q=' + encodeURIComponent(q) + '" class="nav-search-result nav-search-view-all">View all results</a>';

      results.innerHTML = items + viewAll;
      results.classList.add("show");
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        goToSearchPage(input.value);
      }

      if (e.key === "Escape") {
        results.innerHTML = "";
        results.classList.remove("show");
        input.blur();
      }
    });

    document.addEventListener("click", function (e) {
      const clickedInsideNav = e.target.closest(".nav-search-wrap");
      if (!clickedInsideNav) {
        results.innerHTML = "";
        results.classList.remove("show");
      }
    });
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

    if (footer) {
      footer.innerHTML = footerHTML;
    }

    enhanceLinks();
  });
})();
(function () {
  "use strict";

  function normalizeText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function makeEntry(entry) {
    return {
      title: normalizeText(entry.title),
      description: normalizeText(entry.description),
      href: normalizeText(entry.href),
      keywords: normalizeText(entry.keywords),
      category: normalizeText(entry.category),
      intent: normalizeText(entry.intent || "education"),
      priority: Number(entry.priority || 1),
      cta: normalizeText(entry.cta || "Open page"),
      source: normalizeText(entry.source || "page")
    };
  }

  const RAW_PARENT_QUESTIONS = [
    {
      question: "How do I know if my child is being groomed online?",
      answer: "Look for secrecy, sudden behaviour changes, emotional attachment, gifts, pressure, or movement into private chats.",
      href: "v3-signs-my-child-is-being-groomed-online.html",
      keywords: "how do i know if my child is being groomed online signs my child is being groomed online child being groomed signs grooming online warning signs behaviour change secrecy predators how to tell if a child is being groomed",
      intent: "warning",
      priority: 5,
      cta: "Check the full grooming warning signs"
    },
    {
      question: "What are the first signs something is wrong online with my child?",
      answer: "Early signs include hiding screens, deleting messages, mood swings, secretive device use, sudden panic, and emotional withdrawal.",
      href: "v3-redflags.html",
      keywords: "what are the first signs something is wrong online with my child early warning signs child online danger first signs something wrong child online behaviour change hiding messages secretive device use mood swings secrecy",
      intent: "warning",
      priority: 5,
      cta: "See the main red flags"
    },
    {
      question: "My child won’t talk to me, what should I do?",
      answer: "Stay calm, reduce pressure, ask soft questions, and rebuild enough safety for your child to open up.",
      href: "v3-when-your-child-wont-talk.html",
      keywords: "my child wont talk to me what should i do child wont talk help silence shutdown parenting communication how to get child to open up child shuts down when asked questions online safety",
      intent: "warning",
      priority: 5,
      cta: "Use the calm conversation guide"
    },
    {
      question: "What do I say if my child tells me something serious?",
      answer: "Stay calm, listen fully, avoid blame, thank them for telling you, and focus on safety first.",
      href: "v3-what-to-say-if-your-child-opens-up.html",
      keywords: "what do i say if my child tells me something serious child opens up what to say response calm support disclosure parenting help what should i say if my child tells me something bad",
      intent: "urgent",
      priority: 5,
      cta: "Use the first-response script"
    },
    {
      question: "How do predators contact kids online?",
      answer: "They often make contact through games, social media, chats, livestreams, friend systems, comments, or by pretending to be another child.",
      href: "v3-how-predators-contact-kids-online.html",
      keywords: "how do predators contact kids online apps games chat social media grooming tactics how predators make contact online how online predators approach children",
      intent: "education",
      priority: 4,
      cta: "Learn how contact usually starts"
    },
    {
      question: "What apps should I be worried about for my child?",
      answer: "Apps with private messaging, disappearing messages, anonymous contact, group chats, or weak child defaults carry higher risk.",
      href: "v3-dangerous-apps.html",
      keywords: "what apps should i be worried about for my child dangerous apps kids snapchat discord telegram risky apps hidden chat anonymous apps what apps are unsafe for children",
      intent: "warning",
      priority: 4,
      cta: "See higher-risk apps"
    },
    {
      question: "How do I check my child’s phone without breaking trust?",
      answer: "Be honest about why you are checking, frame it as protection not punishment, and stay calm before, during, and after.",
      href: "v3-how-to-monitor-without-breaking-trust.html",
      keywords: "how do i check my childs phone without breaking trust check childs phone without breaking trust monitoring kids devices parenting trust safety how to look through childs phone safely",
      intent: "prevention",
      priority: 4,
      cta: "Check the trust-based monitoring guide"
    },
    {
      question: "Should I read my child’s messages?",
      answer: "If safety is a concern, yes. Read with purpose, stay calm, and focus on protection rather than punishment.",
      href: "v3-should-i-read-my-childs-messages.html",
      keywords: "should i read my childs messages read childs messages privacy vs safety parenting decision monitoring kids chat is it okay to read my childs messages",
      intent: "warning",
      priority: 4,
      cta: "Read the message-checking guide"
    },
    {
      question: "What are red flags of online grooming?",
      answer: "Red flags include secrecy, gifts, emotional dependence, isolation, private chat movement, pressure, and sudden behaviour changes.",
      href: "v3-redflags.html",
      keywords: "what are red flags of online grooming red flags grooming online signs predator behaviour warning signs kids safety grooming warning signs in children",
      intent: "warning",
      priority: 5,
      cta: "See the key warning signs"
    },
    {
      question: "What do I do if I think my child is in danger online?",
      answer: "Act early. Stay calm, secure devices, preserve evidence, reduce contact, and move into the first 24 hour response steps.",
      href: "v3-first-24-hours.html",
      keywords: "what do i do if i think my child is in danger online child danger online what to do urgent help grooming response immediate action online danger first steps",
      intent: "urgent",
      priority: 5,
      cta: "Go to First 24 Hours now"
    },
    {
      question: "How do I set parental controls properly?",
      answer: "Start with built-in device controls, app settings, passwords, and communication. Controls help, but they are not enough on their own.",
      href: "v3-parental-controls-by-device.html",
      keywords: "how do i set parental controls properly parental controls setup how to control childs phone screen time restrictions guide how to set parental controls by device",
      intent: "prevention",
      priority: 4,
      cta: "Set controls by device"
    },
    {
      question: "Are parental controls enough to keep my child safe?",
      answer: "No. They reduce exposure, but conversations, trust, behaviour awareness, and app-specific understanding matter too.",
      href: "v3-parental-controls-by-device.html",
      keywords: "are parental controls enough to keep my child safe are parental controls enough child safety limits of parental controls monitoring kids online",
      intent: "education",
      priority: 3,
      cta: "See what controls can and cannot do"
    },
    {
      question: "Why is my child acting different lately?",
      answer: "It could be normal development, but it can also signal pressure, manipulation, unsafe contact, or growing emotional distress.",
      href: "v3-why-my-child-is-acting-out-of-character.html",
      keywords: "why is my child acting different lately child acting different behaviour change online influence warning signs kids acting out of character",
      intent: "warning",
      priority: 4,
      cta: "Review behaviour-change warning signs"
    },
    {
      question: "What games are dangerous for kids online?",
      answer: "Games with open chat, voice communication, gifting, friend systems, public servers, or easy movement into private apps carry more risk.",
      href: "v3-all-games.html",
      keywords: "what games are dangerous for kids online dangerous games kids roblox fortnite online chat risks gaming safety children risky online games for children",
      intent: "warning",
      priority: 4,
      cta: "Browse the games directory"
    },
    {
      question: "Is Roblox safe for kids?",
      answer: "Roblox can be safer with controls, but chat, user-generated games, friend requests, gifting, and off-platform movement all create risks.",
      href: "v3-is-roblox-safe-for-my-child.html",
      keywords: "is roblox safe for kids roblox safe for kids risks roblox chat predators gaming safety roblox guide is roblox safe for my child",
      intent: "education",
      priority: 4,
      cta: "Read the Roblox safety guide"
    },
    {
      question: "How do I talk to my child about online safety?",
      answer: "Keep it calm, ongoing, and normal. Short regular conversations work better than one big lecture.",
      href: "v3-parent-scripts.html",
      keywords: "how do i talk to my child about online safety talk to child about online safety parenting scripts conversations kids internet safety how to start online safety conversation",
      intent: "prevention",
      priority: 4,
      cta: "Use parent scripts"
    },
    {
      question: "What should I do if my child is hiding things on their phone?",
      answer: "Stay calm, watch for patterns, avoid immediate confrontation, and move into red flags, device checks, and trust-based conversations.",
      href: "v3-my-child-is-hiding-messages-what-should-i-do.html",
      keywords: "what should i do if my child is hiding things on their phone child hiding things phone secret behaviour warning signs device secrecy kids my child is hiding things on their phone",
      intent: "warning",
      priority: 5,
      cta: "See the hiding-messages guide"
    },
    {
      question: "How do I rebuild trust after finding something on my child’s device?",
      answer: "Focus on safety first, then rebuild with calm communication, honesty, and clearer boundaries.",
      href: "v3-how-to-rebuild-trust-after-an-online-scare.html",
      keywords: "how do i rebuild trust after finding something on my childs device rebuild trust child online scare parenting repair relationship after device check",
      intent: "education",
      priority: 3,
      cta: "Rebuild trust calmly"
    },
    {
      question: "What is online grooming in simple terms?",
      answer: "Online grooming is when someone builds trust with a child so they can manipulate, isolate, control, or exploit them.",
      href: "v3-grooming.html",
      keywords: "what is online grooming in simple terms what is grooming simple explanation online grooming kids predators explanation simple meaning of online grooming",
      intent: "education",
      priority: 4,
      cta: "Read the simple grooming explanation"
    },
    {
      question: "How quickly can grooming happen?",
      answer: "Sometimes within hours or days, especially if the child is vulnerable, isolated, curious, or already emotionally engaged.",
      href: "v3-playbook.html",
      keywords: "how quickly can grooming happen how fast grooming happens timeline predators speed grooming escalation how long does online grooming take",
      intent: "education",
      priority: 4,
      cta: "See how grooming escalates"
    },
    {
      question: "My child deleted messages. Should I be worried?",
      answer: "Deleted messages do not automatically prove danger, but they are a serious sign to slow down, check the pattern, and ask calm questions.",
      href: "v3-my-child-deleted-messages-should-i-be-worried.html",
      keywords: "my child deleted messages should i be worried deleted messages child hidden chats warning sign secrecy message deletion",
      intent: "warning",
      priority: 5,
      cta: "Review deleted-message warning signs"
    },
    {
      question: "My child is hiding messages. What should I do?",
      answer: "Do not panic. Look for the wider pattern, check for secrecy, private movement, and emotional changes, then act calmly.",
      href: "v3-my-child-is-hiding-messages-what-should-i-do.html",
      keywords: "my child is hiding messages what should i do hiding messages child secret chats private messages what now",
      intent: "warning",
      priority: 5,
      cta: "See the next steps now"
    },
    {
      question: "What if my child deletes everything before I check?",
      answer: "Do not assume the issue is gone. Focus on remaining evidence, behaviour patterns, account history, and the wider risk picture.",
      href: "v3-what-to-do-if-your-child-deletes-everything.html",
      keywords: "what if my child deletes everything before i check child deletes everything what to do deleted evidence messages gone",
      intent: "warning",
      priority: 4,
      cta: "Use the deleted-everything guide"
    },
    {
      question: "How do I check a device without causing panic?",
      answer: "Stay calm, be direct but steady, reduce blame, and focus on protection instead of punishment.",
      href: "v3-how-to-check-a-device-without-causing-panic.html",
      keywords: "how do i check a device without causing panic check device calmly without panic how to check childs phone without panic",
      intent: "warning",
      priority: 4,
      cta: "Check a device calmly"
    },
    {
      question: "How do I know if an online friend has become a risk?",
      answer: "Watch for secrecy, emotional dependence, private chat movement, gifts, pressure, or your child becoming defensive about that person.",
      href: "v3-when-an-online-friend-becomes-a-risk.html",
      keywords: "how do i know if an online friend has become a risk online friend risk emotional dependence secrecy private chats grooming",
      intent: "warning",
      priority: 4,
      cta: "Review online-friend risk signs"
    },
    {
      question: "How do I know if my child is being isolated online?",
      answer: "Look for withdrawal from family, heavy focus on one person, secrecy, pressure, guilt, and sudden loyalty shifts.",
      href: "v3-signs-your-child-is-being-isolated-online.html",
      keywords: "how do i know if my child is being isolated online signs child isolated online emotional isolation grooming dependency",
      intent: "warning",
      priority: 4,
      cta: "See isolation warning signs"
    },
    {
      question: "What if the risk is someone we already know?",
      answer: "Known-person risk is often missed because familiarity gets mistaken for safety. Focus on access, secrecy, pressure, and behaviour patterns.",
      href: "v3-known-person-risk.html",
      keywords: "what if the risk is someone we already know known person risk trusted adult family risk familiar person grooming",
      intent: "warning",
      priority: 5,
      cta: "Review known-person risk"
    },
    {
      question: "How do I explain grooming and predators to a child?",
      answer: "Use simple language, clear boundaries, and examples about secrets, private chats, pressure, and unsafe requests.",
      href: "v3-how-to-explain-grooming-and-predators-to-a-child.html",
      keywords: "how do i explain grooming and predators to a child explain grooming predators to child child friendly explanation",
      intent: "prevention",
      priority: 3,
      cta: "Use the child-safe explanation"
    },
    {
      question: "What if my child thinks it was their fault?",
      answer: "Remove blame immediately. Reassure them that manipulation is never their fault and that telling you was the right step.",
      href: "v3-what-to-say-if-your-child-thinks-it-was-their-fault.html",
      keywords: "what if my child thinks it was their fault child shame blame disclosure grooming support",
      intent: "urgent",
      priority: 5,
      cta: "Use the no-blame script"
    },
    {
      question: "What if my child is too embarrassed to tell me?",
      answer: "Lower pressure, stay calm, avoid loaded reactions, and use gentle conversations that make honesty feel safe again.",
      href: "v3-what-to-say-if-your-child-is-embarrassed-to-tell-you.html",
      keywords: "what if my child is too embarrassed to tell me embarrassed to tell parent disclosure shame fear child online safety",
      intent: "warning",
      priority: 4,
      cta: "Use the embarrassment script"
    },
    {
      question: "Why do kids hide things online?",
      answer: "Kids hide things for many reasons including fear, shame, privacy, curiosity, peer pressure, manipulation, or emotional dependence.",
      href: "v3-why-kids-hide-things.html",
      keywords: "why do kids hide things online why kids hide things secrecy shame fear peer pressure manipulation",
      intent: "education",
      priority: 3,
      cta: "Understand why kids hide things"
    },
    {
      question: "Why do kids not ask for help sooner?",
      answer: "They may fear punishment, embarrassment, losing access, hurting someone, or not fully realising the risk they are in.",
      href: "v3-why-kids-dont-ask-for-help.html",
      keywords: "why do kids not ask for help sooner why kids dont ask for help fear shame punishment online risk",
      intent: "education",
      priority: 3,
      cta: "Understand why kids stay quiet"
    },
    {
      question: "How do I monitor without spying?",
      answer: "Use open safety rules, device settings, and transparent check-ins so monitoring feels protective rather than sneaky.",
      href: "v3-how-to-monitor-your-childs-device-without-spying.html",
      keywords: "how do i monitor without spying monitor childs device without spying transparent monitoring trust safety",
      intent: "prevention",
      priority: 3,
      cta: "Monitor with transparency"
    },
    {
      question: "What should parents do in the first 24 hours?",
      answer: "Stay calm, protect the child, preserve evidence, reduce contact, and move into the right response lane quickly.",
      href: "v3-first-24-hours.html",
      keywords: "what should parents do in the first 24 hours first 24 hours parent online danger first response preserve evidence",
      intent: "urgent",
      priority: 5,
      cta: "Go straight to First 24 Hours"
    },
    {
      question: "How do I report online grooming or exploitation?",
      answer: "Save what matters first, then use the right reporting path for your country, platform, and level of urgency.",
      href: "v3-evidence-reporting.html",
      keywords: "how do i report online grooming or exploitation evidence reporting save report properly online grooming report child exploitation",
      intent: "urgent",
      priority: 5,
      cta: "Save evidence and report properly"
    },
    {
      question: "Is Discord safe for kids?",
      answer: "Discord can carry serious risks through servers, DMs, voice chat, weak supervision, and movement into private communities.",
      href: "v3-is-discord-safe-for-kids.html",
      keywords: "is discord safe for kids discord safety children discord risky for kids servers dms voice chat",
      intent: "education",
      priority: 4,
      cta: "Read the Discord guide"
    },
    {
      question: "Why is Discord a risk for some kids?",
      answer: "Discord allows private messages, voice contact, large mixed-age communities, and easy movement away from parent visibility.",
      href: "v3-why-discord.html",
      keywords: "why is discord a risk for some kids why discord risk children discord dangers private servers dms",
      intent: "education",
      priority: 4,
      cta: "See why Discord becomes risky"
    },
    {
      question: "Why is Roblox a risk for some kids?",
      answer: "Roblox risk grows through chat, friend requests, user-made experiences, gifting, and movement into off-platform contact.",
      href: "v3-why-roblox.html",
      keywords: "why is roblox a risk for some kids why roblox risk children chat friend requests user generated games",
      intent: "education",
      priority: 4,
      cta: "See why Roblox needs supervision"
    },
    {
      question: "Why is Fortnite a risk for some kids?",
      answer: "Fortnite risk often comes through voice chat, squad contact, friend requests, and off-platform movement rather than the game alone.",
      href: "v3-why-fortnite.html",
      keywords: "why is fortnite a risk for some kids why fortnite risk children voice chat squad strangers",
      intent: "education",
      priority: 4,
      cta: "See where Fortnite risk grows"
    },
    {
      question: "Can AI chats make kids more secretive?",
      answer: "Yes, some children may become more private, emotionally dependent, or less open with adults when AI chat becomes intense or constant.",
      href: "v3-can-ai-chats-make-kids-more-secretive.html",
      keywords: "can ai chats make kids more secretive ai chat secrecy children ai companions roleplay bots",
      intent: "education",
      priority: 4,
      cta: "See the AI secrecy warning signs"
    },
    {
      question: "Is ChatGPT safe for kids?",
      answer: "ChatGPT can be useful, but safe use depends on age, supervision, purpose, and whether it replaces healthy guidance from real adults.",
      href: "v3-is-chatgpt-safe-for-kids.html",
      keywords: "is chatgpt safe for kids chatgpt children safe ai chatbot risks benefits parental guidance",
      intent: "education",
      priority: 3,
      cta: "Read the ChatGPT safety guide"
    },
    {
      question: "What are the warning signs of sextortion?",
      answer: "Warning signs include secrecy, panic, threats, urgent money demands, pressure to send more, or fear after sharing images.",
      href: "v3-sextortion.html",
      keywords: "what are the warning signs of sextortion sextortion signs blackmail image threats child online",
      intent: "urgent",
      priority: 5,
      cta: "See the sextortion warning signs"
    },
    {
      question: "What should I do if my child is being blackmailed online?",
      answer: "Stay calm, stop further contact, save evidence, do not pay, and move into reporting and first-response steps immediately.",
      href: "v3-sextortion.html",
      keywords: "what should i do if my child is being blackmailed online blackmail online child sextortion what now",
      intent: "urgent",
      priority: 5,
      cta: "Take sextortion action now"
    },
    {
      question: "How do I know if my child has a secret account?",
      answer: "Look for hidden apps, second profiles, unusual logins, deleted notifications, sudden privacy around devices, and defensive behaviour.",
      href: "v3-secret-accounts.html",
      keywords: "how do i know if my child has a secret account secret account hidden profile second account child online",
      intent: "warning",
      priority: 4,
      cta: "See secret-account signs"
    },
    {
      question: "Why are behaviour changes important in online safety?",
      answer: "Behaviour changes often show up before the full story does. Mood shifts, secrecy, panic, withdrawal, and defensiveness can all matter.",
      href: "v3-why-behaviour-changes.html",
      keywords: "why are behaviour changes important in online safety behaviour changes child online warning signs mood shifts secrecy",
      intent: "education",
      priority: 3,
      cta: "Understand behaviour-change signals"
    },
    {
      question: "What if something feels off but I cannot prove it?",
      answer: "You do not need perfect proof to start protecting your child. Start with patterns, safer settings, calm questions, and the right next step.",
      href: "v3-real-scenarios.html",
      keywords: "what if something feels off but i cannot prove it feels off no proof online risk child concern what now",
      intent: "warning",
      priority: 4,
      cta: "Match the situation to a real scenario"
    },
    {
      question: "What should I do now if I feel overwhelmed?",
      answer: "Start with one clear step: use Start Here, the Safety Check, or the First 24 Hours page depending on how urgent it feels.",
      href: "v3-what-now.html",
      keywords: "what should i do now if i feel overwhelmed overwhelmed parent online safety what now where do i start",
      intent: "urgent",
      priority: 5,
      cta: "Find the right next step"
    },
    {
      question: "Why do kids not recognise online danger?",
      answer: "Kids often focus on attention, belonging, curiosity, or fun first. That makes manipulation and grooming harder for them to spot early.",
      href: "v3-why-kids-dont-recognise-risk.html",
      keywords: "why do kids not recognise online danger why kids dont recognise risk online grooming manipulation children",
      intent: "education",
      priority: 3,
      cta: "Understand why risk gets missed"
    }
  ];

  const STATIC_PAGE_INDEX = [
    makeEntry({
      title: "Start Here",
      description: "Main entry page for parents who want the clearest first step.",
      href: "v3-start.html",
      keywords: "start here first step entry point worried parent where do i start posh",
      category: "Start & Safety",
      intent: "prevention",
      priority: 5,
      cta: "Start here now"
    }),
    makeEntry({
      title: "Safety Score",
      description: "Quick parent safety check to understand risk level and next moves.",
      href: "v3-safety-score.html",
      keywords: "safety score check quiz assessment risk level online safety parent",
      category: "Start & Safety",
      intent: "prevention",
      priority: 4,
      cta: "Take the safety check"
    }),
    makeEntry({
      title: "What To Do Now",
      description: "Action hub for parents who feel overwhelmed and need the next right step.",
      href: "v3-what-now.html",
      keywords: "what to do now next step overwhelmed parent action hub urgent guidance",
      category: "Action Hub",
      intent: "urgent",
      priority: 5,
      cta: "Find your next step"
    }),
    makeEntry({
      title: "First 24 Hours",
      description: "Immediate steps when something already feels real, active, or serious.",
      href: "v3-first-24-hours.html",
      keywords: "first 24 hours urgent active danger serious response now",
      category: "Action",
      intent: "urgent",
      priority: 5,
      cta: "Go to First 24 Hours"
    }),
    makeEntry({
      title: "Evidence & Reporting",
      description: "How to save evidence properly and move into reporting without making the situation worse.",
      href: "v3-evidence-reporting.html",
      keywords: "evidence reporting screenshots save evidence report police esafety grooming sextortion",
      category: "Reporting",
      intent: "urgent",
      priority: 5,
      cta: "Save evidence properly"
    }),
    makeEntry({
      title: "Reporting Australia",
      description: "Australian reporting pathways for online child safety concerns.",
      href: "v3-reporting-australia.html",
      keywords: "reporting australia esafety police child safety australia",
      category: "Reporting",
      intent: "urgent",
      priority: 4,
      cta: "Use Australia reporting help"
    }),
    makeEntry({
      title: "Parent Scripts",
      description: "Ready-to-use scripts for hard talks, disclosures, and online safety conversations.",
      href: "v3-parent-scripts.html",
      keywords: "parent scripts what to say talk to child disclosure conversation hard talk",
      category: "Parent Help",
      intent: "prevention",
      priority: 5,
      cta: "Use parent scripts"
    }),
    makeEntry({
      title: "How To Talk So Your Child Opens Up",
      description: "Calmer communication techniques that make honesty feel safer than silence.",
      href: "v3-how-to-talk-so-your-child-opens-up.html",
      keywords: "opens up child trust disclosure calm communication honesty",
      category: "Parent Help",
      intent: "prevention",
      priority: 4,
      cta: "Help your child open up"
    }),
    makeEntry({
      title: "Red Flags",
      description: "Core red flags every parent should know across devices, chats, apps, and behaviour.",
      href: "v3-redflags.html",
      keywords: "red flags warning signs behaviour secrecy deleted messages panic isolation",
      category: "Warning Signs",
      intent: "warning",
      priority: 5,
      cta: "See the red flags"
    }),
    makeEntry({
      title: "Signs My Child Is Being Groomed Online",
      description: "Focused grooming warning-sign page for parents who think something may already be happening.",
      href: "v3-signs-my-child-is-being-groomed-online.html",
      keywords: "groomed online grooming signs child targeted predator signs",
      category: "Warning Signs",
      intent: "warning",
      priority: 5,
      cta: "Check the grooming signs"
    }),
    makeEntry({
      title: "Dangerous Apps",
      description: "Higher-risk apps, platforms, and patterns parents should understand fast.",
      href: "v3-dangerous-apps.html",
      keywords: "dangerous apps risky apps kids discord snapchat telegram anonymous apps",
      category: "Apps",
      intent: "warning",
      priority: 4,
      cta: "Review dangerous apps"
    }),
    makeEntry({
      title: "Safe Apps & Games for Kids",
      description: "Safer options and lower-risk digital environments for children.",
      href: "v3-safe-apps-and-games-for-kids.html",
      keywords: "safe apps safe games kids safer choices lower risk",
      category: "Apps",
      intent: "prevention",
      priority: 3,
      cta: "See safer options"
    }),
    makeEntry({
      title: "Discord",
      description: "Discord child safety guide covering DMs, servers, voice chat, and community risk.",
      href: "v3-social-discord.html",
      keywords: "discord servers dms voice chat community risk child safety",
      category: "Social App",
      intent: "warning",
      priority: 4,
      cta: "Read the Discord guide"
    }),
    makeEntry({
      title: "Snapchat",
      description: "Snapchat safety guide covering disappearing messages, streaks, pressure, and hidden contact.",
      href: "v3-social-snapchat.html",
      keywords: "snapchat disappearing messages streaks hidden contact sextortion",
      category: "Social App",
      intent: "warning",
      priority: 4,
      cta: "Read the Snapchat guide"
    }),
    makeEntry({
      title: "Roblox",
      description: "Roblox safety guide covering chat, gifting, friend requests, and user-generated risk.",
      href: "v3-game-roblox.html",
      keywords: "roblox robux friend requests chat gifting user generated game risk",
      category: "Game",
      intent: "warning",
      priority: 4,
      cta: "Read the Roblox guide"
    }),
    makeEntry({
      title: "Why Roblox Requires Supervision",
      description: "Explains why Roblox often needs closer parent visibility than many families realise.",
      href: "v3-why-roblox-requires-supervision.html",
      keywords: "roblox supervision why roblox requires supervision kids",
      category: "Game",
      intent: "education",
      priority: 4,
      cta: "See why Roblox needs supervision"
    }),
    makeEntry({
      title: "Parental Controls by Device",
      description: "Main device-controls hub for iPhone, Android, tablets, Windows, and more.",
      href: "v3-parental-controls-by-device.html",
      keywords: "parental controls by device iphone android ipad windows settings",
      category: "Controls",
      intent: "prevention",
      priority: 4,
      cta: "Set parental controls by device"
    }),
    makeEntry({
      title: "How To Monitor Without Breaking Trust",
      description: "Open, honest monitoring guide for parents who want safety without sneaky spying.",
      href: "v3-how-to-monitor-without-breaking-trust.html",
      keywords: "monitor without breaking trust honest monitoring check phone safely",
      category: "Controls",
      intent: "prevention",
      priority: 4,
      cta: "Monitor with trust"
    }),
    makeEntry({
      title: "Algorithm Awareness",
      description: "How feeds, recommendations, and repeated exposure shape attention and behaviour.",
      href: "v3-algorithm-awareness.html",
      keywords: "algorithm awareness recommendations feed repeated exposure behaviour",
      category: "Awareness",
      intent: "education",
      priority: 3,
      cta: "Understand algorithm pressure"
    }),
    makeEntry({
      title: "How Screens Affect the Brain",
      description: "Explains dopamine, reactivity, boredom loss, and why screen patterns change behaviour.",
      href: "v3-how-screens-affect-your-childs-brain.html",
      keywords: "screens affect brain dopamine boredom reactivity attention",
      category: "Awareness",
      intent: "education",
      priority: 3,
      cta: "Read the brain-impact guide"
    }),
    makeEntry({
      title: "AI Chat Risks for Children",
      description: "Explains AI companion, chatbot, and roleplay risks for kids and teens.",
      href: "v3-ai-chat-risks-for-children.html",
      keywords: "ai chat risks children chatbots ai companions roleplay bots",
      category: "AI",
      intent: "education",
      priority: 4,
      cta: "Review AI chat risks"
    }),
    makeEntry({
      title: "Diagnosis Without Shame",
      description: "Supportive page for understanding diagnosis without panic, shame, or identity damage.",
      href: "v3-diagnosis-without-shame.html",
      keywords: "diagnosis without shame neurodivergent support family understanding",
      category: "Wellbeing",
      intent: "education",
      priority: 2,
      cta: "Read the diagnosis support guide"
    }),
    makeEntry({
      title: "POSH Site Map",
      description: "Browse every major page by category across the full POSH system.",
      href: "sitemap.html",
      keywords: "site map sitemap full directory all pages posh",
      category: "Directory",
      intent: "education",
      priority: 2,
      cta: "Browse the full site map"
    })
  ];

  function buildQuestionEntries(questions) {
    return questions.map(function (item) {
      return makeEntry({
        title: item.question,
        description: item.answer,
        href: item.href,
        keywords: item.keywords,
        category: "Parent Question",
        intent: item.intent,
        priority: item.priority,
        cta: item.cta,
        source: "question"
      });
    });
  }

  function dedupeEntries(entries) {
    const seen = new Set();

    return entries.filter(function (item) {
      const key = [
        normalizeText(item.title).toLowerCase(),
        normalizeText(item.href).toLowerCase()
      ].join("::");

      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  const QUESTION_ENTRIES = buildQuestionEntries(RAW_PARENT_QUESTIONS);
  const SEARCH_INDEX = dedupeEntries([].concat(STATIC_PAGE_INDEX, QUESTION_ENTRIES));

  window.POSH_PARENT_QUESTIONS = RAW_PARENT_QUESTIONS;
  window.POSH_SEARCH_INDEX = SEARCH_INDEX;
  window.POSH_SEARCH_META = {
    version: "premium-v2",
    generatedAt: "2026-04-18",
    totalEntries: SEARCH_INDEX.length,
    totalQuestions: RAW_PARENT_QUESTIONS.length
  };
})();
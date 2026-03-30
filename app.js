(function () {

  /* =========================
     FULL NAV (YOUR EXACT NAV)
  ========================= */

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
          <a href="index.html" data-type="Page" data-keywords="home posh main page">Home</a>
          <a href="v3-start.html" data-type="Page" data-keywords="start first steps safety">Start Here</a>
          <a href="v3-entry-system.html" data-type="Page" data-keywords="quick fast entry start">Start Here Fast</a>
          <a href="v3-safety-score.html" data-type="Page" data-keywords="score audit checklist safety check">Safety Check</a>
          <a href="v3-what-now.html" data-type="Page" data-keywords="what now immediate help next steps">What To Do Now</a>
          <a href="v3-first-24-hours.html" data-type="Page" data-keywords="urgent first 24 hours evidence response crisis">First 24 Hours</a>
          <a href="v3-posh-response-system.html" data-type="System" data-keywords="response system notice check secure talk monitor escalate">POSH Response System</a>
          <a href="v3-urgent-warning-signs.html" data-type="Topic" data-keywords="urgent warning signs act now danger immediate concern">Urgent Warning Signs</a>
          <a href="v3-exposure-vs-danger.html" data-type="Topic" data-keywords="exposure vs danger risk levels high exposure active danger">Exposure vs Danger</a>
          <a href="v3-reporting.html" data-type="Page" data-keywords="report help police support evidence hotline">Report &amp; Get Help</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Parents, Conversations &amp; House Rules</summary>
        <nav>
          <a href="v3-parent-scripts.html" data-type="Topic" data-keywords="what to say talk to child scripts conversation help">Parent Scripts</a>
          <a href="v3-parent-conversations.html" data-type="Topic" data-keywords="conversations difficult talks calm discussion">Parent Conversations</a>
          <a href="v3-what-to-say-if-your-child-opens-up.html" data-type="Topic" data-keywords="child opens up what to say disclosure support">If Your Child Opens Up</a>
          <a href="v3-when-your-child-wont-talk.html" data-type="Topic" data-keywords="child wont talk silence shutdown">If Your Child Won’t Talk</a>
          <a href="v3-house-rules.html" data-type="Topic" data-keywords="rules boundaries family device rules expectations">House Rules</a>
          <a href="v3-age-guide.html" data-type="Topic" data-keywords="age suitable age guide children teens">Age Guide</a>
          <a href="v3-mindset.html" data-type="Topic" data-keywords="mindset parent thinking awareness calm structure">Parent Mindset</a>
          <a href="v3-how-to-monitor-without-breaking-trust.html" data-type="Topic" data-keywords="monitor trust check child calmly">Monitor Without Breaking Trust</a>
          <a href="v3-how-to-check-a-device-without-causing-panic.html" data-type="Topic" data-keywords="check device calmly without panic evidence support">Check a Device Calmly</a>
          <a href="v3-how-to-rebuild-trust-after-an-online-scare.html" data-type="Topic" data-keywords="rebuild trust after online scare repair connection">Rebuild Trust After an Online Scare</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Behaviour, Grooming &amp; Risk</summary>
        <nav>
          <a href="v3-redflags.html" data-type="Topic" data-keywords="warning signs red flags grooming risk">Red Flags</a>
          <a href="v3-predators.html" data-type="Topic" data-keywords="predators grooming exploitation risk">Predators &amp; Grooming</a>
          <a href="v3-playbook.html" data-type="Topic" data-keywords="playbook grooming escalation pattern">Predator Playbook</a>
          <a href="v3-definitions.html" data-type="Topic" data-keywords="definitions explain predator victim manipulation behaviour">Understanding What’s Happening</a>
          <a href="v3-double-life-online.html" data-type="Topic" data-keywords="double life online hidden accounts secret identity secrecy">Double Life Online</a>
          <a href="v3-when-a-child-becomes-dependent-on-someone-online.html" data-type="Topic" data-keywords="online dependency emotional dependence attachment hidden relationship">Online Dependency</a>
          <a href="v3-known-person-risk.html" data-type="Topic" data-keywords="known person trusted adult family risk">Known Person Risk</a>
          <a href="v3-real-life-risk.html" data-type="Topic" data-keywords="offline real life risk meeting in person">Real Life Risk</a>
          <a href="v3-behaviours-hub.html" data-type="Topic" data-keywords="behaviour patterns control isolation manipulation hub">Behaviour Patterns Hub</a>
          <a href="v3-early-behaviours-that-can-signal-red-flags.html" data-type="Topic" data-keywords="early behaviour warning signs">Early Behaviour Red Flags</a>
          <a href="v3-why-my-child-is-acting-out-of-character.html" data-type="Topic" data-keywords="acting out of character changed behaviour shift">Acting Out of Character</a>
          <a href="v3-why-kids-dont-recognise-risk.html" data-type="Topic" data-keywords="kids dont recognise risk miss warning signs">Why Kids Don’t Recognise Risk</a>
          <a href="v3-how-adults-build-trust-before-control.html" data-type="Topic" data-keywords="trust before control grooming manipulation">Trust Before Control</a>
          <a href="v3-manipulation-behaviours.html" data-type="Topic" data-keywords="manipulation behaviours guilt pressure secrecy">Manipulation Behaviours</a>
          <a href="v3-controlling-behaviours.html" data-type="Topic" data-keywords="control controlling isolation narrative">Controlling Behaviours</a>
          <a href="v3-emotional-manipulation.html" data-type="Topic" data-keywords="emotional manipulation guilt control influence">Emotional Manipulation</a>
          <a href="v3-toxic-behaviour-patterns.html" data-type="Topic" data-keywords="toxic behaviour patterns control pressure secrecy">Toxic Behaviour Patterns</a>
          <a href="v3-why-isolation-hits-children-harder.html" data-type="Topic" data-keywords="isolation child risk dependency">Why Isolation Hits Children Harder</a>
          <a href="v3-when-a-child-is-turned-against-a-safe-parent.html" data-type="Topic" data-keywords="turned against safe parent alienation manipulation">Turned Against a Safe Parent</a>
          <a href="v3-self-harm-and-suicide-warning-signs.html" data-type="Topic" data-keywords="self harm suicide warning signs emotional collapse">Self Harm &amp; Suicide Warning Signs</a>
          <a href="v3-why-kids-self-harm.html" data-type="Topic" data-keywords="why kids self harm causes distress coping">Why Kids Self Harm</a>
        </nav>
      </details>

      <details class="nav-group">
        <summary>Devices, Platforms, Apps &amp; Games</summary>
        <nav>
          <a href="v3-devices.html" data-type="Device">Devices</a>
          <a href="v3-device-controls.html" data-type="Device">Device Safety</a>
          <a href="v3-parental-controls-by-device.html" data-type="Device">Parental Controls by Device</a>
          <a href="v3-how-to-set-parental-controls-and-passwords.html" data-type="Device">Set Controls & Passwords</a>
          <a href="v3-how-to-set-parental-controls-iphone.html" data-type="Device">iPhone Controls</a>
          <a href="v3-how-to-set-parental-controls-android.html" data-type="Device">Android Controls</a>
          <a href="v3-best-parental-control-apps.html" data-type="Device">Best Parental Control Apps</a>
          <a href="v3-platforms.html" data-type="Platform">Platforms</a>
          <a href="v3-gaming.html" data-type="Game">Gaming Safety</a>
          <a href="v3-all-games.html" data-type="Game">All Games Directory</a>
          <a href="v3-socials.html" data-type="App">Social Media & Chat</a>
          <a href="v3-all-applications.html" data-type="App">All Applications</a>
          <a href="v3-videochat.html" data-type="App">Live Video & Streaming</a>
          <a href="v3-streaming-video.html" data-type="App">Streaming & Video Apps</a>
          <a href="v3-dangerous-apps.html" data-type="App">Dangerous Apps</a>
          <a href="v3-safe-apps-and-games-for-kids.html" data-type="App">Safe Apps & Games</a>
          <a href="v3-ai-chat-risks-for-children.html" data-type="AI">AI Chat Risks</a>
          <a href="v3-is-chatgpt-safe-for-kids.html" data-type="AI">Is ChatGPT Safe for Kids?</a>
        </nav>
      </details>

    </div>
  `;

  const footerHTML = `
    <footer>
      <div class="footer-meta">
        Built to educate parents. Designed to protect our children.<br/>
        <span class="small">Contact: allthewaycarpentry@gmail.com</span>
      </div>
    </footer>
  `;

  /* =========================
     SEARCH ENGINE
  ========================= */

  function tokenize(text) {
    return text.toLowerCase().split(/\s+/);
  }

  function score(item, query) {
    let s = 0;
    const q = query.toLowerCase();
    if (item.title.toLowerCase().includes(q)) s += 50;
    if ((item.keywords || "").includes(q)) s += 30;
    return s;
  }

  function search(query, index) {
    return index
      .map(i => ({ ...i, score: score(i, query) }))
      .filter(i => i.score > 0)
      .sort((a, b) => b.score - a.score);
  }

  /* =========================
     INIT
  ========================= */

  document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("nav").innerHTML = navHTML;
    document.getElementById("footer").innerHTML = footerHTML;

    const index = window.POSH_SEARCH_DATA || [];

    const input = document.getElementById("poshSearch");
    const results = document.getElementById("poshSearchResults");

    if (input) {
      input.addEventListener("input", function () {
        const q = this.value;
        if (!q) return results.innerHTML = "";

        const matches = search(q, index).slice(0, 8);

        results.innerHTML = matches.map(m =>
          `<a href="${m.href}" class="nav-search-result">${m.title}</a>`
        ).join("");
      });
    }

  });

})();
(function () {
  const navHTML = `
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

      document.addEventListener("click", (event) => {
        const clickedInsideNav = navTarget.contains(event.target);

        if (!clickedInsideNav) {
          navGroups.forEach((group) => {
            group.open = false;
          });
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          navGroups.forEach((group) => {
            group.open = false;
          });
        }
      });
    }

    if (footerTarget) {
      footerTarget.innerHTML = footerHTML;
    }
  });
})();

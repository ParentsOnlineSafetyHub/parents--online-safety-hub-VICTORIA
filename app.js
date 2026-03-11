(function () {
  const navHTML = `
  <div class="nav-accordion">

    <details class="nav-group">
      <summary>Start & Safety</summary>
      <nav>
        <a href="index.html">Home</a>
        <a href="v3-start.html">Start Here</a>
        <a href="v3-safety-score.html">Safety Check</a>
        <a href="v3-redflags.html">Red Flags</a>
        <a href="v3-reporting.html">Report & Get Help</a>
        <a href="v3-parent-scripts.html">Parent Scripts</a>
        <a href="v3-house-rules.html">House Rules</a>
        <a href="v3-age-guide.html">Age Guide</a>
      </nav>
    </details>

    <details class="nav-group">
      <summary>Platforms, Games & Apps</summary>
      <nav>
        <a href="v3-devices.html">Devices</a>
        <a href="v3-device-controls.html">Device Safety</a>
        <a href="v3-platforms.html">Platforms</a>
        <a href="v3-gaming.html">Gaming Safety</a>
        <a href="v3-all-games.html">All Games Directory</a>
        <a href="v3-socials.html">Social Media & Chat</a>
        <a href="v3-videochat.html">Live Video & Streaming</a>
      </nav>
    </details>

    <details class="nav-group">
      <summary>Awareness & Resources</summary>
      <nav>
        <a href="v3-predators.html">Predators & Grooming</a>
        <a href="v3-playbook.html">Predator Playbook</a>
        <a href="v3-awareness.html">Safety Awareness</a>
        <a href="v3-real-investigations.html">Real Investigations</a>
        <a href="v3-algorithm-awareness.html">Algorithm Risks</a>
        <a href="v3-mindset.html">Parent Mindset</a>
        <a href="v3-downloads.html">Downloads</a>
        <a href="v3-cancel-subscriptions.html">Cancel Subscriptions</a>
        <a href="v3-support.html">Support</a>
      </nav>
    </details>

  </div>
  `;

  const target = document.getElementById("nav");

  if (target) {
    target.innerHTML = navHTML;

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    const navLinks = target.querySelectorAll("a");
    const navGroups = target.querySelectorAll(".nav-group");

    navLinks.forEach((link) => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("nav-active");
        link.setAttribute("aria-current", "page");

        const parentDetails = link.closest(".nav-group");
        if (parentDetails) {
          parentDetails.open = true;
        }
      }
    });
  }
})();

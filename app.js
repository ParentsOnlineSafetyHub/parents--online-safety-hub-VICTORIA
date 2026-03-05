(function () {
  const navHTML = `
  <nav>
    <a href="index.html">Home</a>
    <a href="v3-start.html">Start</a>
    <a href="v3-safety-score.html">Safety Score</a>
    <a href="v3-age-guide.html">Age Guide</a>
    <a href="v3-parent-scripts.html">Parent Scripts</a>
    <a href="v3-house-rules.html">House Rules</a>
    <a href="v3-redflags.html">Red Flags</a>
    <a href="v3-device-controls.html">Device Controls</a>
    <a href="v3-platforms.html">Platforms</a>
    <a href="v3-gaming.html">Gaming</a>
    <a href="v3-socials.html">Social Apps</a>
    <a href="v3-videochat.html">Video & Live</a>
    <a href="v3-algorithm-awareness.html">Algorithm Awareness</a>
    <a href="v3-awareness.html">Awareness Hub</a>
    <a href="v3-predators.html">Predators</a>
    <a href="v3-mindset.html">Mindset</a>
    <a href="v3-reporting.html">Reporting</a>
    <a href="v3-downloads.html">Downloads</a>
    <a href="v3-cancel-subscriptions.html">Cancel Subscriptions</a>
    <a href="v3-support.html">Support</a>
  </nav>
  `;

  const target = document.getElementById("nav");
  if (target) target.innerHTML = navHTML;
})();

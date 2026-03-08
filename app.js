(function () {
  const navHTML = `
  <nav>
    <a href="index.html">Home</a>
    <a href="v3-start.html">Start Here</a>
    <a href="v3-safety-score.html">Safety Check</a>
    <a href="v3-age-guide.html">Age Guide</a>
    <a href="v3-parent-scripts.html">Parent Scripts</a>
    <a href="v3-redflags.html">Red Flags</a>
    <a href="v3-playbook.html">Predator Playbook</a>
    <a href="v3-reporting.html">Report & Get Help</a>
    <a href="v3-house-rules.html">House Rules</a>
    <a href="v3-device-controls.html">Device Safety</a>
    <a href="v3-platforms.html">Platforms</a>
    <a href="v3-gaming.html">Gaming</a>
    <a href="v3-socials.html">Social Media & Chat</a>
    <a href="v3-videochat.html">Live Video & Streaming</a>
    <a href="v3-downloads.html">Downloads</a>
    <a href="v3-support.html">Support</a>
    <a href="v3-algorithm-awareness.html">Algorithm Risks</a>
    <a href="v3-predators.html">Predators & Grooming</a>
    <a href="v3-awareness.html">Safety Awareness</a>
    <a href="v3-mindset.html">Parent Mindset</a>
    <a href="v3-cancel-subscriptions.html">Cancel Subscriptions</a>
  </nav>
  `;

  const target = document.getElementById("nav");
  if (target) target.innerHTML = navHTML;
})();

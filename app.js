function subscribe() {
  const emailEl = document.getElementById('email');
  const email = (emailEl ? emailEl.value : '').trim();

  if (!email) {
    alert('Enter your email first');
    return;
  }

  const subject = encodeURIComponent('Subscribe: Parents Online Safety Hub (Victoria)');
  const body = encodeURIComponent('Please add me to updates list. My email: ' + email);

  window.location.href =
    'mailto:allthewaycarpentry@gmail.com?subject=' + subject + '&body=' + body;
}

function copyLink() {
  const input = document.getElementById('shareLink');
  const msg = document.getElementById('copyMsg');

  if (!input) {
    if (msg) msg.textContent = 'Copy failed (link box not found).';
    return;
  }

  const text = input.value || '';

  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (msg) msg.textContent = 'Link copied ✅';
    }).catch(() => {
      fallbackCopy(input, msg);
    });
    return;
  }

  // Fallback for older browsers
  fallbackCopy(input, msg);
}

function fallbackCopy(input, msg) {
  try {
    input.focus();
    input.select();
    input.setSelectionRange(0, 99999); // mobile

    const ok = document.execCommand('copy');
    if (msg) msg.textContent = ok ? 'Link copied ✅' : 'Copy failed — please copy manually.';
  } catch (e) {
    if (msg) msg.textContent = 'Copy failed — please copy manually.';
  }
}

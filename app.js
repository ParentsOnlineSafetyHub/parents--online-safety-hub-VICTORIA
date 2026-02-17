function subscribe(){
  const email = document.getElementById('email').value.trim();
  if(!email){ alert('Enter your email first'); return; }

  const subject = encodeURIComponent('Subscribe: Parents Online Safety Hub (Victoria)');
  const body = encodeURIComponent('Please add me to updates list. My email: ' + email);
  window.location.href =
    'mailto:allthewaycarpentry@gmail.com?subject=' + subject + '&body=' + body;
}

function copyLink(){
  const input = document.getElementById('shareLink');
  if(!input) return;

  input.select();
  input.setSelectionRange(0, 99999);

  // Works on most modern browsers
  navigator.clipboard?.writeText(input.value).then(() => {
    const msg = document.getElementById('copyMsg');
    if(msg) msg.textContent = 'Link copied ✅';
  }).catch(() => {
    // Fallback
    document.execCommand('copy');
    const msg = document.getElementById('copyMsg');
    if(msg) msg.textContent = 'Link copied ✅';
  });
}

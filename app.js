
function subscribe(){
  const email=document.getElementById('email').value.trim();
  if(!email){alert('Enter email');return;}
  const subject=encodeURIComponent('Subscribe: Parents Online Safety Hub (Victoria)');
  const body=encodeURIComponent('Please add me. Email: '+email);
  window.location='mailto:allthewaycarpentry@gmail.com?subject='+subject+'&body='+body;
}

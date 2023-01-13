function detectMob() {
    let size = ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
    return size;
  }

if (size == false) {
  document.getElementById('stylesheet').href='styleMobile.css';
  console.log('Device type: mobile')
}
else {
  console.log('Device type: desktop')
}

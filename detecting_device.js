function detectMob() {
    let size = ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
    return size;
  }

if (size == false) {
  document.getElementById('stylesheet').href='styleMobile.css';
    
}

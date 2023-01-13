function detectMob() {
    let size = ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
    return size;
  }

if (size == false) {
  const strap = document.getElementsByClassName('strap');
  strap.style.innerWidth = "100%";

  const titleStrap = document.getElementsByClassName('titleLine');
  titleStrap.style.innerWidth = '100%';
  titleStrap.style.innerHeight = '1000px'
    
}

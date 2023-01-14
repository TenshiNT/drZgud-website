const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if( isMobile.any() ) {
  document.getElementById('stylesheet').href='styleMobile.css';

  const strap = document.getElementById('strap');
  strap.style.height = '600px';

  const profilePicture = document.getElementById('profilePicture');
  profilePicture.style.width = '550px';
  profilePicture.style.height = 'auto';

  const titleStrap = document.getElementById('titleStrap');
  titleStrap.style.height = '100px';
  titleStrap.style.width = '1300px';

  const plane = document.getElementById('plane');
  plane.style.width = '75px';
  plane.style.height = '75px';

  const headerBadania = document.getElementById('headerBadania');
  headerBadania.style.fontSize = '50px';

  const name = document.getElementById('name');
  name.style.fontSize = '55px';

  const info = document.getElementById('info');
  info.style.fontSize = '40px';

  const location = document.getElementById('location');
  location.style.fontSize = '40px';

  const phoneNum = document.getElementById('phoneNum');
  phoneNum.style.fontSize = '40px';

  const num = document.getElementById('num');
  num.style.fontSize = '41px';

  var meta = document.createElement('meta');
  meta.httpEquiv = "X-UA-Compatible";
  meta.content = "name=viewport", "content=width=1000";
  document.getElementsByTagName('head')[0].appendChild(meta);
}

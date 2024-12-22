// Menambahkan efek muncul saat scroll
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    aboutSection.classList.add('appear');
  }
});

//   Toggel class active
const nanvarulil  = document.querySelector
('.nav ul li ');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclik = () => {
  navbarNav.classList.toggle('active');
};


// klik di luar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
  }
});
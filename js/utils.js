// ambil elemen
const navbarNav = document.querySelector(".right-sections");
const menu = document.querySelector("#hamburger-menu");

// klik hamburger
menu.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("lock-scroll");
};

// klik di luar menu → tutup sidebar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("lock-scroll");
  }
});

// 🔥 INI BAGIAN BARU (WAJIB)
document.querySelectorAll('.right-sections a').forEach(link => {
  link.addEventListener('click', () => {
    navbarNav.classList.remove('active');
    menu.classList.remove('active');
    document.body.classList.remove('lock-scroll');
  });
});


// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// fungsi toggle display
function displaychange(p1, p2, p3, p4) {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const market = document.getElementById("market");
  const contact = document.getElementById("contact");

  home.style.display = p1 == 1 ? "flex" : "none";
  about.style.display = p2 == 1 ? "inline-block" : "none";
  market.style.display = p3 == 1 ? "inline-block" : "none";
  contact.style.display = p4 == 1 ? "block" : "none";

  displaychange2(0, 0, 0, 0);
}
displaychange(1, 0, 0, 0);

function displaychange2(p1, p2, p3, p4) {
  const homeindustry = document.getElementById("home-industry");
  const agriindustry = document.getElementById("agriculture-industry");
  const marineindustry = document.getElementById("marine-industry");
  const miningindustry = document.getElementById("mining-industry");

  homeindustry.style.display = p1 == 1 ? "block" : "none";
  agriindustry.style.display = p2 == 1 ? "block" : "none";
  marineindustry.style.display = p3 == 1 ? "block" : "none";
  miningindustry.style.display = p4 == 1 ? "block" : "none";
}

// fungsi ganti bahasa

function changelanguage(type) {
  const langs = document.querySelectorAll("span[lang]");
  document.getElementById("form-lang-switch").style.display = "none";
  document.getElementById("lang-switch").value = type;

  langs.forEach((main) => {
    main.style.display = main.lang == type ? "inline-block" : "none";
  });
}
changelanguage("id"); // show just Indonesian text (you can change it)

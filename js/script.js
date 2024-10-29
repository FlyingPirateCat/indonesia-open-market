// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// fungsi toggle display
const home = document.getElementById("home");
const about = document.getElementById("about");
const market = document.getElementById("market");
const contact = document.getElementById("contact");

function displaychange(p1, p2, p3, p4) {
  home.style.display = p1 == 1 ? "flex" : "none";
  about.style.display = p2 == 1 ? "inline-block" : "none";
  market.style.display = p3 == 1 ? "inline-block" : "none";
  contact.style.display = p4 == 1 ? "block" : "none";
}

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik di luar elemen untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
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

function flagswitch() {
  // const opening = document.getElementById("opening");
  // opening.innerHTML = langs;

  // const googtr = readCookie("googtrans").split("/")[2];
  const googtr = (lang = document.querySelector("html").getAttribute("lang"));

  const flagid = document.getElementById("flag-id");
  const flagusa = document.getElementById("flag-usa");
  const flagcn = document.getElementById("flag-cn");
  const flagsa = document.getElementById("flag-sa");

  if (googtr == "id") {
    flagid.style.display = "inline-block";
    flagusa.style.display = "none";
    flagcn.style.display = "none";
    flagsa.style.display = "none";
  } else if (googtr == "en") {
    flagid.style.display = "none";
    flagusa.style.display = "inline-block";
    flagcn.style.display = "none";
    flagsa.style.display = "none";
  } else if (googtr == "zh-CN") {
    flagid.style.display = "none";
    flagusa.style.display = "none";
    flagcn.style.display = "inline-block";
    flagsa.style.display = "none";
  } else if (googtr == "ع" || googtr == "ar") {
    flagid.style.display = "none";
    flagusa.style.display = "none";
    flagcn.style.display = "none";
    flagsa.style.display = "inline-block";
  }
}

window.setInterval(function () {
  flagswitch();
}, 2000);

flagswitch();

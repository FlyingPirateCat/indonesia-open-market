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

function readCookie(name) {
  var c = document.cookie.split("; "),
    cookies = {},
    i,
    C;
  for (i = c.length - 1; i >= 0; i--) {
    C = c[i].split("=");
    cookies[C[0]] = C[1];
  }
  return cookies[name];
}

function flagswitch() {
  const googtr = readCookie("googtrans").split("/")[2];
  // document.getElementsByTagName('html')[0].lang
  // const imgflag = document.getElementById("img-flag");
  const imgflag = document.querySelector("img[flag]");
  // const opening = document.getElementById("opening");
  // opening.innerHTML = document.getElementsByTagName("html")[0].lang;

  if (googtr == "id") {
    imgflag.src = "img/flag/id.png";
  } else if (googtr == "en") {
    imgflag.src = "img/flag/usa.png";
  } else if (googtr == "zh-CN") {
    imgflag.src = "img/flag/cn.png";
  } else if (googtr == "ع" || googtr == "ar") {
    imgflag.src = "img/flag/sa.png";
  }
}

window.setInterval(function () {
  flagswitch();
}, 5000);

setcookie("googtrans", "/en/id");
flagswitch();

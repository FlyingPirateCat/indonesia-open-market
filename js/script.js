// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

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

// Toggle class active untuk globe
document.querySelector("#globe-button").onclick = (e) => {
  e.preventDefault();
  langs = document.getElementById("lang-switch");
  extra = document.querySelector(".other-extra");
  langs.style.display = "inline-block";
  extra.style.display = "none";
  setTimeout(function () {
    langs.style.display = "none";
    extra.style.display = "inline-block";
  }, 5000);
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
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
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// fungsi toggle display
function displaychange(p1, p2, p3, p4, p5) {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const market = document.getElementById("market");
  const contact = document.getElementById("contact");
  const skema = document.getElementById("skema");

  home.style.display = p1 == 1 ? "flex" : "none";
  about.style.display = p2 == 1 ? "flex" : "none";
  market.style.display = p3 == 1 ? "flex" : "none";
  contact.style.display = p4 == 1 ? "block" : "none";
  skema.style.display = p5 == 1 ? "flex" : "none";

  displaychange2(0, 0, 0, 0);
}
displaychange(1, 0, 0, 0, 0);

function displaychange2(p1, p2, p3, p4) {
  const product = document.getElementById("products");
  const homeproduct = document.getElementById("home-product");
  const agriproduct = document.getElementById("agri-product");
  const seaproduct = document.getElementById("sea-product");
  const mineproduct = document.getElementById("mine-product");

  const homeproductrow = document.getElementById("home-product-row");
  const agriproductrow = document.getElementById("agri-product-row");
  const seaproductrow = document.getElementById("sea-product-row");
  const mineproductrow = document.getElementById("mine-product-row");

  product.style.display = p1 + p2 + p3 + p4 != 0 ? "block" : "none";
  homeproduct.style.display = p1 == 1 ? "block" : "none";
  homeproductrow.style.display = p1 == 1 ? "grid" : "none";

  agriproduct.style.display = p2 == 1 ? "block" : "none";
  agriproductrow.style.display = p2 == 1 ? "grid" : "none";

  seaproduct.style.display = p3 == 1 ? "block" : "none";
  seaproductrow.style.display = p3 == 1 ? "grid" : "none";

  mineproduct.style.display = p4 == 1 ? "block" : "none";
  mineproductrow.style.display = p4 == 1 ? "grid" : "none";
}

// Disable zoom
window.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener("keydown", function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "-") {
    event.preventDefault();
  } else if (event.code === "NumpadAdd" || event.code === "Equal") {
    event.preventDefault();
  }
});

// Login
const btnPopup = document.querySelector("#btnLogin-popup");
const login = document.querySelector(".login");
const cover_box = document.querySelector(".cover_box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const iconClose = document.querySelector(".icon-close");

function activateCoverBox() {
  cover_box.classList.add("active");
}

function deactivateCoverBox() {
  cover_box.classList.remove("active");
}
function activatePopup() {
  cover_box.classList.add("active-popup");
  // login.style.display = "flex";
}

function deactivateCoverPopup() {
  cover_box.classList.remove("active-popup");
  // login.style.display = "none";
}

registerLink.addEventListener("click", activateCoverBox);
loginLink.addEventListener("click", deactivateCoverBox);
btnPopup.addEventListener("click", activatePopup);
iconClose.addEventListener("click", deactivateCoverPopup);

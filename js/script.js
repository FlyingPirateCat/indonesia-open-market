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

// Toggle class active untuk globe
document.querySelector("#globe-button").onclick = (e) => {
  e.preventDefault();
  langs = document.getElementById("lang-switch");
  extra = document.getElementById("other-extra");
  langs.style.display = "inline-block";
  extra.style.display = "none";
  setTimeout(function () {
    langs.style.display = "none";
    extra.style.display = "inline-block";
  }, 5000);
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
function displaychange(p1, p2, p3, p4, p5) {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const market = document.getElementById("market");
  const contact = document.getElementById("contact");
  const skema = document.getElementById("skema");

  home.style.display = p1 == 1 ? "flex" : "none";
  about.style.display = p2 == 1 ? "inline-block" : "none";
  market.style.display = p3 == 1 ? "inline-block" : "none";
  contact.style.display = p4 == 1 ? "block" : "none";
  skema.style.display = p5 == 1 ? "block" : "none";

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

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const itemDetailButtons = document.querySelectorAll(".product-card");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    productname = btn.querySelector(".product-content > h3");
    modalcontent = itemDetailModal.querySelector(
      ".modal-container > .modal-content"
    );
    modalname = modalcontent.querySelector(".product-content > #product-name");
    modalname.innerHTML = productname.innerHTML;

    modalimg = modalcontent.querySelector("#product-img");
    productimg = btn.querySelector(".product-image > img");
    modalimg.src = productimg.src;

    modaldesc = modalcontent.querySelector(".product-content > #product-desc");

    productdesc = btn.querySelector(".product-content > #product-desc");
    modaldesc.innerHTML = productdesc.innerHTML;

    modalprice = modalcontent.querySelector(
      ".product-content > #product-price"
    );
    productprice = btn.querySelector(".product-content > #product-price");
    modalprice.innerHTML = productprice.innerHTML;

    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

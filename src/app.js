document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Pot Keramik",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, sapiente.",
        type: "home-product",
        img: "sample_pot.jpg",
        price: 30000,
      },
      {
        id: 2,
        name: "Tas Anyaman Bambu",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus?",
        type: "home-product",
        img: "sample_tas_bambu.jpg",
        price: 250000,
      },
      {
        id: 3,
        name: "Kain Tenun",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellendus!",
        type: "home-product",
        img: "sample_kain_tenun.jpg",
        price: 75000,
      },
      {
        id: 4,
        name: "Patung Garuda Kayu",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tenetur ut animi amet dicta accusamus?",
        type: "home-product",
        img: "sample_patung_garuda.jpg",
        price: 2000000,
      },
      {
        id: 5,
        name: "Kalung Manik-manik",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis placeat, laboriosam at corrupti beatae cumque!",
        type: "home-product",
        img: "sample_kalung_manik.jpg",
        price: 19550,
      },
      {
        id: 6,
        name: "Akuarium Kaca",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, optio.",
        type: "home-product",
        img: "sample_akuarium.jpg",
        price: 450000,
      },
      {
        id: 11,
        name: "Bawang Merah Brebes 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_bawang_merah.jpg",
        price: 28000,
      },
      {
        id: 12,
        name: "Beras Medium Lampung 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_beras_lampung.jpg",
        price: 13600,
      },
      {
        id: 13,
        name: "Gabah Cianjur 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_gabah_cianjur.jpg",
        price: 7000,
      },
      {
        id: 14,
        name: "Gabah Grobogan 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_gabah_grobogan.jpg",
        price: 7800,
      },
      {
        id: 15,
        name: "Gabah Lampung 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_gabah_lampung.jpg",
        price: 8000,
      },
      {
        id: 16,
        name: "Jagung Lampung",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_jagung_lampung.jpg",
        price: 5100,
      },
      {
        id: 17,
        name: "Jagung Tasikmalaya 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_jagung_tasikmalaya.jpg",
        price: 4600,
      },
      {
        id: 18,
        name: "Kakao Kendari 1kg",
        desc: "Lorem10",
        type: "agri-product",
        img: "sample_kakao_kendari.jpg",
        price: 54000,
      },
      {
        id: 21,
        name: "Ikan Tuna 1kg",
        desc: "Lorem10",
        type: "sea-product",
        img: "sample_ikan_tuna.jpg",
        price: 15000,
      },
      {
        id: 22,
        name: "Lobster Laut Frozen 1Kg",
        desc: "Lorem10",
        type: "sea-product",
        img: "sample_lobster.jpg",
        price: 95000,
      },

      {
        id: 23,
        name: "Cumi Sotong Kering 1Kg",
        desc: "Lorem10",
        type: "sea-product",
        img: "sample_cumi.jpg",
        price: 65000,
      },

      {
        id: 24,
        name: "Kerang Tahu Hidup 1Kg",
        desc: "Lorem10",
        type: "sea-product",
        img: "sample_kerang_tahu.jpg",
        price: 22000,
      },
      {
        id: 31,
        name: "Batu Bara 1kg",
        desc: "Lorem10",
        type: "mine-product",
        img: "sample_batu_bara.jpg",
        price: 60790,
      },
      {
        id: 32,
        name: "Anoda Nikel 99% 1Kg",
        desc: "Lorem10",
        type: "mine-product",
        img: "sample_nikel.jpg",
        price: 574900,
      },

      {
        id: 33,
        name: "Plat Tembaga Busbar 15mm x 60mm x 100mm",
        desc: "Lorem10",
        type: "mine-product",
        img: "sample_plat_tembaga.jpg",
        price: 240000,
      },

      {
        id: 34,
        name: "Timah Lunak Batangan  1Kg",
        desc: "Lorem10",
        type: "mine-product",
        img: "sample_timah.jpg",
        price: 40000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart.
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      // ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

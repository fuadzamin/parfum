document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll("#slider img");
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");
  let currentSlide = 0;
  const totalSlides = slides.length;

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  navbar.addEventListener("mouseenter", function () {
    navbar.classList.add("scrolled");
  });

  navbar.addEventListener("mouseleave", function () {
    if (window.scrollY <= 50) {
      navbar.classList.remove("scrolled");
    }
  });

  // Toggle menu
// Mendapatkan elemen-elemen yang diperlukan
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Menambahkan event listener untuk tombol menu
menuToggle.addEventListener("click", () => {
  // Toggle tampilan menu mobile (menampilkan/sembunyikan)
  mobileMenu.classList.toggle("hidden");
});
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });

  // Slider functions
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    const slides = slider.children;
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    let index = 0;
    
    function updateSlider() {
      const translateValue = -index * 100 + "%";
      slider.style.transform = "translateX(" + translateValue + ")";
    }

    nextBtn.addEventListener("click", function () {
      index = (index + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", function () {
      index = (index - 1 + slides.length) % slides.length;
      updateSlider();
    });

    // Auto Slide setiap 3 detik
    setInterval(function () {
      index = (index + 1) % slides.length;
      updateSlider();
    }, 3000);
  });
function pesanWhatsApp(produk) {
  let nama = prompt("Masukkan nama Anda:");
  let alamat = prompt("Masukkan alamat pengiriman:");
  let pembayaran = prompt("Metode pembayaran (Transfer/COD):");
  if (nama && alamat && pembayaran) {
    let pesan = `Halo, saya ingin memesan ${produk}%0ANama: ${nama}%0AAlamat: ${alamat}%0APembayaran: ${pembayaran}`;
    window.open(`https://wa.me/6282147840202?text=${pesan}`, "_blank");
  } else {
    alert("Harap isi semua data pemesanan.");
  }
}
menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

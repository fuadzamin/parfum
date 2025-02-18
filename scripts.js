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

  // Toggle menu for mobile view
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden"); // Mengubah status visibilitas menu
  });

  // Slider functions
  function updateSlider() {
    const translateValue = -currentSlide * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
  }

  nextButton.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  prevButton.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  // Auto Slide every 3 seconds
  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 3000);

  // WhatsApp order function
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
});

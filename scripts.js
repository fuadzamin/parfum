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
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Slider functions
  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Slider otomatis
  setInterval(nextSlide, 3000);
});
function pesanWhatsApp(produk) {
  let nama = prompt("Masukkan nama Anda:");
  let alamat = prompt("Masukkan alamat pengiriman:");
  let pembayaran = prompt("Metode pembayaran (Transfer/COD):");
  if (nama && alamat && pembayaran) {
    let pesan = `Halo, saya ingin memesan ${produk}%0ANama: ${nama}%0AAlamat: ${alamat}%0APembayaran: ${pembayaran}`;
    window.open(`https://wa.me/6283892867696?text=${pesan}`, "_blank");
  } else {
    alert("Harap isi semua data pemesanan.");
  }
}

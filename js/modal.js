document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalGaleri");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.querySelector(".modal-close");

  const galleryImages = document.querySelectorAll(".galeri-item img");

 
  console.log("Jumlah gambar:", galleryImages.length);

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
      document.body.classList.add("lock-scroll");
    });
  });

  closeModal.addEventListener("click", closeModalGaleri);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModalGaleri();
  });

  function closeModalGaleri() {
    modal.classList.remove("active");
    document.body.classList.remove("lock-scroll");
  }
});

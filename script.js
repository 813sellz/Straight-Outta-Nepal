document.getElementById("year").textContent = new Date().getFullYear();

const accessedDate = document.getElementById("accessed-date");
if (accessedDate) {
  const now = new Date();
  accessedDate.textContent = `Accessed: ${now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}`;
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const galleryItems = document.querySelectorAll(".gallery-item.image-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const full = item.getAttribute("data-full");
    if (!full) return;
    lightboxImage.src = full;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  if (lightboxImage) lightboxImage.src = "";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

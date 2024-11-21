function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("menuOverlay");
    menu.classList.toggle("translate-x-full");
    overlay.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Scroll carousel to the left
prevButton.addEventListener("click", () => {
    carousel.scrollBy({
        left: -carousel.offsetWidth, // Scroll left by the width of the visible area
        behavior: "smooth",
    });
});

// Scroll carousel to the right
nextButton.addEventListener("click", () => {
    carousel.scrollBy({
        left: carousel.offsetWidth, // Scroll right by the width of the visible area
        behavior: "smooth",
    });
});
});
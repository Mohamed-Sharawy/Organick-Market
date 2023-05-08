const btnNavbar = document.querySelectorAll("[data-btn-nav]"),
    navBar = document.querySelector("[data-navbar]"),
    overlay = document.querySelector("[data-overlay]"),
    dropDown = document.querySelector(".drop-Down"),
    subMenu = document.querySelector(".sub-menu");

btnNavbar.forEach((e) => {
    e.addEventListener("click", () => {
        navBar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
});

dropDown.addEventListener("click", () => {
    subMenu.classList.toggle("active");
});

// swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// swiper

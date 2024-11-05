let menuToggler = document.querySelector(".menu-toggler");
let responsiveMenu = document.querySelector(".responsive-menu")
let menuList = document.querySelector(".responsive-menu-list");
let responsiveMenuItemClose = document.querySelector(".responsive-menu-item-close");

menuToggler.addEventListener("click", () => {
    responsiveMenu.classList.toggle("hidden");
});

responsiveMenuItemClose.addEventListener("click", () => {
    responsiveMenu.classList.toggle("hidden");
});


// =====================
//      footer start
// =====================

let dropbtn = document.querySelector(".dropbtn");
let dropdownContent = document.querySelector(".dropdown-content")
let footerArrow = document.querySelector(".footer-arrow");

dropbtn.addEventListener("click",()=>{
    dropdownContent.classList.toggle("hidden");

    footerArrow.classList.toggle("rotate90");
})


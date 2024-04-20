
let mobilenav = document.querySelector(".mobile_nav");
let siteMenu = document.querySelector(".site_nav_menu");

let toggleNavbar = () =>{
    siteMenu.classList.toggle("active");
}

mobilenav.addEventListener("click", () => toggleNavbar())
 

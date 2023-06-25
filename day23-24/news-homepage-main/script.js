const nav_menu_icon = document.getElementById("nav__menu-icon");
const nav_menu = document.getElementById("nav__menu");
const menu_close_icon = document.getElementById("menu__close-icon");

nav_menu_icon.addEventListener("click", function(){
    nav_menu.style.display = "block";
});

menu_close_icon.addEventListener("click", function(){
    nav_menu.style.display = "none";
});

let iconMenu = document.querySelector(".header .links .icon span:first-of-type");
let menu  =document.querySelector(".header .links .icon + ul");

iconMenu.addEventListener("click", function() {
    menu.classList.toggle("show");
});

window.addEventListener("click", function(e) {
    if(e.target.className !== "icon" && e.target.parentNode.className !== "icon") {
        menu.classList.remove("show");
    }
});
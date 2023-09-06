let iconMenu = document.querySelector(".header .links .icon span:first-of-type");
let iconMiddleHorizontalLigne = document.querySelector(".header .links .icon span:nth-of-type(3)");
let menu  =document.querySelector(".header .links .icon + ul");

iconMenu.addEventListener("click", function() {
    menu.classList.toggle("show");

    if(menu.classList.contains("show")) {
        iconMiddleHorizontalLigne.style.width = "100%";
    } else {
        iconMiddleHorizontalLigne.style.width = "50%";
    }

});

window.addEventListener("click", function(e) {
    if(e.target.className !== "icon" && e.target.parentNode.className !== "icon") {
        menu.classList.remove("show");
        iconMiddleHorizontalLigne.style.width = "50%";
    }
});
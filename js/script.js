const   menuMobile = document.querySelector(".menu-mobile"),
        search =  document.querySelector(".search img"),
        input =  document.querySelector(".search #input"),
        header = document.querySelector("header"),
        home = document.querySelector(".home-area"),
        containerTwo = document.querySelector(".container-two"),
        navBar = document.querySelector(".navbar");


function activeMenu() {
    header.classList.toggle("on");
    header.classList.toggle("off");

    document.body.style.overflow = header.classList.contains("on") ? "hidden" : "initial";
}

menuMobile.addEventListener("touchstart", activeMenu);


function activeSearch(event) {
    if (event.type === "touchstart") event.preventDefault();
    header.classList.toggle("on-input");
    input.focus();
}

search.addEventListener("touchstart", activeSearch);



function removeClass() {
    if(header.classList.contains("on-input")) {
        header.classList.remove("on-input");
    }
}

home.addEventListener("touchstart", removeClass);
containerTwo.addEventListener("touchstart", removeClass);
navBar.addEventListener("touchstart", removeClass);
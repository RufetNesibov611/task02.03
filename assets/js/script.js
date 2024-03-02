"use strict";

let iconLeft = document.querySelector(".slider .icons .icon-left")
let iconRight = document.querySelector(".slider .icons .icon-right")


iconRight.addEventListener("click",function(){
    let activeImage = document.querySelector(".active-image")
    activeImage.classList.remove(".active-image")
    activeImage.nextElementSibling.classList.add(".active-image")
    
})


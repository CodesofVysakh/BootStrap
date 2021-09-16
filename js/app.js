window.addEventListener("load", ()=>{
    let menu = document.querySelector(".menu");
    let carousel = document.querySelector(".carousel-inner");
    menu.addEventListener("click",()=>{
        carousel.classList.toggle("active");
    })
})

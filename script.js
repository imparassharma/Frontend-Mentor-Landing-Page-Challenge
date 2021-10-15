const nav_btn = document.getElementById("btn-logo");
const link_btns = document.querySelectorAll(".link-btn");
const mob_nav = document.querySelector(".mobile-nav");

nav_btn.addEventListener("click",function(){
    mob_nav.classList.toggle("show");
    if(mob_nav.className == "mobile-nav show"){
    document.getElementById("btn-logo").src = "images/icon-close.svg";
    }
    else{
        document.getElementById("btn-logo").src = "images/icon-hamburger.svg";
    }
})

link_btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const parent = e.currentTarget.parentElement;
        parent.classList.toggle("style");
        const gparent = e.currentTarget.parentElement.parentElement;
        gparent.classList.toggle("show")
    })
})
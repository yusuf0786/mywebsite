// targetting the elements
let click_to_main = document.querySelector("#click_to_main")
let sec_main = document.querySelector("#sec_main")
let layout_anchors = document.querySelectorAll("#sec_main a")
let layout_imgs = document.querySelectorAll("#sec_main a img")
let back_btn = document.querySelector(".back_btn")
let mynav = document.querySelector("#mynav ul")
let nav_btn = document.querySelector(".btn_toggle")
let nav_toggled = false

// click function
click_to_main.addEventListener('click', function(){
    sec_main.classList.remove("main_sec_anim2")
    sec_main.style.display = "block"
    sec_main.classList.add("main_sec_anim")

    mainsection_mause(layout_anchors, layout_imgs)
})

back_btn.addEventListener('click', function(){
    sec_main.classList.remove("main_sec_anim")
    sec_main.classList.add("main_sec_anim2")
    setTimeout(function(){
        sec_main.style.display = "none"
    }, 500)
})

nav_btn.addEventListener('click', function(){
    !nav_toggled ? nav_open() : nav_close()
})

// loop function
function mainsection_mause(a,b){
    for(let i = 0; i<=a.length-1; i++){

        let layout_anim = a[i]
        let img_inside_a = b[i]
    
        layout_anim.addEventListener('mouseover', function(){
            img_inside_a.classList.add("layout_img_anim")
        })
        layout_anim.addEventListener('mouseleave', function(){
            img_inside_a.classList.remove("layout_img_anim")
        })

    }
}

function nav_open(){
    nav_btn.style.transform = "rotate(-90deg)"

    mynav.style.display = "flex"
    mynav.classList.remove("nav_close")
    mynav.classList.add("nav_open")

    nav_toggled = true
}
function nav_close(){
    nav_btn.style.transform = "rotate(0deg)"

    mynav.classList.remove("nav_open")
    mynav.classList.add("nav_close")
    setTimeout(function(){
        mynav.style.display = "none"
    }, 500)

    nav_toggled = false
}



// GSAP
let sliderImgImages = document.querySelectorAll(".slider-img a")

let lt = gsap.timeline({
  defaults:{duration:1},
  scrollTrigger: {
    trigger: "body",
    toggleActions: "restart pause reverse pause",
    start: "1% top",
    end: "+=5000",
    scrub: 1,
    pin: ".slider-img",
    onEnter: () => {
        gsap.to(".slider-img-container", {opacity:1})
        gsap.to(".sec1_inside", {opacity:0})
        gsap.to(".sec1 > iframe", {opacity:0})
    },
    onLeaveBack: () => {
        gsap.to(".slider-img-container", {opacity:0})
        gsap.to(".sec1_inside", {opacity:1})
        gsap.to(".sec1 > iframe", {opacity:1})
    },
  }
})
lt.fromTo(".slider-img", {rotateY: "0deg"}, {rotateY: "360deg"})
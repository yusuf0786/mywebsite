$(function(){
    $(".header").load('../../header.html');

    // targetting the elements
    let click_to_main = document.querySelector("#click_to_main")
    let sec_main = document.querySelector("#sec_main")
    let layout_anchors = document.querySelectorAll("#sec_main a")
    let layout_imgs = document.querySelectorAll("#sec_main a img")
    let back_btn = document.querySelector(".back_btn")
    // let mynav = document.querySelector("#mynav ul")
    let nav_toggled = false

    // click function
    click_to_main.addEventListener('click', function(){
        sec_main.classList.remove("main_sec_anim2")
        sec_main.style.display = "block"
        sec_main.classList.add("main_sec_anim")

        modalOpenNecessoryEffect()

        mainsection_mause(layout_anchors, layout_imgs)
    })

    back_btn.addEventListener('click', function(){
        sec_main.classList.remove("main_sec_anim")
        sec_main.classList.add("main_sec_anim2")
        setTimeout(function(){
            sec_main.style.display = "none"

            modalCloseNecessoryEffect()
        }, 500)
    })

    setTimeout(() => {
        $(".btn_toggle").on('click', function (){
            !nav_toggled ? nav_open() : nav_close()
        })
    }, 500);

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
        $(".btn_toggle").css({'transform': 'rotate(-90deg)'})

        $("#mynav ul").css({"display":"flex"})
        $("#mynav ul").removeClass("nav_close")
        $("#mynav ul").addClass("nav_open")

        modalOpenNecessoryEffect()

        nav_toggled = true
    }
    function nav_close(){
        $(".btn_toggle").css({'transform': 'rotate(0deg)'})

        $("#mynav ul").addClass("nav_close")
        $("#mynav ul").removeClass("nav_open")
        setTimeout(function(){
            $("#mynav ul").css({"display":"none"})
        }, 500)

        modalCloseNecessoryEffect()

        nav_toggled = false
    }


    function modalOpenNecessoryEffect() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.overflow = "hidden"
        document.body.style.paddingRight = scrollbarWidth + "px"
        document.querySelector("header").style.paddingRight = scrollbarWidth + "px"
    }

    function modalCloseNecessoryEffect() {
        document.body.style.overflow = ""
        document.body.style.paddingRight = ""
        document.querySelector("header").style.paddingRight = ""
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
            gsap.to(".sec1_inside", {opacity:0, visibility: "hidden"})
            gsap.to(".sec1 > iframe", {opacity:0})
        },
        onLeaveBack: () => {
            gsap.to(".slider-img-container", {opacity:0})
            gsap.to(".sec1_inside", {opacity:1, visibility: "visible"})
            gsap.to(".sec1 > iframe", {opacity:1})
        },
    }
    })
    lt.fromTo(".slider-img", {rotateY: "0deg"}, {rotateY: "360deg"})
})
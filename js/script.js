$(function(){

    $.get('../../header.html')
        .done(function() {
            $(".header").load('../../header.html');
        })
        .fail(function() {
            $.get('../header.html')
                .done(function() {
                    $(".header").load('../header.html');
                })
                .fail(function() {
                    $(".header").load('./header.html');
                });
        });

    // targetting the elements
    let nav_toggled = false

    setTimeout(() => {
        $(".btn_toggle").on('click', function () {
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

        $("#mynav ul").removeClass("nav_open")
        $("#mynav ul").addClass("nav_close")
        
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

})

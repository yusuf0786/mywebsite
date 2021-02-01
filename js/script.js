$("#btn-check, #start .navbtnwork").click(function(){

    $("nav ul").animate({

        opacity: 1
    });
    $("#btn-check").hide();
    $("#btn-close").show();

    $("#start ul li").animate({

        opacity: 1
    });
    $("#start .navbtnwork").hide();
});

$("#btn-close").click(function(){

    $("nav ul").animate({

        opacity: 0
    });
    $("#btn-check").show();
    $("#btn-close").hide();
});

/* work animation */

$("#work").click(function(){

    $(".layouts").animate({

         opacity: 1
    }, 1000);

    $("#work").animate({

        borderWidth: "2px",
        paddingRight: "2px"
    });
    $("#home1, #home2").animate({

        borderWidth: "0px"
    });
});


$("#home1, #home2").click(function(){

    $("#work").animate({

        borderWidth: "0px"
    });
    $("#home1, #home2").animate({

        borderWidth: "2px",
        paddingRight: "2px",
        marginRight: "25px"
    });
});
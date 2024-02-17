$(function(){
    const windowLocation = window.location.pathname
    console.log();

    switch (windowLocation) {
        case "/":
            $($("#navigation-list").find("#home")).addClass("active")
            break;

        case "/index.html":
            $($("#navigation-list").find("#home")).addClass("active")
            break;

        case "/work/index.html":
            $($("#navigation-list").find("#projects")).addClass("active")
            break;

        case "/contact/index.html":
            $($("#navigation-list").find("#contact")).addClass("active")
            break;

        default:
            break;
    }
})
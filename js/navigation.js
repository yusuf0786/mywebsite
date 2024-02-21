$(function(){
    const windowLocation = window.location
    const windowLocationPathname = window.location.pathname
    const windowLocationHash = window.location.hash
    let aboutNavClicked = false;

    setTimeout(() => {
        switch (windowLocationPathname) {
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
        switch (windowLocationHash) {
            case "#about-section":
                $($("#navigation-list").find("li")).removeClass("active")
                $($("#navigation-list").find("#about")).addClass("active")
                break;
        }

        $($("#navigation-list").find("li")).on('click', function(e){
            if($(e.target).attr("href") === `${windowLocation.origin}/#about-section`) {
                $($("#navigation-list").find("li")).removeClass("active")
                $($("#navigation-list").find("#about")).addClass("active")
                console.log(aboutNavClicked);
                setTimeout(() => { aboutNavClicked = true; console.log(aboutNavClicked); }, 500);
            }
        })
    }, 500);

    window.addEventListener("scroll", function() {
        // if((this.location.pathname === '/' || this.location.pathname === '/index.html') || this.location.hash === '#about-section') {
        //     history.pushState("", document.title, this.location.pathname + this.location.search);
        //     $($("#navigation-list").find("li")).removeClass("active")
        //     $($("#navigation-list").find("#home")).addClass("active")
        // } else if (this.location.hash !== '#about-section') {
        //     history.pushState("#about-section", document.title, this.location.pathname + this.location.search);
        //     $($("#navigation-list").find("li")).removeClass("active")
        //     $($("#navigation-list").find("#about")).addClass("active")
        // }

        if (this.location.hash === "#about-section") {
            $($("#navigation-list").find("li")).removeClass("active")
            $($("#navigation-list").find("#about")).addClass("active")
        }

        if(aboutNavClicked) {
            history.pushState("", document.title, this.location.pathname + this.location.search);
            if(this.location.pathname === '/' || this.location.pathname === '/index.html') {
                $($("#navigation-list").find("li")).removeClass("active")
                $($("#navigation-list").find("#home")).addClass("active")
            }
            aboutNavClicked = false;
        }
    })
})
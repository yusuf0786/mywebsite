$(".header").load("../../header.html")

// targetting the elements
let mynav = document.querySelector("#mynav ul")
let nav_toggled = false
let myinputDate = document.querySelector('#mydatetime')

// for datetime things
let datevar = new Date()
let MD = {
    A : datevar.getFullYear(),
    B : function(n){ return 9 >= n ? "0" + n : "" + n; },
    C : function(n){ return 9 >= n ? "0" + n : "" + n; },
    D : function(n){ return 9 >= n ? "0" + n : "" + n; },
    E : function(n){ return 9 >= n ? "0" + n : "" + n; }
}
myinputDate.setAttribute("value", `${MD.A}-${MD.B(datevar.getMonth()+1)}-${MD.C(datevar.getDate())}T${MD.D(datevar.getHours())}:${MD.E(datevar.getMinutes())}`)


// click function
$(".btn_toggle").on('click', function() {
    !nav_toggled ? nav_open() : nav_close()
})

function nav_open(){
    $(".btn_toggle").css({'transform': 'rotate(-90deg)'})

    mynav.style.display = "flex"
    mynav.classList.remove("nav_close")
    mynav.classList.add("nav_open")

    modalOpenNecessoryEffect()

    nav_toggled = true
}
function nav_close(){
    $(".btn_toggle").css({'transform': 'rotate(0deg)'})

    mynav.classList.remove("nav_open")
    mynav.classList.add("nav_close")
    setTimeout(function(){
        mynav.style.display = "none"
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


// form validation
let myform = document.querySelector("#myform")
let C_name = document.querySelector("#company_name")
let Y_name = document.querySelector("#your_name")
let emailField = document.querySelector("#your_email")
let interview_S = document.querySelector("#mydatetime")
let date_on_pg = myinputDate.getAttribute("value")
let message_box = document.querySelector("#message_box")
let error_ul = document.querySelector("#error_ul")

myform.addEventListener("submit", function(event){
    let myarray = []

    const emailValidate = (emailMatch) => {
        return emailMatch.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    if(C_name.value === ""){ myarray.push("Company name is required") }

    if(Y_name.value === ""){ myarray.push("Your name is required") }

    !emailValidate(emailField.value) ? myarray.push("Your email is required") : null;

    if(interview_S.value === date_on_pg) { myarray.push("Scheduling interview is required & it should not be same as pressent time") }

    if(message_box.value === ""){ myarray.push("Message is required") }

    if(myarray.length > 0){
        event.preventDefault()
        document.querySelector(".note-section").scrollIntoView({
            behavior: "smooth",
            block: "end",           // vertical alignment
            inline: "nearest",       // horizontal alignment
        })
    } else {
        event.preventDefault()
        sendEmail()
    }

    remove_error()
    show_error(myarray)

})

function remove_error() {
    error_ul.style.display = "none"
    let myli = document.querySelectorAll("#error_ul li")
    for(let i = 0; i <= myli.length-1; i++){
        let li = myli[i]
        li.remove()
    }
}

function show_error(myarray) {
    for(let i = 0; i <= myarray.length-1; i++){
        let li = document.createElement("li")
        li.innerText = myarray[i]
        error_ul.appendChild(li)
    }
    if(myarray.length > 0){ error_ul.style.display = "block" }
}

function sendEmail() {
    var params = {
        company_name : document.getElementById("company_name").value,
        from_name : document.getElementById("your_name").value,
        email : document.getElementById("your_email").value,
        scheduleInterview : document.getElementById("mydatetime").value,
        message : document.getElementById("message_box").value,
    }
    emailjs.send("service_y6yd1c4", "template_5xdudaj", params).then(function (resolve){
        alert(`Thanks ${document.getElementById("your_name").value}, Email is Sent, I will get back to you soon!`);
    })
}
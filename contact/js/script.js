// targetting the elements
let mynav = document.querySelector("#mynav ul")
let nav_btn = document.querySelector(".btn_toggle")
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

nav_btn.addEventListener('click', function(){
    !nav_toggled ? nav_open() : nav_close()
})

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


// form validation
let myform = document.querySelector("#myform")
let C_name = document.querySelector("#company_name")
let Y_name = document.querySelector("#your_name")
let interview_S = document.querySelector("#mydatetime")
let date_on_pg = myinputDate.getAttribute("value")
let message_box = document.querySelector("#message_box")
let error_ul = document.querySelector("#error_ul")

myform.addEventListener("submit", function(event){
    let myarray = []

    if(C_name.value === ""){ myarray.push("Company name is required") }

    if(Y_name.value === ""){ myarray.push("Your name is required") }

    if(interview_S.value === date_on_pg) { myarray.push("Scheduling interview is required") }

    if(message_box.value === ""){ myarray.push("Message is required") }

    if(myarray.length > 0){ event.preventDefault() }

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
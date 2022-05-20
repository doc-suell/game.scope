/* ------------------ BURGER MENU ------------------ */
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

/* ------------------ SIDE BARE ------------------ */

const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const toggleSwitch = document.querySelector('.toggle-switch');
const modeText = body.querySelector(".mode-text");

toggle.addEventListener('click', function(){
    sidebar.classList.toggle("close");
});


// toggleSwitch.addEventListener('click', function(){
//     body.classList.toggle("dark");
// });



/* ------------------ BTN BACK TO TOP ------------------ */

const btn_top = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        btn_top.style.display = "block"; //or opacity = "1" and add position outside the window like (bottom = -40px ) with transition: opacity 0.2s ease-out;
    } else {
        btn_top.style.display = "none"; //or opacity = "0"
    }
});

btn_top.addEventListener("click", function () {
    //   document.body.scrollTop = 0;
    //   document.documentElement.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ------------------ LOGIN MODAL ------------------ */

const loginBtn = document.getElementById('login-btn');
const btnToCreatAccount = document.getElementById("btn-to-creataccount");
const loginModal = document.getElementById('login-modal');
const exitIcon =document.querySelector('.exit-icon');
const btncrataccount =document.querySelector('.btn-3');

// console.log(loginBtn);
// console.log(btnToCreatAccount);
// console.log(loginModal);

loginBtn.addEventListener("click", function (e){
    e.preventDefault();
    loginModal.style.display = "block" ;
    // loginModal.classList.add("show") ;
})

exitIcon.addEventListener('click', function (){
    loginModal.style.display = "none";
})

btncrataccount.addEventListener('click', function (){
    loginModal.style.display = "block";
})


btnToCreatAccount.addEventListener("click", function (){
    loginModal.style.display = "none" ;
})





















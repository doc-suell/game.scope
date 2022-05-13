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
    console.log('test')
});

// toggleSwitch.addEventListener('click', function(){
//     body.classList.toggle("dark");
// });
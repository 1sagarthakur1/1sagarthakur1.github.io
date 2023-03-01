let togglebutton = document.getElementsByClassName('totoggle')[0];
let navlink = document.getElementsByClassName('subnav')[0];

togglebutton.addEventListener("click",function(){
    navlink.classList.toggle('active');
});


let toclose = document.querySelector('.toggle_click');
toclose.addEventListener("click",function(){
    navlink.classList.toggle('active');
});


function openResume(){
    window.open("https://drive.google.com/file/d/1-tU8qHFngNbiYTBHBkEjkAdV8D0HogXO/view?usp=sharing", "_blank")
}
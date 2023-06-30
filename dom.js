let toggle = document.querySelector('.toggle-btn');
let toggleBtn = document.querySelector('.toggle');
let body = document.querySelector('.body');
let heading = document.querySelector('.heading');
let bx = document.querySelector('.bx');


function myFunction(){
    toggleBtn.classList.toggle('active');
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    heading.classList.toggle('active');
    bx.classList.toggle('active');
}
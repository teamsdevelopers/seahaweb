//menu darin response 
let menu = document.querySelector('#meanu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('action')
}
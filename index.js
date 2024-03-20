let button = document.getElementById('no');
let heigt = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener('mouseover', function (){
    button.style.position = "absolute";
    button.style.top = Math.random() * heigt + "px";
    button.style.left = Math.random() * width + "px";
})
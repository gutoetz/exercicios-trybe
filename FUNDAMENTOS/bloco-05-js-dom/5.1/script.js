document.getElementById('header-container').style.backgroundColor = 'green';
document.getElementById('footer-container').style.backgroundColor = '#368d1b';
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';
let titulos1 = document.querySelectorAll('.emergency-tasks h3');
for(titulo of titulos1){
    titulo.style.backgroundColor = 'purple'
}
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';
let titulos2 = document.querySelectorAll('.no-emergency-tasks h3');
for(titulo of titulos2){
    titulo.style.backgroundColor = 'black'
}
let menuIcon = document.querySelector('.hambuger');
let smallNav = document.querySelector('.small-nav')

menuIcon.addEventListener('click', displayMonbileMenu);
function displayMonbileMenu(){
    
    smallNav.classList.toggle('toggle')
}
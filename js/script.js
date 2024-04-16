const sliderNext = document.querySelector('.div__slider-arrow--next');
const sliderPrev = document.querySelector('.div__slider-arrow--prev');
const sliderBtn = document.querySelectorAll('.div__slider-btn');
const sliderImg = document.querySelectorAll('.div__slider--img');

let posicion = 0;

const mostrarImagen = () => {
    console.log('Mostrando imagen en posición:', posicion);

    if (sliderImg[posicion]) {
        sliderImg.forEach((img, i) => {
            img.classList.remove('isVisible');
            if (sliderBtn[i]) {
                sliderBtn[i].classList.remove('isActive');
            }
        });

        sliderImg[posicion].classList.add('isVisible');
        if (sliderBtn[posicion]) {
            sliderBtn[posicion].classList.add('isActive');
        }
        console.log('Imagen mostrada:', sliderImg[posicion]);
    } else {
        console.error('El elemento en la posición', posicion, 'es undefined');
    }
};

sliderNext.addEventListener('click', () => {
    posicion++;
    if (posicion >= sliderImg.length) {
        posicion = 0;
    }
    mostrarImagen();
});

sliderPrev.addEventListener('click', () => {
    posicion--;
    if (posicion < 0) {
        posicion = sliderImg.length - 1;
    }
    mostrarImagen();
});






// Menú hamburguesa

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    const headerNav = document.querySelector('.header__nav');
    
    if (headerNav.style.display === 'none' || headerNav.style.display === '') {
        headerNav.style.display = 'block';
    } else {
        headerNav.style.display = 'none';
    }
}
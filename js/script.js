/* Este Script contiene:

- Carrusel de imágenes
- Menú hamburguesa para dispositivos móviles

*/ 

// Carrusel de imágenes

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

const headerBtn = document.querySelector('.bars__menu')
const headerNav = document.querySelector('.header__nav')

console.log(headerBtn)
console.log(headerNav)
headerBtn.addEventListener("click", function(){
    headerNav.classList.toggle('isActive');
    headerBtn.classList.toggle('change');
})

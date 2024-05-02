/* Este Script contiene:

- Carrusel de imágenes
- Menú hamburguesa para dispositivos móviles

*/ 

// Menú hamburguesa para dispositivos móviles
const headerBtn = document.querySelector('.div__bars--menu');
const headerNav = document.querySelector('.header__nav');

headerBtn.addEventListener("click", function(){
    headerNav.classList.toggle('isActive');
    headerBtn.classList.toggle('change');
});

// Con esta constante se distingue si es la página principal o no..
const isCarouselPage = document.querySelector('.div__slider-arrow--next');

// Y con este condicional se aplica el código si es la página principal
if (isCarouselPage) {
    const sliderNext = document.querySelector('.div__slider-arrow--next');
    const sliderPrev = document.querySelector('.div__slider-arrow--prev');
    const sliderImg = document.querySelectorAll('.div__slider--img');

    let posicion = 0;

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

    const mostrarImagen = () => {
        console.log('Mostrando imagen en posición:', posicion);

        if (sliderImg[posicion]) {
            sliderImg.forEach((img, i) => {
                img.classList.remove('isVisible');
            });

            sliderImg[posicion].classList.add('isVisible');
        } else {
            console.error( posicion, 'es undefined');
        }
    };
}

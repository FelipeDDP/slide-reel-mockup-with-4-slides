const images = document.querySelectorAll('.slide');
const arrowBack = document.getElementById('back-arrow');
const arrowNext = document.getElementById('next-arrow');
let i = 0;

const toggleArrowsOpacity = () => {
    arrowBack.classList.toggle('opacity', i === 0);
    arrowNext.classList.toggle('opacity', i === images.length - 1);
};

const changeSlide = (direction) => {
    images[i].classList.remove('show');
    i += direction;
    i = Math.max(0, Math.min(i, images.length - 1));
    images[i].classList.add('show');
    toggleArrowsOpacity();
};

arrowNext.addEventListener('click', () => changeSlide(1));
arrowBack.addEventListener('click', () => changeSlide(-1));
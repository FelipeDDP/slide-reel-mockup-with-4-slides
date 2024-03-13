const images = document.querySelectorAll('.slide')
const arrowBack = document.getElementById('back-arrow')
const arrowNext = document.getElementById('next-arrow')

let i = 0

const advanceSlide = function() {
    if (i < images.length - 1) {
        images[i].classList.remove('show');
        images[i].classList.add('hidden')
        i++;
        images[i].classList.remove('hidden')
        images[i].classList.add('show')
    }

    if (i != 0) {
        arrowBack.classList.remove('opacity')
    }

    if (i == images.length - 1) {
        arrowNext.classList.add('opacity')
    }
}

const returnSLide = function() {
    if (i != 0) {
        images[i].classList.remove('show');
        images[i].classList.add('hidden')
        i--;
        images[i].classList.add('show')
        images[i].classList.remove('hidden')
    }

    if (i < images.length - 1) {
        arrowNext.classList.remove('opacity')
    }

    if (i === 0) {
        arrowBack.classList.add('opacity')
    }
}

arrowNext.addEventListener('click', advanceSlide)

arrowBack.addEventListener('click', returnSLide)
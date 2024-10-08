const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');


Object.keys(fontSize).forEach(k => fontSize[k].addEventListener('click', e => {
    fontSize[k].classList.toggle('font-size_active');

    for (let index = 0; index < 3; index++) {
        fontSize[index].classList.remove('font-size_active');
        book.classList.remove('font-size_active', 'font-size_small', 'font-size_big');
    }
    
    fontSize[k].classList.toggle('font-size_active');
    book.classList.toggle(fontSize[k].classList[1]);
}))
const rotatorCase = document.querySelectorAll('.rotator__case');
const long2 = rotatorCase.length;

setInterval(() => {
    const rotatorCase = document.querySelectorAll('.rotator__case');
    let z = 0;
    const long = rotatorCase.length;
    let timerId = setInterval(() => {
        z++;
        if (z < long) {
            rotatorCase[z - 1].classList.toggle('rotator__case_active');
            rotatorCase[z].classList.toggle('rotator__case_active');
        } else{
            rotatorCase[0].classList.toggle('rotator__case_active');
            rotatorCase[long - 1].classList.toggle('rotator__case_active');
            clearInterval(timerId);
        }
    }, 1000);
}, long2 * 1000);








/*
const rotatorCase = document.querySelectorAll('.rotator__case');
let z = 0;
const long = rotatorCase.length
let timerId = setInterval(() => {
    console.log(z)
    z++;
    rotatorCase[z - 1].classList.toggle('rotator__case_active');
    rotatorCase[z].classList.toggle('rotator__case_active');
    console.log(z)
}, 1000);
setTimeout(() => { clearInterval(timerId);
    rotatorCase[0].classList.toggle('rotator__case_active');
    rotatorCase[long].classList.toggle('rotator__case_active');
}, (long) * 1000);
*/
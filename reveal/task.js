const reveal = document.querySelectorAll('.reveal');
console.log (reveal)
setInterval(() => {
    for (let index = 0; index < reveal.length; index++) {
        const element = reveal[index];
        const {top, bottom} = element.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0 ) {
            element.classList.add('reveal_active');
            console.log ("вкл")
        } else {
            element.classList.remove('reveal_active');
            console.log ("выкл")
        }  
        console.log(top, bottom)
    }
}, 500);

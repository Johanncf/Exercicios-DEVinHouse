const range = document.querySelector('#range');

const concluido = document.querySelector('.concluido');

progressbar = document.querySelector('.progress-bar');

range.addEventListener('input', function () {
    const value = range.value;
    progressbar.style.setProperty('--progress', value)
})

document.addEventListener("DOMContentLoaded", () => {
    range.value = 0;

    move()
})

function move() {
    let prog = setInterval(setProgress, 1000);
    function setProgress() {
        if (range.value === '100') {
            clearInterval(prog)
            concluido.style.visibility = 'visible'
            return
        }

        range.value = (parseInt(range.value) + 1).toString();
        progressbar.style.setProperty('--progress', range.value)
    }
}
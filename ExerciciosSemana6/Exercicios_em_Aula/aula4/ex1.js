import { timer, timerBtns } from "./selectors.js";

timerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        timer.innerHTML = btn.querySelector("span").innerHTML
    })
})
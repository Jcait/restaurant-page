// disables clicked button re-enables other 2 buttons.

const testbtn = document.querySelectorAll(".button")

export default function disableButton(clickedBtn, btn1, btn2) {
    clickedBtn.disabled = true
    btn1.disabled = false
    btn2.disabled = false
}
import home from './home';
import homeCards from './homeCards';
import'./style.css';

const con = document.getElementById("content")
const btn = document.querySelectorAll("button")

btn.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`${button.innerText}`)
    })
})

con.appendChild(home())
con.appendChild(homeCards())

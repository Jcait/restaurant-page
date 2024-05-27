import home from './home';
import homeCards from './cards';
import'./style.css';
import test from './test';

const con = document.getElementById("content")
const btn = document.querySelectorAll("button")
const homeBtn = document.querySelector(".home")

btn.forEach(button => {
    button.addEventListener("click", () => {
        console.log(this)
        switch(button.innerText) {
        case "Home": 
            console.log("Home has been pressed")
            con.removeChild(con.lastChild)
            con.appendChild(homeCards(button))
            test(button)
            break;
        case "Menu":
            console.log("Menu has been pressed")
            con.removeChild(con.lastChild)
            con.appendChild(homeCards(button))
            break;
        case "About":
            console.log("About has been pressed")
            con.removeChild(con.lastChild)
            con.appendChild(homeCards(button))
            break;
            
        }
    })
})

con.appendChild(home())
con.appendChild(homeCards(homeBtn))



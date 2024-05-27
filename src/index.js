import home from './home';
import homeCards from './cards';
import'./style.css';
import disableButton from './disableButton';

const con = document.getElementById("content")
const btn = document.querySelectorAll("button")
const homeBtn = document.querySelector(".home")
const aboutBtn = document.querySelector(".about")
const menuBtn = document.querySelector(".menu")

btn.forEach(button => {
    button.addEventListener("click", () => {
        console.log(btn)
        switch(button.innerText) {
        case "Home": 
            console.log("Home has been pressed")
            con.removeChild(con.lastChild)
            con.appendChild(homeCards(button))
            disableButton(homeBtn, aboutBtn, menuBtn)
            break;
        case "Menu":
            console.log("Menu has been pressed")
            con.removeChild(con.lastChild)
            con.appendChild(homeCards(button))
            disableButton(menuBtn, homeBtn, aboutBtn)
            break;
        case "About":
            console.log("About has been pressed")
            con.removeChild(con.lastChild)
            con.appendChild(homeCards(button))
            disableButton(aboutBtn, homeBtn, menuBtn)
            break;
            
        }
    })
})

con.appendChild(home())
con.appendChild(homeCards(homeBtn))



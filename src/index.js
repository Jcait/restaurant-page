import home from './home';
import homeCards from './homeCards';
import'./style.css';

const con = document.getElementById("content")
const btn = document.querySelectorAll("button")

btn.forEach(button => {
    button.addEventListener("click", () => {
        while(con.hasChildNodes()) {
            con.removeChild(con.lastChild)
            console.log("removed")
        }
        con.appendChild(home())
        switch(button.innerText) {
        case "Home": 
            console.log("Home has been pressed")
            con.appendChild(homeCards())
            break;
        case "Menu":
            console.log("Menu has been pressed")
            break;
        case "About":
            console.log("About has been pressed")
            break;
            
        }
    })
})



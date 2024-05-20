// Function to 3 cards to the Page. 

import { firstCard } from "./homeCardText"


export default function homeCards() {
    const Carddiv = document.createElement("div")
    Carddiv.className = "buttons"
    for(let i = 0; i < 3; i++){
        let newDiv= document.createElement("div")
        let title = document.createElement("h4")
        let text = document.createElement("p")
        console.log(i)
        newDiv.className = "card"
        switch (i){
            case 0:
                newDiv.appendChild(firstCard())
                break;
            case 1:
                break;
            case 2:
                break;
        }

                

        Carddiv.appendChild(newDiv)
    }
    return Carddiv

}
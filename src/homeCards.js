// Function to 3 cards to the Page. 

import { firstText, firstTitle, secondText, secondTitle, thirdText, thirdTitle } from "./homeCardText"



export default function homeCards() {
    const Carddiv = document.createElement("div")
    Carddiv.className = "buttons"
    for(let i = 0; i < 3; i++){
        let newDiv= document.createElement("div")
        console.log(i)
        newDiv.className = "card"
        switch (i){
            case 0:
                newDiv.appendChild(firstTitle())
                newDiv.appendChild(firstText())
                break;
            case 1:
                newDiv.appendChild(secondTitle())
                newDiv.appendChild(secondText())
                break;
            case 2:
                newDiv.appendChild(thirdTitle())
                newDiv.appendChild(thirdText())
                break;
        }

                

        Carddiv.appendChild(newDiv)
    }
    return Carddiv

}
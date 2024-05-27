// Function to 3 cards to the Page. 

import { firstText, firstTitle, secondText, secondTitle, thirdText, thirdTitle } from "./cardText"



export default function homeCards(btnText) {
    console.log(`This is in home cards ${btnText}`)
    const Carddiv = document.createElement("div")
    Carddiv.className = "buttons"
    for(let i = 0; i < 3; i++){
        let newDiv= document.createElement("div")
        newDiv.className = "card"
        switch (i){
            case 0:
                newDiv.appendChild(firstTitle(btnText))
                newDiv.appendChild(firstText())
                break;
            case 1:
                newDiv.appendChild(secondTitle(btnText))
                newDiv.appendChild(secondText())
                break;
            case 2:
                newDiv.appendChild(thirdTitle(btnText))
                newDiv.appendChild(thirdText())
                break;
        }

                

        Carddiv.appendChild(newDiv)
        console.log(btnText)
    }
    return Carddiv

}
// Function to 3 cards to the Page. 

import { firstText, firstTitle, secondText, secondTitle, thirdText, thirdTitle } from "./cardText"



export default function homeCards(btnText) {
    console.log(`This is in home cards ${btnText}`)
    const Carddiv = document.createElement("div")
    let amount= 0
    if(btnText.className == "home" ||
        btnText.className == "menu"
    ) {
        amount = 3 
    } else {
        amount = 2
    }
    Carddiv.className = "buttons"
    for(let i = 0; i < amount; i++){
        let newDiv= document.createElement("div")
        newDiv.className = "card"
        switch (i){
            case 0:
                newDiv.appendChild(firstTitle(btnText))
                newDiv.appendChild(firstText(btnText))
                break;
            case 1:
                newDiv.appendChild(secondTitle(btnText))
                newDiv.appendChild(secondText(btnText))
                break;
            case 2:
                newDiv.appendChild(thirdTitle(btnText))
                newDiv.appendChild(thirdText(btnText))
                break;
        }

                

        Carddiv.appendChild(newDiv)
        console.log(btnText)
    }
    return Carddiv

}
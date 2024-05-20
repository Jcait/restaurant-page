

export default function homeCards() {
    const Carddiv = document.createElement("div")
    Carddiv.className = "buttons"
    for(let i = 0; i < 3; i++){
        let newDiv= document.createElement("div")
        newDiv.className = "card"
        Carddiv.appendChild(newDiv)
        console.log(i)
    }
    return Carddiv

}


export default function homeCards() {
    const Carddiv = document.createElement("div")
    Carddiv.className = "buttons"
    for(let i = 0; i < 3; i++){
        let newDiv= document.createElement("div")
        let title = document.createElement("h4")
        let text = document.createElement("p")
        newDiv.className = "card"
        title.innerText = "Hi I'm a title"
        newDiv.append(title)
        text.innerText = "Hi I'm text"
        newDiv.append(text)

        Carddiv.appendChild(newDiv)
        console.log(i)
    }
    return Carddiv

}
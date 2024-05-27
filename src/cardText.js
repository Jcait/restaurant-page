

export const firstTitle = (btnText)  =>{
    const title = document.createElement("h4")
    switch(btnText) {
        case "Home": 
            title.innerText = `Test`
            console.log(`This is in CardText ${btnText}`)
            break;
        case "Menu":
            title.innerText = btnText
            break;
        case "About":
            title.innerText = btnText
            break
    }
    return title
}

export const firstText = () => {
    const p = document.createElement("p")
    p.innerText = "A far as Snacks Go, this goblin thinks they're tastier than the rocks he's forced to eat by the bigger goblins"

    return p

}

export const secondTitle = (btnText) => {
    const title = document.createElement("h4")
    title.innerText = "Opening Times"

    return title
}


export const secondText = () => {
    const p = document.createElement("p")
    p.innerText = `Sunday: 8am - 8pm

    Monday: 6am - 6pm
    
    Tuesday: 6am - 6pm
    
    Wednesday: 6am - 6pm
    
    Thursday: 6am - 10pm
    
    Friday: 6am - 10pm
    
    Saturday: 8am - 10pm`

    return p
}

export const thirdTitle = () => {
    const title = document.createElement("h4")
    title.innerText = "Location"

    return title
}

export const thirdText = () => {
    const text = document.createElement("p")
    text.innerText = `Melchitar, Geb`
    text.className = "location"

    return text
}

// Card Templates

// switch(btn.innerText) {
//     case "Home": 
//         title.innerText = 
//         break;
//     case "Menu":
//         title.innerText = 
//         break;
//     case "About":
//         title.innerText = 
//         break
// }

// switch(btn.innerText) {
//     case "Home": 
//         p.innerText = 
//         break;
//     case "Menu":
//         p.innerText = 
//         break;
//     case "About":
//         p.innerText = 
//         break
// }


export const firstTitle = (btn)  =>{
    const title = document.createElement("h4")
    switch(btn.innerText) {
        case "Home": 
            title.innerText = `A review by Gary the Goblin`
            console.log(`This is in CardText ${btn}`)
            break;
        case "Menu":
            title.innerText = `Nat 20 Nachos!`
            break;
        case "About":
            title.innerText = `About us!`
            break
    }
    return title
}

export const firstText = (btn) => {
    const p = document.createElement("p")
    switch(btn.innerText) {
    case "Home": 
        p.innerText = "A far as Snacks Go, this goblin thinks they're tastier than the rocks he's forced to eat by the bigger goblins"
        break;
    case "Menu":
        p.innerText = "Feast your eyes on the treasure trove of flavourful tortillas! But beware, roll a nat 1 and face the ultra lava nacho!!"
        break;
    case "About":
        p.innerText = `We aim to bring ready snacks to game night or your money back   
                        (Game Night cancellation non-refundable)`
        break
}
    return p

}

export const secondTitle = (btn) => {
    const title = document.createElement("h4")
    switch(btn.innerText) {
    case "Home": 
        title.innerText = "Opening Times"
        break;
    case "Menu":
        title.innerText = `Cockcatrice Combo `
        break;
    case "About":
        title.innerText = `Contact us`
        break
}


    return title
}


export const secondText = (btn) => {
    const p = document.createElement("p")


    switch(btn.innerText) {
    case "Home": 
        p.innerText = `Sunday: 8am - 8pm

    Monday: 6am - 6pm
    
    Tuesday: 6am - 6pm
    
    Wednesday: 6am - 6pm
    
    Thursday: 6am - 10pm
    
    Friday: 6am - 10pm
    
    Saturday: 8am - 10pm`
        break;
    case "Menu":
        p.innerText = `Devour the defeated cockatrice with this platter of succulent snacks cooked different ways
                        (Please note, The cockatrice does not exist and will be substituted with chicken)`
        break;
    case "About":
        p.innerText = `Number: 12394949399
                        Enail: RealEmail@addressdotcom`
        break
}

    return p
}

export const thirdTitle = (btn) => {
    const title = document.createElement("h4")
    switch(btn.innerText) {
        case "Home": 
            title.innerText = "Location"

            break;
        case "Menu":
            title.innerText = `Minotaurs Meatfeast Pizza`
            break;
        case "About":
            break
}

    return title
}

export const thirdText = (btn) => {
    const text = document.createElement("p")
  
    switch(btn.innerText) {
    case "Home": 
        text.innerText = `Melchitar, Geb`
            text.className = "location"
        break;
    case "Menu":
        text.innerText = `Sink your teeth into the maze of meat pizza created by our minotaur chefs!`
        break;
    case "About":
        break
}

    return text
}
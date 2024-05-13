import'./style.css';



function component() {
    const header = document.createElement("header")


    let addBtn = (header) => {
        for(i = 0; i < 2;  i++){
        const btn = document.createElement("button")
        btn.innerText = "Test"
        header.appendChild(btn)
        }
    }

    addBtn(header)
    return header
}

document.body.appendChild(component())
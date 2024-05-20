
export default function home() {
    const div = document.createElement("div")
    const header = document.createElement("h1")

    header.innerText = "Snackfinder"

    div.appendChild(header)
 

    return div
}


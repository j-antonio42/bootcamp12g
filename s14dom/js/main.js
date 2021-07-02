
let killers = ["jason", "freddy", "chucky"]  
let body = document.querySelector("body")
let container = document.createElement("ul")

/*
para crear element nodes se utiliza document.createElement("div")
para crear text nodes se utiliza document.createTextNode("")
para agregar un node dentro de un node (crear un hijo) se utiliza
contendedor.appendChild( contenido )
*/

killers.forEach(killer=>{

    let parrafo = document.createElement("li") 
    parrafo.textContent = killer
    container.appendChild(parrafo)

})

body.appendChild(container)


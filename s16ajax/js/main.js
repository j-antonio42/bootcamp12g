// Mentors Table
const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/Room4/.json"
const savePerson = (nombre, apellido) => {
    // Preparando el payload
    const personJavascript = {nombre, apellido}
    const personJson = JSON.stringify(personJavascript)
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            console.log(respuesta)
        }
    };
    // Configurar el verbo, la dirección
    xhttp.open("POST", endpoint, true);
    // Enviar la solicitud
    xhttp.send(personJson);
}
// Add records to array and table
// Delete records
let btnGuardar = document.getElementById("btnGuardar")
// let mentorsArray = [
//     {"name": "Juan", "lastName": "Perez"}, 
//     {"name": "Pedro", "lastName": "Lopez"}] //[]
btnGuardar.addEventListener("click", (myEvent) => {
    let fields = document.querySelectorAll("form input")
    let mentorObject = {}
    fields.forEach(field => {
        mentorObject[field.name] = field.value
        // mentorObject = {...mentorObject, [field.name]:field.value}
        field.value = ""
    })
    savePerson(mentorObject.name, mentorObject.lastName)
    getMentorsAndRenderTable()
})
const getMentorsAndRenderTable = () =>{
    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            // Prepare data
            let mentorsData = JSON.parse(respuesta)
            let mentorsArray = []
            for (let person in mentorsData){
                let mentorObject = {"name": mentorsData[person].nombre, "lastName": mentorsData[person].apellido}
                mentorsArray.push(mentorObject)
            }
            console.log(mentorsArray);
            renderMentorsTable(mentorsArray)
        }
    };
    // Configurar el verbo, la dirección
    xhttp.open("GET", endpoint, true);
    // Enviar la solicitud
    xhttp.send();
}
/*[
    {"name": "Juan", "lastName": "Perez"}, 
    {"name": "Pedro", "lastName": "Lopez"}]
    */
const renderMentorsTable = (mentorsArray) => {
    let tableBody = document.querySelector("tbody")
    tableBody.innerHTML = ""
    mentorsArray.forEach((mentor, index) =>{
        let mentorRow = document.createElement("tr")
        tableBody.appendChild(mentorRow)
        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(index))
        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentor.name))
        mentorRow
            .appendChild(document.createElement("td"))
            .appendChild(document.createTextNode(mentor.lastName))
        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn", "btn-warning")
        deleteBtn.textContent = "Delete"
        deleteBtn.dataset.mentorIndex=index
        deleteBtn.addEventListener("click", event =>{
            let index = Number(event.target.dataset.mentorIndex)
            mentorsArray.splice(index,1)
            renderMentorsTable(mentorsArray)
        })
        mentorRow
        .appendChild(document.createElement("td"))
        .appendChild(deleteBtn)
    })
}
renderMentorsTable(mentorsArray)
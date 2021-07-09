
let save = document.getElementById("save")
mentorArray = []




save.addEventListener("click", () => {
    
    let mentorObject = {}
    let fields = document.querySelectorAll("#person-form input")
    fields.forEach(input =>{

        let property = input.id
        let value = input.value

        mentorObject = {...mentorObject, [property]:value}
        input.value = ""
    })
    console.log(mentorObject)
    mentorArray.push(mentorObject)
    console.log(mentorArray)

    
    const renderMentorsTable = (mentorArray) => {
    document.getElementById("person-table").innerHTML = ""

    mentorArray.forEach( (mentor, index ) =>  {
        
        let {mentorName, mentorLastName } = mentor 
        let personRow = document.createElement("tr" )
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")
    
        let nameText = document.createTextNode( mentorName )
        let lastnameText = document.createTextNode( mentorLastName )
        let indexText = document.createTextNode( index +1 )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
        deleteButton.dataset.personIndex = index
        deleteButton.addEventListener("click", event =>{
            let personIndex = event.target.dataset.personIndex
            mentorArray.splice(personIndex,1)
            renderMentorsTable(mentorArray)
        } )
       
    
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)
    
        buttonTd.appendChild(deleteButton)
    
        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)
    
        personRow.appendChild( indexTd )
        personRow.appendChild( nameTd )
        personRow.appendChild( lastnameTd )
        personRow.appendChild( buttonTd )
    
        document.getElementById("person-table").appendChild( personRow )
        
    })
}
renderMentorsTable(mentorArray)

})
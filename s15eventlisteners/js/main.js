
let save = document.getElementById("save")
mentorArray = []


save.addEventListener("click", () => {
    
    let mentorName = document.getElementById("mentorName").value
    //console.log(mentorName)
    let mentorLastName = document.getElementById("mentorLastName").value
    //console.log(mentorLastName)
    document.getElementById("mentorName").value = ""
    document.getElementById("mentorLastName").value = ""
    mentorObject = { mentorName, mentorLastName}

    mentorArray.push(mentorObject)
    console.log(mentorArray)

    mentorArray.forEach( (mentor, index) =>  {
        let {mentorName, mentorLastName } = mentor 
        let personRow = document.createElement("tr")
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
        let indexText = document.createTextNode( index + 1 )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
    
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
     mentorArray = []
})



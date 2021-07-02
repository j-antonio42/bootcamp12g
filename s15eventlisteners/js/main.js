

let save = document.getElementById("save")
mentorArray = []


save.addEventListener("click", () => {
    
    let mentorName = document.getElementById("mentorName").value
    //console.log(mentorName)
    let mentorLastName = document.getElementById("mentorLastName").value
    //console.log(mentorLastName)
    
    mentorObject = { mentorName, mentorLastName}
    mentorArray.push(mentorObject)
    console.log(mentorArray)

})
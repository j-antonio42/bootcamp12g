// practica de funcion constructora

let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

/* crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor, una propiedad con sus inciales y un método que al ser invocado devuelva el string "hola, soy {nombre} {apellidos}"
los objetos deben estar dentro de una colección llamada mentorsArray */

function Mentor(name, lastName){
  this.name = name 
  this.lastName = lastName
  
  const initials = (name, lastName) =>{
    let fullName = name + " " + lastName
    let firstIn = fullName.split(" ").reduce((accum,item) => {
      return accum + item.charAt(0) +"."
    },"") 

    return firstIn
  }
  this.initials = initials(name, lastName)
  this.salute = function(){
    console.log("hola me llamo "+ name + lastName)
  }

}

const getMentor = array =>{
  let mentorsArray = array.map(item =>{
  return   new Mentor(...item)
  })
  return mentorsArray
}

getMentor(dataArray)


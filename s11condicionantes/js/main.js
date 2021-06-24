/*crear una función que me diga si un string comienza con vocal, consonante, número o un caracter especial*/
  
var  someThing = prompt("indique   palabra")
var  character = someThing.charAt(0)

console.log(character.match(/["aeiou"]/gi))

var result = character.match(/["aeiou"]/gi)

result ? "si hay vocales" : "no hay vocales"



/*
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false
*/ 

function isUpper(str){
  
    if (str.length >= 8){
     return console.log(true)
    } else {
      return console.log(false)
    }

  }
  

  var str = prompt("type a word")
  
  isUpper(str)
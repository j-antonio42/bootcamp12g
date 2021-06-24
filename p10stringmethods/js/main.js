/*ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"*/

var firstString = prompt("escribe una palabra")
var secondString = prompt("escribe otra palabra")

function wichString(){

    if (firstString.length > secondString.length){
        console.log("el string " + firstString + " es el mas largo")
    } 

    else if (firstString.length > secondString.length){
     console.log("el string "+ secondString +" es el mas largo")
    }
    
     else 
    console.log("son el mismo largo")
}

console.log(wichString())

/*ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"*/

var someWord = prompt("indique palabra")


function upperLowersplit(){

  
    for (i=0; i <= someWord.length ; i++){
        if (i % 2 == 0){
            result = someWord[i].toLowerCase()
        } else {
            result = someWord[i].toUpperCase()
        }

        return result          
    }
}

console.log(upperLowersplit(someWord))


/*ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"*/

var kodeClass = prompt("indique palabra a modificar")

function revString(kodeClass){
    return kodeClass.split('').reverse().join('');
}

console.log(revString(kodeClass))
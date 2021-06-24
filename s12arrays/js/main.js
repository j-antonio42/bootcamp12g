/*
    crear una función que permita indicar la cantidad de koders a guardar, que pida tantos nombres de koders como se indique, y al final imprima el nombre del koder y su número asignado 

    Input:"Karen", "Xoch", "Wendy"
    output:
    Koder 1:"Karen",
    Koder 2:"Xoch",
    Koder 3:"Wendy"
*/


function collectKoders(){

    let koder = parseInt(prompt("introduce en numero de koders"))
    let arrayKoder = [];
    let name = "";

    for (let i=0; i < koder ; i++){

        name = prompt("introduce el nombre")
        arrayKoder.push(name);
    }

    for (let i=0; i < koder ; i++){

        console.log("koder "+ (i+1) + " " + arrayKoder[i]);
    }

    /*name = prompt("dame un ultimo nombre")
    arrayKoder.push(name);*/
    //console.log()
    arrayKoder.splice(1,2, "xoch","carlos")
    console.log(arrayKoder)
}

collectKoders();


/*
1.-crear una función que me permita saber el nombre de algún koder basado en su número asignado
2.-imprimir la lista de koders, en orden alfabético descendente
3.-crear una nueva lista que contenga los nombres de los koders con la siguiente estructura:
  Koder 1: Israel Salinas Martínez (I. S. M.)
  Koder 2: Óscar Rodríguez Hernández (O. R. H.)*/

// 1.  

let nameKoder = parseInt(prompt("Choose a number of the list from 1 to 3 "));



function numKoder(){

    let name = parseInt(prompt("mencione un numero de los 3 koders"))
    let koderArray = ["antonio", "karen", "hector"]
    let koder = name -1
  
    console.log(koderArray[(koder)])
  }
        
 numKoder()       

// 2. 
/* 
a. hago una variable que sea un arreglo y contenga los nombres
b. hago otra variable con el metodo .sort() que lo acomoda en orden alfabetico
c. lo coloco dentro de una funcion
d. anexo dentro un ciclo for para hacerlo una lista con lenght y sumando uno e imprimiendo el array multiplicado
por i y asi no imprimir el arreglo 4 veces*/

function abcKoder(){

    let listKoder= ["antonio", "karen", "hector", "oscar"]
    let koderOrder = listKoder.sort()
  
    for (i=0; i < koderOrder.length ; i++){
        console.log(koderOrder[i])
    }
    
  }
  
  abcKoder()


  // 3.
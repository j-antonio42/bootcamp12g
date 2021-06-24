/*1. el numero de vocales
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5 

1)crear una variable string vocales con su string la cual contenga las vocales
2)crear una variable number contador que sera la que retorne el numero de vocales
3)crear la funcion contar vocales donde se haga un ciclo for hasta el lenght del parametro
4)usar una condicion if y en ella anexar a la variable vocales el methodo includes en la string 
la variable i del ciclo for, y si se cumple esa condicion la accion sera que la variable contador
sume un +1 */



function contarVocales(str){
    let vocales = 'aeiou';
    let contador=0;
    for(let i=0;i<str.length;i++){
        if(vocales.includes(str[i])){
            contador++;
        }
    }
    return contador;
}



/*
2. separador (" ") contar el numero de palabras
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9 

1) declarar una variable 
2) hacer una funcion abContador y poner dentro la variable
3) hacer ciclo for para contar el numero de espacios el cual me dara el numero de palabras*/



function abContador(str){

    let trimed = str.trim() ;
    let contador= 1;

    for(let i=0;i<trimed.length;i++){

        if(trimed[i]==" "){
            contador++;
        }
    }
    return contador;
}



/*3. palindromo si var = var.reverse se cumple
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false */

function palindromo(str){

    let arre = str.split("").filter(value => value != " ");

    /*function spaceOut(value){
      return value != " ";
    }*/

    if(arre.join("")==arre.reverse().join("")){
      console.log(true)
    } else {
      console.log(false)
    }
}
 
palindromo("se verla al reves") 


/*4.
Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres 
Tener al menos un número
Tener al menos una mayúscula
Devolver true si el string cumple con las reglas, o imprimir en consola la regla o reglas 
que no se están cumpliendo. */

function test2(str){
    if(str.length>=8){
        let bandera=false;
        for(let i=0;i<str.length;i++){
            if('0123456789'.includes(str[i])){
                bandera=true;
                break;
            }   
        }
        if (bandera == false){
          console.log("no hay numeros");
        }
        if(bandera == true){
            for(let i=0;i<str.length;i++){
                if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
                    return true;
                } 
            }
        }
    }
    else{
      console.log("el string es muy corto")
    }
    return false;
}


/* crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string
ejemplo correcto:
input: 10
output: asdfqwerzx

0. creamos una variable para guardar la cadena resultante
1. obtener el numero de caracteres
2. definir un rango numerico que determine el codigo asccii de los caracteres que estaran disponibles
3. obtener de forma aleatoria algun numero dentro de ese rango
4. obtener el caracter correspondiente al numero seleccionado
5. almacenamos una variable en el caracter obtenido
6. evaluamos si el caracter existe en le cadena de resultado
7. si el caracter no existe lo agregamos a la cadena de resultado y si existe debemos generar un nuevo caracter
8. devolver la cadena de resultado*/


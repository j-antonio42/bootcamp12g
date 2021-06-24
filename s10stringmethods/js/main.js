/* ejercicio 1
Recibir el nombre completo de un usuario ( en un sólo string ) y convertir las palabras pares a mayusculas y las nones a minúsculas
*/

/* pasos para resolver
1) solicitar nombre y apellidos
2) guardar el nombre en una variable y el apellido en otra
3) transformar el nombre a minusculas
4) transformar el apellido a mayusculas 
5) juntar nombre con apellido transformados en un solo texto
6) devolver el texto como resultado */

var nombre = prompt("nombre")
var apellido = prompt("apellido")


function nombreApellido(nombre, apellido){
     var nuevoNombre = nombre.toLowerCase()
     var nuevoApellido = apellido.toUpperCase()
     var nuevoNomApellido = nuevoNombre + " " + nuevoApellido 

     return nuevoNomApellido   
}

console.log(nombreApellido(nombre, apellido))
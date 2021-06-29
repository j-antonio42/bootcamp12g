 //1.-
//Dado un string cualquiera ( por ejemplo "ajaicoiashdfoqwemoc" ) encontrar la cantidad de caracteres no repetidos usados en dicho string. Ejempo:
//input:ajaicoiashdfoqwemoc
//output:13

/*const getCounter = sampleStr =>{

  let sampleStr.reduce((accum,current)=>{

  },0)

}*/

//2.-dado el siguiente*/
 
voterArray = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
    ]

// usar reduce para obtener la siguiente información:

// -Un array con aquellas personas que votaron
const getVoters = sampleArray =>{

 let votaron = sampleArray.reduce((accum,item)=>{    
   
   return item.voted ? accum.concat(item.name) : accum

 },[])

 return votaron

}

console.log(getVoters(voterArray))

// -la edad promedio de todos los votantes
const getSamples = sampleArray =>{

 let sum = sampleArray.reduce((accum,current)=>{
   
   return accum + current.age

 },0)

 let average = sum / sampleArray.length

 return average
}

console.log(getSamples(voterArray))

// -un array con aquellos votantes que votaron y queson menores a 30 años
const getAges = sampleArray =>{  

 let under30 = sampleArray.reduce((accum,item)=>{
   
    if (item.age < 30 && item.voted == true){
      accum =  accum.concat(item)
    } else {
      accum
    }

    return accum

 },[])

 return under30
}

console.log(getAges(voterArray))

// -la edad promedio de los no votantes
const ageNoVoters = sampleArray =>{

 let noVoter = sampleArray.reduce((accum,item)=>{    
   
   return !item.voted ? accum.concat(item) : accum

 },[])

 return noVoter

}

console.log(getSamples(ageNoVoters(voterArray)))

// -el porcentaje de votantes vs no votantes
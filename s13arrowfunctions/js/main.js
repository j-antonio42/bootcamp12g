let dataArray = [
    [
        "Israel",
        "Salinas Martínez"
    ],
    [
        "David",
        "Cermeño Moranchel"
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

function objectArray(newArray){

    let objectArray = {name:newArray[0], lastname:newArray[1]}

    return objectArray

} 
 
/*objectArray(  [
    "Michael",
    "Villalba Sotelo"
])*/

function completeArray(dataArray){
  let mentorsArray= []
    for (i = 0; i < dataArray.length ; i++){
       dataArray[i]
        
        let object = objectArray(dataArray[i])
        //console.log(object)
        mentorsArray.push(object)
    }
    return mentorsArray
}

completeArray(dataArray)





/* mentorsArray = [
    {
        name:"Israel",
        lastName:"salinas"
    }...{...}
]*/

let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the Fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      }
    }
  ]
  
  /*agrupar únicamente los nombres de las bandas, sin repeticiones*/
  
  /*
    Agrupar las canciones de cada banda
  */
  
  /*
    saber cuál es la canción con más likes
    ( nombre de la canción y nombre de la banda)
    */
  
  /*saber cuál es la canción con más reproducciones
  ( nombre de la canción y nombre de la banda)
  */
/*
Agrupar las canciones de cada banda, la funcion recibe el array de bandas con nombres unicos del 1er. ejercicio
*/
const getBandSongs = arrayBandsNames =>{
    let bandSongs = []     // arreglo para guardar la banda con su arreglo de canciones
    let songs = []         // arreglo auxiliar para guardar las canciones de la banda
    let objBandSongs = {}   // objeto para guardar el nombre de la banda y su array de canciones

    arrayBandsNames.forEach( bandName=> {           //por cada nombre de banda en el array de bandas 
        songs =[]
        objBandSongs = {}                           // limpio los arreglos para que en cada vuelta esten vacios
        /*
        for(i=0; i< songsData.length; i++){
            if(songsData[i].band == bandName)     // cambio el for a petición de Israel
            songs.push(songsData[i].name)
        } 
        */
          songsData.forEach(  song => {     // recorro el arreglo de las canciones de Israel para comparar
              if ( song.band == bandName )  // pregunto si el nombre de la banda de la cancion es igual al nombre de la banda de cada iteracion
              {
                songs.push(song.name)       // si es igual, meto el nombre de la cancion en el arreglo auxiliar.
              }
                
          } )
                                          // cuando termino de recorrer el arreglo de Israel, ya se que canciones son de cada banda
        objBandSongs.band = bandName      // entonces en el objeto vacio agrego el nombre de la banda
        objBandSongs.listSongs = songs    // y tambien agrego el arreglo auxiliar de canciones

        bandSongs.push(objBandSongs)      // por ultimo agrego ese objeto construido al arreglo de bandsongs.
    })
    return bandSongs                      // al final la funcion regresa el arreglo [  { band: Metallica ,  listsongs: [ canciones ] }  ]   
}
console.log( getBandSongs(getBandNames(songsData)))



const getMostListen =   arraySongsData => {

    let mostListen = {}
    let reproductions = 0

    arraySongsData.forEach( song => {   

        if (song.statistics.reproductions >  reproductions )
        {
                mostListen = song
                reproductions = song.statistics.reproductions 
        }  
        
      }
      
    )

    console.log( "ej3: Cancion mas escuchada '" + mostListen.name + "' de la banda '" + mostListen.band + "'"  )
}

getMostListen(songsData)



const getMostLike =   arraySongsData => {

  let mostLike = {}
  let likes = 0

  arraySongsData.forEach( song => {   

      if (song.statistics.likes >  likes )
      {
            mostLike = song
            likes = song.statistics.likes
      }  
      
    }
    
  )
  console.log( "ej4: Cancion mas gustada '" + mostLike.name + "' de la banda '" + mostLike.band + "'"  )
}

getMostLike(songsData)
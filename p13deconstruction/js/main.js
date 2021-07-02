
let prendas = {
    camisa:"camisa azul",
    pantalon:"pantalón púrpura",
    gorro:"gorro rojo",
    zapatos:"zapatos negros",
    bufanda:"bufanda negra",
    lentes:"lentes grises "
  }
  let prendasArray = [
    [
      "Camisa Azul",
      "$200.00"
    ],
    [
      "Gorro rojo",
      "$20.00"
    ],
    [
      "Zapatos Negros",
      "$150.00"
    ],
    [
      "Bufanda Negra",
      "$80.00"
    ]
  ]
  const imprimirSeleccion = () => {
    let {camisa, zapatos, gorro , bufanda} = prendas
  }
  imprimirSeleccion()
  const crearPrenda = ( datosDeLaPrenda ) => {
    let prenda = datosDeLaPrenda
    let [nombre,precio] = prenda
    let objetoPrenda = { nombre, precio }
    return objetoPrenda
  }
  const getPrendas = dataArray => {
    let coleccionDePrendas = dataArray.map( item => {
      return crearPrenda( item )
    })
    return coleccionDePrendas
  }
  console.log( getPrendas( prendasArray ))
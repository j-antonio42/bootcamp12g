/*
-arreglar el bug de que no se reinicia la lista de números
- crear una función que obtenga el producto de todos los números seleccionados y lo agregue al encabezado
- hacer que el encabezado sólo se muestre cuando damos click al botón ok
- permitir que los números puedan seleccionarse y deseleccionarse (*los números desactivados no deben formar parte del resultado )
*/

const printDivisibles = () => {
    let limit = $("#limit").val()
    let divisor = $("#divisor").val()
    
    removeCards()
    for( let i = 1; i < limit; i++){
        i % divisor === 0 && printCard( i )
    }
    $(".number-card").click( ( event ) => {
        event.stopPropagation()
        //console.log( event.target)
        $(event.target).toggleClass("active")
        multiply()
    })
    
}

const printCard = number => {
    let cardHtml = `
        <div class="col-3">
            <div class="card number-card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>${number}</h1>
                </div>
            </div>
        </div>
    `
    $("#card-wrapper").append(cardHtml)
}

$("#go").click( printDivisibles )

const removeCards = () => {
    $("#card-wrapper").empty()
}

const multiply = () => {
    let result = 1

    $(".active h1").each(function(){
       
        result *= $(this).text() 
        //return result
    })

    if(result == 1){
        $("#result").hide()
    }  else {
        $("#result").show()
    }
    
    let resultText = `<h1>El resultado es: <span>${result}</span></h1>`

    $("#result").html(resultText)

}


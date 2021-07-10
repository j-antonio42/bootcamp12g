$(document).ready(() => {
  
    let bodyElement = $('body');
    let green = $('#green');
    let red = $("#red");
    let yellow = $("#yellow");
    let white = $("#white")
    
    green.click(() => {
        bodyElement.removeClass("bg-danger").removeClass("bg-warning").addClass("bg-success")
    })

    red.click(() => {
        bodyElement.removeClass("bg-success").removeClass("bg-warning").addClass("bg-danger")
    })

    yellow.click(() => {
        bodyElement.removeClass("bg-success").removeClass("bg-danger").addClass("bg-warning")
    })

    white.click(() => {
        bodyElement.removeClass("bg-success").removeClass("bg-danger").removeClass("bg-warning")
    })

});
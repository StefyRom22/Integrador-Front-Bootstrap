const TICKET = 200;

let valorTicket = 0;

function calcularPrecio(){
    let cantidadTicket = parseInt(document.getElementById('cantidad').value);
    let categoriaTicket = document.getElementById('selectDescuento').value;

    if(categoriaTicket == 'estudiante'){
        valorTicket = (TICKET * cantidadTicket) * 0.20;
    }else if (categoriaTicket == 'trainee') {
        valorTicket = (TICKET * cantidadTicket) * 0.50;
    } else if (categoriaTicket == 'junior'){
        valorTicket = (TICKET * cantidadTicket) * 0.85;
    }else{
        alert("No se ingresaron los datos necesarios, por favor intente nuevamente")
    }

    document.getElementById('totalPagar').innerHTML = valorTicket;
}
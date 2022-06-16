//Primera entrega.
//Pedi un valor y un texto para que se repita el texto.


// let valor = parseFloat(prompt("Ingrese un valor: "));
// let texto = prompt("Ingrese un texto: ");

// for( let i = 1; i <= valor; i++){
//     alert(texto)
// }


//Entrega 2 agregando Funciones

let dias = 0
let operacion = " "
let simple = 100
let doble = 200
let triple = 300
let resultado = 0
let nuevaOperacion = false

//Funcion para calcular los dias y la habitacion

function habitacion(valorHabitacion) {
    let mostrarResultado = dias * valorHabitacion
    return mostrarResultado
}

//Elegir la habitacion

function elegirHabitacion() {
    switch (operacion) {
        case "Simple":
            resultado = habitacion(simple);
            alert("El valor de la habitación es " +resultado)
            break;
        case "Doble":
            resultado = habitacion(doble);
            alert("El valor de la habitación es " +resultado)
            break;
        case "Triple":
            resultado = habitacion(triple);
            alert("El valor de la habitación es " +resultado)
            break;    
        default:
            alert("No elegiste la operación correcta");
            dias = 0
            operacion = ""
            break;
    }
}
function configuracionHabitacion() {
    do {
        operacion = prompt("¿Que tamaño de habitación necesitas? Los tamaños son Simple, Doble y Triple");
        dias = parseInt(prompt("¿Cuantos dias deseas quedarte?"));
        elegirHabitacion();
        nuevaOperacion = confirm("¿Queres seguir alquilando?");
    } while (nuevaOperacion);
}
//llamado de la funcion 
configuracionHabitacion()
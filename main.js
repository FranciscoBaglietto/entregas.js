//Primera entrega.
//Pedi un valor y un texto para que se repita el texto.


// let valor = parseFloat(prompt("Ingrese un valor: "));
// let texto = prompt("Ingrese un texto: ");

// for( let i = 1; i <= valor; i++){
//     alert(texto)
// }


//Entrega 2 agregando Funciones

// let dias = 0
// let operacion = " "
// let simple = 100
// let doble = 200
// let triple = 300
// let resultado = 0
// let nuevaOperacion = false

// //Funcion para calcular los dias y la habitacion

// function habitacion(valorHabitacion) {
//     let mostrarResultado = dias * valorHabitacion
//     return mostrarResultado
// }

// //Elegir la habitacion

// function elegirHabitacion() {
//     switch (operacion) {
//         case "Simple":
//             resultado = habitacion(simple);
//             alert("El valor de la habitación es " +resultado)
//             break;
//         case "Doble":
//             resultado = habitacion(doble);
//             alert("El valor de la habitación es " +resultado)
//             break;
//         case "Triple":
//             resultado = habitacion(triple);
//             alert("El valor de la habitación es " +resultado)
//             break;    
//         default:
//             alert("No elegiste la operación correcta");
//             dias = 0
//             operacion = ""
//             break;
//     }
// }
// function configuracionHabitacion() {
//     do {
//         operacion = prompt("¿Que tamaño de habitación necesitas? Los tamaños son Simple, Doble y Triple");
//         dias = parseInt(prompt("¿Cuantos dias deseas quedarte?"));
//         elegirHabitacion();
//         nuevaOperacion = confirm("¿Queres seguir alquilando?");
//     } while (nuevaOperacion);
// }
// //llamado de la funcion 
// configuracionHabitacion()


//Entrega Arrays
console.log("Bienvenidos a Hotel-Hansa")

const habitaciones =[
{
    habitacion:"Simple",  //objeto1
    precio: 100
},
{
    habitacion:"Doble", //objeto2
    precio: 200
},
{
    habitacion:"Triple",    //objeto3
    precio: 300
}
];

habitaciones.push({habitacion:"Cuadruple", precio:400}); //Agregando otro objeto mas con push

for (const habitacion of habitaciones){
    console.log(habitacion.habitacion);//para ver los valores de Habitaciones en cada objeto
    console.log(habitacion.precio);//para ver los valores de los precios en cada objeto
}


console.log(habitaciones.length); //para ver cuantos elementos hay
console.log(habitaciones);//ver objetos dentro del Arrays
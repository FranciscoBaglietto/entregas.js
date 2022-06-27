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
// console.log("Bienvenidos a Hotel-Hansa");


// const habitaciones =[
// {
//     id:1,
//     habitacion:"Simple",  //objeto1
//     precio: 100,
//     disponibilidad: 4
// },
// {
//     id:2,
//     habitacion:"Doble", //objeto2
//     precio: 200,
//     disponibilidad: 2
// },
// {
//     id:3,
//     habitacion:"Triple",    //objeto3
//     precio: 300,
//     disponibilidad: 1
// }
// ];

//habitaciones.push({id:4, habitacion:"Cuadruple", precio:400, disponibilidad: 3}); //Agregando otro objeto mas con push

// for (const habitacion of habitaciones){
//     console.log(habitacion.habitacion);//para ver los valores de Habitaciones en cada objeto
//     console.log(habitacion.precio);//para ver los valores de los precios en cada objeto
// }



// console.log(habitaciones.filter(habitacion => habitacion.precio <= 200));//Hace un filtro de todas las habitaciones con un precio menor e igual a 200
// console.log(habitaciones.length); //para ver cuantos elementos hay
// console.log(habitaciones);//ver objetos dentro del Arrays


// //para ver las habitaciones y precios

// const todasHabitaciones = [ ];
// const todosPrecios = [ ];


// habitaciones.forEach( (habitacion => {
//     todasHabitaciones.push(habitacion.habitacion);
// }) );

// habitaciones.forEach((habitacion => {
//     todosPrecios.push(habitacion.precio);
// }) );



// console.log(todasHabitaciones)
// console.log(todosPrecios)


//Trabajo primera entrega




const habitaciones = [
    {
        id: 1,
        habitacion: "Simple",  //objeto1
        precio: 100,
        disponibilidad: 4
    },
    {
        id: 2,
        habitacion: "Doble", //objeto2
        precio: 200,
        disponibilidad: 2
    },
    {
        id: 3,
        habitacion: "Triple",    //objeto3
        precio: 300,
        disponibilidad: 1
    }
];

habitaciones.push({ id: 4, habitacion: "Cuadruple", precio: 400, disponibilidad: 3 }); //Agregando otro objeto mas con push

const carrito = [];

console.log("Bienvenidos a Hotel-Hansa")

let alquiler = prompt("Deaseas alquilar una habitacion?");

if (alquiler == "null") {
    alert("No seleccionaste ninguna Habitacion");

}

alquiler.toLowerCase

if (alquiler == "si") {

    let filtrar = prompt("Deseas filtrar por precio? si/no").toLowerCase

    if (filtrar = "si") {
        let precio = Number(
            prompt("Ingrese el precio que deseas filtrar"));

        const habitacionesFiltradas = filtrarPrecio(precio);
        console.log(habitacionesFiltradas);
    }

    let eleccionHabitacion = " ";

    while (eleccionHabitacion != "no".toLowerCase) {

        eleccionHabitacion = prompt(`
        ¿Que habitaciones deseas Alquilar?

        Para dejar de alquilar, escribe no

        Digite 1 para alquilar Habitacion Simple
        Digite 2 para alquilar Habitacion Doble
        Digite 3 para alquilar Habitacion Triple
        Digite 4 para alquilar Habitacion Cuadruple
        `  );

        if (eleccionHabitacion == null) {
            break;
        };

        if (eleccionHabitacion == "no".toLowerCase) {
            alert("Gracias por Visistarnos")
        };

        agregarHabitacionAlCarrito(parseInt(eleccionHabitacion));

        console.log(agregarHabitacionAlCarrito)


    };


    function agregarHabitacionAlCarrito(id) {
        let habitacion = habitaciones.find(habitacion => habitacion.id === id);

    }


    function filtrarPrecio(precio) {
        let filtrados = habitaciones.filter(habitacion => habitaciones.precio >= precio);
        return filtrados;
    }


}

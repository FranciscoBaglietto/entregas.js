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




// const habitaciones = [
//     {
//         id: 1,
//         habitacion: "Simple",  //objeto1
//         precio: 100,
//         disponibilidad: 4
//     },
//     {
//         id: 2,
//         habitacion: "Doble", //objeto2
//         precio: 200,
//         disponibilidad: 2
//     },
//     {
//         id: 3,
//         habitacion: "Triple",    //objeto3
//         precio: 300,
//         disponibilidad: 1
//     }
// ];

// habitaciones.push({ id: 4, habitacion: "Cuadruple", precio: 400, disponibilidad: 3 }); //Agregando otro objeto mas con push

// const carrito = [];
// const precioTotal = () => carrito.reduce((acc, elem) => acc + elem.precio, 0);

// let habitacionesFiltradas = [];

// //Bienvenida

// console.log("Bienvenidos a Hotel-Hansa")

// let preguntar = false;
// //pregunta si quiere alquilar
// let alquiler = prompt("Deaseas alquilar una habitacion?");


// while (!preguntar) {
//     if (alquiler == "") {
//         alert("No seleccionaste ninguna Habitacion");
//         alquiler = prompt("Deaseas alquilar una habitacion?");
//     }
//     else {
//         preguntar = true;
//     }
//     alquiler.toLowerCase();
// }



// if (alquiler == "si") {

//     let filtrar = prompt("Deseas filtrar por precio? si/no").toLowerCase//filtrar por precio

//     if (filtrar = "si") {
//         let precio = Number(
//             prompt("Ingrese el precio que deseas filtrar"));

//         habitacionesFiltradas = [];
//         habitacionesFiltradas = filtrarPrecio(precio);

//         console.log(habitacionesFiltradas);
//     }

//     //elegir Habitacion
//     let eleccionHabitacion = "";

//     while (eleccionHabitacion != "no".toLowerCase) {

//         let textoAMostrar = '';

//         for (let i = 0; i < habitacionesFiltradas.length; i++) {
//             textoAMostrar += `Digite ${i + 1} para alquilar Habitacion ${habitacionesFiltradas[i].habitacion}\n`;
//         }




//         eleccionHabitacion = prompt(`
//       ¿Que habitaciones deseas Alquilar?

//       Para dejar de alquilar, escribe no

//      ${textoAMostrar}`);

//         if (eleccionHabitacion == null) {
//             console.log('No quisiste alquilar ninguna habitacion. Vuelva pronto, o volve a empzar..')
//             break;
//         };

//         if (eleccionHabitacion == "no".toLowerCase) {
//             alert("Gracias por Visistarnos")
//         };

//         agregarHabitacionAlCarrito(parseInt(eleccionHabitacion));

//     };


//     function agregarHabitacionAlCarrito(id) {
//         let habitacion = habitaciones.find(habitacion => habitacion.id === id);

//         carrito.push(habitacion);
//         console.log(`Este es tu carrito hasta el momento:\n`, carrito);
//         console.log(precioTotal());
//         //return habitacion.precio;
//     }

//     function filtrarPrecio(precio) {
//         let filtrados = habitaciones.filter(habitacion => habitacion.precio <= precio);
//         return filtrados;
//     }

//     function filtrarPrecio(precio) {
//         return habitaciones.filter(habitacion => habitacion.precio <= precio);
//     }


// };



//-------------------------------------------------------------

//Desafio complementario DOM

//llamamos al h3 con id titulo1

let titulo = document.getElementById("titulo1");

//pedimos al usuario su nombre

const nombreUsuario = prompt("Binevenido! Ingrese su nombre: ");

titulo.innerText= "Hola "+nombreUsuario+" Bienvenido a Hotel Hansa !";



//Creamos una funcion para mostrar los Habitaciones


const mostrarHabitaciones = () => {
    const contenedor = document.getElementById("contenedor-habitaciones"); // seleccionamos dentro de html el main 

    habitaciones.forEach( habitacion => {//quiero recorrer los elemento del array Habitaciones
        const div = document.createElement("div");//quiero crear un elemento div

        div.classList.add("card");//agregar en cada obejto la clase card
        div.innerHTML = `<div class="card-image">
                            <img src= ${habitacion.img} width="200px">
                            <p>Habitacion: ${habitacion.habitacion} </p>
                            <p>Precio: ${habitacion.precio}</p>
                        </div>
                    `;
        contenedor.appendChild(div) //llamamos que el div sea hijo del contendor           
    });
}

//llamamos a la funcion

mostrarHabitaciones()


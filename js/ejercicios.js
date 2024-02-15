// //En esta primera preentrega he optado por hacer de todo un poco dando un hilo argumental para que tuviera un poco de sentido. Estamos hablando de un interrogatorio para saber donde esta escondido un dinero al modo "Elige tu propia aventura").
// //Para ello me he apoyado en alert para poder hacerlo más interactivo.
// //He incluido varias secuencias y ciclos. Tb una función que si bien no es complicada nos sirve para ejecutar el código interno.

// /!-----------------------Empezamos con cosas faciles--------------------!/


// let nombre = prompt(`Te gusta el dinero verdad...
// Dime como te llamas sucia rata`);

// let acusacion = alert(`${nombre} sabemos que te has llevado todo el dínero de \n
// la caja fuerte.
// Bien sabes que nos lo tienes que devolver. No nos gustaría tener que pasarnos
// por tu casa para que nos hicieras caso...`);
// let dineroEstafado = parseFloat(
//     prompt(`Puedes decirnos tu mismo la cantidad total robada. Pero \n
// no te quedes corto. Sabemos que fue un dineral.`)
// );


// /!---------------------Tenemos aquí un ciclo que espera un resultado--------------------/


// while (dineroEstafado < 1000 || dineroEstafado > 500000) {
//     alert(`no te lo crees ni tu. Ni siquiera te has acercado
//     Prueba a ajustar la cantidad...`);
//     dineroEstafado = parseFloat(
//         prompt(`Vuelve a intentarlo... Ingresa otra cantidad.
//     No puede ser menos de mil euros y mucho  menos mas de quinientos mil `)
//     );
// }
// alert(`Eso  me gusta mas... maldito mentiroso`);

// let solucion = parseFloat(
//     prompt(`Vaya, vaya vaya... así que te has llevado ${dineroEstafado} eurazos
// Pues estas de suerte. Dime como prefieres que lo solucionemos...
// Escribe "1" si quieres la via rápida ..y
// Escribe "2" si quieres la via lenta`)
// );


// /!--------------------------OTRO CICLO-------------------------------!/


// switch (solucion) {
//     case 1:
//         alert(`Así que prefierres la via rápida ${nombre}.
//     Esto te va a doler un poco....`);
//         break;
//     case 2:
//         alert(`Si piensas que la via lenta es menos dolorosa estas equivocado
//     preparate para cantar...`);
//         break;
//     default:
//         alert(`Si te empeñas en no querer hablar tendremos que seguir 
//         dándote. Y cada vez lo haremos mas fuerte...`);
        
// }

// /!-----------------------FUNCION----------------------------!/


// function interrogatorio (){
//     do { interrogatorio =prompt(`Tienes tres oportunidades para decirnos dónde esta
// el dinero. Te avisamos que no te va a gustar cada vez que nos mientas.
// Ahora dinos, el dinero esta en:
// A: Tu casa?
// B: En tu oficina?
// C: En tu coche?`)}
// while (interrogatorio !== "C");
// }

// interrogatorio();

// alert(`Mas te vale que este en el coche como dices...

// CONTINUARA......`);



alert(`Hemos conseguido recuperar el dinero y tenemos algo interesante que contarte. Estaba todo lleno de hueyas y hemos visto que no diste el golpe tu sola como nos quieres hacer ver \n
Estas son las personas que van a compartir celda contigo\n
(mirar consola)`);

let sospechosos = [
   {nombre: "Monica", Edad: 33, Nacionalidad: "Española"},
   {nombre: "Arturo", Edad: 41, Nacionalidad: "Española"},
   {nombre: "Ignacio", Edad: 39, Nacionalidad: "Francesa"},
   {nombre: "Sofia", Edad: 16, Nacionalidad: "Española"},
]
console.log(sospechosos)

let interrogatorioDos = confirm(`Los reconoces?`)
while (interrogatorioDos !== true){
    alert(`Estas segura que no conoces a ninguno de estos...\n
    ni siquiera a ella...\n
    
    (mirar consola)`)

    console.log(sospechosos[3]);
    break
    }

alert(`Bien, así me gusta.. que colabores. Entendemos que a SOFIA no le gustaría verte sufrir`);
let interrogatorioTres = confirm(`Tenemos a una persona más que creemos que puede estar en la lista\n
Estubo con vosotros el día del robo?`);
while (interrogatorioTres !== true){
    alert(`Rapido traerme a Sofia`)
    break
}alert(`Muy bien veo que estas colaborando de manera excelente. \n
Así pues la lista de sospechosos queda de esta manera.\n
(mira consola)`)

sospechosos.push({
    nombre: "Luciano", Edad: 29, Nacionalidad: "Portuguesa"
},)

console.log(sospechosos);

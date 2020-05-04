//dia semanas

let diaSemanas = [];
diaSemanas.dia1 = prompt("Dia 1");
diaSemanas.dia2 = prompt("Dia 2");
diaSemanas.dia3 = prompt("Dia 3");
diaSemanas.dia4 = prompt("Dia 4");
diaSemanas.dia5 = prompt("Dia 5");
diaSemanas.dia6 = prompt("Dia 6");
diaSemanas.dia7 = prompt("Dia 7");

//nombre familia

let nombreFamilia = [];

nombreFamilia.nombrePadre = prompt("Nombre de padre");
nombreFamilia.nombreMadre = prompt("Nombre de la madre");
nombreFamilia.nombreHermana = prompt("Nombre de la hermana");

//datos personales

let datosPersonales = { };
datosPersonales.nombrePersonal = prompt("digite su nombre");
datosPersonales.fechaNacimiento = String( prompt("fecha de nacimiento"));
datosPersonales.lugarNacimiento = prompt("lugar de nacimiento");
datosPersonales.edad = Number.parseInt( prompt("edad"));
datosPersonales.comida1 = prompt("ponga su comida favorita 1");
datosPersonales.comida2 = prompt("ponga su comida favorita 2");
datosPersonales.comida3 = prompt("ponga su comida favorita 3");
datosPersonales.primerPais = prompt("paises 1");
datosPersonales.segundoPais = prompt("paises 2");
datosPersonales.tercerPais = prompt("paises 3");
datosPersonales.cuartoPais = prompt("paises 4");
datosPersonales.quintoPais = prompt("paises 5");
datosPersonales.licenciaConducir = Boolean( prompt("posees licencia de conducir aceptar=si cancelar=no"));
datosPersonales.estasUniversidad = confirm("Estas en la universidad");


//imprimiendo datos de prueba en la consola

console.log("hola");
console.log(datosPersonales.edad);
console.log(datosPersonales.licenciaConducir);
console.log(datosPersonales.fechaNacimiento);

// informacion de mi artista favorito

let artistaFavorito = { 
nombreArtista: "drake", 
fechaNacimientoArtista: "24 de octubre 1986",
edad: 34,
canciones: ["hotling bling", "energy","started from the buttom"],
nacionalidad: "americana",
};


//imprimiendo los datos pedidos en la asignacion


console.log(datosPersonales.nombrePersonal);
console.log(datosPersonales.fechaNacimiento);
console.log(artistaFavorito.canciones);
console.log(artistaFavorito.edad);
console.log(artistaFavorito.nacionalidad);
console.log(artistaFavorito.fechaNacimientoArtista);









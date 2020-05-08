//aqui selecccionamos las variables de html

const parrafoInteresante = document.querySelector("h1#parrafoInteresante");
console.log(parrafoInteresante);


const btnempezar = document.querySelector("button#empezar");
console.log(btnempezar);

const divparrafoInteresante2 = document.querySelector("div#parrafoInteresante2");
console.log(divparrafoInteresante2);


//añadiendo eventos 

btnempezar.addEventListener("dblclick" ,function (){

 divparrafoInteresante2.style.display = "none";
 parrafoInteresante.style.color = "red";
 parrafoInteresante.style.fontStyle = "italic";
 parrafoInteresante.innerHTML = "Haz hecho doble click!";
 
});
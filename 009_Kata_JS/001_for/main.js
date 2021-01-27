var MexicanFood = [
    "Enchiladas",
     "Tacos",
     "Tamales",
     "Pozoles",
     "Barbacoas",
     "Guacamole",
     "Quesadillas de Papa",
     "Tacos 2"
    ];

//Mostrar lista
console.log("****** Punto 1: Mostrar lista ====");
for(i=0; i < MexicanFood.length; i++) {
    console.log(MexicanFood[i]);
}

//Mostrar Pozoles y Barbacoas
console.log("==== Punto 2: Mostrar Pozoles y Barbacoas ====");
for(i=0; i < MexicanFood.length; i++) {
    if(MexicanFood[i]==="Pozoles" || MexicanFood[i]==="Barbacoas")    
    console.log(MexicanFood[i]);
}

//Mostrar impares
console.log("==== Punto 3: Mostrar Impares ====");
for(i=0; i < MexicanFood.length; i++) {
    if( i%2 != 0 )    
        console.log("Pos ["+i+"]: "+MexicanFood[i]);
}

//Mostrar pares

console.log("==== Punto 4: Mostrar Pares ====");
for(i=0; i < MexicanFood.length; i+=2) {
        console.log("Pos ["+i+"]: "+MexicanFood[i]);
}

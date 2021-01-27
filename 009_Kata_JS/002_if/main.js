var j1 = prompt("Jugador 1:");
var j2 = prompt("Jugador 2:");


if( (j1 === "papel" && j2 === "piedra") || (j1 === "tijera" && j2 === "papel") || (j1 === "piedra" && j2 === "tijera") ){
    console.log("Gana Jugador 1: " + j1);
} else if( (j2 === "papel" && j1 === "piedra") || (j2 === "tijera" && j1 === "papel") || (j2 === "piedra" && j1 === "tijera") ){
    console.log("Gana Jugador 2: " + j2);
} else {
    console.log("Empate");
}


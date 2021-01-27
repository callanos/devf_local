/*
------------- Ejercicios 1 y 3 ----------------------
*/


var Numeros = prompt("Ingrese 3 números separados por coma (,)");

var ArrayNumeros = Numeros.split(",");

console.log(Number(ArrayNumeros[0])+Number(ArrayNumeros[1])+Number(ArrayNumeros[2]));

var Suma = Number(ArrayNumeros[0])+Number(ArrayNumeros[1])+Number(ArrayNumeros[2]);

if (Number(ArrayNumeros[0]) >= Number(ArrayNumeros[1]) && Number(ArrayNumeros[0]) >= Number(ArrayNumeros[2])){
    alert("Suma: "+Suma+" - Número mayor: "+ArrayNumeros[0]);
} else if (Number(ArrayNumeros[1]) >= Number(ArrayNumeros[0]) && Number(ArrayNumeros[1]) >= Number(ArrayNumeros[2])){
    alert("Suma: "+Suma+" - Número mayor: "+ArrayNumeros[1]);
} else if (Number(ArrayNumeros[2]) >= Number(ArrayNumeros[0]) && Number(ArrayNumeros[2]) >= Number(ArrayNumeros[1])){
    alert("Suma: "+Suma+" - Número mayor: "+ArrayNumeros[2]);
}



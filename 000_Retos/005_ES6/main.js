const paises = ["México","Panamá","Guatemala","El Salvador","Colombia"];
let cantLetras = [];
var j;

function longestCountry(...paises){
    
    for(var i=0; i<paises.length; i++){
        cantLetras[i] = paises[i].length;
    }

    for(var i=0; i<paises.length; i++){
        if(cantLetras[i]===Math.max(...cantLetras))
            j = i;
    }
    return  paises[j];
}

console.log(longestCountry(...paises));

const celsius = farenheit => {return ((farenheit-32)*(5/9));}

console.log(`28 Grados Farenheit son: ${celsius(28)} Grados Celcius`);
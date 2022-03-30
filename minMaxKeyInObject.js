/*
    Escreve uma função chamada minMaxKeyInObject que aceita um objecto com chaves numéricas.
    A função deve retornar um vector com o seguinte formato: [menorChave, maiorChave]

    Examplos:

    minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
    // [1, 10]
    minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
    // [1, 4]
*/

function minMaxKeyInObject(obj){
    let sorted = [], reversed = [];

    for (let ky in obj) {
        sorted.push(+ky);
    	reversed.push(+ky);
    }

    sorted.sort(compararNumberos);
    reversed.sort(compararNumberos).reverse();

    return [+sorted[0], +reversed[0]];
}

function compararNumberos(a,b) {
	return a - b;
}

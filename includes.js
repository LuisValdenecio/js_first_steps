/*
    Escreva uma função chamada includes que recebe uma colecção (pode ser um vector ou uma string),
    um valor e um índice (opcional), o índice determina o início da procura pelo valor.

    A função deve retornar 'true' se o valor existe na colecção quando procuramos desde o íncio do vector
    ou desde o índice fornecido no argumento. Ou 'false' caso o valor não existe na colecção.

    Examplos:

    includes([1, 2, 3], 1) // true
    includes([1, 2, 3], 1, 2) // false
    includes([1, 2, 3], 6) // false

    includes('abcd', 'b') // true
    includes('abcd', 'e') // false
    includes('abcd', 'a', 2) // false
*/
function includes(collection, value, indx){
    if (!indx) indx = 0;
    
    for (let i = indx; i < collection.length; i++) {
        if (collection[i] == value) {
            return true;
        }
    } return false;
}
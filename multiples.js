/*
    Implemente uma função chamada multiples que recebe dois números como argumento: x e n.
    A função deve retornar um vector contendo os múltiplos de x. (sendo que o número de elementos do vector de retorno
        deve ser igual a n) 

    Examplos:

    multiples(3, 4) // [3, 6, 9, 12]
    multiples(2, 5) // [2, 4, 6, 8, 10]
*/
function multiples(x,n){
    let arr = [], multplyIncrement = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = x + multplyIncrement;
        multplyIncrement += x;
    }
    return arr;
}
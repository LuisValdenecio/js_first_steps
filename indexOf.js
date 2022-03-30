/*
    Escreva uma função chamada indexOf, que recebe um vector (ou array) como argumento e um número.
    A função deve retornar o índice do valor na primeira vez que for encontrado 
    (isto vale, caso o vector contenha valores duplicados) ou -1 se o valor não existir no vector:

    **NÃO USE o método pré-definido indexOf() dos vectores**

    Examplos:

    let arr = [5, 10, 15, 20];
    indexOf(arr, 20); // 3

    let arr2 = [1, 2, 3, 4, 5];
    indexOf(arr2, 2); // 1

    let arr3 = [1, 2];
    indexOf(arr3, 10); // -1

*/
function indexOf(ar, num){
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == num) {
            return i;
        }
    }
    return -1;
}
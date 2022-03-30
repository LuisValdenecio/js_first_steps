/*

    Escreva uma função chamada min, que aceita um vector de números como argumento e retorna o menor dos elementos.

    Examplos:

    min([5, 1, 4, 7, 1, 2]); // 1
    min([-1, 6, 3, 2.2, -10, -4]); // -10

*/
function min(arr){
    let biggest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (biggest > arr[i]) {
            biggest = arr[i];
        }
    }
    return biggest;
}

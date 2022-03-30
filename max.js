/*
    Escreva uma função chamada max, que recebe um vector de números como argumento e retorna o maior.

    Examplos:

    max([5, 1, 4, 7, 1, 2]); // 7
    max([3, 4, 12, 1, 8]); // 12
    max([-1, 6, 3, 2.2, -10, -4]); // 6
*/
function max(arr){
    let biggest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (biggest < arr[i]) {
            biggest = arr[i];
        }
    }
    return biggest;
}
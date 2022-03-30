/*
    Escreva uma função chamada lastIndexOf, que recebe como argumento um vector de números (ou array) e um número.
    A função deve retornar o último índice do valor, caso exista ou retornar -1 se o valor não for encontrado.

    Não use o método pré-definido dos vectores lastIndexOf()

    Examplos:

    lastIndexOf([1, 2, 3, 4], 2); // 1
    lastIndexOf([1, 2, 3, 4, 2], 2); // 4
    lastIndexOf([1, 2, 3, 4], 22); // -1

*/
function lastIndexOf(arr, numb){
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] == numb) {
            return i;
        }
    }
    return -1;
}
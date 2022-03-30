/*
    Escreva uma função chamada slice, que recebe um vector e dois números como argumento 
    (a e b - sendo que a e b, são elementos do vector).

    A função deve retornar um novo vector com os elementos iniciando no índice do segundo argumento (a) e 
    parando no índice do segundo elemento (b).
    
    Se o terceiro parámetro não for indicado, a função deve selecionar todos os elementos desde o índice de (a)
    até ao último elemento do vector.

    Se o terceiro parámetro for maior que o tamanho do vector, a função deve selecionar todos os elementos 
    desde o índice de (a) até ao último elemento do vector.

    **Não use o método pré-definido dos vectores slice**

    Examplos:

    slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
    slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
    slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
    slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]

*/
function slice(arr, num1, num2){
    if (!num2 || num2 > arr.length) num2 = arr.length;
    let newArray = [];
    for (let i = num1; i < num2; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}
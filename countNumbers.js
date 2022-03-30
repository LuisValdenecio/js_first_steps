/*
    Escreva uma função chamada countNumbers, que aceita um vector (ou array) de strings como argumento. 
    A função deve retornar a contagem do número de strings no vector que podem ser convertidas em número.
    Por exemplo, a string "1" pode ser convertida em número, por outro lado, a string "hello" não pode ser 
    convertida.
*/
function countNumbers(arr){
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i]) && arr[i] != 0 && (arr[i] != NaN)) {
            count.push(arr[i]);
        } else if (arr[i] == "0") {
            count.push(arr[i]);
        }
    }
    return count.length;
}
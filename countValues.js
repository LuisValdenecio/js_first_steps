/*
    Escreva uma função chamada countValues que recebe um vector (array) e um número, e retorna o número de vezes
    que o valor (segundo argumento) aparece no vector.

    Examplos:

    countValues([4,1,4,2,3,4,4], 4) // 4
    countValues([4,1,4,2,3,4,4], 100) // 0
    countValues([], 1) // 0

 */
function countValues(arr, numb){
    let numberOfTimes = 0;
    for (let num of arr) {
        if (num == numb) {
            numberOfTimes++;
        }
    }
    return numberOfTimes;
}
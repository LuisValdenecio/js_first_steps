/*
    
    Escreva uma função chamada squareEvenNumbers que recebe um vector de números e retorna a soma 
    dos números pares ao quadrado.

    Examplos:

    squareEvenNumbers([1, 2, 3, 4, 5]); // 20
    squareEvenNumbers([1, 3, 5, 7]); // 0
    squareEvenNumbers([5, 6, 7]); // 36

*/

function squareEvenNumbers(arr){
    let sum = 0;
    for (let numb of arr) {
        if (numb % 2 === 0) {
            sum += numb*numb;
        }
    }
    return sum;
}
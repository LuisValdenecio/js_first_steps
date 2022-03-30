/*
    Escreva uma função chamada twoHighest que recebe um vector de números como argumento e retorna os dois maiores
    números do vector.

    O valor retornado deve ser um outro vector no seguinte formato : [segundoMaiorValor, maiorValor]

    A ordem dos elementos do vector dos números é aleatória.

    ** Não use o método pré-definido sort() dos vectores **

    Examplos:

    twoHighest([1, 2, 10, 8]); // [8, 10]
    twoHighest([6, 1, 9, 10, 4]); // [9,10]
    twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
    twoHighest([1, 2, 2]) // [2, 2];
*/

function twoHighest(originalArray){

   let arr = originalArray;
   let highest = arr[0];
   let newArray = [];
   
   // find the highest
   for (let i = 0; i < arr.length; i++) {
       if (highest < arr[i]) {
           highest = arr[i];
       }
   }

   newArray[1] = highest;

   // eliminate the highest from the arr
   arr.splice(arr.indexOf(highest), 1);

   let secondHighest = arr[0];

    // find the highest
    for (let i = 0; i < arr.length; i++) {
        if (secondHighest < arr[i]) {
            secondHighest = arr[i];
        }
    }
 
    newArray[0] = secondHighest;

    return newArray;
}
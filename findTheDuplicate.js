/*
    Escreva uma função chamada findTheDuplicate que recebe como argumento um vector de números. 
    O vector deve ter pelo menos um valor duplicado (sendo que todos os outros devem ser valores únicos), ou 
    conter somente valores únicos. A função deve retornar o número duplicado ou 
    retornar undefined se não houver qualquer valor duplicado.

    Examplos:

    findTheDuplicate([1,2,1,4,3,12]) // 1
    findTheDuplicate([6,1,9,5,3,4,9]) // 9
    findTheDuplicate([2,1,3,4]) // undefined
*/
function findTheDuplicate(arr){
    let duplicate = [];

    for (let i = 0; i < arr.length; i++) {
        if (duplicate.indexOf(arr[i]) !== -1) {
            return arr[i];
        } else {
            duplicate.push(arr[i]);
        }
    }
    return undefined;
}
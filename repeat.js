/*
    Escreva uma função chamada repeat, que aceita uma string e um número e retorna uma nova string.
    Sendo que a nova string é a string do argumento da função repetida tantas vezes quanto o segundo argumento 
    da função determinar.

    Examplos:

    repeat('Matt', 3) // 'MattMattMatt'
    repeat('Elie', 2) // 'ElieElie'
    repeat('Michael', 0) // ''

*/

function repeat(string,number){
    let newString = '';
    for (let i = 0; i < number; i++) {
        newString += string;
    }
    return newString;
}
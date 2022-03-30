/*
    Escreve uma função chamada stringIncludes, que recebe duas strings como argumento: A primeira string é uma
    palavra e a segunda string é um único carácter.

    A função deve retornar 'true' se a primeira string incluí o carácter do segundo argumento, ou 'false' se não
    conter.

    Examplos:

    stringIncludes('awesome', 'e'); // true
    stringIncludes('awesome', 'z'); // false
*/

function stringIncludes(string, letter){
    if (string.indexOf(letter) !== -1) {
        return true;
    } return false;
}
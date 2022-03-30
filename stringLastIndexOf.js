/*
    Escreve uma função chamada stringIndexOf, que recebe duas strings como argumento: a primeira string é uma palavra
    e a segunda é um único carácter.

    A função deve retornar o último índice do carácter na palavra se existir ou -1 se o carácter não for encontrado
    na palavra.

    **Não uses o método pré-definido indexOf() das strings.**

    Examplos:

    stringLastIndexOf('awesome', 'e'); // 6
    stringLastIndexOf('awesome', 'z'); // -1
*/

function stringLastIndexOf(string,letter){
    for (let i = string.length; i > 0; i--) {
        if (string[i] == letter) {
            return i;
        }
    } return -1;
}
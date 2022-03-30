/*
    Escreve uma função chamada stringIndexOf, que recebe duas strings como argumento: a primeira string é uma palavra
    e a segunda é um único carácter.

    A função deve retornar o primeiro índice do carácter na palavra se existir ou -1 se o carácter não for encontrado
    na palavra.

    **Não uses o método pré-definido indexOf() das strings**

    Examplos:

    stringIndexOf('awesome', 'e') // 2
    stringIndexOf('awesome', 'z') // -1
*/

function stringIndexOf(string, letter){
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            return i;
        }
    }
    return -1;  
}
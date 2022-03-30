/*
    Escreva uma função chamada charAt que aceita uma string e um índice (número) e retorna o carácter na posição do índice 
    fornecido. A função deve retornar uma string vazia se o índice for maior que o número de elementos na string.

    **Não use a função pré-definida charAt dos tipos de dados string**
*/
function charAt(string, indx){
    if (indx > string.length) return "";
    return string[indx];
}
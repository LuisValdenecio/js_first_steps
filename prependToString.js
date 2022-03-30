/*
    Escreva uma função chamada prependToString que recebe duas strings como argumento.
    A função deve retornar uma nova string que concatena a segunda string com a primeira.

    Examplos:

    ```js
    prependToString('awesome', 'very') // 'veryawesome'
    prependToString('world', 'hello ') // 'hello world'
    prependToString('nothing', '') // 'nothing'

*/
function prependToString(string1, string2){
    return string2+string1;
}
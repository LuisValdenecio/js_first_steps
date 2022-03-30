/*
    Escreve uma função chamada removeVowels que aceita como argumento uma string e retorna a string com 
    todas as vogais removidas.

    Examplos:

    removeVowels("Hello!"); // "Hll!"
    removeVowels("Tomatoes"); // "Tmts"
    removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
    removeVowels("aeiou"); // ""
    removeVowels("why try, shy fly?"); // "why try, shy fly?"
*/

function removeVowels(str){
    let vowels = ['a','e','i','o','u'];
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i].toLowerCase()) === -1) {
            newString += str[i];
        }
    }
    return newString;
}
/*
    Crie uma função chamada isAlt que recebe uma string como argumento e determina se as vogais (a,e,i,o,u) 
    e as consoantes estão em ordem alternada.

    OBS: A string (argumento da função) deve ter pelo menos dois caractéres.

    Exemplos:

    isAlt("amazon") // true
    isAlt("apple") // false
    isAlt("banana") // true
*/
function isAlt(str){
    let vowels = ['a','e','i','o','u'];
    let isAVowel = vowels.indexOf(str[0]) != -1;

    for (let i = 1; i < str.length; i++) {
        if (isAVowel) {
           if (vowels.indexOf(str[i]) != -1) return false;
           isAVowel = false;
        } else {
            if (vowels.indexOf(str[i]) == -1) return false;
            isAVowel = true;
        }
    }

    return true;
}
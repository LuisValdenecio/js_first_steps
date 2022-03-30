/*

    Escreva uma função chamada totalCaps, que recebe um vector de strings como argumento e retorna o total de 
    todos os caractéres maiúsculos das strings do vector.  
    
    ***Não converta o vector em uma string.***

    Examplos:

    totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
    totalCaps(["Elie", "Matt", "Tim"]) // 3
    totalCaps(["hello", "world"]) // 0
*/

function totalCaps(arrayOfStrings){
    let totalCaps = 0;

    for (let i = 0; i < arrayOfStrings.length;  i++) {
        for (let char of arrayOfStrings[i]) {
            if (char.toUpperCase() == char) {
                totalCaps++;
            }
        }        
    }

    return totalCaps;
}
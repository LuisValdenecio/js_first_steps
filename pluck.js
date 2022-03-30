/*
    Escreva uma função chamada pluck, que recebe um vector de objectos como argumento e o nome de uma chave.
    A função deve retornar um vector contendo os valores associado com a chave do argumento.

    Examplos:

    pluck([
    { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
    'name'
    )
    // ["Tim", "Matt", "Elie"]

    pluck(
    [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
    'isBoatOwner'
    )
    // [true, false, undefined]
*/
function pluck(obj, key){
    let arr = [];
   
    for (let i = 0; i < obj.length; i++) {
       if (key in obj[i]) {
           arr[i] = obj[i][key];
       } else {
           arr[i] = undefined;
       }
    }

    return arr;
}
/*
    Escreva uma função chamada values, que recebe um objecto como argumento e retorna um vector de todos os valores do objecto.
    
    **Não use o método pré-definido values() dos objectos**

    Examplos:

    let obj = { a: 1, b: 2, c: 3 };
    values(obj); // [1,2,3]

    let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
    values(obj2); // ["Matt", "Lane", true]

    let obj3 = {};
    values(obj3); // []
*/

function values(obj){
    let values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}
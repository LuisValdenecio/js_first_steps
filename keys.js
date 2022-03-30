/*
    Escreva uma função chamada keys, que recebe como argumento um objecto e retorna um vector contendo as chaves
    do objecto.  

    **Não use Object.keys() para este exercício**

    Examplos:

    let obj = { a: 1, b: 2, c: 3 };
    keys(obj); // ["a", "b", "c"]

    let obj2 = { first: 'Matt', last: 'Lane' };
    keys(obj2); // ["first", "last"]

    let obj3 = {};
    keys(obj3); // []
*/
function keys(obj){
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
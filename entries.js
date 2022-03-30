/*
    Escreva uma função chamada entries, que recebe um objecto como argumento e retorna um vector de duas dimensões.
    Cada subvector representa um objecto. Por exemplo : {nome : 'António'} passa a ser ["nome","António"].

    Examplos:

    let obj = { a: 1, b: 2, c: 3 };
    entries(obj);
    // [["a",1], ["b",2], ["c",3]]

    let obj2 = { nome: 'Luís', sobrenome: 'Tchitue', temUmGato: false };
    entries(obj2);
    // [["nome","Luís"], ["sobrenome","Tchitue"], ["temUmGato",false]]

    let obj3 = {};
    entries(obj3); // []

*/
function entries(obj){
    let arr = [];
    for (let key in obj) {
        arr.push([key,obj[key]]);
    }
    return arr;
}
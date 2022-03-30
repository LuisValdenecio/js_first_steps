/*
    
    Cães não são simpáticos com gatos e gatos não são simpáticos com cães.

    Mas existe algo que os dois igualmente detestam: água (duches).
    
    Dado um vector de 'dogs', 'cats' e 'water', escreva uma função chamada separate, que retorna um novo vector
    de formas a separar 'dogs' (cães) dos 'cats' (gatos) pela 'water' (água).

    **Faça questão de os gatos sempre serem os primeiros no vector***

    Podemos assumir que o vector deverá sempre pelo menos ter três elementos. E que sempre haverá pelo menos
    um 'dog', um 'cat' e uma 'water' com os quais poderemos trabalhar. 

    **Examplos:**

    separate(['dog','cat','water']) // ['cat','water','dog']

    separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])

    separate(['cat','cat','water','dog','water','cat','water','dog'])

    // ['cat','cat','cat','water','water','water','dog','dog']

*/

function separate(dcw){
    let cats = [], dogs = [], water = [];

    for (let i = 0; i < dcw.length; i++) {
        if (dcw[i] == 'cat') {
            cats.push(dcw[i]);
        } else if (dcw[i] == 'water') {
            water.push(dcw[i]);
        } else {
            dogs.push(dcw[i]);
        }
    }

    let finalArray = cats.concat(water).concat(dogs);

    return finalArray;
}
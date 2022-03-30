/*
    Escreva uma função chamada removeFromString que recebe uma string como argumento, e um índice inicial (um número)
    e um número de caractéres para remover.
    
    A função deve retornar uma nova string com os caractéres removidos.

    Examplos:

    ```js
    removeFromString('Elie', 2, 2) // 'El'
    removeFromString('Elie', 0, 1) // 'lie'
    removeFromString('Rithm School', 0, 6) // 'School'
    removeFromString('Rithm School', 2, 4) // 'RiSchool'
    removeFromString('Rithm School', 6, 400) // 'Rithm '
*/

function removeFromString(string,indx,numb){
    let newName = string.split("");
    newName.splice(indx,numb);
    return newName.join("");
}
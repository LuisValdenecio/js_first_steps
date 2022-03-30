/*
    Escreve uma função chamada stringFromObject que retorna uma string através do par de chave/valor de um objecto.
    
    O formato deve ser "chave = valor, chave = valor".

    Cada par de chave/valor deve ser separado de uma vírgula e espaço excepto o último par.

    Examplos:

    stringFromObject({ a: 1, b: '2' });
    // "a = 1, b = 2"

    stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
    // "name = Elie, job = Instructor, isCatOwner = false"

    stringFromObject({}); // ""
*/

function stringFromObject(obj){
    let generatedString = [];
    for (let ky in obj) {
        generatedString.push(`${ky} = ${obj[ky]}`);
    }

    return generatedString.join(", ");
}
/* function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto); */

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
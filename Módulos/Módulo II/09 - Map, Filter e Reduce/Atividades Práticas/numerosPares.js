/* tentativa sozinho
const numeros = [8, 1, 5, 2, 9, 7, 12, 0, 14];

numeros.filter((numeros) => numeros.valueOf(frutas%0));

console.log(numeros.filter((numeros) => numeros.valueOf(frutas%0))); */

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));
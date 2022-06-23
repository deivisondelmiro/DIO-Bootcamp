/* function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numeroPositivo(2));

console.log(numeroPositivo(-9)); */

/* function numeroPositivo(num) {
    let resultado;

    const ehNegativo = num < 0;

    if (ehNegativo) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

console.log(numeroPositivo(2));

console.log(numeroPositivo(-9)) */

/* function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if (ehNegativo) {
        return false;
    }

    return true;
}

console.log(numeroPositivo(2));

console.log(numeroPositivo(-9)) */

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse número é positivo!";
}

console.log(numeroPositivo(2));

console.log(numeroPositivo(-10));

console.log(numeroPositivo("2"));

console.log(numeroPositivo(11));

console.log(numeroPositivo(21));
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar: any = document.getElementById('atualizar-saldo');
let botaoLimpar: any = document.getElementById('limpar-saldo');
let soma: any = document.getElementById('soma');
let campoSaldo: any = document.getElementById('campo-saldo') as HTMLInputElement;

campoSaldo.innerHTML = 0

function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
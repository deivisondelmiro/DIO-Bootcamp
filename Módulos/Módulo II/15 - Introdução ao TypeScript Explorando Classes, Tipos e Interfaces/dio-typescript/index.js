"use strict";
// types
// interfaces
exports.__esModule = true;
exports.numero = void 0;
/*
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}
*/
/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})
*/
// Generic types
/* function adicionaApendiceALista<NaoSei>(array: NaoSei[], valor: NaoSei) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 'd'); */
/* interface IUsuario {
    id: string,
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        // redirecionar para a área de administração
    }

    // redirecionar para a área de usuário
}
*/
/*
interface IUsuario {
    id: string,
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirecionar para a área de usuário
}
*/
/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [k in keyof Cachorro]-?: Cachorro[k];
}

class MeuCachorro implements Cachorro {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;

console.log(cao);
*/
/*
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();
*/
exports.numero = 2;

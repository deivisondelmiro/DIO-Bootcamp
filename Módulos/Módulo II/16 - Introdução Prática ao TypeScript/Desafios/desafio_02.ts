/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

enum Profissao {
    Atriz,
    Padeiro,
}

interface dadosDaPessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

const pessoa1: dadosDaPessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz,
}

const pessoa2: dadosDaPessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro,
}

const pessoa3: dadosDaPessoa = {
    nome: 'laura',
    idade: 32,
    profissao: Profissao.Atriz,
}

const pessoa4: dadosDaPessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro,
}
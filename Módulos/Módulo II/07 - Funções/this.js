/* const pessoa = {
    firstName: "André",
    lastName : "Soares",
    id       : 1,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName());

console.log(pessoa.getId()); */

// Fora da função
// console.log(this);

// Dentro de um função
/* (function () {
    console.log(this)
}()); */

// Dentro de um objeto (método)
/* const pessoa = {
    firstName: 'Diego',
    lastName: 'Vieira',
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

pessoa.getFullName(); */

// Valores
/* const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);

getSomething.call(animal); */


/* const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5); */

// Apply
/* const pessoa = {
    nome: 'Miguel',
};

const animal = {
    nome: 'Godi',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.apply(pessoa);

getSomething.apply(animal); */

/* const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]); */

// Bind
const retornaNomes = function() {
    return this.name;
};

let bruno = retornaNomes.bind({ nome: 'Bruno' });

bruno();
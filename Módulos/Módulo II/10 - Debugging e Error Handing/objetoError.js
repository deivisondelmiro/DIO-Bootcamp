/* const MeuErro = new Error('Mensagem Inválida');

throw MeuErro;

console.log(MeuErro); */

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

console.log(MeuErro);
import leia from 'readline-sync'
export default function atividade04() {


let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
let tamanhoSenha = leia.questionInt('Qual o tamanho da senha que vc quer? ');

let senha = '';

    for (let i = 0; i < tamanhoSenha; i++) {
  senha += char[Math.floor(Math.random() * char.length)];
}

console.log(senha);

    
}
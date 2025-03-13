import leia from 'readline-sync';

export default function atividade03(){
let numeros: number[] = [];
let medida: number;
let soma: number = 0;
let maiorValor: number = Number.MIN_VALUE;
let menorValor: number = Number.MAX_VALUE;

let quantidade = 0;
let continuar = true;

do {
  let numeroInserido = leia.questionInt("Digite um número que seja diferente de 0:");

  if (numeroInserido !== 0) {
    quantidade++;
    numeros.push(numeroInserido);
  }

  if (numeroInserido === 0) {
    continuar = false;
  }

  if (numeroInserido > maiorValor) {
    maiorValor = numeroInserido;
  }

  if (numeroInserido < menorValor) {
    menorValor = numeroInserido;
  }

  soma += numeroInserido;

} while (continuar);

medida = soma / quantidade;

console.log(`Média numeros inseridos${medida.toFixed(2)}`);
console.log(`Números digitados: ${quantidade}, soma deles irá dar: ${soma}`);
console.log(`Números inseridos: ${numeros}`);

}
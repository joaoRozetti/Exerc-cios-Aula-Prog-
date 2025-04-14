let teclado = require("readline-sync");


let valor: number = parseInt(teclado.question("Digite o valor do saque: "));

console.log("Dinheiro retirado: ");

let nota200: number = Math.floor(valor/200);
valor = valor%200;

let nota100: number = Math.floor(valor/100);
valor = valor%100;

let nota50: number = Math.floor(valor/50);
valor = valor%50;

let nota20: number = Math.floor(valor/20);
valor = valor%20;

let nota10: number = Math.floor(valor/10);
valor = valor%10;

let nota5: number = Math .floor(valor/5);
valor = valor%5;

let nota2: number = Math.floor(valor/2);
valor = valor%2;

let moeda1: number = valor;

console.log(nota200 + "Notas de R$ 200 ");
console.log(nota100 + "Notas de R$ 100");
console.log(nota50 + " nota(s) de R$ 50");
console.log(nota20 + " nota(s) de R$ 20");
console.log(nota10 + " nota(s) de R$ 10");
console.log(nota5 + " nota(s) de R$ 5");
console.log(nota2 + " nota(s) de R$ 2");
console.log(moeda1 + " moeda(s) de R$ 1");
let teclado = require("readline-sync");

// Lê o valor do saque com centavos
let valor: number = parseFloat(teclado.question("Digite o valor do saque: "));
valor = parseFloat(valor.toFixed(2)); // Garante 2 casas decimais

// Converte o valor total para centavos (evita erro de ponto flutuante)
let centavos: number = Math.round(valor * 100);

console.log("Dinheiro retirado:");

let nota100: number = Math.floor(centavos / 10000);
centavos = centavos % 10000;

let nota50: number = Math.floor(centavos / 5000);
centavos = centavos % 5000;

let nota20: number = Math.floor(centavos / 2000);
centavos = centavos % 2000;

let nota10: number = Math.floor(centavos / 1000);
centavos = centavos % 1000;

let nota5: number = Math.floor(centavos / 500);
centavos = centavos % 500;

let nota2: number = Math.floor(centavos / 200);
centavos = centavos % 200;

let moeda1: number = Math.floor(centavos / 100);
centavos = centavos % 100;

let moeda050: number = Math.floor(centavos / 50);
centavos = centavos % 50;

let moeda025: number = Math.floor(centavos / 25);
centavos = centavos % 25;

let moeda010: number = Math.floor(centavos / 10);
centavos = centavos % 10;

let moeda005: number = Math.floor(centavos / 5);
centavos = centavos % 5;

let moeda001: number = centavos;

console.log(nota100 + " nota(s) de R$ 100");
console.log(nota50 + " nota(s) de R$ 50");
console.log(nota20 + " nota(s) de R$ 20");
console.log(nota10 + " nota(s) de R$ 10");
console.log(nota5 + " nota(s) de R$ 5");
console.log(nota2 + " nota(s) de R$ 2");
console.log(moeda1 + " moeda(s) de R$ 1");
console.log(moeda050 + " moeda(s) de R$ 0.50");
console.log(moeda025 + " moeda(s) de R$ 0.25");
console.log(moeda010 + " moeda(s) de R$ 0.10");
console.log(moeda005 + " moeda(s) de R$ 0.05");
console.log(moeda001 + " moeda(s) de R$ 0.01");

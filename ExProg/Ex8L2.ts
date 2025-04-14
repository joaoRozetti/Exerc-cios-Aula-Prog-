let teclado = require("readline-sync");

let valorInvestido: number = parseFloat(teclado.question("Digite o valor investido: R$ "));
let taxaJuros: number = parseFloat(teclado.question("Digite a taxa de juros mensal (em %): "));
let meses: number = parseInt(teclado.question("Digite a quantidade de meses: "));

let taxaDecimal: number = taxaJuros / 100;

let montante: number = valorInvestido * Math.pow(1 + taxaDecimal, meses);

console.log("Montante após " + meses + " meses: R$ " + montante.toFixed(2));

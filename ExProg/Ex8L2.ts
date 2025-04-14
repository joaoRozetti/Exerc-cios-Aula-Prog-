let teclado = require("readline-sync");

// Entrada dos dados
let valorInvestido: number = parseFloat(teclado.question("Digite o valor investido: R$ "));
let taxaJuros: number = parseFloat(teclado.question("Digite a taxa de juros mensal (em %): "));
let meses: number = parseInt(teclado.question("Digite a quantidade de meses: "));

// Conversão da taxa para decimal
let taxaDecimal: number = taxaJuros / 100;

// Cálculo do montante com juros compostos
let montante: number = valorInvestido * Math.pow(1 + taxaDecimal, meses);

// Exibição do resultado com duas casas decimais
console.log("Montante após " + meses + " meses: R$ " + montante.toFixed(2));

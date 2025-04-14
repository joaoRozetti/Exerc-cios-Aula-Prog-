let teclado = require("readline-sync");

// Entrada da altura e da base
let altura: number = parseFloat(teclado.question("Digite a altura do prédio (em metros): "));
let afastamento: number = parseFloat(teclado.question("Digite a distância da escada até o prédio (em metros): "));

// Cálculo da hipotenusa (comprimento da escada)
let escada: number = Math.sqrt(Math.pow(altura, 2) + Math.pow(afastamento, 2));

// Exibir o resultado
console.log("Comprimento mínimo da escada: " + escada.toFixed(2) + " metros");

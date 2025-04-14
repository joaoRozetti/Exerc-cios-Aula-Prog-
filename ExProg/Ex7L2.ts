let teclado = require("readline-sync");

let altura: number = parseFloat(teclado.question("Digite a altura do prédio (em metros): "));
let afastamento: number = parseFloat(teclado.question("Digite a distância da escada até o prédio (em metros): "));

let escada: number = Math.sqrt(Math.pow(altura, 2) + Math.pow(afastamento, 2));

console.log("Comprimento mínimo da escada: " + escada.toFixed(2) + " metros");

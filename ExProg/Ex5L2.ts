let teclado = require("readline-sync");

let altura: number = parseFloat(teclado.question("Digite a altura da piscina (em metros): "));
let raio: number = parseFloat(teclado.question("Digite o raio da piscina (em metros): "));

let volumeM3: number = Math.PI * Math.pow(raio, 2) * altura;

let volumeLitros: number = volumeM3 * 1000;

let litrosArredondado: number = Math.ceil(volumeLitros);

console.log("Quantidade de água necessária: " + litrosArredondado + " litros");

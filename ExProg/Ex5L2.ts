let teclado = require("readline-sync");

// Entrada dos dados
let altura: number = parseFloat(teclado.question("Digite a altura da piscina (em metros): "));
let raio: number = parseFloat(teclado.question("Digite o raio da piscina (em metros): "));

// Cálculo do volume (em m³)
let volumeM3: number = Math.PI * Math.pow(raio, 2) * altura;

// Conversão para litros (1 m³ = 1000 litros)
let volumeLitros: number = volumeM3 * 1000;

// Arredondar para cima
let litrosArredondado: number = Math.ceil(volumeLitros);

// Exibir resultado
console.log("Quantidade de água necessária: " + litrosArredondado + " litros");

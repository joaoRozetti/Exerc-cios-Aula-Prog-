let teclado = require("readline-sync");

let pontuacoes: number[] = [];

for (let i = 1; i <= 5; i++) {
    let pontos: number = parseInt(teclado.question("Digite a pontuação do finalista " + i + ": "));
    pontuacoes.push(pontos);
}

let maior: number = pontuacoes[0];
let menor: number = pontuacoes[0];

for (let i = 1; i < pontuacoes.length; i++) {
    if (pontuacoes[i] > maior) {
        maior = pontuacoes[i];
    }
    if (pontuacoes[i] < menor) {
        menor = pontuacoes[i];
    }
}

console.log("Pontuação do primeiro colocado: " + maior);
console.log("Pontuação do último colocado: " + menor);

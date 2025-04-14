let teclado = require("readline-sync");

let distancia = teclado.questionFloat("Digite a distância em quilômetros: ");
let tempo = teclado.questionFloat("Digite o tempo em horas: ");

if (tempo === 0) {
  console.log("O tempo não pode ser zero. Divisão por zero não é permitida.");
} else {
  let velocidadeMedia = distancia / tempo;
  console.log(`A velocidade média é: ${velocidadeMedia} km/h`);
}

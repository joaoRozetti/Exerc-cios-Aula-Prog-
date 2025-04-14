let teclado = require("readline-sync");

// Lê o ângulo em graus
let anguloGraus: number = parseFloat(teclado.question("Digite um ângulo em graus: "));

// (a) Ângulo menor que 360°
let anguloMenor360: number = anguloGraus % 360;
if (anguloMenor360 < 0) {
    anguloMenor360 += 360; // Garante valor positivo entre 0 e 360
}
console.log("Ângulo correspondente menor que 360°: " + anguloMenor360.toFixed(2) + "°");

// (b) Converter para radianos
let anguloRadianos: number = anguloMenor360 * (Math.PI / 180);
console.log("Ângulo em radianos: " + anguloRadianos.toFixed(4));

// (c) Seno, cosseno e tangente
let seno: number = Math.sin(anguloRadianos);
let cosseno: number = Math.cos(anguloRadianos);
let tangente: number = Math.tan(anguloRadianos);

console.log("Seno: " + seno.toFixed(4));
console.log("Cosseno: " + cosseno.toFixed(4));
console.log("Tangente: " + tangente.toFixed(4));

let teclado = require("readline-sync");

let anguloGraus: number = parseFloat(teclado.question("Digite um ângulo em graus: "));

let anguloMenor360: number = anguloGraus % 360;
if (anguloMenor360 < 0) {
    anguloMenor360 += 360; 
}
console.log("Ângulo correspondente menor que 360°: " + anguloMenor360.toFixed(2) + "°");

let anguloRadianos: number = anguloMenor360 * (Math.PI / 180);
console.log("Ângulo em radianos: " + anguloRadianos.toFixed(4));

let seno: number = Math.sin(anguloRadianos);
let cosseno: number = Math.cos(anguloRadianos);
let tangente: number = Math.tan(anguloRadianos);

console.log("Seno: " + seno.toFixed(4));
console.log("Cosseno: " + cosseno.toFixed(4));
console.log("Tangente: " + tangente.toFixed(4));

let numeros: number[] = [3.1, 3.5, 3.9, -3.1, -3.5, -3.9];

for (let i = 0; i < numeros.length; i++) {
    let n = numeros[i];
    console.log("Número: " + n);
    console.log("  ceil:  " + Math.ceil(n));
    console.log("  floor: " + Math.floor(n));
    console.log("  round: " + Math.round(n));
    console.log("  trunc: " + Math.trunc(n));
    console.log("----------------------------");
}

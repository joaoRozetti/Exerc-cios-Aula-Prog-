let teclado = require("readline-sync")

let MlPorPessoa: number = 300;
let MlPorGarrafa: number = 2000;

let PessoasConfirmadas: number = 50;
let TotalMl: number = PessoasConfirmadas*MlPorPessoa;

let GarrafasNecessarias: number = Math.ceil(TotalMl/MlPorGarrafa);

console.log("Quantidade de garrafas necessarias: " + GarrafasNecessarias);





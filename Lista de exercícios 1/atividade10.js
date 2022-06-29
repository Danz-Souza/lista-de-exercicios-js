/* Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou. Considere que um fumante perde 10 minutos de vida a cada cigarro, calcule quantos dias de vida um fumante perderá. Exiba o total de dias. */

let cigarro = Number(prompt("Quantos cigarros por dia você fuma??"))
let anos = Number(prompt("Faz quantos anos que você fuma?"))

total = anos * 365 * cigarro
dias =  total / 144
alert("Você  perdeu "+dias.toFixed(0)+" dias da sua vida, por fumar")
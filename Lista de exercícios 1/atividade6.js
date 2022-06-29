/* Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem. */

let distancia = Number(prompt("Qual a distância em KM que você irá viajar?"))
let velocidade = Number(prompt("Qual velocidade média em km/h esperada para a viagem?"))
let tempo

tempo = distancia / velocidade
alert("O tempo para chegar ao local é: " + Math.ceil(tempo))



/* Escreva um programa que leia a quantidade de dias, horas, minutos e segundos do usuário. Calcule o total em segundos. */

let dia = Number(prompt("Digite o dia"))
let hora = Number(prompt("Digite a hora"))
let min = Number(prompt("Digite os minutos"))
let segundos = Number(prompt("Digite os segundos"))

let d = dia * 86400
let h = hora * 3600
let m = min * 60

total = d + h + m + segundos
alert(total)



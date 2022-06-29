/* Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$ 60,00 por dia e R$ 0,15 por km rodado. */

let km = Number(prompt("Digite quantos km você percorreu"))
let dias = Number(prompt("Digite por quantos dias você alugou o carro"))

k = km * 0.15
d = dias * 60
total = k + d
alert("O preço a pagar pela a quantidade de km percorrido e: "+k+" R$. \n O valor a pagar pelos os dias alugado do carro é: "+d+" R$. \n O total a ser pago é: "+total+" R$")
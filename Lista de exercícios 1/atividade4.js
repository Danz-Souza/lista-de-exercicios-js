/* Faça um programa que calcule o aumento de um salário. Ele deve solicitar o valor do salário e a porcentagem do aumento. Exiba o valor do aumento e do novo salário. */

let salario = Number(prompt("Digite o seu salário"))
let aumento = Number(prompt("Digite quantos porcento será o aumento"))

porcentagem = (salario / 100) * aumento
novoSalario = salario + porcentagem
alert("O aumento foi de: "+porcentagem+" e seu salário atual com a soma do aumento ficou: "+novoSalario)
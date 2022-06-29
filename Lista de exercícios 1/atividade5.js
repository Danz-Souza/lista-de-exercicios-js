/* Solicite o preço de uma mercadoria e o percentual de desconto. Exiba o valor do desconto e o preço a pagar. */

let preco = Number(prompt("Olá, digite o valor do produto"))
let desconto = Number(prompt("Digite a porcentagem da promoção do produto"))

precoDesconto = (preco / 100) * desconto
novoPreco = preco - precoDesconto
alert("O produto teve o desconto de: "+precoDesconto+" e o valor final do produto com o desconto foi: "+novoPreco)
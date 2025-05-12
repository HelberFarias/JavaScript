let valor;
valor = Number.parseFloat(prompt ("Qual o valor do produto?"));
let desconto = valor >= 100 ? valor * 0.10 : valor * 0.05;
let valorTotal = parseFloat(valor - desconto).toFixed(2);
console.log(`Valor final R$${valorTotal}`);
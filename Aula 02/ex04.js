let estoqueAtual;
let estoqueMenor;

estoqueAtual = Number(prompt("Valor atual do estoque: "))
estoqueMenor = Number(prompt("Quanto deseja remover? "))
estoqueTotal = estoqueAtual - estoqueMenor
console.log("Estoque atualizado:" + estoqueTotal)


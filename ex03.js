const pessoa = {
    nome: "Helber",
    idade: 23,
    cidade: "Maceio"
}

function explorarObjeto(pessoa, operacao) {
    if (operacao === "chaves") {
        console.log(Object.keys(pessoa))
    } else if (operacao === "valores") {
        console.log(Object.values(pessoa))
    } else if (operacao === "entradas") {
        console.log(Object.entries(pessoa))
    } else {
        console.log("Operação Invalida!")
    }
}

console.log(explorarObjeto(pessoa, "chaves"));
// Resultado esperado: ["nome", "idade", "cidade"]

console.log(explorarObjeto(pessoa, "valores"));
// Resultado esperado: ["Ana", 28, "Recife"]

console.log(explorarObjeto(pessoa, "entradas"));
// Resultado esperado: [["nome", "Ana"], ["idade", 28], ["cidade", "Recife"]]

console.log(explorarObjeto(pessoa, "teste"));
// Resultado esperado: "Operação inválida."

while (confirm("Verifique sua idade?")) {
    let idade = prompt ("Qual a sua idade? ")
    let nome = prompt ("Qual seu nome? ")

    verificarIdade(nome, idade)
}
function verificarIdade (nome, idade) {
    nome = nome || "Visitante!"

    if (idade < 0 || idade > 120) {
        alert("Idade Invalida!")
    }
        
    else if (idade >= 18) {
        console.log(`Olá, ${nome}! Você é de maior!`)

        
    }
    else{
        console.log(`Olá, ${nome}! Você é de menor!`)
    }
}



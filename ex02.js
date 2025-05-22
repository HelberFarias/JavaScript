const usuario = {
    nome: "helber",
    idade: 32,
    email: "gelberjunyo@gmail.com"
}
function atualizarIdade (usuario, idade) {
    usuario.idade = idade
}

atualizarIdade (usuario, 25)
console.log(usuario.idade) 


function criarUsuario (nome, idade, email) {
    this.nome = nome
    this.idade = idade
    this.email = email
}
const cadastro1 = new criarUsuario ("Helber", 32, "helberjunyo@gmail.com")
console.log(cadastro1)

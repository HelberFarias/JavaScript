for (let contador = 0; contador <= 100; contador++) {
    console.log(contador);
}

let qtdNumeros =Number.parseInt(prompt ("Quantos números: "))
let qtdPares = 0, qtdImpares = 0, soma = 0;
for (let contador = 0; contador < qtdNumeros; contador++) {
    let numero = Number.parseInt(prompt("Digite o número: "))

    if(numero % 2 == 0){
        qtdPares++;
    }
    else {
        qtdImpares++;
    }
    soma+=qtdNumeros

}

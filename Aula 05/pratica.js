/*const numeros = []; //vazio
numeros [0] = 1;
numeros [1] = 2;
numeros [2] = 3;
console.log(numeros);

const notas = [7.6, 4.5, 8.7];
console.log(notas);*/

const alunos = ["Helber", "Junyo", "Farias"]; 
/*alunos [3] = "Gomes"
console.log (alunos); 
alunos [6] = "Opa" // vai aparecer <2 empty> */

/*alunos.push("Marcos");
alunos.push("Fabio","Atta");*/ // adiciona sempre no final do array

//alunos.unshift("Marcos"); // adiciona sempre no inicio do array

//let ultimo = alunos.pop(); //remover o ultimo e retorna a variavel retirada
//console.log(ultimo);

//let primeiro = alunos.shift(); // remover o primeiro
//console.log(primeiro)

/*const numero = [10, 20, 30, 40, 50]
numero.forEach((value) => {
    if (value) <= 30 {
        console.log(value)
    }
})*/

const numeros = [1, 2, 3, 4, 5];

function dobra(numeros) {
    return numeros * 2;
}
const numerosDobrados = numeros.map(dobrar);
console.log(numeros)
console.log(numerosDobrados);




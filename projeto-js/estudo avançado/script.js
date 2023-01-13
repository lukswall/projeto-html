//Alguns codigo simples para trabalhar com vetor

let num = [8, 2, 9, 7, 1]

//buscar valor no vetor, retorna a posição/chave que o valor esta no vetor
// duas formas de utilização

//passando o valor para outra variavel e imprimindo
let pos = num.indexOf(2)
console.log(pos)

//passando o indexOf na hora da impressão
console.log(num.indexOf(7))

//num.sort()// coloca em ordem crescente
//num[5] = 4 // acrescenta um numero na posição indicada no array
//num.push(5)//acrescanta um numero no final do array

//console.log(num)

// os dois for abaixo faz a mesma coisa, porem o segundo utiliza o in
//for(let i = 0; i < num.length; i++){
    //console.log(num[i])
//}
// for in: usado mais quando usa variavel composta, significa que é dentro, para cada posição dentro do num, que é uma variavel composta imprima o valor
//for(let i in num){
//    console.log(num[i])
//}
var ano = 2023
var idade = 2023 - ano

console.log(`Sua idade é: ${idade} anos`)
if (ano == 2023 || ano == 2022) {
    console.log('Data invalida')
}
else if (idade < 11) {
    console.log('Criança')
} else if (idade > 12 || idade > 25){
    console.log('Jovem Masculino')
} else if (ano < 2005 || ano > 1992){
    console.log('Adulto Masculino')
} else {
    console.log('Mais velho')
}
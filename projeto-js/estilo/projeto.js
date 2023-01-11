var ano = 2007
var idade = 2023 - ano

console.log(`Sua idade é: ${idade} anos`)

if (ano > 2005 || ano < 2009) {
    console.log('Adolescente Masculino')
} else if (ano < 2005 || ano > 1992){
    console.log('Jovem Masculino')
} else if (ano < 2005 || ano > 1992){
    console.log('Adulto Masculino')
} else {
    console.log('Adulto Masculino')
}
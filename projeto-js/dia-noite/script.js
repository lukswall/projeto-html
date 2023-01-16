var agora = new Date
var horaAtual = agora.getHours()
var minuto = agora.getMinutes()
var horarioAgora = window.document.querySelector('div#horaCerta')

horarioAgora.innerText = ('Agora são ' + horaAtual +':'+ minuto)

if (horaAtual <= 11 ) 
{
    dia.style.display = 'block'
}
else if (horaAtual >= 12 && horaAtual <= 18 )
{
    tarde.style.display = 'block'
}
else 
{
    noite.style.display = 'block'
}

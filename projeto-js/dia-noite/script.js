var agora = new Date
var horaAtual = agora.getHours()
var minuto = agora.getMinutes()
var horarioAgora = window.document.querySelector('div#horaCerta')

horarioAgora.innerText = ('Agora são ' + horaAtual +':'+ minuto)

if (horaAtual <= 11 ) 
{
    dia.style.display = 'block'
    document.body.style.backgroundColor = "rgb(196, 227, 242)";
}
else if (horaAtual >= 12 && horaAtual <= 18 )
{
    tarde.style.display = 'block'
    document.body.style.backgroundColor = "#f4a16e";
}
else 
{
    noite.style.display = 'block'
    document.body.style.backgroundColor = "#0c3a56";
}
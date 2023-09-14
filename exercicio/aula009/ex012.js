var agora = new Date()
var hora = agora.getHours()
console.log(`Agara sao exatamente ${hora} horas.`)
if ( hora < 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}
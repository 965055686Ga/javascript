function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var geneno = ''
        if (fsex[0],checked) {
            geneno = 'Homem'
        } else if (fsex[1],checked) {
            geneno = 'Mulher'
        }
           res.innerHTML = `Detectamos ${geneno} com ${idade} anos.` 
    }
}
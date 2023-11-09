let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
if (Number(n) >= 1 && Number(n) <= 100) {
    return true
}else {
    return false
}
}

function inlista(n, l) {
    if (l.indexOF(Number(n)) != -1) {
        return true
    }else {
        return false
    }

}

function adicionar() {
    if (isnumero(num.value) && !islista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        iten.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    }else {
        window.alert('valor invalido ou ja encontrado na lista')
    }

} 
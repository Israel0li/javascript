function insert(num) {
    var numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num
}
function limpar() {
    document.getElementById('res').innerHTML = ""
}
function apagar() {
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)  
}
function calcular() {
    var res = document.getElementById('res').innerHTML
    if (res) {
        document.getElementById('res').innerHTML = eval(res)
    }
}
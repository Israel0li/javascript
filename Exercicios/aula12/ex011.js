var idade = 14
console.log(`Você tem ${idade} anos de idade.`)
if (idade <  16) {
    console.log('Você não pode votar')
} else if (idade < 18 || idade > 65) {
    console.log('Você pode vota (Opicional)')

} else if (idade >= 18) {
    console.log('Você tem que vota (Obrigatório)')
}
    
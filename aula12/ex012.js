var agora =  new Date()
var hora = agora.getHours()
console.log(`Agora sao extamente ${hora} horas.`)
if (hora >= 5 && hora <12 ) {
    console.log('Bom Dia!')
} else if (hora >= 13 && hora <18) {
    console.log('Boa Tarde!')
} else if (hora >= 19 && hora <23) {
    console.log('Boa Noite!')
} else if (hora >= 00 && hora <04) {
    console.log('Boa Madrugada!')
}
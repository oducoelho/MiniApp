let departuredateEntry = prompt('Digite a data de partida(formata DD/MM/YYYY')

let departureDate = moment(departuredateEntry, 'DD/MM/YYYY')

let today = moment()

let datedif = today - departureDate

let ChoseenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(ChoseenOption == '1') {
    let secondsOfDeparture = Math.round(datedif / 1000)
    alert(`Tempo de vôo: ${secondsOfDeparture} segundos`)
} else if(ChoseenOption == '2') {
    let minutesOfDeparture = Math.round(datedif / 1000 / 60)
    alert(`Tempo de vôo: ${minutesOfDeparture} minutos`)
} else if(ChoseenOption == '3') {
    let horasOfDeparture = Math.round(datedif / 1000 / 3600)
    alert(`Tempo de vôo: ${horasOfDeparture} horas`)
} else if(ChoseenOption =='4') {
    let diasOfDeparture = Math.round(datedif / 1000 / 3600 / 24)
    alert(`Tempo de vôo: ${diasOfDeparture} dias`)
} else {
    alert('[ERRO]Opção inválida!!')
}
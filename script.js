// 1. inizializzazione 

// sezione dati - dati che l'utente deve inserire
let km_run = prompt('type kilometers')
console.log(km_run)
let age = prompt('type your age')
console.log(age)

// sezione dati - costante prezzo per chilometro
const km_price = 0.21

// 2. elaborazione dei dati

// convertiamo i prompt in valori numerici per eseguire le operazioni
console.log(Number(km_run))
console.log(Number(age))

// calcoliamo il prezzo base (senza sconti applicati)
let full_price = km_price * km_run
console.log(full_price)

// 3. condizioni scontistiche

if (age < 18) {
    console.log(full_price * (1 - 20 / km_run))

} else if (age > 65) {
    console.log(full_price * (1 - 40 / km_run))

} else {
    console.log(full_price)

}







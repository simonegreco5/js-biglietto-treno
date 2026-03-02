// esercizio extra 1

// 1. inizializzazione 
// chiediamo ai due utenti il numeri di anni 

let age_marco = prompt('Marco type your age')
console.log(age_marco)

let age_davide = prompt('Davide type your age')
console.log(age_davide)

// 2. condizione 
// confrontiamo l'età degli utenti, per stabilire 
// quale utente è più grande.

if (age_marco == age_davide) {
    console.log('Marco e Davide hanno la stessa età')

} else if (age_marco > age_davide) {
    console.log('Marco è più grande di Davide')
    
} else {
    console.log('Davide è più grande di Marco')
} 

// esercizio extra 2

// 1. inizializzazione 
// chiediamo all'utente 'pari o dispari' e 'un numero tra 1 e 9'

let scelta_pari_dispari = prompt('scrivi pari o dispari')
console.log(scelta_pari_dispari);

let numero_utente = Number(prompt('scrivi un numero da 1 a 9'))
console.log(numero_utente)

// generiamo un numero casuale da 1 a 9 
let numero_computer = Math.floor(Math.random()* 9) + 1;
console.log(numero_computer)

// sommiamo i numeri scelti dall'utente con quelli generati dal computer
let somma_numeri = numero_utente + numero_computer
console.log(somma_numeri);

// 2. condizione 1
// verifichiamo se la somma dei numeri e pari o dispari e poi la comunichiamo
// denomianiamo la variabile risultato fuori dal block(if/else) condizionale cosi 
// da poter modifcare il valore (e richiamarla) anche all'interno block(if/else)
let risultato;

if (somma_numeri % 2 === 0) {
    risultato = 'pari'
} else {
    risultato = 'dispari'
}

// condizione 2 
// usiamo nuovamente (if/else) per confrontare 'risultato' con la scdlta iniziale 
// per stabilire se l'utente ha vinto o perso

if (risultato === scelta_pari_dispari) {
    console.log('HAI VINTO')
} else {
    console.log('hai perso')
}


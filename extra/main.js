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
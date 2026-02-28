Ciao Classe,
esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


PS. Non avendo tutoraggio domani l'esercizio assegnato qui sopra avrete modo di svolgerlo in classe sabato durante la prima parte di lezione, se invece avete tempo fatelo!

Buon divertimento e confermate lettura come al solito! :babyyoda:


<!--  

Dati 

- costo al km = 0,21
- se (under) <18 -> sconto del 20%
- se (over)  >65 -> sconto del 40%
___________________________________

es. (100 km)

- costo = 21
- se (under) <18 = 16.80
- se (over)  >65 = 12.60
___________________________________

 -->


Chiedere al passeggero:
- (let) quanti chilometri dovrà percorrere
<!-- let km_run = valore -->
- (let) quanti anni ha
<!-- let age = valore -->

- (const) prezzo per km = 0.21
<!-- const km_price = 0.21 -->
- (let) prezzo tot = prezzo per km * quanti chilometri dovrà percorrere
<!-- let full_price = km_price * km_run 
     console.log(full_price)
-->

SE il passeggero è di età inferiore ai 18 anni 
 - applichi uno sconto del 20%.

ALTRIMENTI SE il passeggero è di età superiore ai 65 anni
 - applichi uno sconto del 40%.

ALTRIMENTI 
 - non applichi nessuno sconto.

<!-- 
if (age < 18) {
  console.log(full_price * (1 - 20 / km_run))
}


else if (age > 65) {
  console.log(full_price * (1 - 40 / km_run))
}


else (age > 18 && age < 65)
  console.log(full_price)
 -->


_______________________________________________________________________

**esercizi extra** (cartella extra -> extra.html / main.js)

1.età: chiedere all'utente con due prompt gli anni di due persone e comunicare quale delle due è più grande

chiedere ai due utenti il numero di anni 
- (let) quanti anni hai Marco ?
<!-- let age_marco = prompt(Marco type your age) -->
- (let) quanti anni hai Davide ?
<!-- let age_davide = prompt(Davide type your age)-->

SE Marco è più grande
 - lo comunichi 

ALTRIMENTI Davide è più grande 
 - lo comunichi 

 <!-- 
 if (age_marco > age_davide)
 console.log(marco è più grande di davide)

 else
 console.log(davide è più grande di marco)
  -->




______________________________________________
2.pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

3.quanto manca (OPZIONALE): utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.
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
- (let) quanti anni ha

<!-- per conoscere il prezzo base (non scontanto), bisogna calcolarlo sapendo che il - costo per km = 0.21 - e moltiplicarlo per i chilometri da percorrere  -->
- (cost) prezzo per km = 0.21
- (let) prezzo tot = prezzo per km * quanti chilometri dovrà percorrere

SE il passeggero è di età inferiore ai 18 anni 
 - applichi uno sconto del 20%.

ALTRIMENTI SE il passeggero è di età superiore ai 65 anni
 - applichi uno sconto del 40%.

ALTRIMENTI 
 - non applichi nessuno sconto.

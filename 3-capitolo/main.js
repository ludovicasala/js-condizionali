//programma per dare il "Benvenuto" in base alla città.

/* Chiedi all'utente il nome della sua città con un valore di default.
Se ha risposto, mostra un messaggio di saluto con la città;
altrimenti mostra un messaggio alternativo.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: ricevere la risposta dall'utente
2 - elaborazione: se l'utente risponde, messaggio di Benvenuto
3 - output: messaggio di saluto con la città OPPURE messaggio alternativo
*/

// PREPARAZIONE / INPUT

let nome = prompt("Da dove vieni?");

// ELABORAZIONE

if (nome) {
    console.log("Benventuo da " + nome)
} else {
    console.log("Nessuna città inserita")
}
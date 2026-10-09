//programma per superare la soglia di 60.

/* Chiedi all'utente un punteggio con prompt(),
convertilo in numero e mostra se ha superato la soglia di 60.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: ricevere la risposta dall'utente nel prompt
2 - elaborazione: convertire il prompt in numero
3 - output: superare il 60
*/

// PREPARAZIONE / INPUT

let testoPunteggio = prompt("Inserisci il tuo punteggio", "");
let punteggio = Number(testoPunteggio)

// ELABORAZIONE

if (punteggio >= 60) {
    console.log("Non hai superato la soglia minuma" + punteggio)
} else {
    console.log("Il tuo punteggio è valido" + punteggio)
}
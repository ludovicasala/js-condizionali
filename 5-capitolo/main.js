//programma per dare il "Benvenuto" solo se l'utente si logga ed è maggiorenne.

/* Crea due variabili: biglietto (boolean) e eta (numero).
Mostra "Benvenuto" solo se l'utente ha il biglietto ed è maggiorenne.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: far logare e ricevere la risposta dall'utente
2 - elaborazione: se l'utente si logga ed è maggiorenne, messaggio di Benvenuto
3 - output: messaggio di saluto se l'utente si logga ed è maggiorenne
*/

// PREPARAZIONE / INPUT

let biglietto = true;
let eta = 20;

// ELABORAZIONE

if (biglietto) {
    if (eta >= 18) {
        console.log("Benvenuto maggiorenne!")
    } else {
        console.log("Sei minorenne, non puoi accedere!")
    }
} else {
    console.log("Account non trovato...")
}
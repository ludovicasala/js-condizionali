//programma per salutare l'utente.

/* Chiedi un nome con prompt().
Se l'utente ha scritto qualcosa, mostra un saluto;
altrimenti mostra un messaggio di errore.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: l'utente scrive o meno
2 - elaborazione: verifica se compilato o meno
3 - output: messaggio di saluto o messaggio d'errore
*/

// PREPARAZIONE / INPUT

let nome = prompt("Inserisci il tuo nome", "")

// ELABORAZIONE

if (nome) {
    console.log("Benvenuto/a " + nome);
} else {
    console.log("Stringa vuota: nessuna risposta");
}
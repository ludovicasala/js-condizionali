//programma per generare numeri causali tra 0 a 100.

/* Genera un numero intero casuale tra 0 e 100.
Se è uguale a 100, mostra un messaggio speciale;
altrimenti mostra il numero.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: l'utente inserisce un numero
2 - elaborazione: verifica del numero
3 - output: messaggio stringa o numero
*/

// PREPARAZIONE / INPUT

let numero = Math.floor(Math.random() * 101);

// ELABORAZIONE

if (numero === 100) {
    console.log("HAI VINTO!");
} else {
    console.log("NON HAI VINTO " + numero);
}
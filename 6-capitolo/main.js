//programma per verificare la correttezza del codice.

/* Crea una variabile codice con il valore stringa "1234"
e confrontala con il numero 1234 prima con == e poi con ===.
Stampa un messaggio diverso per ciascun caso.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: codice da confrontare
2 - elaborazione: verifica, con confronto, se il numero è uguale sia in modo debole che stretto
3 - output: messaggio stampato in base al risultato vero o falso
*/

// PREPARAZIONE / INPUT

let codice = "1234";

// ELABORAZIONE

if (codice == "1234") {
    console.log("Confronto debole: vero")
}

if (codice === "1234") {
    console.log("Confronto stretto tra numero e numero: vero")
} else {
    console.log("Confronto non corretto")
}
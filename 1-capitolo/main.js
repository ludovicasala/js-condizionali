//programma per definire se salutare con "Buongiorno", "Buon pomeriggio" o "Buonasera".

/* Data una variabile ora con un valore tra 0 e 23,
mostra "Buongiorno" se è prima delle 12,
"Buon pomeriggio" se è prima delle 18,
"Buonasera" altrimenti.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: ricevo tre orari, salvo in tre variabili
2 - elaborazione: confronto i tre orari
3 - output: definisco come salutare
*/

// PREPARAZIONE / INPUT

let ora = 20;

// ELABORAZIONE

if (ora < 12) {
    console.log("Buongiorno")
} else if (ora < 18) {
    console.log("Buon pomeriggio")
} else {
    console.log("Buonasera")
}
//programma per definire se la stanza è occupata o libera.

/* Crea due variabili booleane: luceAccesa e personePresenti.
Mostra "Stanza occupata" se entrambe sono vere,
oppure "Stanza libera" se entrambe sono false.

0 - preparazione: preparo variabili, messaggi o altro
1 - input: l'utente dichiara luceAccesa e personePresenti
2 - elaborazione: verifica della condizione con variabili booleane
3 - output: messaggio in base alla condizione "Stanza occupata" oppure "Stanza libera"
*/

// PREPARAZIONE / INPUT

let luceAccesa = false;
let personePresenti = false;

// ELABORAZIONE

if (luceAccesa === true && personePresenti === true) {
    console.log("Stanza occupata");
}

if (luceAccesa === false || personePresenti === false) {
    console.log("Stanza libera")
}
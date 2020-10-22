// // PAROLA PALINDROMA

// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma
var parola = prompt('Inserire una parola');
console.log('Parola inserita: ' + parola);

// Invoco la funzione per eseguire la mia inversione
var invocazioneParolaInvertita = inversioneParola(parola);
console.log('Parola invertita: ' + invocazioneParolaInvertita);

// Controllo se la parola inserita è palindroma
if (parola === invocazioneParolaInvertita){
    console.log('La parola inserita risulta essere PALINDROMA')
} else {
    console.log('La parola inserita non è PALINDROMA')
}

// Definisco la funzione (N.B. SEMPRE INFONDO AL MIO CODICE)
function inversioneParola(parolaUtente) {
    var parolaInvertita = '';
    // La variabile i parte dalla fine della parolaUtente (il -1 serve perchè ricordiamo che il conteggio parte da 0 e non da 1) e continua il loop fino a quando non arriva al carattere 0 (il primo della parola inserita dall'utente) grazie al contatore 1--
    for ( var i = parolaUtente.length - 1; i >= 0; i-- ) {
       parolaInvertita = parolaInvertita + parolaUtente[i];
      
    }

    return parolaInvertita;
}


// // PARI O DISPARI
// L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.
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
    // La variabile i parte dalla fine della parolaUtente (il -1 serve perchè ricordiamo che il conteggio parte da 0 e non da 1) e continua il loop fino a quando non arriva al carattere 0 (il primo della parola inserita dall'utente) grazie al contatore i--
    for ( var i = parolaUtente.length - 1; i >= 0; i-- ) {
       parolaInvertita += parolaUtente[i];
    }
    // Indispensabile per portare il valore ottenuto fuori dalla funzione
    return parolaInvertita;
}


// // PARI O DISPARI
// L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.

var parDis = prompt('Scegliere tra pari e dispari').toLocaleLowerCase();
console.log('Utente sceglie: ' + parDis);
// Aggiunta di una piccola validazione
while (parDis != 'pari' && parDis != 'dispari') {
    var parDis = prompt('Il valore inserito non è valido, riprovare').toLocaleLowerCase();
}
// Numero utente
var numeroUtente = parseInt( prompt('Scegliere un numero compreso tra 1 e 5') );
console.log('Numero utente: ' + numeroUtente);
// Aggiunta di una piccola validazione
while (numeroUtente < 1 || numeroUtente > 5) {
    var numeroUtente = parseInt( prompt('Il valore inserito non è valido, riprovare') );
}

// Numero computer (ho usato una funzione per ottenerlo)
var numeroComputer = numeroRandom(1, 5);
console.log('Numero computer: ' + numeroComputer);

// Sommo i due valori utente + computer (anche in questo caso con l'utilizzo di una funzione)
var sommaUtComp = somma(numeroUtente, numeroComputer);
console.log('La somma tra il numero utente e quello del computer è: ' + sommaUtComp);

// Risultato pari o dispari
if (parDis === 'pari' && sommaUtComp % 2 === 0) {
    console.log('HAI VINTO!!!');
} 
else if (parDis === 'dispari' && sommaUtComp % 2 !== 0) {
    console.log('HAI VINTO!!!');
}
else {
    console.log('HAI PERSO :(');
}


// Funzioni richieste
function numeroRandom(min, max) {
    var random = Math.floor( Math.random() * (max - min + 1) ) + min;

    return random;
}

function somma (num1, num2) {
    var sommaValori = num1 + num2;
    return sommaValori;
}
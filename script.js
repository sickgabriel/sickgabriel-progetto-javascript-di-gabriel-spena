// CHIAVE per salvare il valore in localStorage
const STORAGE_KEY = 'simpleCounterValue';

/**
 * Funzione di utilità per caricare il valore iniziale del counter.
 * Tenta di recuperare il valore salvato in localStorage. Se non esiste, 
 * restituisce il valore di default 0.
 * @returns {number} Il valore iniziale del counter.
 */
function getInitialCounterValue() {
    // localStorage.getItem restituisce una stringa o null.
    const storedValue = localStorage.getItem(STORAGE_KEY);
    
    // Controlla se storedValue è presente e lo converte in intero (base 10).
    // Se non è presente o non è un numero valido, ritorna 0.
    return storedValue ? parseInt(storedValue, 10) : 0;
}

/**
 * Funzione di utilità per salvare il valore attuale del counter in localStorage.
 */
function saveCounterValue() {
    // Salva il valore convertendolo in stringa (requisito di localStorage).
    localStorage.setItem(STORAGE_KEY, counter);
}

// Stato del counter: inizializzato con il valore salvato o 0
let counter = getInitialCounterValue();


/**
 * 1. Funzione per l'aggiornamento del DOM
 * Aggiorna il testo del valore del counter nella pagina.
 */
function updateDisplay() {
    const valueElement = document.getElementById('counter-value');
    if (valueElement) {
        valueElement.textContent = counter;
    }
}

/**
 * 2. Funzioni per la manipolazione del valore
 * Incrementano/Decrementano il valore, aggiornano il display e salvano il valore.
 */
function incrementCounter() {
    counter++;
    updateDisplay();
    saveCounterValue(); 
}

function decrementCounter() {
    counter--;
    updateDisplay();
    saveCounterValue(); 
}

/**
 * 3. Funzione per la creazione dinamica dell'interfaccia (Manipolazione del DOM)
 */
function createCounterInterface() {
    // 1. Seleziona il contenitore principale
    const appContainer = document.getElementById('app');

    // 2. Crea il contenitore del counter
    const counterContainer = document.createElement('div');
    counterContainer.id = 'counter-container';

    // 3. Crea l'elemento per visualizzare il valore
    const counterValue = document.createElement('div');
    counterValue.id = 'counter-value';
    // Imposta il valore iniziale CARICATO
    counterValue.textContent = counter; 

    // 4. Crea un contenitore per i pulsanti
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    // 5. Crea il pulsante di decremento (-)
    const decrementBtn = document.createElement('button');
    decrementBtn.id = 'decrement-btn';
    decrementBtn.textContent = '−'; 
    decrementBtn.addEventListener('click', decrementCounter); 

    // 6. Crea il pulsante di incremento (+)
    const incrementBtn = document.createElement('button');
    incrementBtn.id = 'increment-btn';
    incrementBtn.textContent = '+'; 
    incrementBtn.addEventListener('click', incrementCounter); 

    // 7. Assemblaggio degli elementi (append)
    buttonsContainer.appendChild(decrementBtn);
    buttonsContainer.appendChild(incrementBtn);

    counterContainer.appendChild(counterValue);
    counterContainer.appendChild(buttonsContainer);

    appContainer.appendChild(counterContainer);
}

// Avvia l'interfaccia solo quando il DOM (incluso <div id="app">) è caricato.
document.addEventListener('DOMContentLoaded', createCounterInterface);

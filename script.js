// CHIAVE per salvare il valore in localStorage
const STORAGE_KEY = 'simpleCounterValue';

// ************************************************************
// 1. FUNZIONE DI UTILITÀ PER LA CREAZIONE DEGLI ELEMENTI (DRY)
// ************************************************************

/**
 * Funzione di utilità per creare un elemento DOM con proprietà.
 * Accorpa le chiamate document.createElement, assegnazione di id, class, text, e event listener (onClick).
 * @param {string} type - Il tipo di elemento da creare (es. 'div', 'button').
 * @param {object} props - Un oggetto contenente le proprietà da assegnare (id, className, textContent, onClick).
 * @returns {HTMLElement} L'elemento DOM creato e configurato.
 */
function createElementWithProps(type, props = {}) {
    const element = document.createElement(type);

    // Itera sulle proprietà fornite nell'oggetto 'props'
    for (const key in props) {
        if (!props.hasOwnProperty(key)) continue;

        const value = props[key];

        switch (key) {
            case 'id':
                element.id = value;
                break;
            case 'className':
                element.className = value;
                break;
            case 'textContent':
                element.textContent = value;
                break;
            case 'onClick':
                // Aggiunge l'event listener per gestire l'interazione
                element.addEventListener('click', value);
                break;
            default:
                // Per attributi generici non gestiti sopra
                element.setAttribute(key, value);
                break;
        }
    }
    return element;
}


// ************************************************************
// 2. LOGICA APPLICATIVA (Stato e Manipolazione)
// ************************************************************

/**
 * Carica il valore del counter da localStorage o restituisce 0.
 */
function getInitialCounterValue() {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    return storedValue ? parseInt(storedValue, 10) : 0;
}

/**
 * Salva il valore attuale del counter in localStorage.
 */
function saveCounterValue() {
    localStorage.setItem(STORAGE_KEY, counter);
}

// Stato del counter: inizializzato con il valore salvato o 0
let counter = getInitialCounterValue();


/**
 * Aggiorna il testo del valore del counter nel DOM.
 */
function updateDisplay() {
    const valueElement = document.getElementById('counter-value');
    if (valueElement) {
        valueElement.textContent = counter;
    }
}

/**
 * Funzione per l'incremento.
 */
function incrementCounter() {
    counter++;
    updateDisplay();
    saveCounterValue();
}

/**
 * Funzione per il decremento.
 */
function decrementCounter() {
    counter--;
    updateDisplay();
    saveCounterValue();
}


// ************************************************************
// 3. CREAZIONE DELL'INTERFACCIA (Usa la funzione DRY)
// ************************************************************

function createCounterInterface() {
    const appContainer = document.getElementById('app');

    // Crea il contenitore principale del counter
    const counterContainer = createElementWithProps('div', {
        id: 'counter-container'
    });

    // Crea l'elemento per visualizzare il valore
    const counterValue = createElementWithProps('div', {
        id: 'counter-value',
        textContent: counter // Imposta il valore iniziale CARICATO
    });

    // Crea un contenitore per i pulsanti
    const buttonsContainer = createElementWithProps('div', {
        className: 'buttons-container'
    });

    // Crea il pulsante di decremento (-)
    const decrementBtn = createElementWithProps('button', {
        id: 'decrement-btn',
        textContent: '−',
        onClick: decrementCounter 
    });

    // Crea il pulsante di incremento (+)
    const incrementBtn = createElementWithProps('button', {
        id: 'increment-btn',
        textContent: '+',
        onClick: incrementCounter
    });

    // Assemblaggio degli elementi (append)
    buttonsContainer.appendChild(decrementBtn);
    buttonsContainer.appendChild(incrementBtn);

    counterContainer.appendChild(counterValue);
    counterContainer.appendChild(buttonsContainer);

    appContainer.appendChild(counterContainer);
}

// Avvia l'interfaccia solo quando il DOM è caricato.
document.addEventListener('DOMContentLoaded', createCounterInterface);

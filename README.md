# 🔢 Simple Dynamic Counter (Contatore Web Dinamico)

Questo progetto consiste nello sviluppo di una semplice applicazione web che simula il comportamento di un contatore. L'interfaccia utente (UI) è interamente creata e gestita dinamicamente tramite JavaScript puro, aderendo strettamente ai requisiti di utilizzo delle API native del browser.

## 🔗 Prova l'Applicazione

Puoi testare e interagire con l'applicazione Counter qui:
https://sickgabriel.github.io/sickgabriel-progetto-javascript-di-gabriel-spena/
## 🎯 Obiettivo del Progetto

L'obiettivo principale era realizzare una singola pagina HTML con un'applicazione JavaScript che permettesse all'utente di **incrementare** e **decrementare** un valore numerico attraverso due pulsanti dedicati.

## ⚙️ Requisiti Tecnici e Stack

Il progetto è stato sviluppato attenendosi ai seguenti vincoli tecnici, focalizzandosi sull'efficienza e sulla comprensione delle fondamenta del web:

* **Linguaggio:** JavaScript puro (Vanilla JS).
* **Interfaccia:** L'intera interfaccia (pulsanti `+`/`-` e visualizzazione del valore) è stata **creata dinamicamente** attraverso la manipolazione diretta del **DOM** (`document.createElement`, `appendChild`, etc.).
* **Vincoli:** **Non** è stato utilizzato alcun framework o libreria di alto livello (es. React, Angular, Vue, jQuery).
* **Struttura:** Separazione netta delle responsabilità (HTML per la struttura, CSS per lo stile, JS per la logica) con organizzazione dei file in cartelle `css/` e `js/`.

## ✨ Funzionalità

Il contatore implementa le seguenti funzionalità:

1.  **Valore Iniziale:** Quando la pagina viene caricata, il contatore viene inizializzato a `0` (o all'ultimo valore salvato).
2.  **Incremento/Decremento:** I pulsanti `+` e `−` aggiornano immediatamente il valore del contatore.
3.  **Persistenza del Dato (Funzionalità Opzionale):**
    * Utilizzando l'API nativa **`localStorage`**, l'ultimo valore del contatore viene salvato nel browser dell'utente.
    * Alla successiva visita della pagina, il contatore riprende esattamente dall'ultimo valore memorizzato.

## 🚀 Come Eseguire il Progetto in Locale

Per eseguire e testare questo progetto sul tuo computer:

1.  **Clona il Repository:**
   https://github.com/sickgabriel/sickgabriel-progetto-javascript-di-gabriel-spena.git
2.  **Apri il File:**
    * Apri semplicemente il file `index.html` nel tuo browser (Chrome, Firefox, ecc.). Non è necessario un server web per l'esecuzione locale.

---

Gabriel

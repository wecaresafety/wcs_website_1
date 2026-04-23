(function() {
    // 1. CSS voor de animaties (met GPU optimalisatie via transform)
    const style = document.createElement('style');
    style.innerHTML = `
        #loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            z-index: 9999999;
            display: flex;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.6s;
            pointer-events: all;
        }

        #loading-overlay.finished {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }

        #loading-bar-container {
            width: 100%;
            height: 4px;
            background-color: rgba(0,0,0,0.03);
            position: absolute;
            top: 0;
            left: 0;
        }

        #loading-bar-progress {
            width: 100%;
            height: 100%;
            background-color: #4CC6E9;
            box-shadow: 0 0 15px rgba(76, 198, 233, 0.7);
            transform: scaleX(0); /* Gebruik scale voor extreme souplesse */
            transform-origin: left;
            transition: transform 0.4s cubic-bezier(0.1, 0.5, 0.5, 1);
        }

        /* Fase 1: De eerste sprong */
        .loading-phase-1 #loading-bar-progress {
            transform: scaleX(0.4);
            transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Fase 2: Langzaam kruipen naar 90% */
        .loading-phase-2 #loading-bar-progress {
            transform: scaleX(0.9);
            transition: transform 8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Fase 3: De finish (100%) */
        .loading-phase-3 #loading-bar-progress {
            transform: scaleX(1);
            transition: transform 0.3s ease-in;
        }
    `;
    document.head.appendChild(style);

    // 2. HTML Injecteren
    const loaderHTML = `
        <div id="loading-overlay" class="loading-phase-1">
            <div id="loading-bar-container">
                <div id="loading-bar-progress"></div>
            </div>
        </div>
    `;
    
    // We voegen dit direct toe aan de body
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    const overlay = document.getElementById('loading-overlay');

    // --- FUNCTIE: START ANIMATIE ---
    function startLoading() {
        overlay.classList.remove('finished', 'loading-phase-3');
        overlay.classList.add('loading-phase-1');
        
        setTimeout(() => {
            overlay.classList.add('loading-phase-2');
        }, 800);
    }

    // --- FUNCTIE: STOP ANIMATIE (Wanneer alles geladen is) ---
    function finishLoading() {
        overlay.classList.remove('loading-phase-1', 'loading-phase-2');
        overlay.classList.add('loading-phase-3');
        
        // Wacht tot de bar op 100% is, dan fade-out het witte scherm
        setTimeout(() => {
            overlay.classList.add('finished');
        }, 400);
    }

    // AANKOMST: Wanneer de pagina begint te laden
    // We zitten al in phase-1 door de HTML injectie. 
    // Zodra de browser klaar is met ALLES (ook images):
    window.addEventListener('load', () => {
        finishLoading();
    });

    // VERTREK: Wanneer je op een link klikt
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            const href = link.getAttribute('href');
            const target = link.getAttribute('target');

            if (href && !href.startsWith('#') && !href.startsWith('tel:') && !href.startsWith('mailto:') && target !== '_blank') {
                // Toon de lader weer voor de volgende pagina
                startLoading();
            }
        }
    });

})();
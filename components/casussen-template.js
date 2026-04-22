/**
 * WCS Casussen Overzicht Template Engine
 * EXACTE LAYOUT OVERNAME - INCLUSIEF FILTER LOGICA & CONTACT BANNER
 */

const renderCasussen = () => {
    const config = window.casussenConfig;
    if (!config) return;

    // Update de paginatitel
    document.title = `${config.pageTitle} | We Care Safety`;

    const template = `
    <main>
        <section class="casussen-top-section">
            <div class="container-default">
                <h1>${config.pageTitle}</h1>
                <ul class="filter-menu" id="casusFilterMenu">
                    ${config.filters.map(f => `
                        <li class="${f.active ? 'active' : ''}" data-filter="${f.filter}">${f.label}</li>
                    `).join('')}
                </ul>
            </div>
        </section>

        <section class="casussen-grid-section">
            <div class="container-default">
                <div class="casussen-grid" id="casussenGrid">
                    ${config.cases.map(c => `
                        <a href="${c.url}" class="casus-card" data-category="${c.categories}">
                            <div class="card-image-container">
                                <img src="${c.image}" alt="${c.title}">
                                <div class="card-title-overlay">
                                    <h2>${c.title}</h2>
                                </div>
                            </div>
                            <div class="card-content-bottom">
                                <p class="card-text">${c.text}</p>
                                <div class="card-tag">${c.tag}</div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>

        <div id="contact-opnemen-vraag-placeholder"></div>
    </main>
    `;

    // 1. Injecteer de HTML op de pagina
    document.getElementById('casussen-engine-root').innerHTML = template;

    // 2. Activeer de Filter Logica
    initFilters();

    // 3. FORCEER CONTACT COMPONENT (Stel hier je vraag)
    const contactPlaceholder = document.getElementById('contact-opnemen-vraag-placeholder');
    if (contactPlaceholder && typeof contactVraagTemplate !== 'undefined') {
        contactPlaceholder.innerHTML = contactVraagTemplate;

        // Koppel de checkbox logica
        const trigger = document.getElementById('vraag-checkbox-trigger');
        const visualBox = document.getElementById('vraag-privacy-check');
        const hiddenInput = document.getElementById('vraag-hidden-privacy');

        if (trigger && visualBox && hiddenInput) {
            trigger.addEventListener('click', function() {
                hiddenInput.checked = !hiddenInput.checked;
                visualBox.classList.toggle('checked', hiddenInput.checked);
            });
        }
    }
};

// Functie om de filters te laten werken nadat de HTML is ingeladen
const initFilters = () => {
    const filterMenu = document.getElementById("casusFilterMenu");
    if (!filterMenu) return;

    const filterBtns = filterMenu.querySelectorAll("li");
    const cards = document.querySelectorAll(".casus-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            // Verwijder active class van alle filters en voeg toe aan geklikte filter
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            // Haal de filterwaarde op (bijv. 'bouw' of 'retail')
            const filterValue = this.getAttribute("data-filter");

            // Loop door alle kaarten
            cards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                
                // Toon de kaart als we 'alles' selecteren, óf als de categorie overeenkomt
                if (filterValue === "alles" || categories.includes(filterValue)) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });
};

// Start de engine zodra de pagina gereed is
document.addEventListener('DOMContentLoaded', renderCasussen);
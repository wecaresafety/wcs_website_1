/**
 * WCS Casus Detail Template Engine
 * EXACTE LAYOUT OVERNAME VOOR SPECIFIEKE PROJECTEN/CASUSSEN
 */

const renderCasusView = () => {
    const config = window.casusViewConfig;
    if (!config) return;

    // Update de paginatitel dynamisch
    document.title = `${config.title} | Casus | We Care Safety`;

    const template = `
    <main>
        <section class="casus-detail-header">
            <div class="container-default">
                <h1>${config.title}</h1>
                
                <div class="intro-grid">
                    <div class="intro-text">
                        <p>${config.introText}</p>
                    </div>
                    <div class="intro-logo">
                        <img src="${config.clientLogo}" alt="Logo ${config.title}" onerror="this.style.display='none'">
                    </div>
                </div>
            </div>
        </section>

        <section class="casus-content-section">
            <div class="container-default">
                ${config.contentBlocks.map(block => `
                    <div class="content-block">
                        <h2>${block.subtitle}</h2>
                        ${block.text}
                    </div>
                `).join('')}
            </div>
        </section>

        <section class="meer-casussen-section">
            <div class="container-default">
                <h3>Meer casussen</h3>
                
                <div class="casussen-grid">
                    ${config.relatedCases.map(rel => `
                        <a href="${rel.url}" class="casus-card">
                            <div class="card-image-container">
                                <img src="${rel.image}" alt="${rel.title}" onerror="this.src='https://via.placeholder.com/800x400/001D3D/FFFFFF?text=Casus'">
                                <div class="card-title-overlay">
                                    <h2>${rel.title}</h2>
                                </div>
                            </div>
                            <div class="card-content-bottom">
                                <p class="card-text">${rel.text}</p>
                                <div class="card-tag">${rel.tag}</div>
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
    document.getElementById('casus-view-engine-root').innerHTML = template;

    // 2. FORCEER CONTACT COMPONENT (Stel hier je vraag)
    const contactPlaceholder = document.getElementById('contact-opnemen-vraag-placeholder');
    if (contactPlaceholder && typeof contactVraagTemplate !== 'undefined') {
        contactPlaceholder.innerHTML = contactVraagTemplate;

        // Koppel de logica voor de privacy checkbox
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

// Start de engine zodra de pagina gereed is
document.addEventListener('DOMContentLoaded', renderCasusView);
/**
 * WCS Solution Template Engine 
 * EXACTE LAYOUT OVERNAME - INCLUSIEF WITTE ACHTERGRONDEN & CONTACT BANNER
 */

const renderSolution = () => {
    const config = window.solutionConfig;
    if (!config) return;

    // Update de paginatitel
    document.title = `${config.title} | We Care Safety`;

    const template = `
    <main>
        <section class="service-hero-impact" style="background-image: url('${config.heroImage}');">
            <div class="container-default">
                <div class="hero-impact-content">
                    <h1>${config.heroTitle}</h1>
                    <p>${config.heroDesc}</p>
                    <a href="#offerte" class="btn-hero-blue">Offerte aanvragen</a>
                </div>
            </div>
        </section>

        <section class="content-section" style="background-color: var(--white);">
            <div class="container-default">
                <div class="rich-text-grid">
                    <div class="rich-text">
                        <h2>${config.contentTitle}</h2>
                        ${config.contentText}
                    </div>
                    <div style="background: var(--section-gray); padding: 40px; display: flex; flex-direction: column; justify-content: center;">
                        <h3 style="margin-top:0;">Onze focus:</h3>
                        <ul style="padding-left: 20px; color: var(--text-main); line-height: 2;">
                            ${config.focusPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="impact-section" style="background-image: url('${config.impactImage}');">
            <div class="container-default">
                <div class="impact-card">
                    <h2>${config.impactTitle}</h2>
                    <p>${config.impactDesc}</p>
                </div>
            </div>
        </section>

        <section class="info-block-section" style="background-color: var(--white);">
            <div class="container-default">
                <div class="rich-text" style="max-width: 800px;">
                    <h2>Wat is ${config.title.toLowerCase()}?</h2>
                    <p>${config.definitionText}</p>
                </div>
            </div>
        </section>

        <section class="info-block-section" style="background-color: var(--section-gray);">
            <div class="container-default">
                <h2>Wat zijn de werkzaamheden van een objectbeveiliger?</h2>
                <p style="color: var(--text-main); margin-bottom: 30px;">De taken van onze beveiligers zijn veelzijdig en worden volledig afgestemd op uw protocollen:</p>
                <div class="work-list-grid">
                    ${config.tasks.map(task => `
                        <div class="work-item"><i class="fa-solid fa-check"></i> ${task}</div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="info-block-section" style="background-color: var(--white);">
            <div class="container-default">
                <div class="rich-text" style="max-width: 800px;">
                    <h2>Waarom is We Care Safety de juiste partner?</h2>
                    <p>${config.whyPartnerText}</p>
                </div>
            </div>
        </section>

        <section class="bottom-gray-section">
            <div class="container-default">
                <div class="faq-wrapper">
                    <h2 style="text-align: center; margin-bottom: 40px; color: var(--dark-navy); font-weight: 800;">Veelgestelde vragen</h2>
                    ${config.faqs.map(faq => `
                        <div class="faq-item">
                            <div class="faq-question">${faq.q} <i class="fa-solid fa-plus"></i></div>
                            <div class="faq-answer">${faq.a}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <div id="offerte">
            <div id="contact-opnemen-vraag-placeholder"></div>
        </div>
    </main>
    `;

    // 1. Injecteer de HTML op de pagina
    document.getElementById('solution-engine-root').innerHTML = template;

    // 2. FAQ Toggle activeer
    initFaq();

    // 3. FORCEER CONTACT COMPONENT
    const contactPlaceholder = document.getElementById('contact-opnemen-vraag-placeholder');
    if (contactPlaceholder && typeof contactVraagTemplate !== 'undefined') {
        contactPlaceholder.innerHTML = contactVraagTemplate;

        // Koppel direct daarna de logica voor de checkbox
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

const initFaq = () => {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
            const icon = q.querySelector('i');
            if (item.classList.contains('open')) {
                icon.classList.replace('fa-plus', 'fa-minus');
            } else {
                icon.classList.replace('fa-minus', 'fa-plus');
            }
        });
    });
};

// Start de engine zodra de pagina gereed is
document.addEventListener('DOMContentLoaded', renderSolution);
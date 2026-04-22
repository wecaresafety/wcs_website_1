/**
 * COMPONENT: contact-opnemen-vraag.js
 * Doel: Herbruikbaar formulier "Stel hier je vraag"
 */

const contactVraagTemplate = `
<section class="contact-vraag-section">
    <div class="container-default">
        <div class="contact-vraag-inner">
            <h2 class="form-title">Stel hier je vraag, wij helpen je graag verder.</h2>
            
            <form action="#" method="POST" class="custom-form">
                <div class="form-grid">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Uw naam*" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Bedrijfsnaam">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-mailadres*" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Telefoonnummer*" required>
                    </div>
                    <div class="form-group full-width">
                        <textarea class="form-control" rows="5" placeholder="Waarover gaat uw vraag?*" required></textarea>
                    </div>
                </div>

                <div class="checkbox-wrapper">
                    <div class="checkbox-group" id="vraag-checkbox-trigger">
                        <div class="custom-checkbox" id="vraag-privacy-check">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <span class="checkbox-label">Ik ga akkoord met de privacyvoorwaarden van <strong>We Care Safety.</strong> *</span>
                        <input type="checkbox" id="vraag-hidden-privacy" required style="display: none;">
                    </div>
                </div>

                <div class="form-submit-container">
                    <button type="submit" class="btn-submit-small">Bericht versturen</button>
                </div>
            </form>
        </div>
    </div>
</section>

<style>
    .contact-vraag-section {
        background-color: #ffffff;
        padding: 80px 0 120px 0;
    }

    .contact-vraag-inner {
        max-width: 850px;
        margin: 0 auto;
    }

    .contact-vraag-inner .form-title {
        font-size: 28px;
        font-weight: 800;
        color: var(--dark-navy, #001D3D);
        margin-bottom: 40px;
        text-align: left;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }

    .full-width {
        grid-column: span 2;
    }

    .form-control {
        width: 100%;
        padding: 16px;
        background-color: #f4f5f8;
        border: none;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        color: var(--dark-navy, #001D3D);
        box-sizing: border-box;
    }

    .checkbox-wrapper {
        margin: 30px 0;
    }

    .checkbox-group {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
    }

    .custom-checkbox {
        width: 22px;
        height: 22px;
        border: 2px solid #e5e7eb;
        background: #f4f5f8;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
    }

    .custom-checkbox.checked {
        background-color: var(--brand-blue, #4CC6E9);
        border-color: var(--brand-blue, #4CC6E9);
    }

    .custom-checkbox i {
        color: white;
        font-size: 12px;
        display: none;
    }

    .custom-checkbox.checked i {
        display: block;
    }

    .checkbox-label {
        font-size: 14px;
        color: #51637b;
    }

    .form-submit-container {
        display: flex;
        justify-content: flex-start;
    }

    .btn-submit-small {
        background-color: var(--dark-navy, #001D3D);
        color: #ffffff;
        border: none;
        padding: 14px 40px;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }

    .btn-submit-small:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        .form-grid { grid-template-columns: 1fr; }
        .full-width { grid-column: span 1; }
        .btn-submit-small { width: 100%; }
        .contact-vraag-inner .form-title { text-align: center; }
    }
</style>
`;

// Injectie en logica
document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById('contact-opnemen-vraag-placeholder');
    if (placeholder) {
        placeholder.innerHTML = contactVraagTemplate;

        // Pas na de injectie de logica voor de checkbox koppelen
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
});
// Haalt het huidige jaar op (bijv. 2026)
const currentYear = new Date().getFullYear();

const footerTemplate = `
<footer>
    <div class="footer-cta-wrapper">
        <div class="footer-cta-banner">
            <h2>Beveiliger inhuren? Vraag vrijblijvend een offerte aan.</h2>
            <a href="pages/offerte-aanvragen.html" class="btn-cta-outline">OFFERTE AANVRAGEN</a>
        </div>
    </div>

    <div class="footer-main">
        
        <div class="footer-col-contact">
            <h4>Hoofdkantoor</h4>
            <div class="footer-contact-info">
                <p>Bestevâerstraat 32 H<br>1056HP, Amsterdam</p>
                <p style="margin-top: 15px;">
                    <a href="tel:+31858001835">T: +31 85 800 18 35</a>
                    <a href="mailto:info@wecaresafety.nl">E: info@wecaresafety.nl</a>
                </p>
            </div>
            </div>

        <div class="footer-col-sitemap">
            <div>
                <h4>Sectoren</h4>
                <ul>
                    <li><a href="oplossingen/evenementenbeveiliging.html">Evenementenbeveiliging</a></li>
                    <li><a href="oplossingen/objectbeveiliging.html">Objectbeveiliging</a></li>
                    <li><a href="oplossingen/veiligheidsoplossingen.html">Service- en hospitality</a></li>
                    <li><a href="oplossingen/veiligheidsoplossingen.html">Verkeersmaatregelen</a></li>
                    <li><a href="oplossingen/veiligheidsoplossingen.html">Toezicht & Handhaving</a></li>
                </ul>
            </div>

            <div>
                <h4>Over ons</h4>
                <ul>
                    <li><a href="offerte-aanvragen.html">Beveiliging inhuren</a></li>
                    <li><a href="over-ons.html">Over WCS</a></li>
                    <li><a href="#">Mijn WCS</a></li>
                    <li><a href="pages/zoeken.html">Zoeken</a></li>
                    <li><a href="werkenbij.html">Werken bij</a></li>
                </ul>
            </div>

            <div>
                <h4>Juridisch</h4>
                <ul>
                    <li><a href="pages/algemene-voorwaarden.html">Algemene voorwaarden</a></li>
                    <li><a href="#">Cookiebeleid</a></li>
                    <li><a href="pdf/privacybeleid.pdf" target="_blank">Privacybeleid</a></li>
                    <li><a href="#">Disclaimer</a></li>
                    <li><a href="pages/onze-keurmerken.html">Onze keurmerken</a></li>
                </ul>
            </div>
        </div>

    </div>

    <div class="footer-middle-row">
        <div class="footer-middle-left">
            <img src="logo_1.png" alt="We Care Safety Logo" class="justitie-logo">
        </div>
        
        <div class="footer-middle-center">
            Uw veiligheid, onze prioriteit. </div>
        
        <div class="footer-middle-right">
            <div class="footer-socials">
                <a href="https://www.facebook.com/p/We-Care-Safety-61561744411243/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/wecaresafety/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/wecaresafety/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://wa.me/31858001835" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="footer-bottom-container">
            
            <div class="bottom-left">
                <span>© 2024-${currentYear} We Care Safety B.V.</span>
                <a href="pages/algemene-voorwaarden.html">Algemene voorwaarden</a>
                <a href="pdf/privacybeleid.pdf">Privacy</a>
            </div>
            
            </div>
    </div>
</footer>
`;

document.getElementById('footer-placeholder').innerHTML = footerTemplate;
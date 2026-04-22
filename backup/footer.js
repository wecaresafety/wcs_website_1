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
        <div class="footer-col justitie-section">
            <img src="justitie_logo.png" alt="Justitie Logo" class="justitie-logo">
        </div>
        
        <div class="footer-col">
            <h4>Hoofdkantoor</h4>
            <div class="footer-contact-info">
                <p>Bestevâerstraat 32 H</p>
                <p>1056HP, Amsterdam</p>
                <p style="margin-top: 20px;">T: +31 85 800 18 35</p>
                <p>E: info@wecaresafety.nl</p>
            </div>
        </div>

        <div class="footer-col">
            <h4>Juridisch</h4>
            <ul>
                <li><a href="pages/algemene-voorwaarden.html">Algemene voorwaarden</a></li>
                <li><a href="#">Cookiebeleid</a></li>
                <li><a href="pdf/privacybeleid.pdf" target="_blank">Privacybeleid</a></li>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="pages/onze-keurmerken.html">Onze keurmerken</a></li>
            </ul>
        </div>

        <div class="footer-col">
            <h4>Sectoren</h4>
            <ul>
                <li><a href="oplossingen/evenementenbeveiliging.html">Evenementenbeveiliging</a></li>
                <li><a href="oplossingen/objectbeveiliging.html">Objectbeveiliging</a></li>
                <li><a href="oplossingen/veiligheidsoplossingen.html">Service- en hospitality</a></li>
                <li><a href="oplossingen/veiligheidsoplossingen.html">Verkeersmaatregelen en -begeleiding</a></li>
                <li><a href="oplossingen/veiligheidsoplossingen.html">Toezicht & Handhaving</a></li>
            </ul>
        </div>

        <div class="footer-col">
            <h4>Over ons</h4>
            <ul>
                <li><a href="offerte-aanvragen.html">Beveiliging inhuren</a></li>
                <li><a href="over-ons.html">Over wcs</a></li>
                <li><a href="#">Mijn WCS</a></li>
                <li><a href="pages/zoeken.html">Zoeken</a></li>
                <li><a href="werkenbij.html">Werken bij</a></li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="footer-bottom-container">
            <div class="bottom-left">
                <img src="logo_schild.png" alt="WCS Shield" class="footer-bottom-shield">
            </div>
            
            <div class="bottom-center">
                <h5>WE CARE ABOUT YOUR SAFETY</h5>
                <p>© 2024-${currentYear} We Care Safety B.V. Alle rechten voorbehouden.</p>
            </div>

            <div class="bottom-right">
                <div class="footer-socials">
                    <a href="https://www.facebook.com/p/We-Care-Safety-61561744411243/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/wecaresafety/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/wecaresafety/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/31858001835" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
`;

document.getElementById('footer-placeholder').innerHTML = footerTemplate;
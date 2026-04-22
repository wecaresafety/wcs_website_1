// meta.js aanroepen (Cookie banner & tracking)
const metaScript = document.createElement('script');
metaScript.src = 'meta.js'; // Zorg dat dit pad klopt relatief aan je HTML bestanden
document.head.appendChild(metaScript);

const headerTemplate = `
<header class="header-wrapper">
    <div class="header-top-bar">
        <div class="header-container top-bar-inner">
            <div class="top-bar-left">
                <span></span>
            </div>
            <div class="top-bar-right">
                <a href="pages/over-ons.html">Over ons</a>
                <a href="pages/nieuws.html">Nieuws</a>
                <a href="pages/werkenbij.html">Werken bij</a>
                <a href="pages/contact.html">FAQ & Contact</a>
            </div>
        </div>
    </div>

    <div class="header-main-bar">
        <div class="header-container">
            <div class="header-content-wrapper">
                
                <div class="header-left-side">
                    <a href="index.html" class="header-logo-link">
                        <img src="logo.png" alt="We Care Safety" class="header-logo">
                    </a>
                </div>

                <div class="header-right-side">
                    <nav class="header-nav-menu-wrapper">
                        <ul class="header-nav-menu-list">
                            <li><a href="pages/veiligheidsoplossingen.html" class="header-nav-link">Veiligheidsoplossingen</a></li>
                            <li><a href="pages/casussen.html" class="header-nav-link">Casussen</a></li>
                        </ul>
                    </nav>
                    <div class="header-btn-wrapper">
                        <a href="pages/offerte-aanvragen.html" class="btn-primary">Offerte aanvragen</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</header>
`;

document.getElementById('header-placeholder').innerHTML = headerTemplate;

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-wrapper');
    if (header) {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});
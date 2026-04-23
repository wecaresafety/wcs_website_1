// --- 1. Uitgebreide CSS (Loading, Active States, Mobile & Styling fixes) ---
const headerStyles = document.createElement('style');
headerStyles.innerHTML = `
    /* --- FIX VOOR DE GRIJZE RAND/ACHTERGROND --- */
    .header-wrapper {
        background-color: #ffffff;
        border-bottom: none !important;
        box-shadow: none !important;
        margin-bottom: 0 !important;
        width: 100%;
    }
    .header-top-bar {
        background-color: #f8f9fa; /* De zachtgrijze/blauwe balk bovenaan uit je screenshot */
        padding: 8px 0;
    }
    .header-main-bar {
        background-color: #ffffff; /* Forceer de hoofdcontainer naar puur wit */
        padding: 15px 0; /* Zorg voor wat ruimte boven en onder de inhoud */
    }

    /* Loading Bar & Overlay */
    #loading-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: white; z-index: 9999999; display: none;
        flex-direction: column; align-items: center;
    }
    #loading-bar-container { width: 100%; height: 4px; background-color: #f0f0f0; position: absolute; top: 0; }
    #loading-bar-progress { 
        width: 0%; height: 100%; background-color: #4CC6E9; 
        box-shadow: 0 0 10px rgba(76, 198, 233, 0.5); 
    }
    .is-loading #loading-bar-progress { transition: width 2s cubic-bezier(0.22, 1, 0.36, 1); width: 90%; }

    /* Active Link Kleur (Desktop) */
    .header-nav-link.active, .top-bar-right a.active {
        color: #4CC6E9 !important;
        font-weight: 700;
    }
    .header-nav-link.active::after {
        content: ''; display: block; width: 100%; height: 2px; background: #4CC6E9; margin-top: 4px;
    }

    /* --- MOBIELE MENU STYLING --- */
    .mobile-toggle { display: none; font-size: 24px; cursor: pointer; color: var(--dark-navy, #1a202c); }
    
    .mobile-menu {
        position: fixed; top: 0; right: -100%; width: 100%; height: 100vh;
        background: #ffffff; z-index: 99999;
        transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        overflow-y: auto; padding: 30px; box-sizing: border-box;
    }
    .mobile-menu.open { right: 0; }
    
    /* Header sectie van het mobiele menu (Logo + Kruisje) */
    .mobile-menu-header {
        position: relative; 
        margin-bottom: 50px; 
        margin-top: 10px;
    }
    #close-menu {
        position: absolute; top: -10px; right: -10px;
        font-size: 26px; cursor: pointer; color: #333;
        padding: 10px;
    }
    .mobile-menu-logo img {
        max-width: 180px; 
        max-height: 50px;
        display: block;
    }

    /* Typografie en Lijsten */
    .mobile-nav-primary, .mobile-nav-secondary {
        list-style: none; padding: 0; margin: 0;
    }
    
    .mobile-nav-primary {
        margin-bottom: 40px;
    }
    .mobile-nav-primary li {
        margin-bottom: 30px;
    }
    .mobile-nav-primary a {
        font-size: 22px; 
        font-weight: 800; 
        color: #00234b; 
        text-decoration: none; 
        display: block;
    }
    
    .mobile-nav-secondary li {
        margin-bottom: 25px;
    }
    .mobile-nav-secondary a {
        font-size: 17px; 
        font-weight: 400; 
        color: #004b87; 
        text-decoration: none; 
        display: block;
    }

    .mobile-menu a.active { color: #4CC6E9; }

    /* Overlay achter mobiel menu */
    .menu-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: none; z-index: 9998; opacity: 0; transition: opacity 0.3s;
    }
    .menu-overlay.show { display: block; opacity: 1; }

    /* Media Query: Schakel over naar Mobiel */
    @media (max-width: 992px) {
        .header-top-bar { display: none; } 
        .header-nav-menu-wrapper { display: none; } 
        .header-btn-wrapper { display: none; } 
        
        .header-right-side { display: flex; align-items: center; justify-content: flex-end; width: 100%; }
        .mobile-toggle { display: block; } 
    }
`;
document.head.appendChild(headerStyles);

// --- 2. HTML Injecteren ---
const loaderHTML = `
    <div id="loading-overlay"><div id="loading-bar-container"><div id="loading-bar-progress"></div></div></div>
    <div class="menu-overlay" id="menu-overlay"></div>
`;
document.body.insertAdjacentHTML('beforeend', loaderHTML);

const headerTemplate = `
<header class="header-wrapper">
    <div class="header-top-bar">
        <div class="header-container top-bar-inner">
            <div class="top-bar-left"><span></span></div>
            <div class="top-bar-right">
                <a href="/pages/over-ons.html">Over ons</a>
                <a href="/pages/werkenbij.html">Werken bij</a>
                <a href="/pages/contact.html">Contact</a>
            </div>
        </div>
    </div>

    <div class="header-main-bar">
        <div class="header-container">
            <div class="header-content-wrapper" style="display: flex; justify-content: space-between; align-items: center;">
                <div class="header-left-side">
                    <a href="/index.html" class="header-logo-link">
                        <img src="/logo_1.png" alt="We Care Safety" class="header-logo" style="max-height: 50px;">
                    </a>
                </div>

                <div class="header-right-side">
                    <nav class="header-nav-menu-wrapper" id="desktop-nav">
                        <ul class="header-nav-menu-list" style="display: flex; gap: 20px; list-style: none;">
                            <li><a href="/pages/veiligheidsoplossingen.html" class="header-nav-link">Veiligheidsoplossingen</a></li>
                            <li><a href="/pages/casussen.html" class="header-nav-link">Casussen</a></li>
                        </ul>
                    </nav>
                    <div class="header-btn-wrapper" style="margin-left: 20px;">
                        <a href="/pages/offerte-aanvragen.html" class="btn-primary">Offerte aanvragen</a>
                    </div>
                    
                    <div class="mobile-toggle" id="menu-trigger">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="mobile-menu" id="mobile-menu"> 
    <div class="mobile-menu-header">
        <i class="fas fa-times" id="close-menu"></i>
        <a href="/index.html" class="mobile-menu-logo">
            <img src="/logo_1.png" alt="We Care Safety">
        </a>
    </div>
    
    <ul class="mobile-nav-primary"> 
        <li><a href="/pages/veiligheidsoplossingen.html">Veiligheidsoplossingen</a></li> 
        <li><a href="/pages/casussen.html">Casussen</a></li> 
    </ul> 

    <ul class="mobile-nav-secondary"> 
        <li><a href="/pages/over-ons.html">Over ons</a></li> 
        <li><a href="/pages/werkenbij.html">Werken bij</a></li> 
        <li><a href="/pages/contact.html">Contact</a></li> 
        <li><a href="/pages/offerte-aanvragen.html">Prijsopgave aanvragen</a></li> 
    </ul> 
</div>
`;

document.getElementById('header-placeholder').innerHTML = headerTemplate;

// --- 3. Logica voor Active State ---
function setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.header-nav-link, .top-bar-right a, .mobile-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === '/' && href === '/index.html')) {
            link.classList.add('active');
        }
    });
}
setActiveLink();

// --- 4. Logica voor Mobile Menu ---
const menuTrigger = document.getElementById('menu-trigger');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function openMobileMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('show');
    document.body.style.overflow = ''; 
}

menuTrigger.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
menuOverlay.addEventListener('click', closeMobileMenu);

const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// --- 5. Loader & Scroll Logica ---
function triggerLoader() {
    const overlay = document.getElementById('loading-overlay');
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('is-loading'), 10);
}

document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (target) {
        const href = target.getAttribute('href');
        const isExternal = target.getAttribute('target') === '_blank';
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !isExternal) {
            triggerLoader();
        }
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-wrapper');
    if (header) {
        window.scrollY > 30 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    }
});
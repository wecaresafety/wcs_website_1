// JAVASCRIPT
const headerTemplate = `
<div class="header-wrapper">
    <div class="container-default">
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
                        <li><a href="pages/over-ons.html" class="header-nav-link">Over ons</a></li>
                        <li><a href="pages/werkenbij.html" class="header-nav-link">Werken bij</a></li>
                        <li><a href="pages/contact.html" class="header-nav-link">Contact</a></li>
                    </ul>
                </nav>
                <div class="header-btn-wrapper">
                    <a href="pages/offerte-aanvragen.html" class="btn-primary">Offerte aanvragen</a>
                </div>
            </div>

        </div>
    </div>
</div>
`;

document.getElementById('header-placeholder').innerHTML = headerTemplate;
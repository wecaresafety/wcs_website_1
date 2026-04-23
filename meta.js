// meta.js - Centraal beheer voor cookies, scripts en optimalisatie

(function() {
    // 1. De CookieScript banner inladen
    const cookieScript = document.createElement('script');
    cookieScript.type = 'text/javascript';
    cookieScript.charset = 'UTF-8';
    cookieScript.src = 'https://cdn.cookie-script.com/s/9b948c1224edf01e08bca691ca07beb2.js'; 
    document.head.appendChild(cookieScript);

    // 2. Afbeeldingen "Preloaden" naar de Browser Cache
    // Voeg hier de paden toe van de belangrijkste afbeeldingen (logo, hero's)
    const assetsToCache = [
        '/logo_1.png',
        '/image/objecten/object2.png',
        'https://via.placeholder.com/300x300/4CC6E9/FFFFFF?text=Contact+Persoon'
    ];

    function preloadAssets(urls) {
        urls.forEach(url => {
            // Maak een onzichtbaar preload-element aan in de head
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = url;
            document.head.appendChild(link);

            // Forceer de browser om het object alvast te downloaden
            const img = new Image();
            img.src = url;
        });
    }

    // Start het preloaden zodra de browser een gaatje vrij heeft (idle)
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => preloadAssets(assetsToCache));
    } else {
        window.addEventListener('load', () => preloadAssets(assetsToCache));
    }

    // 3. Optimalisatie: Lazy Loading activeren voor de rest van de pagina
    // Dit zorgt ervoor dat afbeeldingen die niet direct in beeld zijn, pas later laden
    document.addEventListener("DOMContentLoaded", () => {
        const lazyImages = document.querySelectorAll("img:not([loading])");
        lazyImages.forEach(img => {
            img.setAttribute("loading", "lazy");
        });
    });

    console.log("We Care Safety: Cookie-instellingen & Image Caching geactiveerd.");
})();

// Speculative Preloading: start laden bij hover
document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && !link.dataset.preloaded) {
        const href = link.href;
        // Alleen interne links
        if (href.startsWith(window.location.origin) && !href.includes('#')) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
            link.dataset.preloaded = 'true'; // Voorkom dubbel laden
        }
    }
});
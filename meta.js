// meta.js - Centraal beheer voor cookies, scripts en optimalisatie

(function() {
    // 1. De CookieScript banner inladen
    const cookieScript = document.createElement('script');
    cookieScript.type = 'text/javascript';
    cookieScript.charset = 'UTF-8';
    cookieScript.src = 'https://cdn.cookie-script.com/s/9b948c1224edf01e08bca691ca07beb2.js'; 
    document.head.appendChild(cookieScript);

    // 2. Google Analytics Inladen (Genereert _ga cookies)
    const gaId = 'G-WJG88FK2'; 
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId);

    // 3. Microsoft Clarity Inladen (FIXED: removed <script> tags)
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wgofe4i6j6");

    // 4. Afbeeldingen "Preloaden"
    const assetsToCache = [
        '/logo_1.png',
        '/image/objecten/object2.png',
        'https://placehold.co/300x300/4CC6E9/FFFFFF?text=Contact+Persoon'
    ];

    function preloadAssets(urls) {
        urls.forEach(url => {
            if (!url) return;

            // We gebruiken alleen de moderne 'preload' link, geen 'new Image()' meer
            // Dit voorkomt dubbele netwerkverzoeken en afgebroken verbindingen.
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = url;
            
            document.head?.appendChild(link);
        });
    }

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => preloadAssets(assetsToCache));
    } else {
        window.addEventListener('load', () => preloadAssets(assetsToCache));
    }

    // 5. Optimalisatie: Lazy Loading
    document.addEventListener("DOMContentLoaded", () => {
        const lazyImages = document.querySelectorAll("img:not([loading])");
        lazyImages.forEach(img => {
            img.setAttribute("loading", "lazy");
        });
    });

    console.log("We Care Safety: Cookies (GA & Clarity) & Image Caching geactiveerd.");
})();

// Speculative Preloading: start laden bij hover
document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && !link.dataset.preloaded) {
        const href = link.href;
        if (href.startsWith(window.location.origin) && !href.includes('#')) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
            link.dataset.preloaded = 'true';
        }
    }
});
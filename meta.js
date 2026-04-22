// meta.js - Centraal beheer voor cookies en scripts

// 1. De specifieke CookieScript banner van We Care Safety inladen
const cookieScript = document.createElement('script');
cookieScript.type = 'text/javascript';
cookieScript.charset = 'UTF-8';
cookieScript.src = 'https://cdn.cookie-script.com/s/9b948c1224edf01e08bca691ca07beb2.js'; 

document.head.appendChild(cookieScript);

// Bevestiging in de console voor controle
console.log("We Care Safety: Cookie-instellingen en Meta-data geladen.");
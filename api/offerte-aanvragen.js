document.getElementById('offerteForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Voorkomt dat de pagina ververst

    const submitBtn = document.getElementById('submitBtn');
    const originalBtnText = submitBtn.innerText;
    
    // Verander knop tekst tijdens verzenden
    submitBtn.innerText = 'Verzenden...';
    submitBtn.disabled = true;

    // Data verzamelen volgens jouw schema
    const formData = {
        "Dienst": document.getElementById('dienst').value,
        "Specifiekewensen": document.getElementById('specifiekeWensen').value,
        "Aanvullendevragen": document.getElementById('aanvullendeVragen').value,
        "Bedrijfsnaam": document.getElementById('bedrijfsnaam').value,
        "Kvk": document.getElementById('kvk').value,
        "Voor-Achternaam": document.getElementById('naam').value,
        "Telefoonummer": document.getElementById('telefoon').value,
        "Email": document.getElementById('email').value,
        "Postcode": document.getElementById('postcode').value,
        "Huisnr": document.getElementById('huisnr').value
    };

    const webhookUrl = "https://default8728812d05fb46dd92e4e667912012.1d.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/9ee8563c50e244f0ae0861aea4027c99/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=osn1b7Wh30yIk6USwTCo_WVaFlx-j9wiUOGiSIVH6fA";

    // API aanroep met Fetch
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // VERVANG DE ALERT DOOR DEZE REGEL:
            window.location.href = 'pages/bedankt.html'; 
        } else {
            throw new Error('Er ging iets mis bij het verzenden.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Er is een fout opgetreden. Probeer het later opnieuw of neem telefonisch contact met ons op.');
    })
    .finally(() => {
        // Zet de knop weer terug naar normaal
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
    });
});
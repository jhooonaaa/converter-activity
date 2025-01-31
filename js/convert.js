function converter() {
    let phpInput = document.getElementById('php');
    
    if (!phpInput) {
        alert("PHP input field is missing.");
        return;
    }

    let phpAmount = parseFloat(phpInput.value);
    if (isNaN(phpAmount) || phpAmount <= 0) {
        alert("Enter a valid PHP amount");
        return;
    }

    // Updated conversion rates (can be dynamically fetched)
    const conversionRates = {
        xrp: 0.0060,  // PHP to XRP
        usdt: 0.017, // PHP to USDT
        doge: 0.05427,  // PHP to DOGE
        trx: 0.0722   // PHP to TRX
    };

    ['xrp', 'usdt', 'doge', 'trx'].forEach(currency => {
        let element = document.getElementById(currency);
        if (element) {
            element.value = (phpAmount * conversionRates[currency]).toFixed(6);
        }
    });
}

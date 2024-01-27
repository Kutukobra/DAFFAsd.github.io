document.getElementById('temperature-form').addEventListener('submit', function (event) {
    
    event.preventDefault();
    let temperature = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;

    let result;
    let hasilLangkah;
    let hasilLangkah2;

    if (fromUnit === 'F' && toUnit === 'C') { //Fahrenheit ke Celcius
        result = (temperature - 32) * 5/9;
        hasilLangkah = temperature - 32;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°C</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Fahrenheit -> Celsius = (${temperature}°F - 32) * (5/9)</p>
        <p>                            = ${hasilLangkah} * (5/9)</p>
        <p>                            = ${result.toFixed(2)}°C</p>`;
    } else if (fromUnit === 'F' && toUnit === 'R') { //Fahrenheit ke Reamur
        result = (temperature - 32) * 4/9;
        hasilLangkah = temperature - 32;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°R</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Fahrenheit -> Reamur = (${temperature}°F - 32) * (4/9)</p>
        <p>                            = ${hasilLangkah} * (4/9)</p>
        <p>                            = ${result.toFixed(2)}°R</p>`;
    } else if (fromUnit === 'F' && toUnit === 'K') {//Fahrenheit ke Kelvin
        result = (temperature - 32) * 5/9 + 273;
        hasilLangkah = temperature - 32;
        hasilLangkah2 = hasilLangkah*5/9;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°K</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Fahrenheit -> Kelvin = (${temperature}°F - 32) * (5/9) + 273</p>
        <p>                            = ${hasilLangkah} * (5/9) + 273</p>
        <p>                            = ${hasilLangkah2.toFixed(2)} + 273</p>
        <p>                            = ${result.toFixed(2)}°K</p>`;
    } else if (fromUnit === 'C' && toUnit === 'F') {//Celcius ke Fahrenheit
        result = (temperature * 9 / 5) + 32;
        hasilLangkah = temperature * 9/5;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°F</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Celcius -> Fahrenheit = (${temperature}°C * 9/5) + 32</p>
        <p>                            = ${hasilLangkah.toFixed(2)} + 32</p>
        <p>                            = ${result.toFixed(2)}°F</p>`;
    } else if (fromUnit === 'C' && toUnit === 'R') {//Celcius ke Reamur
        result = (temperature * 4 / 5);
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°R</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Celcius -> Reamur = (${temperature}°C * (4/5)</p>
        <p>                            = ${result.toFixed(2)}°R</p>`;
    } else if (fromUnit === 'C' && toUnit === 'K') {//Celcius ke Kelvin
        result = temperature  + 273;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°K</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Celcius -> Kelvin = (${temperature}°C + 273</p>
        <p>                            = ${result.toFixed(2)}°K</p>`;
    } else if (fromUnit === 'R' && toUnit === 'F') {//Reamur ke Fahrenheit
        result = (temperature * 9 / 4) + 32;
        hasilLangkah = temperature * 9/4;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°F.</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Reamur -> Fahrenheit = (${temperature}°R * 9/4) + 32</p>
        <p>                            = ${hasilLangkah.toFixed(2)} + 32</p>
        <p>                            = ${result.toFixed(2)}°F</p>`;
    } else if (fromUnit === 'R' && toUnit === 'C') {//Reamur ke Celcius
        result = (temperature * 5 / 4);
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°C</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Reamur -> Celsius = (${temperature}°R * (5/4)</p>
        <p>                            = ${result.toFixed(2)}°C</p>`;
    } else if (fromUnit === 'R' && toUnit === 'K') {//Reamur ke Kelvin
        result = (temperature * 5/4) + 273;
        hasilLangkah = temperature * 5/4;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°K</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Reamur -> Kelvin = (${temperature}°R * 5/4) + 273</p>
        <p>                            = ${hasilLangkah.toFixed(2)} + 273</p>
        <p>                            = ${result.toFixed(2)}°K</p>`;
    } else if (fromUnit === 'K' && toUnit === 'F') {//Kelvin ke Fahrenheit
        result = (temperature - 273) * 9/5 + 32;
        hasilLangkah = temperature - 273;
        hasilLangkah2 = hasilLangkah*9/5;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°F</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Kelvin -> Fahrenheit = (${temperature}°K - 273) * (9/5) + 32</p>
        <p>                            = ${hasilLangkah} * (9/5) + 32</p>
        <p>                            = ${hasilLangkah2.toFixed(2)} + 32</p>
        <p>                            = ${result.toFixed(2)}°F</p>`;
    } else if (fromUnit === 'K' && toUnit === 'C') {//Kelvin ke Celcius
        result = (temperature - 273);
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°C</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Kelvin -> Celcius = ${temperature}°K - 273</p>
        <p>                            = ${result.toFixed(2)}°C</p>`;
    } else if (fromUnit === 'K' && toUnit === 'R'){ //Kelvin ke Reamur
        result = (temperature - 273) * 4/5;
        hasilLangkah = temperature - 273;
        document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°R</p>`;
        document.getElementById('steps').innerHTML = 
        `<p>Suhu Kelvin -> Reamur = (${temperature}°K - 273)) * (4/5)</p>
        <p>                            = ${hasilLangkah} * (4/5)</p>
        <p>                            = ${result.toFixed(2)}°R</p>`;
    } else{
        document.getElementById('result').innerHTML = `Harap pilih suhu yang sesuai untuk dikonversi (jangan menggunakan suhu yang sama!)`;
        document.getElementById('steps').innerHTML =`<p></p>`;
    }
});

document.getElementById('money-form').addEventListener('submit', function (e) {
    e.preventDefault();
    convertCurrency();
});

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (toCurrency === 'BTC' || fromCurrency === 'BTC') {
        // make CryptoCompare gara2 gak ada BTC kalo di exchangerate API manapun :((((
        const apiKey = 'Yd065a09a632eb090fe7928f6a8c677c0b5cbbc11a673e5e46dcfc400be438e4d';
        const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}&api_key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const result = (amount * data[toCurrency]).toFixed(8); 
                displayResult(result, fromCurrency, toCurrency, null);
            })
            .catch(error => {
                console.error('Error fetching CryptoCompare exchange rate:', error);
                displayResult('Error fetching CryptoCompare exchange rate', fromCurrency, toCurrency, null);
            });
    } else {
        const apiEndpoint = 'https://api.exchangerate-api.com/v4/latest/' + fromCurrency;

        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.rates[toCurrency];
                const result = (amount * exchangeRate).toFixed(2);
                const lastUpdated = new Date(data.time_last_updated * 1000); 
                displayResult(result, fromCurrency, toCurrency, lastUpdated);
            })
            .catch(error => {
                console.error('Error fetching exchange rate:', error);
                displayResult('Error fetching exchange rate', fromCurrency, toCurrency, null);
            });
    }
}

function displayResult(result, fromCurrency, toCurrency, lastUpdated) {
    const resultElement = document.getElementById('money-result');
    let resultText = `${result} ${toCurrency}`;
    
    if (lastUpdated) {
        const formattedLastUpdated = lastUpdated.toLocaleString();
        resultText += `<br>Last Updated: ${formattedLastUpdated}`;
    }

    resultElement.innerHTML = resultText;
}






document.getElementById('temperature-form').addEventListener('submit', function (event) {
    
    event.preventDefault();
    let temperature = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;

    let result;

    class Temperature {
        constructor(name, unit, freezing, boiling)
        {
            this.name = name;
            this.unit = unit;
            this.freezing = freezing;
            this.boiling = boiling;
            this.scale = boiling - freezing;
        }

        convert = function(value, other)
        {
            return (other.scale / this.scale) * (value - this.freezing) + other.freezing;
        }
    }

    types = [];
    types['F'] = new Temperature("Fahrenheit", "F", 32, 212);
    types['C'] = new Temperature("Celcius", "C", 0, 100);
    types['Re'] = new Temperature("Réaumur", "Re", 0, 80);
    types['K'] = new Temperature("Kelvin", "K", 273.15, 373.15);
    types['R'] = new Temperature("Rankine", "R", 491.67, 671.64);
    types['N'] = new Temperature("Newton", "N", 0, 33);
    types['Rø'] = new Temperature("Rømer", "Rø", 7.5, 60);

    if (toUnit === fromUnit)
    {
        document.getElementById('result').innerHTML = `Harap pilih suhu yang sesuai untuk dikonversi (jangan menggunakan suhu yang sama!)`;
        document.getElementById('steps').innerHTML =`<p></p>`;
        return;
    }

    result = types[fromUnit].convert(temperature, types[toUnit]);
    normalizeFreezing = temperature - types[fromUnit].freezing;
    scaledValue = normalizeFreezing * (types[toUnit].scale / types[fromUnit].scale);
    readjustFreezing = scaledValue + types[toUnit].freezing;

    document.getElementById('result').innerHTML = `<p>${result.toFixed(2)}°${types[toUnit].unit}</p>`;
    document.getElementById('steps').innerHTML = 
    `<p>Suhu ${types[fromUnit].unit} ->  ${types[toUnit].unit} = (${temperature}°${types[fromUnit].unit} - ${types[fromUnit].freezing}) * ${(types[toUnit].scale / types[fromUnit].scale)}</p>
    <p>                            = ${normalizeFreezing} * ${(types[toUnit].scale / types[fromUnit].scale).toFixed(2)}</p>
    <p>                            = ${result.toFixed(2)}°${types[toUnit].unit}</p>`;

        
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






const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

const currencySelect2 = document.querySelector(".currency-select2")


function convertValues() {


    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const valueCoinReal = document.querySelector(".value-coin-real")
    const valueCoinDolar = document.querySelector(".value-coin-dolar")
    const valueCoinEuro = document.querySelector(".value-coin-euro")
    const valueCoinLibra = document.querySelector(".value-coin-libra")
    const valueCoinBitcoin = document.querySelector(".value-coin-bitcoin")

    if (currencySelect.value == "real") {
        valueCoinReal.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format( inputCurrencyValue)
    }

    if (currencySelect.value == "dolar") {
        valueCoinDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
    }

    if (currencySelect.value == "euro") {
        valueCoinEuro.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);
    }

    if (currencySelect.value == "libra") {
        valueCoinLibra.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue);
    }

    if (currencySelect.value == "bitcoin") {
        valueCoinBitcoin.innerHTML = new Intl.NumberFormat("de-DE", {
             maximumSignificantDigits: 10,
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue);
    }
}

function changeCurrency() {

    if (currencySelect.value == "real") { document.getElementById("brasil-coin").style.display = "flex"; }
    else {
        document.getElementById("brasil-coin").style.display = "none";
    }
    
    if (currencySelect.value == "dolar") { document.getElementById("usa-coin").style.display = "flex"; }
    else {
        document.getElementById("usa-coin").style.display = "none";
    }

    if (currencySelect.value == "euro") { document.getElementById("euro-coin").style.display = "flex"; }
    else {
        document.getElementById("euro-coin").style.display = "none";
    }


    if (currencySelect.value == "libra") { document.getElementById("libra-coin").style.display = "flex"; }
    else {
        document.getElementById("libra-coin").style.display = "none";
    }

    if (currencySelect2.value == "bitcoin") { document.getElementById("bitcoin").style.display = "flex"; }
    else {
        document.getElementById("bitcoin").style.display = "none";
    }

}


function convertValues2() {

    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const valueCoinRealt = document.querySelector(".value-coin-real2")
    const valueCoinDolart = document.querySelector(".value-coin-dolar2")
    const valueCoinEurot = document.querySelector(".value-coin-euro2")
    const valueCoinLibrat = document.querySelector(".value-coin-libra2")
    const valueCoinBitcoint = document.querySelector(".value-coin-bitcoin2")


    const CoinReal2 = 1.0
    const dolarToday2 = 5.2
    const euroToday2 = 5.35
    const LibraToday2 = 6.22
    const bitcoinToday2 = 227366.22

    
    if (currencySelect2.value == "realt") {
        valueCoinRealt.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue/ CoinReal2);
    } 

    if (currencySelect2.value == "dolart") {
        valueCoinDolart.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday2);
    }


    if (currencySelect2.value == "eurot") {
        valueCoinEurot.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday2);
    }


    if (currencySelect2.value == "librat") {
        valueCoinLibrat.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday2);
    }

    if (currencySelect2.value == "bitcoint") {
        valueCoinBitcoint.innerHTML = new Intl.NumberFormat("de-DE", {
            maximumSignificantDigits: 10,
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/ bitcoinToday2);
    }
    
   
}
function changeCurrencyt() {

    if (currencySelect2.value == "realt") { document.getElementById("brasil-coin2").style.display = "flex"; }
    else {
        document.getElementById("brasil-coin2").style.display = "none";
    }
    if (currencySelect2.value == "dolart") { document.getElementById("usa-coin2").style.display = "flex"; }
    else {
        document.getElementById("usa-coin2").style.display = "none";
    }

    if (currencySelect2.value == "eurot") { document.getElementById("euro-coin2").style.display = "flex"; }
    else {
        document.getElementById("euro-coin2").style.display = "none";
    }

    if (currencySelect2.value == "librat") { document.getElementById("libra-coin2").style.display = "flex"; }
    else {
        document.getElementById("libra-coin2").style.display = "none";
    }
    if (currencySelect2.value == "bitcoint") { document.getElementById("bitcoin2").style.display = "flex"; }
    else {
        document.getElementById("bitcoin2").style.display = "none";
    }

}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)

currencySelect2.addEventListener("change", changeCurrencyt)

convertButton.addEventListener("click", convertValues2)


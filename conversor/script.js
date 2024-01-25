const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")






function convertValues() {


    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueCoinReal = document.querySelector(".value-coin-real")
    const valueCoinDolar = document.querySelector(".value-coin-dolar")
    const valueCoinEuro = document.querySelector(".value-coin-euro")
    const valueCoinLibra = document.querySelector(".value-coin-libra")
    const valueCoinBitcoin = document.querySelector(".value-coin-bitcoin")

    const dolarToday = 5.2
    const euroToday = 5.35
    const LibraToday = 6.22
    const bitcoinToday = 227366.22


    if (currencySelect.innerHTML ) { 

    valueCoinReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)}


    if (currencySelect.value == "dolar") {
        valueCoinDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        valueCoinEuro.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        valueCoinLibra.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday)
    }

    if (currencySelect.value == "bitcoin") {
        valueCoinBitcoin.innerHTML = new Intl.NumberFormat("de-DE", {
            maximumSignificantDigits: 10,
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById ("currency-name")
    const currencyImg = document.querySelector (".currency-img")

    if (currencySelect.value == "dolar")
    {currencyName.innerHTML= "Dólar americano"
     currencyImg.src ="./assets./usa.png"
    }

    if (currencySelect.value == "euro")
    {currencyName.innerHTML= "Euro"
    currencyImg.src ="./assets/euro.png"}


    if (currencySelect.value == "libra")
    {currencyName.innerHTML= "libra esterlina"
    currencyImg.src ="./assets/libra 1.png"}
    
    if (currencySelect.value == "bitcoin")
    {currencyName.innerHTML= "Bitcoin"
    currencyImg.src ="./assets/bitcoin 1.png"}
    
    

}



currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)
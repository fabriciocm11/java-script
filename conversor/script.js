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
   
        valueCoinReal.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    if (currencySelect.value == "dolar") {
        valueCoinDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)}
    

    if (currencySelect.value == "euro") {
        valueCoinEuro.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)}
    

    if (currencySelect.value == "libra") {
        valueCoinLibra.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday)}
    

    if (currencySelect.value == "bitcoin") {
        valueCoinBitcoin.innerHTML = new Intl.NumberFormat("de-DE", {
            maximumSignificantDigits: 10,
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)}

   
        
        

}

function changeCurrency() {
    

    if (currencySelect.value == "dolar")
    {document.getElementById("usa-coin").style.display = "flex";}
    else
        {document.getElementById("usa-coin").style.display = 'none';
   }
    
    
    if (currencySelect.value == "euro")
    {document.getElementById("euro-coin").style.display = "flex";}
    else
        {document.getElementById("euro-coin").style.display = 'none';
   }


    if (currencySelect.value == "libra")
    {document.getElementById("libra-coin").style.display = "flex";}
    else
        {document.getElementById("libra-coin").style.display = 'none';
   }
    if (currencySelect.value == "bitcoin")
    {document.getElementById("bitcoin").style.display = "flex";}
    else
        {document.getElementById("bitcoin").style.display = 'none';
   }
    

}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)





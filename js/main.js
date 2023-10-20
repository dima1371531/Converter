//Валюта
const valute = {}

const elementUSD = document.querySelector('#USD');
const elementEUR = document.querySelector('#EUR');
const elementGBP = document.querySelector('#GBP');

getCurr()

async function getCurr(){
    const url = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then();
    const data = await url.json();
    const result = await data;

    //Выберем нужные валюты
    valute.USD = result.Valute.USD;
    valute.EUR = result.Valute.EUR;
    valute.GBP = result.Valute.GBP;

    elementUSD.textContent = valute.USD.Value.toFixed(2);
    elementEUR.textContent = valute.EUR.Value.toFixed(2);
    elementGBP.textContent = valute.GBP.Value.toFixed(2)
}

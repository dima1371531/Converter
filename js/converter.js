//Валюта
const valute = {}

getCurr()

//Слушатель заполнений
const input = document.querySelector('#input');
const select = document.querySelector('#select-r');
const result = document.querySelector('#result');

async function getCurr(){
    const url = await fetch('https://www.cbr-xml-daily.ru/daily_json.js').then();
    const data = await url.json();
    const result = await data;

    //Выберем нужные валюты
    valute.USD = result.Valute.USD;
    valute.EUR = result.Valute.EUR;
    valute.GBP = result.Valute.GBP;
}

const fun = function(){
    result.value = (parseFloat(input.value) / valute[select.value].Value).toFixed(2); //Формула для расчёта валюты
};

input.oninput = fun;
select.oninput = fun;







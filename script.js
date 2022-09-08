const currency_one = document.getElementById('currency-one');
const amount_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_two = document.getElementById('currency-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rate & update the Dom


function calculate() {
    const currencyEl_one = currency_one.value;
    const currencyEL_two = currency_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyEl_one}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });
}
   
//Event Listeners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);



calculate();
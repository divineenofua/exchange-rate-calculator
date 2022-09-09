const currency_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currency_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rate & update the Dom


function calculate() {
    const currencyEl_one = currency_one.value;
    const currencyEL_two = currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/3a981741a1915783946ae990/latest/${currencyEl_one}`)
    .then(res => res.json())
    .then(data => {
       
        const rate = data.conversion_rates[currencyEL_two];
    
        rateEl.innerText = `1 ${currencyEl_one} = ${rate} ${currencyEL_two}`;
        amount_two.value = (amount_one.value * rate).toFixed(2);

     });
}
   
//Event Listeners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp =currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
});



calculate();
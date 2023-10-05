var user = "User";
var salutation = "Welcome, ";
var greeting = salutation + user + " Here is the most background of Payday Series.";
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 40,
        summerDiscount = .10,
        summerPrice = price - (price * summerDiscount)
        priceEl = document.getElementById('price'),
        summerPriceEl = document.getElementById('summer-price');

priceEl.textContent = price.toFixed(2);
summerPriceEl.textContent = summerPrice.toFixed(2);
const priceOfIcecream = 5;
let paymentRecieved = prompt("Yo, it's time to pay for your creamy icecream! 5$ for one cup.");
let isPaymentEnough = paymentRecieved >= 5;
if (isPaymentEnough) {
    print("Enjoy your icecream! Here's your change: $" + (paymentRecieved - priceOfIcecream));
 }
    else {
        print("Not enough cash!")
    }
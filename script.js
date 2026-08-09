function increase(btn) {
    let qty = btn.parentElement.querySelector(".qty");
    qty.innerText = parseInt(qty.innerText) + 1;
}

function decrease(btn) {
    let qty = btn.parentElement.querySelector(".qty");

    let value = parseInt(qty.innerText);

    if (value > 1) {
        qty.innerText = value - 1;
    }
}

function addToCart(product, price, btn) {

    let card = btn.parentElement;

    let quantity = parseInt(card.querySelector(".qty").innerText);

    let total = quantity * price;

    card.querySelector(".cart").innerHTML =
        `
        Product : ${product}<br>
        Quantity : ${quantity}<br>
        Total : ₹${total}
        `;
}

function placeOrder(product, price, btn) {

    let card = btn.parentElement;

    let quantity = parseInt(card.querySelector(".qty").innerText);

    let total = quantity * price;

    alert(
        `Order Successful!

Product : ${product}
Quantity : ${quantity}
Total : ₹${total}`
    );

    // Redirect to payment page
    // window.location.href = "payment.html";
}
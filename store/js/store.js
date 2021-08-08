function calculatePriceWithDiscount(price, discount) {
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}

function productPriceWithDiscount() {
    const price = document.getElementById('price');
    const priceValue = price.value;

    const discount = document.getElementById('discount');
    const discountValue = discount.value;

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue);

    const resultPrice = document.getElementById('priceResult');
    resultPrice.innerHTML = 'El precio con descuento es $' + priceWithDiscount;
}

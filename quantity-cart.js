const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 3 },
];
function calculateTotal() {
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        const itemPrice = item.quantity * item.price;
        sum = sum + itemPrice;
    }
    return sum;
}
const result = calculateTotal();
console.log('Total expense today:', result);
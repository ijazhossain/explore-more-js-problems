
const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
];
function cheapestPhone(phonesArray) {
    let cheapestPhone = phonesArray[0];
    for (let i = 0; i < phonesArray.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapestPhone.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myPhone = cheapestPhone(phones);
console.log(myPhone);
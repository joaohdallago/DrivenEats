let selectedDish;
let selectedDrink;
let selectedDessert;

function selectDish(dish) {
    selectedDish = {
        name: dish.querySelector('h2').innerHTML,
        price: dish.querySelector('span').innerHTML.replace("R$", '')
    };

    const dishs = document.querySelectorAll('.dishs article');
    dishs.forEach((dish) => dish.classList.remove('selected'));

    dish.classList.add('selected');

    unlockSendButton();
}

function selectDrink(drink) {
    selectedDrink = {
        name: drink.querySelector('h2').innerHTML,
        price: drink.querySelector('span').innerHTML.replace("R$", '')
    };
    const drinks = document.querySelectorAll('.drinks article');
    drinks.forEach((drink) => drink.classList.remove('selected'));

    drink.classList.add('selected');

    unlockSendButton();
}

function selectDessert(dessert) {
    selectedDessert = {
        name: dessert.querySelector('h2').innerHTML,
        price: dessert.querySelector('span').innerHTML.replace("R$", '')
    };

    const desserts = document.querySelectorAll('.desserts article');
    desserts.forEach((dessert) => dessert.classList.remove('selected'));

    dessert.classList.add('selected');

    unlockSendButton();
}

function unlockSendButton() {
    if (selectedDish !== undefined && selectedDrink !== undefined && selectedDessert !== undefined) {
        const unlockedSendButton = document.querySelector('.unlocked-send-button');
        const lockedSendButton = document.querySelector('.locked-send-button');

        lockedSendButton.classList.add('display-none');
        unlockedSendButton.classList.remove('display-none');
    }
}

function toggleConfirmOrder() {
    renderConfirmOrder();

    const containerConfirmOrder = document.querySelector('.container-confirm-order');
    containerConfirmOrder.classList.toggle('display-none');
}

function totalPrice() {
    let finalPrice = 0;
    const priceList = [selectedDish.price, selectedDrink.price, selectedDessert.price];

    priceList.forEach(price => finalPrice += Number(price.replace(',', '.')));

    return finalPrice.toFixed(2)
}

function renderConfirmOrder() {
    const confirmOrderString = `<li>
    <h2>${selectedDish.name}</h2>
    <span>R$${selectedDish.price}</span>
</li>
<li>
    <h2>${selectedDrink.name}</h2>
    <span>R$${selectedDrink.price}</span>
</li>
<li>
    <h2>${selectedDessert.name}</h2>
    <span>R$${selectedDessert.price}</span>
</li>
<li>
    <h2>TOTAL</h2>
    <span>R$${totalPrice().replace('.', ',')}</span>
</li>`

    const confirmOrderUl = document.querySelector('.confirm-order ul');
    confirmOrderUl.innerHTML = confirmOrderString;
}

function whatsappOrder() {
    const customerName = prompt('Insira seu nome');
    const customerAddress = prompt('Insira seu endereço');

    const whatsappOrderString = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${selectedDish.name}
    - Bebida: ${selectedDrink.name}
    - Sobremesa: ${selectedDessert.name}
    Total: R$ ${totalPrice()}
    
    Nome: ${customerName}
    Endereço: ${customerAddress}
    `;

    const whatappLink = `https://wa.me/5548998399037?text=${encodeURIComponent(whatsappOrderString)}`

    window.open(whatappLink)
}
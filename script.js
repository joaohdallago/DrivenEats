let selectedDish;
let selectedDrink;
let selectedDessert;



function selectDish(dish) {
    selectedDish = {
        name: dish.querySelector('h2').innerHTML,
        price: dish.querySelector('span').innerHTML.replace("R$", '')
    };

    console.log(selectedDish)

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
    const containerConfirmOrder = document.querySelector('.container-confirm-order');
    containerConfirmOrder.classList.toggle('display-none');
}

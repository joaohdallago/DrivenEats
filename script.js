let selectedDish;
let selectedDrink;
let selectedDessert;

function selectDish(dish) {
    selectedDish = {};

    console.log(dish.querySelector('h2').innerHTML)

    const dishs = document.querySelectorAll('.dishs article');
    dishs.forEach((dish) => dish.classList.remove('selected'));

    dish.classList.add('selected');

    unlockSendButton();
}

function selectDrink(drink) {
    selectedDrink = {};

    const drinks = document.querySelectorAll('.drinks article');
    drinks.forEach((drink) => drink.classList.remove('selected'));

    drink.classList.add('selected');

    unlockSendButton();
}

function selectDessert(dessert) {
    selectedDessert = {};

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

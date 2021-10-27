let dishIsSelected = false;
let drinkIsSelected = false;
let dessertIsSelected = false;

function selectDish(dish) {
    dishIsSelected = true;

    const dishs = document.querySelectorAll('.dishs article');
    dishs.forEach((dish) => dish.classList.remove('selected'));

    dish.classList.add('selected');

    unlockSendButton();
}

function selectDrink(drink) {
    drinkIsSelected = true;

    const drinks = document.querySelectorAll('.drinks article');
    drinks.forEach((drink) => drink.classList.remove('selected'));

    drink.classList.add('selected');

    unlockSendButton();
}

function selectDessert(dessert) {
    dessertIsSelected = true;

    const desserts = document.querySelectorAll('.desserts article');
    desserts.forEach((dessert) => dessert.classList.remove('selected'));

    dessert.classList.add('selected');

    unlockSendButton();
}

function unlockSendButton() {
    if (dishIsSelected && drinkIsSelected && dessertIsSelected) {
        const unlockedSendButton = document.querySelector('.unlocked-send-button');
        const lockedSendButton = document.querySelector('.locked-send-button');

        lockedSendButton.classList.add('display-none');
        unlockedSendButton.classList.remove('display-none');
    }
}
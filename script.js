function selectDish(dish) {
    const dishs = document.querySelectorAll('.dishs article')
    dishs.forEach((dish) => dish.classList.remove('selected'))

    dish.classList.add('selected')
}

function selectDrink(drink) {
    const drinks = document.querySelectorAll('.drinks article')
    drinks.forEach((drink) => drink.classList.remove('selected'))

    drink.classList.add('selected')
}

function selectDessert(dessert) {
    const desserts = document.querySelectorAll('.desserts article')
    desserts.forEach((dessert) => dessert.classList.remove('selected'))

    dessert.classList.add('selected')
}
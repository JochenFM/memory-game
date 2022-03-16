const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/pizza.png',
    },

    {
        name: 'pizza',
        img: 'images/hotdog.png',
    },

    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/pizza.png',
    },

    {
        name: 'pizza',
        img: 'images/hotdog.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)
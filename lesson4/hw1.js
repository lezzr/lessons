var items = [
    {
        name: 'item1',
        price: 312,
        count: 1
    },
    {
        name: 'item2',
        price: 61,
        count: 1
    },
    {
        name: 'item3',
        price: 72,
        count: 3
    },

    {
        name: 'item4',
        price: 152,
        count: 2
    },
    {
        name: 'item5',
        price: 412,
        count: 1
    },
]

var i = 0
var summ = 0

function countBasketPrice() {
    while (i <= items.length - 1) {

        summ = +summ + (+items[i].price) * (+items[i].count);
        i++;

    }
    return summ;
    console.log(countBasketPrice);
}

console.log(countBasketPrice());
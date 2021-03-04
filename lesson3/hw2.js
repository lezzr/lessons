
var items = [
    ['item1', 312, 1],
    ['item2', 61, 1],
    ['item3', 72, 3],
    ['item4', 152, 2],
    ['item5', 412, 1],
]

var i = 0
var summ = 0

function countBasketPrice() {
    while (i <= items.length - 1) {

        summ = +summ + (+items[i][1]) * (+items[i][2]);
        i++;

    }
    return summ;
    console.log(countBasketPrice);
}

console.log(countBasketPrice());
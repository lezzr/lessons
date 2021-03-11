const cartItem = {
    render(item) {
        return `<div class="item">
        <div><b>Наименование</b>: ${item.name}</div>
        <div><b>Цена</b>: ${item.price}</div>
        <div><b>Количество</b>: ${item.count}</div>
        <div><b>Стоимость</b>: ${item.count * item.price}</div>
        </div>`;
    }
}

const cart = {
    cartBlock: null,
    cartButton: null,
    cartItem,
    items: [
        {
            product_id: 1,
            name: 'item1',
            price: 312,
            count: 1
        },
        {
            product_id: 2,
            name: 'item2',
            price: 61,
            count: 1
        },
        {
            product_id: 3,
            name: 'item3',
            price: 72,
            count: 3
        },

        {
            product_id: 4,
            name: 'item4',
            price: 152,
            count: 2
        },
        {
            product_id: 5,
            name: 'item5',
            price: 412,
            count: 1
        },
    ],

    init() {
        this.cartBlock = document.querySelector('.cart');
        this.cartButton = document.querySelector('.clear-cart');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },

    render() {
        if (this.items.length) {
            this.items.forEach(item => {
                this.cartBlock.insertAdjacentHTML('beforeEnd', this.cartItem.render(item));
            });
            this.cartBlock.insertAdjacentHTML('beforeEnd', `В корзине ${this.items.length} штук, цена: ${this.countBasketPrice()}`);
        }
        else {
            this.cartBlock.textContent = 'Пусто';
        }
    },

    countBasketPrice() {
        {
            return this.items.reduce(function (price, item) {
                return price + item.price * item.count;
            }, 0);
        }
    },
    clearCart() {
        this.items = [];
        this.render();
    },
};

cart.init();
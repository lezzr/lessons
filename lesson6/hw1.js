const cata = {
    catalogBlock: null,
    cart: {},
    list: [
        {
            product_id: 1,
            name: 'item1',
            price: 312,

        },
        {
            product_id: 2,
            name: 'item2',
            price: 61,

        },
        {
            product_id: 3,
            name: 'item3',
            price: 72,

        },

        {
            product_id: 4,
            name: 'item4',
            price: 152,

        },
        {
            product_id: 5,
            name: 'item5',
            price: 412,

        },
    ],
    /**
    * @param catalogBlockClass
    * @param cart
    * @param item 
    * @returns {string} 
    */

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const product_id = +event.target.dataset.product_id;
        this.cart.addToBasket(product_id);
    },

    render() {
        if (this.getCatalogLengt() > 0) {
            this.renderCatalogList();
        }
        else {
            this.renderEmpty();
        }
    },

    getCatalogLengt() {
        return this.list.length;
    },

    /**

     */

    renderCatalogItem(item) {
        return `<div class="product">
        <h3>${item.name}</h3>
        <p>${item.price} руб.</p>
        <button class="product__add-to-cart" data-id_product="${item.product_id}">В корзину</button>
        </div>`;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeEnd', this.renderCatalogItem(item));
        })
    },

    renderEmpty() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeEnd', 'Пусто');
    },

};

const cart = {
    cartBlock: null,
    clearCart: null,
    cataList: [],
    goods: [
        {

        },
    ],
    /**
    * @param cartBlockClass
    * @param clearCart
    * @param cataList
    * @returns {number}
    */
    init(cartBlockClass, clearCart, cataList) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clearCart = document.querySelector(`.${clearCart}`);
        this.cataList = cataList;

        this.addEventHandlers();
        this.render();
    },
    addEventHandlers() {
        this.clearCart.addEventListener('click', this.dropCart.bind(this));
    },

    getCartGoodsLength() {
        return this.goods.length;
    },


    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeEnd', 'Корзина пуста');
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    findProductInCatalog(product_id) {
        return this.cataList.find(product => product.product_id === product_id);
    },

    addToBasket(product_id) {
        const product = this.findProductInCatalog(product_id);

        if (product) {
            const findInBasket = this.goods.find(({ product_id }) => product.product_id === product_id);
            if (findInBasket) {
                findInBasket.count++;
            } else {
                this.goods.push({ ...product, count: 1 });
            }
            this.render();
        }
        // } else {
        //     alert('Ошибка');
        // }
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.count} шт.</p>
            </div>`;
    }
};

cata.init('catalog', cart);
cart.init('cart', 'clear-cart', cata.list);

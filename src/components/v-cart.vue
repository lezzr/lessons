<template>
<div class="v-cart">
  <header class="top__cata center">
    <div class="top_left_nav">
      <p> <SPAN class="diff_text">SHOPPING CART</SPAN></p>
    </div>
  </header><section class="cart center">
  <div class="cards">
    <div class="cards__left">
      <p v-if="!cart_data.length">EMPTY</p>
      <v-cart-item
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
      />
      <div class="cards__buttons">
        <a href="#" class="cards__buttons_s" @click="clearCart()">CLEAR SHOPPING CART</a>
        <a href="#" class="cards__buttons_s">CONTINUE SHOPPING</a>
      </div>
    </div>
    <div class="cards__right">
      <div class="cards__forms">
        <h1 class="cart__form_header">SHIPPING ADRESS</h1>
        <input class="cart__form" type="text" placeholder="Bangladesh" required>
        <input class="cart__form" type="text" placeholder="State" required>
        <input class="cart__form" type="text" placeholder="Postcode / Zip" required>
        <a href="#" class="cart__form_button">GET A QUOTE</a>
      </div>
      <div class="cards__checkout">
        <h3 class="checkout__head">SUB TOTAL <span class="checkout__head_span">${{ cartTotalCost }}</span></h3>
        <h1 class="checkout__text">GRAND TOTAL <span
            class="diff_text checkout__head_span checkout__head_bold">${{ cartTotalCost }}</span>
        </h1>
        <hr class="checkout__hr">
        <a href="#" class="checkout__button">PROCEED TO CHECKOUT</a>
      </div>

    </div>
  </div>

</section>


</div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'
export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
      'CLEAR_CART'
    ]),
    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    clearCart(){
      this.CLEAR_CART()
    }

  },
  data() {
    return {}
  },
  computed: {
    cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        })

        return result;
      } else {
        return 0
      }
    }
  }
}
</script>

<style>
.v-cart{
  margin-bottom: 100px;
}
.cards{
  display: flex;
  margin-top: 96px;
}
.cards__left {

}
.cards__counter {
  margin-left: -12px;
}
.cards__buttons_s {
  padding: 9px 16px;
  font-size: 12px;
  line-height: 14px;
  margin-right: 9px;
  margin-left: 0;
}
.cards__right {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 360px;
}
.cards__forms {
  margin-bottom: 0;
}
.cards__checkout {
  margin-bottom: 96px;
}
.cards__buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 652px;
  margin-bottom: 128px;
  margin-top: 72px;
  margin-right: 128px;
}
.cards__buttons_s {
  border: 1px solid #000;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 40px;
  padding-left: 40px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
}

.cards__buttons_s:hover {
  border-color: #A4A4A4;
  color: #B1B1B1;
}
.cards__right {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 360px;
}

.cards__register {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.cards__forms {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.cards__checkout {
  width: 360px;
  height: 214px;
  background-color: #F5F3F3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  margin-top: 56px;
}

.cart__form {
  width: 320px;
  height: 45px;
  margin-bottom: 20px;
  padding-left: 16px;
  padding-right: 20px;
}

.cart__form_header {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-bottom: 20px;
}

.cart__form_button {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  color: #4A4A4A;
  border: 1px solid #A4A4A4;
  padding: 10px 0px 10px 0px;
  width: 100px;
  text-align: center;
}

.cart__form_button:hover {
  border-color: #A4A4A4;
  color: #B1B1B1;
}

.checkout {
  margin: 0;
}

.checkout__head {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: #4A4A4A;
  margin-top: 40px;
  margin-right: 34px;
}

.checkout__head_span {
  padding-left: 24px;
}

.checkout__head_bold {
  font-weight: bold;
}

.checkout__text {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
  margin-top: 12px;
  margin-right: 34px;
  margin-bottom: 21px;
}

.checkout__hr {
  width: 275px;
  margin-right: 42px;
  border: 1px solid;
  border-color: #E2E2E2;
  margin-bottom: 18px;
}

.checkout__button {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  padding: 16px 40px 16px 40px;
  background-color: #F16D7F;
  margin-right: 42px;
}

.checkout__button:hover {
  background-color: #E05C6E;
}

</style>

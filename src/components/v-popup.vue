<template>
  <div class="v-popup"
   >
    <div class="popup-header">
      <h3 class="checkout__head">SUB TOTAL <span class="checkout__head_span">${{ cartTotalCost }}</span></h3>
    </div>
    <div class="popup-content">
      <vModalCart
          class="v-popup-card"
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
      />
    </div>
    <div class="popup-footer">
      <button class="close_modal"
              @click="closePopup"
      >close</button>
    </div>
  </div>
</template>

<script>
import vModalCart from './v-modal-cart'
import {mapActions, mapGetters} from "vuex";
export default {
  name: "v-popup",
  components:{
    vModalCart
  },
  props: {

    cart_data:
        {
      type: Array,
      default() {
        return []
      }
    },
  },
  data(){
    return{}
  },
  methods:{
    closePopup(){
      this.$emit('closePopup')
    },

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
  computed: {
    ...mapGetters([
      'CART'
    ]),
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
  },
}
</script>

<style scoped>
.v-popup{
  max-height: 700px;
  overflow-x: hidden;
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  right: 30px;
  box-shadow: 0 0 18px 0 #2c3e50;
  background: #F8F8F8;
  z-index: 10;
}
.popup-header{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.popup-content{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
}
.popup-footer{
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-popup-card{
  shape-image-threshold: revert;
  width: 200px;
  display: flex;
  flex-direction: column;
}


</style>

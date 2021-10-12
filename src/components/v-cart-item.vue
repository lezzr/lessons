<template>
<div class="v-cart-item">
<!--  <img class="v-cart-item__image"-->
<!--       :src=" require('../assets/images/' + cart_item_data.image) " alt="img">-->
<!--  <div class="v-cart-item__info card_text">-->
<!--    <p>{{cart_item_data.name}}</p>-->
<!--    <p>{{cart_item_data.price}}</p>-->
<!--    <p>{{cart_item_data.article}}</p>-->
<!--  </div>-->
<!--  <div class="v-cart-item__quantity">-->
<!--    <p>qty:</p>-->
<!--    <span>-->
<!--      <span class="qty__btn" @click="decrementItem">-</span>-->
<!--      {{cart_item_data.quantity}}-->
<!--      <span class="qty__btn" @click="incrementItem">+</span>-->
<!--    </span></div>-->
<!--  <button @click="deleteFromCart">delete</button>-->
<!--  //-->
  <div class="cards__card">
    <img :src=" require('../assets/images/' + cart_item_data.image) " alt="" class="card_img">
    <div class="cards__card_right">
      <a href="#" class="cards__header">{{cart_item_data.name}} <br> T-SHIRT</a>
      <p class="cards__text">Price: <span class="diff_text">${{cart_item_data.price}}</span> </p>
      <p class="cards__text">Color: Red</p>
      <p class="cards__text">Size: Xl </p>
      <p class="cards__text">Quantity: {{cart_item_data.quantity}}</p>
      <a href="#" class="cards__remove"><svg width="18" height="18" viewBox="0 0 18 18"
                                             fill="none" xmlns="http://www.w3.org/2000/svg" @click="deleteFromCart">
        <path
            d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
            fill="#575757" />
      </svg></a>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods:{

    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  }
}
</script>

<style>

.v-cart-item__image{
  max-width: 50px;
}
.qty__btn{
  cursor: pointer;
}

.cards__card {
  width: 652px;
  height: 306px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 40px;
  margin-right: 128px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.cards__card img {
  width: 262px;
  -o-object-fit: cover;
  object-fit: cover;
}
.cards__card_right {
  margin-top: 22px;
  margin-left: 294px;
  position: absolute;
}
.cards__header {
  display: inline-block;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #222222;
  margin-bottom: 42px;
}
.cards__text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #575757;
  padding-bottom: 8px;
}
.cards__remove {
  position: relative;
  top: -236px;
  left: 244px;
}


</style>

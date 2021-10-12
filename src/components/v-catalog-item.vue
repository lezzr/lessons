<template>
<div class="v-catalog-item card">
  <img class="v-catalog-item__image cards_img"
       :src=" require('../assets/images/' + product_data.image) "
       alt="img"
       @click="toProductPage"
  >
  <div class="card_text">
    <h3 class="v-catalog-item__name featured_links"
        @click="toProductPage"
    >{{product_data.name}}</h3>
    <br>
    <p>{{product_data.description}}</p>
    <br>
    <p class="v-catalog-item__price diff_text" >${{ product_data.price }}.00</p>
    <p
        class="v-catalog-item__add_to_cart_btn btn card__to__cart"
        @click="addToCart"
    ><img src="../assets/images/cart.svg" alt="cart"> Add to Cart
    </p></div>

</div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props:{
    product_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart' ,this.product_data)
    },
    toProductPage(){
      this.$emit('toProductPage', this.product_data.article)
    }
  }
}
</script>

<style>

.cards_img {
  width: 100%;
}

.card {
  width: 31%;
  background: #F8F8F8;
  position: relative;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
}

.card:hover {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

.card:hover .cards_img {
  -webkit-filter: brightness(50%);
  filter: brightness(50%);
}

.card:hover .card__to__cart {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.card__to__cart {
  display: none;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 139px;
  height: 44px;
  border: 1px solid #fff;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  position: absolute;
  /*top: 188px;*/
  /*left: 111px;*/
  top: 40%;
  left: 30%;
}

.card__to__cart:hover {
  -webkit-box-shadow: 0 0 5px #fff;
  box-shadow: 0 0 5px #fff;
}

.card_text {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #5D5D5D;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 24px 24px 16px 16px;
  text-align: left;
}
.diff_text {
  color: #F16D7F;
}

</style>

<template>

<div class="v-product">
  <header class="top__cata center">
    <div class="top_left_nav">
      <p> <SPAN class="diff_text">NEW ARRIVALS</SPAN></p>
    </div>
    <div class="top_right_">
      <nav class="top_right_nav">
        <a class="" href="index.html">HOME</a> /
        <a class="" href="#">MEN</a> /
        <a class="" href="#"><SPAN class="diff_text_cata"> NEW ARRIALS </SPAN></a>
      </nav>
    </div>
  </header>
  <section>
    <div class="product_top">
      <img
          v-if="product.image"
          :src=" require('../assets/images/' + product.image) "
          alt="img">
      <div class="product_top__arrows">
        <div class="product_top__arrows_l"><a href="#">
          <svg width="13" height="23" viewBox="0 0 13 23" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
                fill="black" />
          </svg>
        </a>
        </div>
        <div class="product_top__arrows_r"><a href="#">
          <svg width="13" height="23" viewBox="0 0 13 23" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"
                fill="black" />
          </svg>
        </a></div>
      </div>
    </div>
  </section>
  <section class="product_center">
    <div class="product__card">
      <h3 class="product__card_category">WOMEN COLLECTION</h3>
      <hr class="product__card_category_hr">
      <h2 class="product__card_h">{{ product.name }}</h2>
      <p class="product__card_text">{{ product.description }}</p>
      <h1 class="product__card_price">${{ product.price }}</h1>
      <hr class="product__card_hr">
      <div class="cards_menu">
        <details class="cards_menu__trending">
          <summary>CHOOSE COLOR <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                fill="#6F6E6E" />
          </svg></summary>
          <input type="checkbox" name="option1" value="a1">placeholder<br>
          <input type="checkbox" name="option2" value="a2">placeholder<br>
          <input type="checkbox" name="option3" value="a3">placeholder<br>
          <input type="checkbox" name="option4" value="a4">placeholder<br>
          <input type="checkbox" name="option5" value="a5">placeholder<br>
        </details>
        <details class="cards_menu__s">
          <summary>CHOOSE SIZE <svg class="svg_arr-down" width="11" height="6" viewBox="0 0 11 6"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="svg_arr-down"
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E" />
          </svg></summary>
          <div class="cards_menu__size">
            <li>
              <ul><input type="checkbox" name="option1" value="a1">
                <label class="cards_menu__size_input">XS</label>
              </ul>
              <ul><input type="checkbox" name="option2" value="a2">
                <label class="cards_menu__size_input">S</label>
              </ul>
              <ul><input type="checkbox" name="option3" value="a3">
                <label class="cards_menu__size_input">M</label>
              </ul>
              <ul><input type="checkbox" name="option4" value="a4">
                <label class="cards_menu__size_input">L</label>
              </ul>
            </li>
          </div>
        </details>
        <details class="cards_menu__price">
          <summary>QUANTITY <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                fill="#6F6E6E" />
          </svg></summary>
        </details>
      </div>
      <button @click="addToCart" class="product__content_tocart"><svg width="27" height="25" viewBox="0 0 27 25"
                                                                  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z"
            fill="#EF5B70" />
      </svg>Add to
        Cart</button>
    </div>
  </section>
</div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "v-products",
  props:{},
  data(){
    return{}
  },
  computed:{
    ...mapGetters([
        'PRODUCTS'
    ]),
    product(){
      let result = {}
      let ct = this
      this.PRODUCTS.map(function(item){
        if (item.article === ct.$route.query.product){
          result = item
        }
      })
      return result
    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCart(){
      this.ADD_TO_CART(this.product)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style scoped>
.top__cata {
  background: #F1E4E6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0;
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
  height: 148px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.top_left_nav {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
}
.top_right_nav {
  padding-bottom: 46px;
}
.product_top {
  max-width: 100%;
  background: #F7F7F7;
  height: 776px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.product_top img {
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.product_top__arrows {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 338px;
}

.product_top__arrows_l {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 12px;
  padding-bottom: 8px;
  background-color: rgba(42, 42, 42, 0.15);
}

.product_top__arrows_l:hover path {
  fill: #F16D7F;
}

.product_top__arrows_r {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 12px;
  padding-bottom: 8px;
  background-color: rgba(42, 42, 42, 0.15);
}

.product_top__arrows_r:hover path {
  fill: #F16D7F;
}
.product_center {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.product__card {
  margin-top: -64px;
  z-index: 1;
  width: 1136px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #EAEAEA;
  margin-left: 230px;
  margin-right: 230px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background: #FFFFFF;
  margin-bottom: 128px;
}

.product__card_category {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  margin-top: 64px;
  margin-bottom: 12px;
  color: #F16D7F;
}

.product__card_category_hr {
  width: 64px;
  height: 3px;
  border: none;
  background-color: #EF5B70;
  margin-bottom: 12px;
}

.product__card_h {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #4D4D4D;
  margin-bottom: 48px;
}

.product__card_price {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #EF5B70;
  margin-bottom: 64px;
}

.product__card_text {
  padding-left: 292px;
  padding-right: 292px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #5E5E5E;
  margin-bottom: 32px;
}

.product__card_hr {
  border: 1px solid #EAEAEA;
  width: 640px;
  margin-bottom: 64px;
}

.product__content_tocart {
  margin-top: 48px;
  margin-bottom: 64px;
  width: 212px;
  height: 48px;
  border: 1px solid #ff6a6a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: transparent;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #F26376;
}
</style>

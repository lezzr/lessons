<template>
  <div id="app">
    <div>
      <v-popup
          v-if="isModalCartVisible"
          @closePopup="closePopup"
          :cart_data="CART"
      />
      <nav class="header center">
        <div class="menu_r">
          <router-link :to="{name: 'catalog'}">
            <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="44" height="38" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.0227273 0.0263158)"/>
                </pattern>
                <image id="image0" width="44" height="38" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
          </router-link>
          <button class="menu_search" @click="search(searchValue)" ><svg @click="search(searchValue)" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22463 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71814 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z" fill="#E8E8E8"/>
          </svg></button>
          <div class="menu__search_field"><input type="text" v-model="searchValue" placeholder="search" class="menu__search_field_bar"></div>
        </div>
        <div class="menu_l">
          <a href="catalog.html"><img src="./assets/images/menu.svg" alt="menu"></a>
          <a class="header__link_img" href="registration.html"><img src="./assets/images/account.svg" alt="account"></a>
          <router-link :to="{name: 'cart', params:{cart_data: CART}}"
                       class="header__link_img"><div class="cart_count"
          >{{ CART.length }}
          </div><img src="./assets/images/shop.svg"
                                          alt="shop">
          </router-link><button
            @click="showModal(CART)"

        >show</button>
        </div>

      </nav>
    </div>

    <Wrapper />
    <footer class="footer">
      <div class="footer_offers">
        <div class="footer_offer">
          <img class="footer_imgs" src="./assets/images/delivery.svg" alt="">
          <h1 class="footer_h1">Free Delivery</h1>
          <p class="footer_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
            extensive models.
          </p>
        </div>
        <div class="footer_offer">
          <img class="footer_imgs" src="./assets/images/sales.svg" alt="">
          <h1 class="footer_h1">Sales & discounts</h1>
          <p class="footer_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
            extensive models.
          </p>
        </div>
        <div class="footer_offer">
          <img class="footer_imgs" src="./assets/images/assurance.svg" alt="">
          <h1 class="footer_h1">Quality assurance</h1>
          <p class="footer_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
            extensive models.
          </p>
        </div>
      </div>
      <div class="footer_content">
        <img class="footer_bg" src="./assets/images/footer-bg.png" alt="footer_bg">
        <div class="footer_info">
          <div class="footer_info_1">
            <img class="footer_photo" src="./assets/images/footer-photo.png" alt="footer_photo">
            <p class="footer_quote">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
              condimentum“</p>
          </div>
          <div class="footer_info_2">
            <h1 class="subscribe">SUBSCRIBE</h1>
            <p class="sub_text">FOR OUR NEWLETTER AND PROMOTION</p>
            <form action="#">
              <input class="sub_form" type="email" placeholder="Enter Your Email" required><button
                class="sub_button" href="#">Subscribe</button>
            </form>
          </div>
        </div>

      </div>
      <div class="footer_bot">
        <div class="copyr">
          <p>c 2021 Brand All Rights Reserved.</p>
        </div>
        <div class="media">
          <a class="media_fb" href="#"><svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.08836 8.28L8.50686 5.61602H5.89022V3.88729C5.89022 3.15847 6.25574 2.44806 7.42765 2.44806H8.61722V0.179975C8.61722 0.179975 7.53772 0 6.50561 0C4.35073 0 2.9422 1.27593 2.9422 3.5857V5.61602H0.546875V8.28H2.9422V14.72H5.89022V8.28H8.08836Z"
                fill="black" />
          </svg></a>
          <a class="media_insta" href="#"><svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.13897 3.68159C6.02383 3.68159 4.31774 5.38491 4.31774 7.49663C4.31774 9.60835 6.02383 11.3117 8.13897 11.3117C10.2541 11.3117 11.9602 9.60835 11.9602 7.49663C11.9602 5.38491 10.2541 3.68159 8.13897 3.68159ZM8.13897 9.9769C6.77211 9.9769 5.65467 8.8646 5.65467 7.49663C5.65467 6.12866 6.76878 5.01636 8.13897 5.01636C9.50915 5.01636 10.6233 6.12866 10.6233 7.49663C10.6233 8.8646 9.50583 9.9769 8.13897 9.9769ZM13.0078 3.52554C13.0078 4.02026 12.6087 4.41538 12.1165 4.41538C11.621 4.41538 11.2252 4.01694 11.2252 3.52554C11.2252 3.03413 11.6243 2.63569 12.1165 2.63569C12.6087 2.63569 13.0078 3.03413 13.0078 3.52554ZM15.5386 4.42866C15.4821 3.23667 15.2094 2.18081 14.3347 1.31089C13.4634 0.440967 12.4058 0.168701 11.2119 0.108936C9.9814 0.039209 6.29321 0.039209 5.0627 0.108936C3.8721 0.165381 2.81453 0.437646 1.93987 1.30757C1.06522 2.17749 0.795836 3.23335 0.735973 4.42534C0.666134 5.65386 0.666134 9.33608 0.735973 10.5646C0.79251 11.7566 1.06522 12.8124 1.93987 13.6824C2.81453 14.5523 3.86878 14.8246 5.0627 14.8843C6.29321 14.9541 9.9814 14.9541 11.2119 14.8843C12.4058 14.8279 13.4634 14.5556 14.3347 13.6824C15.2061 12.8124 15.4788 11.7566 15.5386 10.5646C15.6085 9.33608 15.6085 5.65718 15.5386 4.42866ZM13.949 11.8828C13.6895 12.5335 13.1874 13.0349 12.5322 13.2972C11.5511 13.6857 9.22314 13.596 8.13897 13.596C7.05479 13.596 4.72348 13.6824 3.74573 13.2972C3.09389 13.0382 2.59171 12.5369 2.32898 11.8828C1.93987 10.9033 2.02967 8.57905 2.02967 7.49663C2.02967 6.41421 1.9432 4.08667 2.32898 3.1105C2.58838 2.45972 3.09056 1.95835 3.74573 1.69604C4.7268 1.30757 7.05479 1.39722 8.13897 1.39722C9.22314 1.39722 11.5545 1.31089 12.5322 1.69604C13.184 1.95503 13.6862 2.4564 13.949 3.1105C14.3381 4.08999 14.2483 6.41421 14.2483 7.49663C14.2483 8.57905 14.3381 10.9066 13.949 11.8828Z"
                fill="black" />
          </svg></a>
          <a class="media_pinter" href="#"><svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.74032 0.203125C3.55564 0.203125 0.408203 2.34063 0.408203 5.8C0.408203 8 1.63738 9.25 2.38233 9.25C2.68963 9.25 2.86655 8.3875 2.86655 8.14375C2.86655 7.85313 2.13091 7.23438 2.13091 6.025C2.13091 3.5125 4.03055 1.73125 6.4889 1.73125C8.60271 1.73125 10.1671 2.94062 10.1671 5.1625C10.1671 6.82187 9.50597 9.93437 7.36422 9.93437C6.59133 9.93437 5.93018 9.37187 5.93018 8.56563C5.93018 7.38438 6.74963 6.24062 6.74963 5.02187C6.74963 2.95312 3.835 3.32812 3.835 5.82812C3.835 6.35313 3.90018 6.93437 4.13298 7.4125C3.70463 9.26875 2.82931 12.0344 2.82931 13.9469C2.82931 14.5375 2.91311 15.1188 2.96899 15.7094C3.07452 15.8281 3.02175 15.8156 3.18316 15.7563C4.74757 13.6 4.69169 13.1781 5.3994 10.3562C5.78119 11.0875 6.76826 11.4812 7.55046 11.4812C10.8469 11.4812 12.3275 8.24688 12.3275 5.33125C12.3275 2.22813 9.66427 0.203125 6.74032 0.203125Z"
                fill="black" />
          </svg></a>
          <a class="media_twitter" href="#"><svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.417 3.74052C14.427 3.88264 14.427 4.0248 14.427 4.16692C14.427 8.50192 11.1498 13.4969 5.15986 13.4969C3.31448 13.4969 1.60022 12.9588 0.158203 12.0248C0.420396 12.0552 0.67247 12.0654 0.944752 12.0654C2.46741 12.0654 3.8691 11.5476 4.98843 10.6644C3.5565 10.6339 2.3565 9.68977 1.94305 8.39027C2.14475 8.4207 2.34642 8.44102 2.5582 8.44102C2.85063 8.44102 3.14308 8.40039 3.41533 8.32936C1.92291 8.02477 0.803551 6.70498 0.803551 5.11108V5.07048C1.23715 5.31414 1.74139 5.46642 2.2758 5.4867C1.39849 4.89786 0.823727 3.8928 0.823727 2.75573C0.823727 2.14661 0.985041 1.58823 1.26741 1.10092C2.87077 3.09077 5.28086 4.39023 7.98334 4.53239C7.93293 4.28873 7.90266 4.03495 7.90266 3.78114C7.90266 1.97402 9.35477 0.501953 11.1598 0.501953C12.0976 0.501953 12.9446 0.897891 13.5396 1.53748C14.2757 1.39536 14.9816 1.12123 15.6068 0.745609C15.3648 1.50705 14.8505 2.14664 14.1749 2.5527C14.8304 2.48167 15.4657 2.29889 16.0505 2.04511C15.6069 2.69483 15.0522 3.27348 14.417 3.74052Z"
                fill="black" />
          </svg></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import vPopup from './components/v-popup'
import vModalWindow from './components/v-modal-cart.vue'
import Wrapper from './components/v-main-wrapper.vue'
import { mapGetters, mapActions} from 'vuex'
import VPopup from "@/components/v-popup";

export default {
  name: 'App',
  comments: {
    vModalWindow,
    vPopup
  },
  data(){
    return{
      searchValue:'',
      isModalCartVisible: false
    }

  },

  methods:{
    ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value){
      this.GET_SEARCH_VALUE_TO_VUEX(value)
    },
    showModal(){
      this.isModalCartVisible = true
    },
    closePopup() {
      this.isModalCartVisible = false
    }
  },

  components: {
    VPopup,
    Wrapper
  },
  computed:{
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'SEARCH_VALUE'
    ]),

  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Lato;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}
.header {
  height: 75px;
  background: #222222;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.menu_search {
  margin-left: 41px;
  background: transparent;
  border: 0px;
}

.menu__search_field{
  display: flex;
}

.menu_l {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.menu_r {
  display: flex;
}

.menu_l a:not(:last-child) {
  margin-right: 33px;
}

.diff_text {
  color: #F16D7F;
}

.cart_count{
  font-size: 20px;
    color: #F16D7F;
  border: 1px solid greenyellow;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  margin-left: 30px;
  margin-top: 10px;
  width: 20px;

}

.top_left_nav {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
}
.top_right_nav a {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #636363;
}
a {
  text-decoration: none;
}
.footer {
  height: auto;
  background-color: #222222;
}

.footer_offers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
  height: 341px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer_offer {
  height: 136px;
  width: 360px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer_imgs {
  margin-bottom: 24px;
}

.footer_h1 {
  margin-bottom: 16px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 19.96px;
  line-height: 24px;
  color: #FBFBFB;
}

.footer_text {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 13.972px;
  line-height: 17px;
  text-align: center;
  color: #FBFBFB;
}

.footer_content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 448px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.footer_bg {
  width: 100%;
  height: 448px;
  position: absolute;
}

.footer_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.footer_info_1 {
  width: 360px;
  position: relative;
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
}

.footer_info_2 {
  width: 560px;
  position: relative;
  margin-left: 328px;
}

.footer_photo {
  margin-bottom: 48px;
}

.footer_quote {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #222222;
}

.subscribe {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 167.2%;
  text-align: center;
  color: #222224;
}

.sub_text {
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #222224;
}

.menu__search_field_bar{
  width: 232px;
  height: 32px;
  padding-left: 22px;
  padding-right: 22px;
  background: #E1E1E1;
  font-size: 14px;
  line-height: 17px;
  border: 0;
  border-radius: 40px;
  color: #222224;
  opacity: 0.67;
}

.sub_form {
  width: 234px;
  height: 49px;
  margin-left: 96px;
  padding-left: 22px;
  padding-right: 22px;
  background: #E1E1E1;
  border: 0;
  border-radius: 40px 0 0 40px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #222224;
  opacity: 0.67;
  margin-top: 32px;
}

.sub_button {
  font-family: Lato;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  background-color: #F16D7F;
  padding: 16px 24px 16px 16px;
  border-radius: 0 40px 40px 0;
  border-style: none;
}

.footer_bot {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
  height: 80px;
}

.copyr {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #FBFBFB;
}

.media_fb {
  background-color: #FFFFFF;
  padding-left: 11px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 6px;
}

.media_insta {
  background-color: #FFFFFF;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 6px;
}

.media_pinter {
  background-color: #FFFFFF;
  padding-left: 9.5px;
  padding-right: 9.5px;
  padding-top: 8px;
  padding-bottom: 6px;
}

.media_twitter {
  background-color: #FFFFFF;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: 7px;
}

.media_fb:hover path {
  fill: #fff;
}

.media_fb:hover {
  background-color: #F16D7F;
}

.media_insta:hover path {
  fill: #fff;
}

.media_insta:hover {
  background-color: #F16D7F;
}

.media_pinter:hover path {
  fill: #fff;
}

.media_pinter:hover {
  background-color: #F16D7F;
}

.media_twitter:hover path {
  fill: #fff;
}

.media_twitter:hover {
  background-color: #F16D7F;
}

</style>

<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="menu">
<!--      <router-link to="/dashboard">Dashboard</router-link>-->
<!--      /-->
<!--      <router-link to="/about">About</router-link>-->
      <a href="#" @click="goToPage('dashboard')">Dashboard</a> /
      <a href="#" @click="goToPage('about')">About</a>
      <br>
<!--      <a href="#" @click="goToPage('dashboard/sport?value=200')">Add Sport 200</a> /-->
<!--      <a href="#" @click="goToPage('dashboard/food?value=500')">Add Food 500</a>-->
<!--      <a href="dashboard">Dashboard</a> /-->
<!--      <a href="page404"> 404 </a> /-->
<!--      <a href="about">About</a>-->
    </div>
    <br>
    <div class="content">
      <router-view />
<!--      <PageDashboard v-if="pageName==='dashboard'" />-->
<!--      <Page404 v-if="pageName==='page404'" />-->
<!--      <PageAbout v-if="pageName==='about'" />-->
    </div>
    <div class="wrapper">

<!--      <AddPaymentForm/>-->
      <br>
      <div>Total sum = {{getFPV}}</div>

    </div>
    <transition name="fade">
    <ModalWindow v-if="modalWindowName" :settings="settings"/>
    </transition>
  </div>
</template>

<script>

// import PageDashboard from "./page/PageDashboard";
// import Page404 from "./page/Page404";
// import PageAbout from "./page/PageAbout";

import {mapActions, mapGetters, mapMutations} from "vuex";
import ModalWindow from "./components/ModalWindow";

export default {
  name: 'App',
  components:{ModalWindow},
  data(){
    return{
      page: 1,
      count: 10,
      pageName: '',
      addFormShow: false,
      modalWindowName: '',
      settings:{},
    }
  },
  methods:{
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentList'
    ]),
    ...mapActions({
      fetchListData:'fetchData'
    }),
    addNewPaymentData(value){
      this.addDataToPaymentList(value)
    },
    // fetchData(){
    //   return[
    //     {
    //       date: "12.02.2020",
    //       category: "Food",
    //       value: 180
    //     },
    //     {
    //       date: "14.02.2020",
    //       category: "Sport",
    //       value: 100
    //     },
    //     {
    //       date: "28.01.2021",
    //       category: "Internet",
    //       value: 300
    //     },
    //     {
    //       date: "14.03.2021",
    //       category: "Transport",
    //       value: 1800
    //     },
    //     {
    //       date: "28.04.2021",
    //       category: "Food",
    //       value: 180
    //     },
    //   ]
    // }
    onPaginate(p){
      this.page = p
    },
    goToPage(page){
      this.$router.push({
        name: page,
      })
    },
    onShow(settings){
      this.modalWindowName = settings.name
      this.settings = settings.settings
    },
    onHide(){
      this.modalWindowName = ''
      this.settings = {}
    }
  },
  computed:{
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    getFPV() {
      return this.getFullPaymentValue
    },
    paymentList(){
      return this.$store.getters.getPaymentList
    },
    paymentListLength(){
      return this.$store.getters.getPaymentList.length
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    },
    curElements(){
      const {count, page} = this
      return this.paymentList.slice(count * (page - 1), count * (page - 1) + count)
    },
  },
  created(){
    // this.paymentsList = this.fetchData()
    // this.$store.commit('setPaymentListData', this.fetchData())
    if(!this.fetchListData.length){
      this.fetchListData()
    }
    this.$store.dispatch('fetchCategoryList')
  },
  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
  }
}

</script>

<style lang="scss" scoped module>
.header{
  color: #a4dc60;
}
</style>
<style lang="scss">
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.30s;
}
fade-enter, fade-leave-to{
  opacity: 0;
}

</style>

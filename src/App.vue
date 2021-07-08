<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentData" :category-list="categoryList"/>
<!--      <AddPaymentForm/>-->
      <br>
      <div>Total sum = {{getFPV}}</div>
      <PaymentsDisplay :items="curElements" />
      <Pagination
          :length="paymentListLength"
          @changePage="onPaginate"
          :count="count"
          :cur="page" />
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data(){
    return{
      page: 1,
      count: 10
    }
  }
  ,

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
  }
}
</script>

<style lang="scss" scoped module>
.header{
  color: #a4dc60;
}
</style>

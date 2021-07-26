<template>
<div>
  <PaymentsDisplay :items="curElements" />
  <Pagination
      :length="paymentListLength"
      @changePage="onPaginate"
      :count="count"
      :cur="page" />

  <button @click="showPaymentsForm">ADD NEW COST+</button>
<!--  <AddPaymentForm @addNewPayment="addNewPaymentData" :category-list="categoryList"/>-->
</div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import PaymentsDisplay from "../components/PaymentsDisplay";
// import AddPaymentForm from "../components/AddPaymentForm";
import Pagination from "../components/Pagination";
// import ModalWindow from "../components/ModalWindow";
export default {
  name: "PageDashboard",
  components: {

    PaymentsDisplay,
    // AddPaymentForm,
    Pagination,
    // ModalWindow
    // PageDashboard,
    // PageAbout,
    // Page404
  },
  data(){
    return{
      page: 1,
      count: 10,
      pageName: '',
      addFormShow: false,
      settings:{
        header:"Add Cost",
        compName: "add"
      },
    }
  },
  methods:{
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentList',
      'cutLine'
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
        params:{
          value: '123'
        }
      })
    },
    showPaymentsForm(){
      this.$modal.show('add', {header: 'add My cost', compName: "AddPaymentForm", category: this.categoryList})
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
    this.page = Number(this.$route.params.page) || 1
  }
}

</script>

<style scoped>

</style>

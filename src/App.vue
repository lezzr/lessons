<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentData"/>
      <br>
      <PaymentsDisplay :items="paymentsList"/>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "@/components/PaymentsDisplay";
import AddPaymentForm from "@/components/AddPaymentForm";

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
  data(){
    return {
      paymentsList:[]
    }
  },
  methods:{
    addNewPaymentData(value){
      this.paymentsList=[...this.paymentsList, value]
    },
    fetchData(){
      return[
        {
          date: "12.02.2020",
          category: "Food",
          value: 180
        },
        {
          date: "14.02.2020",
          category: "Sport",
          value: 100
        },
        {
          date: "28.01.2021",
          category: "Internet",
          value: 300
        },
        {
          date: "14.03.2021",
          category: "Transport",
          value: 1800
        },
        {
          date: "28.04.2021",
          category: "Food",
          value: 180
        },
      ]
    }
  },
  created(){
    this.paymentsList = this.fetchData()
  }
}
</script>

<style lang="scss" scoped module>
.header{
  color: red;
}
</style>

<template>

<div class="payment-form">
  <button @click="showForms = !showForms">Payment +</button>
  <div class="showForm" v-show="showForms">
  <input type="text" placeholder="Date" v-model="date"/>
<!--  <input type="text" placeholder="Category" v-model.trim="category"/>-->
  <select v-model="category">
    <option v-for="(item,idx) in categoryList" :value="item" :key="idx">{{item}}</option>
  </select>
  <input type="number" placeholder="Value" v-model.number="value"/>
  <button @click="savePay"> Save </button>
  </div>
</div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  name: "AddPaymentForm",
  props: ['categoryList'],
  data(){
    return{
      date: '',
      category: 'Food',
      value: 0,
      showForms: false
    }
  },
  methods: {
    // ...mapActions([
    //   'addDataToPaymentList'
    // ]),
    getCurrentDate(){
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return `${d}.${m}.${y}`
    },
    savePay(){
      console.log('saved')
      const {category, value} = this
      const data = {
        date: this.date || this.getCurrentDate(),
        category,
        value
      }
      this.$emit('addNewPayment', data)
    }
  }
}
</script>

<style scoped>

</style>

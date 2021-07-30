<template>

  <v-card class="text-left pa8">
    <v-text-field v-model="date" label="Date"/>
    <v-select
        :items="categoryList"
        v-model="Category" label="Cat"/>
    <v-text-field v-model.number="value" label="Value"/>
    <v-btn @click="savePay">Save</v-btn>
  </v-card>

<!--<div class="payment-form">-->
<!--  <button @click="showForms = !showForms">Payment +</button>-->
<!--  <div class="showForm" v-show="showForms">-->
<!--  <input type="text" placeholder="Date" v-model="date"/>-->
<!--&lt;!&ndash;  <input type="text" placeholder="Category" v-model.trim="category"/>&ndash;&gt;-->
<!--  <select v-model="category">-->
<!--    <option v-for="(item,idx) in categoryList" :value="item" :key="idx">{{item}}</option>-->
<!--  </select>-->
<!--  <input type="number" placeholder="Value" v-model.number="value"/>-->
<!--  <button @click="savePay"> Save </button>-->
<!--  </div>-->
<!--</div>-->
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "AddPaymentForm",
  props: ['categoryList'],
  data(){
    return{
      date: '',
      category: '',
      value: Number,
      showForms: false
    }
  },
  methods: {
    ...mapMutations([
      'addDataToPaymentList'
    ]),
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
        value,
      }
      this.addDataToPaymentList(data)
    }
  },
  created() {
    this.value = parseInt(this.$route.query.value) || 0
    this.category = this.$route.params.category || 'Food'
  }
}
</script>

<style scoped>

</style>

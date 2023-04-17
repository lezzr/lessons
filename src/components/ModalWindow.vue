<template>
<div class="wrapper">
  <div class="header">
    {{ settings.header }}
  </div>
  <div class="content">
<!--    <AddPaymentForm @addNewPayment="addNewPaymentData" :category-list="categoryList" v-if="settings.compName === 'add'"/>-->
    <component :is="settings.compName" :categoryList="settings.category" />
<!--    <Auth v-if="settings.compName === 'auth'"/>-->
    <button @click.prevent="removeIdx(settings.id)"  v-if="settings.compName === 'ChangeInList'"> remove id {{ settings.id }}</button>
    <br>
    <input type="text" placeholder="Date" v-model="settings.date" v-if="settings.compName === 'ChangeInList'"/>
    <input type="text" placeholder="Date" v-model="settings.category" v-if="settings.compName === 'ChangeInList'"/>
    <input type="text" placeholder="Date" v-model="settings.value" v-if="settings.compName === 'ChangeInList'"/>
    <br>
    <button @click.prevent="editIdx(settings)"  v-if="settings.compName === 'ChangeInList'"> edit this: {{ settings.id }}</button>
    <form ></form>
  </div>
  <div class="footer">

    <br>
    <button @click="onCloseClick">close</button>

  </div>
</div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm";
import Auth from "./Auth";
import PaymentsDisplay from "./PaymentsDisplay";
import ChangeInList from "./ChangeInList";
import {mapActions, mapMutations} from "vuex";
export default {
  name: "ModalWindow",
  components: {Auth, AddPaymentForm, ChangeInList, PaymentsDisplay},
  props:{
    settings:{
      type: Object
    }
  },
  methods:{
    ...mapMutations([
      'setPaymentListData',
      'addDataToPaymentList',
      'cutLine',
      'editLine'
    ]),
    ...mapActions({
      fetchListData:'fetchData'
    }),
    addNewPaymentData(value){
      this.addDataToPaymentList(value)
    },
    onCloseClick(){
      this.$modal.hide()
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    },
    removeIdx(id){
      console.log(id)
      // this.$emit('clear-line', id)
      // console.log('emited')
      this.cutLine(id)
    },
    editIdx(settings){
      this.editLine(settings)
      console.log(settings)
    }
  },
  created(){
    this.$store.dispatch('fetchCategoryList')
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  position: absolute;
  background: #e3e3e3;
  top: 0px;
  padding: 20px;
}

</style>

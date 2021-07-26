<template>
<div>Changes here
  <br>
<!--  <input type="text" placeholder="Date"/>-->
<!--  <button @click="removeItem()">remove this</button>-->
<!--  {{$parent.settings.idx}}-->
</div>

</template>

<script>
// import PaymentsDisplay from "./PaymentsDisplay";
import {mapMutations} from "vuex";
export default {
  name: "ChangeInList",
  data(){
    return{
    }
  },
  methods:{
    ...mapMutations([
      'cutLine'
    ]),

    // cutFromList(idx){
    //   this.cutLine(idx)
    // },
    removeItem(){
      console.log(this)
      // this.$emit('cutLine', this.item.id)
    }
  },
  created() {
    // this.value = PaymentsDisplay.props.items[0].value
  }
}
</script>

<style scoped>

</style>

<template>
<div class="list"
     >
  <span class="s-idx">#
    <div class="idx"
                   v-for="(item, idx) in items"
                   :key="idx"

    >{{item.id}}
    </div>
  </span>
  <span class="s-date">Date
     <div class="date"
          v-for="(item, idx) in items"
          :key="idx"
            >{{item.date}}</div>
  </span>
  <span class="s-cat">  Category
    <div class="category"
         v-for="(item, idx) in items"
         :key="idx"
         >{{item.category}}</div>
  </span>
  <span class="s-val">Value
        <div class="value"
             v-for="(item, idx) in items"
             :key="idx"

        >{{item.value}} <span><button @click="showPaymentsForm(item)">{{ item.id }}</button>
<!--          <button @click="removeLine(idx)">remove{{ idx }}</button>-->
        </span>
        </div>

  </span>

</div>
</template>

<script>
export default {
  name: "PaymentsDisplay",

  props: {
    items:{
      type: Array,
      default: ()=>[],
    },

  },
  methods:{
    showPaymentsForm(item){
      // this.items.splice(9)

      console.log(item)
      this.$modal.show('change', {header: 'Change costs', compName: "ChangeInList", item: item, id: item.id, value: item.value, date: item.date, category: item.category})
    },
    removeLine(id){
      debugger
      console.log('removed', id)
      // this.items.splice(idx, 1)
    }
  },



}
</script>

<style scoped>
.list{
  display: flex;
  flex-display: row;
}
.s-date{
  margin-right: 10px;
}
.s-cat{
  margin-right: 10px;
}
.s-val{
  margin-right: 10px;
}
.s-idx{
  margin-right: 10px;
}
.idx{
  margin-bottom: 10px;
}
.category{
  margin-bottom: 10px;
}
.date{
  margin-bottom: 10px;
}
.value{
  margin-bottom: 6px;
}

</style>

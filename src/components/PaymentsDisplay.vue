<template>
<div class="list">
  <span class="s-idx">#
    <div class="idx"
                   v-for="(item, idx) in items"
                   :key="idx">{{item.id}}</div>
  </span>
  <span class="s-date">Date
     <div class="date"
          v-for="(item, idx) in items"
          :key="idx">{{item.date}}</div>
  </span>
  <span class="s-cat">  Category
    <div class="category"
         v-for="(item, idx) in items"
         :key="idx">{{item.category}}</div>
  </span>
  <span class="s-val">Value
        <div class="value"
             v-for="(item, idx) in items"
             :key="idx">{{item.value}}</div>
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

</style>

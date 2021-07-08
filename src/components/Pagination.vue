<template>
  <div class="pagination">
<div @click="onClick(cur - 1)" class="page-count">--</div>
    <div
        class="page-count"
        :class="{'active': cur === i}"
        v-for="i in pagesCount"
        :key="i"
        @click="onClick(i)"
    > {{i}}</div>
  <div @click="onClick(cur + 1)" class="page-count">++</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    cur: Number,
    count:{
      type: Number,
      default: 10
    }
  },
  computed:{
    pagesCount(){
      return Math.ceil(this.length / this.count)
    }
  },
  methods:{
    onClick(p){
      if(p< 1 || p > this.pagesCount){
        return
      }
      this.$emit('changePage', p)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination{
  display: flex;
  flex-direction: row;
}
.page-count{
  padding: 5px;
}
.active{
background: #a4dc60;
}
</style>

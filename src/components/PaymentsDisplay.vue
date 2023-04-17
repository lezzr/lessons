<template>
  <v-container>
    <v-row>
      <v-col cols="6"><v-row>
        <v-col cols="1">#</v-col>
        <v-col cols="5">Date</v-col>
        <v-col cols="3">Category</v-col>
        <v-col cols="3">Value</v-col>
      </v-row>
        <v-row
            v-for="(item, idx) in items"
            :key="idx">
          <v-col cols="1">{{item.id}}</v-col>
          <v-col cols="5">{{item.date}}</v-col>
          <v-col cols="3">{{item.category}}</v-col>
          <v-col cols="3">{{item.value}} <v-icon @click="showPaymentsForm(item)">mdi-dots-vertical</v-icon></v-col>
        </v-row></v-col>
      <v-col cols="6">
        <Chart
            ref="skills_chart"
            :chart-data="chartData"
            :options="options">
        </Chart>
      </v-col>
    </v-row>


  </v-container>
<!--<div class="list">-->
<!--  <span class="s-idx">#-->
<!--    <div class="idx"-->
<!--                   v-for="(item, idx) in items"-->
<!--                   :key="idx"-->

<!--    >{{item.id}}-->
<!--    </div>-->
<!--  </span>-->
<!--  <span class="s-date">Date-->
<!--     <div class="date"-->
<!--          v-for="(item, idx) in items"-->
<!--          :key="idx"-->
<!--            >{{item.date}}</div>-->
<!--  </span>-->
<!--  <span class="s-cat">  Category-->
<!--    <div class="category"-->
<!--         v-for="(item, idx) in items"-->
<!--         :key="idx"-->
<!--         >{{item.category}}</div>-->
<!--  </span>-->
<!--  <span class="s-val">Value-->
<!--        <div class="value"-->
<!--             v-for="(item, idx) in items"-->
<!--             :key="idx"-->

<!--        >{{item.value}} <span><button @click="showPaymentsForm(item)">{{ item.id }}</button>-->
<!--          <button @click="removeLine(idx)">remove{{ idx }}</button>-->
<!--        </span>-->
<!--        </div>-->

<!--  </span>-->
<!--  <br>-->
<!--  <Chart-->
<!--    ref="skills_chart"-->
<!--    :chart-data="chartData"-->
<!--    :options="options">-->
<!--  </Chart>-->

<!--</div>-->
</template>

<script>
import Chart from "../components/Chart";
const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  }
}
export default {
  name: "PaymentsDisplay",
  components:{
    Chart
  },
  props: {
    fullList:{
      type: Array,
      default: ()=>[],
    },
    items:{
      type: Array,
      default: ()=>[],
    },
  },
  data(){
    const labelList = [...new Set(this.fullList.map(item => item.category))]
    let chartStats = labelList.map(item => {
      let object = {'title': item, 'value': 0};
      console.log(object)
      return object;
    })

    this.fullList.map(item => {
      chartStats.map(stat => {
        if (stat.title===item.category) {
          stat.value++
        }
      })
    })
    console.log(chartStats)
    return{
      options,

      chartData: {
        labels: labelList,
        datasets: [
          {
            backgroundColor: ['blue', 'green'],
            data: chartStats.map(item => item.value)
          }
        ]
      }
    }
  },
  methods:{
    showPaymentsForm(item){
      // this.items.splice(9)

      console.log(item)
      this.$modal.show('change', {header: 'Change costs', compName: "ChangeInList", item: item, id: item.id, value: item.value, date: item.date, category: item.category})
    },
    removeLine(id){
      console.log('removed', id)
      // this.items.splice(idx, 1)
    }
  },



}
</script>

<style scoped>


</style>

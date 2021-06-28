<template>
  <div>
    <input type="number" v-model.number="operand1" placeholder="operand1" />
    <input type="number" v-model.number="operand2" placeholder="operand2" />

    = {{ summ }}
    <div class="keyboard">
      <button @click="add(operand1, operand2)">+</button>
      <button @click="subt(operand1, operand2)">-</button>
      <button @click="mult(operand1, operand2)">*</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="powbtn(operand1, operand2)">^</button>
      <button @click="fulldiv(operand1, operand2)">//</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      summ: 0,
    };
  },
  watch: {
    summ: function(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  methods: {
    add() {
      this.summ = this.operand1 + this.operand2;
    },
    subt() {
      this.summ = this.operand1 - this.operand2;
    },
    mult() {
      this.summ = this.operand1 * this.operand2;
    },
    divide() {
      this.summ = this.operand1 / this.operand2;
    },
    powbtn() {
      this.summ = Math.pow(this.operand1, this.operand2);
    },
    fulldiv() {
      this.summ = Math.floor(this.operand1 / this.operand2);
    },
  },
  computed: {
    powWithOperand() {
      return Math.pow(this.operand1, this.operand2);
    },
    powWithSum() {
      return Math.pow(this.sum, 4);
    },
  },
};
</script>

<style></style>

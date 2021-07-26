<template>
  <div>
    <div class="error" :class="{'red': error}" v-show="!!error" :name="error">{{error}}</div>
    <br>
    <input type="number" v-model.number="operand1" placeholder="operand1" id="op1" name="operand1"/>
    <input type="number" v-model.number="operand2" placeholder="operand2" id="op2" name="operand2"/>

    = {{ result }}
    <div class="keyboard">

      <button v-for="operand in operands"
              @click="calculate(operand)"
              :key="operand"
              :name="operand"
              >
        {{operand}}
      </button>
      <br>
      <input type="checkbox" id="checkbox" v-model="keybEnabled">
      <label for="checkbox">Показать клавиатуру</label>
      <br>
      <div class="rad-btn" v-show="keybEnabled">
        <input type="radio" id="one" value="operand1" v-model="picked">
        <label for="one">Один</label>
        <br>
        <input type="radio" id="two" value="operand2" v-model="picked">
        <label for="two">Два</label>
        <br>
        <span> <br><br> Выбрано: {{ picked }}</span>
      </div>

      <div class="keyboard2" v-show="keybEnabled">

        <button v-for="keyNumb in kbKeys"
                v-bind:value="picked"
                @click="calcButtons(keyNumb)"
                :key="keyNumb"
                :name="keyNumb"

        >
          {{keyNumb}}
        </button>
      </div>
      <br>
      <br>
      <div class="logs" v-for="(log, id) in logs" :key="id">{{log}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  data() {
    return {
      kbKeys: ['1','2','3','4','5','6','7','8','9','0','<'],
      operands: ['+','-','*','/','^','//'],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      logs:{},
      keybEnabled: true,
      picked: 'operand1'

    };
  },
  watch: {
    result: function(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  methods: {
    calculate(operation = "+"){
      this.error = "";
      switch (operation){
        case '+':
          this.add()
              break;
        case '-':
          this.subt()
          break;
        case '*':
          this.mult()
          break;
        case '/':
          this.divide()
          break;
        case '^':
          this.powbtn()
          break;
        case '//':
          this.fulldiv()
          break;
      }
      const key = Date.now()
      const value = `${this.operand1}${operation}${this.operand2} = ${this.result}`;
      this.$set(this.logs, key, value)
    },
    calcButtons(kbChange = '1'){
      switch (kbChange){
        case '1':
          this[this.picked] = this[this.picked]+'1'
          break;
        case '2':
          this[this.picked] = this[this.picked]+'2'
          break;
        case '3':
          this[this.picked] = this[this.picked]+'3'
          break;
        case '4':
          this[this.picked] = this[this.picked]+'4'
          break;
        case '5':
          this[this.picked] = this[this.picked]+'5'
          break;
        case '6':
          this[this.picked] = this[this.picked]+'6'
          break;
        case '7':
          this[this.picked] = this[this.picked]+'7'
          break;
        case '8':
          this[this.picked] = this[this.picked]+'8'
          break;
        case '9':
          this[this.picked] = this[this.picked]+'9'
          break;
        case '0':
          this[this.picked] = this[this.picked]+'0'
          break;
        case '<':
          this[this.picked] = this[this.picked].toString().slice(0, -1)
          break;
      }
    },


    add() {
      this.result = this.operand1 + this.operand2;
    },
    subt() {
      this.result = this.operand1 - this.operand2;
    },
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    divide() {
      const {operand1, operand2} = this
      if (operand2 === 0) {
        return this.error = "Делить на 0 нельзя"
      }
      this.result = operand1 / operand2;
    },
    powbtn() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    fulldiv() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
    //  remLast(){
    //    let str = 'qwerty';
    //    console.log(str.substring(0, 4));
    //    console.log(this.operand1.__proto__);
    //    console.log(this.operand1.toString().slice(0, -1));
    //    console.log(this.operand1.length)
    // }
  },
  // computed: {
  //   powWithOperand() {
  //     return Math.pow(this.operand1, this.operand2);
  //   },
  //   powWithSum() {
  //     return Math.pow(this.sum, 4);
  //   },
  // },
};
</script>

<style>
.red{
  color: red;
}
.rad-btn{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" :date="computedDate" />
    <Calculator />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Calculator from './components/Calculator.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Calculator,
  },
  data() {
    return {
      count: 0,
      currentDate: new Date().toDateString(),
      message: 'hello Vue',
    };
  },
  methods: {
    onClick() {
      this.count += 1;
    },
    onClick2(param1, param2) {
      this.count = param1 + param2;
    },
  },
  computed: {
    computedDate() {
      return this.currentDate || new Date();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

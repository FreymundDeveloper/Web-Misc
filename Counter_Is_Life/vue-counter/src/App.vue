<template>
  <div id="app">
    <CounterMain :startedValue="0"/>
    <CounterClass :startedValue="0" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CounterMain from './components/CounterMain.vue';
import CounterClass from './components/CounterClass.vue';

@Component({
  components: {
    CounterMain, CounterClass
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

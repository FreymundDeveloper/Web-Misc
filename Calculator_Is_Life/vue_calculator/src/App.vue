<template>
    <div id="app">
        <h1>Calculator</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from './main/CalculatorApp.vue';

export default {
    components: { Calculator }
}
</script>

<style>
    @import './App.css';
</style>
<template>
    <div>
        <h1>Counter</h1>
        <h2>{{ value }}</h2>
        <button @click="setValue(-1)">-</button>
        <button @click="setValue(1)">+</button>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
    props: {
        startedValue: {
            type: Number
        }
    },
    data() {
        return {
            value: this.startedValue || 0
        }
    },
    methods: {
        setValue(delta: number) {
            this.value += delta
        }
    }
})
</script>

<style>

</style>
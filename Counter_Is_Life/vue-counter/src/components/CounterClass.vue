<template>
    <div>
        <h1>Counter With Class</h1>
        <h2>{{ value }}</h2>
        <h3>{{ evenOrOdd }}</h3>
        <button @click="setValue(-1)">-</button>
        <button @click="setValue(1)">+</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CounterClass extends Vue {
    @Prop(Number) private readonly startedValue?: number
    private value = this.startedValue || 0

    public setValue(delta: number) {
        this.value += delta
    }

    public get evenOrOdd(): string {
        return this.value % 2 === 0 ? 'Even' : 'Odd'
    }
}
</script>

<style>

</style>
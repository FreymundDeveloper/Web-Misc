<template>
    <div class="calculator">
        <Display :value="displayValue" />
        <Button label="AC" triple @onClick="clearMemory"/>
        <Button label="/" operation @onClick="setOperation"/>
        <Button label="7" @onClick="addDigit"/>
        <Button label="8" @onClick="addDigit"/>
        <Button label="9" @onClick="addDigit"/>
        <Button label="*" operation @onClick="setOperation"/>
        <Button label="4" @onClick="addDigit"/>
        <Button label="5" @onClick="addDigit"/>
        <Button label="6" @onClick="addDigit"/>
        <Button label="-" operation @onClick="setOperation"/>
        <Button label="1" @onClick="addDigit"/>
        <Button label="2" @onClick="addDigit"/>
        <Button label="3" @onClick="addDigit"/>
        <Button label="+" operation @onClick="setOperation"/>
        <Button label="0" double @onClick="addDigit"/>
        <Button label="." @onClick="addDigit"/>
        <Button label="=" operation @onClick="setOperation"/>
    </div>
</template>

<script>
import Display from "../components/DisplayMain.vue";
import Button from "../components/ButtonActive.vue";

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data());
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation;
                this.current = 1;
                this.clearDisplay = true;
            } 
            else {
                const equals = operation === "=";
                const currentOperation = this.operation;

                try {
                    this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`);

                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory();
                        return;
                    }
                } catch (errorFound) {
                    this.$emit('onError', errorFound);
                }

                this.values[1] = 0;
                this.displayValue = this.values[0];
                
                this.operation = equals ? null : operation;
                this.current = equals ? 0 : 1;
                this.clearDisplay = !equals;
            }
        },
        addDigit(number) {
            if (number === "." && this.displayValue.includes(".")) return;

            const clearDisplay = this.displayValue === "0" || this.clearDisplay;
            const currentValue = clearDisplay ? "" : this.displayValue;
            const displayValue = currentValue + number

            this.displayValue = displayValue;
            this.clearDisplay = false;

            if (number !== ".") this.values[this.current] = parseFloat(displayValue);
        }
    }
}
</script>

<style>
    @import "./CalculatorApp.css";
</style>
<template>
    <div class="calculator">
        <Display value="1" />
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
    components: { Button, Display },
    methods: {
        clearMemory() {
            console.log(1)
        },
        setOperation(operation) {
            console.log("0: "+ operation)
        },
        addDigit(number) {
            console.log("N: " + number)
        }
    }
}
</script>

<style>
    @import "./CalculatorApp.css";
</style>
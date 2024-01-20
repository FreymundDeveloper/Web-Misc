<template>
    <div class="calculator">
        <Display value="1" />
        <Button label="AC" triple/>
        <Button label="/" operation/>
        <Button label="7"/>
        <Button label="8"/>
        <Button label="9"/>
        <Button label="*" operation/>
        <Button label="4"/>
        <Button label="5"/>
        <Button label="6"/>
        <Button label="-" operation/>
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+" operation/>
        <Button label="0" double/>
        <Button label="."/>
        <Button label="=" operation/>
    </div>
</template>

<script>
import Display from "../components/DisplayMain.vue";
import Button from "../components/ButtonActive.vue";

export default {
    components: { Button, Display }
}
</script>

<style>
    @import "./CalculatorApp.css";
</style>
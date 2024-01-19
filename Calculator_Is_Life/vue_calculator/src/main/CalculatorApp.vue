<template>
    <div class="calculator">
        <Display />
        <Button />
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
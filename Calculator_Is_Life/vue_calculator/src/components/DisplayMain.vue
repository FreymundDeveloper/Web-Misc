<template>
    <div class="display">
        <div class="number">{{ value }}</div>
    </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>
    .display {
        grid-column: span 4;
        background-color: #0004;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;
        font-size: 2.1em;
        overflow: hidden;
    }

    .number {
        font-size: 1em;
        white-space: nowrap;
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
    }

    .display:hover .number {
        transform: scaleX(0.37);
    }
</style>
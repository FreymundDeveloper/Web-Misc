Vue.directive('money', {
    inserted(el, binding) {
        const amount = parseFloat(el.innerHTML).toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
        el.innerHTML = `${binding.value} ${amount}`;
    }
});

new Vue({
    el: "#app",
    data: {
        title: "Sales Report",
        sales: null
    },
    methods: {
        getSales() {
            fetch("/data/sales.json")
                .then(resposne => resposne.json())
                .then(data => this.sales = data)
        }
    },
    mounted() {
        this.getSales();
    }
});
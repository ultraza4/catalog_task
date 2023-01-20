<template>
    <div class="catalog">
        <h2>Catalog</h2>
        <div class="productItems">
            <ProductItem v-for="product in sortedProducts" :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
    components: {
        ProductItem
    },
    methods: {
        ...mapActions({
            fetchProducts: "fetchProducts",
        })
    },
    computed: {
        ...mapState({
            searchQuery: state => state.searchQuery,
        }),
        ...mapGetters({
            sortedProducts: 'sortedProducts'
        })
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>

<style>
.catalog{
    margin-left: 15px;
}
.productItems{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
}
</style>
<template>
    <div class="catalogItem">
        <img class="productImage" :src="require(`../assets${product.image}`)" alt="Product Image">
        <h3>{{ product.title }}</h3>
        <span>Brand {{ product.brand }}</span>
        <span>${{ product.regular_price.value }}</span>
        <button @click="this.addToCart(this.product)">Add</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';


export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            addToCartProducts: 'addToCartProducts'
        }),
        addToCart(product) {
            this.addToCartProducts(product)
        }
    },
    computed: {
        ...mapState({
            cartProducts: state => state.cartProducts,
        })
    }
}
</script>

<style>
.catalogItem {
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    border: 1px solid black;
    border-radius: 10px;
    gap: 5px;
}

.productImage {
    width: 100px;
    height: 250px;
    object-fit: contain;
    align-self: center;
}

.catalogItem button {
    width: 30%;
    padding: 5px;
}
</style>
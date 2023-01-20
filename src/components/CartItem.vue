<template>
    <div class="cartItem">
        <span >Brand{{ this.product.brand }} / {{ this.product.title }}</span>
        <span >${{ this.product.regular_price.value }}</span>
        <span >{{ this.product.quantity }}</span>
        <span >${{ this.product.regular_price.value * this.product.quantity }}</span>
        <button @click="this.deleteProduct(this.index)">Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    props: {
        product: {
            type: Object,
            required: true
        },
        index: {
            type: Number
        }
    },
    methods: {
        ...mapActions({
            deleteFromCart: 'deleteFromCart'
        }),
        deleteProduct(index) {
            this.deleteFromCart(index)
        }
    }
}
</script>

<style scoped>
.cartItem {
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 2fr 2fr;
    padding: 10px 5px;
    border: 1px solid black;
}
.cartItem span{
    font-size: 1.2rem;
}
.cartItem button{
    width: 50%;
}
</style>
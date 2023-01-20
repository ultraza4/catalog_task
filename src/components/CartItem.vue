<template>
    <div class="cartItem">
        <span >Brand{{ this.product.brand }} / {{ this.product.title }}</span>
        <span >${{ this.product.regular_price.value }}</span>
        <span >{{ this.product.qty }}</span>
        <span >${{ this.product.regular_price.value * 3 }}</span>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.cartItem {
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 2fr;
}
.cartItem span{
    font-size: 1.2rem;
}
</style>
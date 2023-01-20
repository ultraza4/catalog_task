<template>
    <div class="cartItem">
        <span>Brand{{ this.product.brand }} / {{ this.product.title }}</span>
        <span>${{ this.product.regular_price.value }}</span>
        <div class="quantity">
            <span class="plus-minus" @click="decrementProduct(this.index)">
                <Icon icon="ic:baseline-minus" />
            </span>
            <span>{{ this.product.quantity }}</span>
            <span class="plus-minus" @click="incrementProduct(this.index)">
                <Icon icon="ic:baseline-plus" />
            </span>
        </div>
        <span>${{ (this.product.regular_price.value * this.product.quantity).toFixed(2) }}</span>
        <div class="btn" @click="this.deleteProduct(this.index)">
            <Icon icon="bi:trash" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Icon,
    },
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
            deleteFromCart: 'deleteFromCart',
            incrementCartItem: 'incrementCartItem',
            decrementCartItem: 'decrementCartItem'
        }),
        deleteProduct(index) {
            this.deleteFromCart(index)
        },
        decrementProduct(index) {
            this.decrementCartItem(index)
        },
        incrementProduct(index) {
            this.incrementCartItem(index)
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.cartItem {
    display: grid;
    grid-template-columns: 8fr 2fr 2fr 2fr 0.5fr;
    padding: 10px 5px;
    border: 1px solid black;
    margin-bottom: 15px;
}

.cartItem span {
    font-size: 1.2rem;
}

.cartItem button {
    width: 100%;
}

.btn {
    font-size: medium;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
}

.quantity {
    display: flex;
    align-items: center;
    gap: 5px;
}

.quantity span {
    height: 100%;
    font-size: 1.3rem;
}

.plus-minus {
    text-align: center;
    font-weight: 700;
    font-size: 1.3rem;
    cursor: pointer;
}
</style>
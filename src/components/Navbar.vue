<template>
    <nav class="navbar">
        <router-link class="logo" to="/">Logo</router-link>
        <router-link class="cart" to="/cart">
            <Icon icon="ri:shopping-basket-line" height="30" />
            <div v-if="cartTotalQuantity" class="totalItems">
                {{ cartTotalQuantity }}
            </div>
        </router-link>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue';
import { mapState } from 'vuex';
export default {
    components: {
        Icon,
    },
    methods: {
    },
    computed: {
        ...mapState({
            cartProducts: state => state.cartProducts
        }),
        cartTotalQuantity() {
            let total = 0;
            if (this.cartProducts.length) {
                for (let item of this.cartProducts) {
                    total = total + item.quantity
                }
                return total
            } else {
                return total
            }
        }
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    padding-bottom: 15px;
}

.logo {
    width: 150px;
    padding: 20px 15px;
    border: 1px solid black;
}

.cart {
    margin-right: 40px;
    font-size: large;
    color: black;
    position: relative;
}

.totalItems {
    position: absolute;
    border-radius: 50%;
    padding: 2px 5px;
    color: white;
    background-color: green;
    border: 1px solid green;
    top: -5px;
    right: -5px;
    overflow: hidden;
    font-size: 0.9rem;
}
</style>
<template>
    <nav class="navbar">
        <router-link class="logo" to="/">Logo</router-link>
        <router-link class="cart" to="/cart">
            <Icon icon="ri:shopping-basket-line" height="30" />
        </router-link>
    </nav>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
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
}
</style>
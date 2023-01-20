<template>
    <nav class="navbar">
        <router-link class="logo" to="/">Logo</router-link>
        <router-link to="/cart">Cart</router-link>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    padding-bottom: 15px;
}
.logo{
    width: 150px;
    padding: 20px 15px;
    border: 1px solid black;
}
</style>
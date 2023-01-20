<template>
    <div class="sidebar">
        <h2>All Brands</h2>
        <button @click="setSearchQuery('')">reset</button>
        <div class="brandBtn" v-for="brand in brands" @click="setSearchQuery(brand.id)"
            :class="{ 'brandBtnActive': brand.id == searchQuery }">
            {{ brand.title }}
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations({
            setSearchQuery: 'setSearchQuery',
        }),
        ...mapActions({
            fetchBrands: 'fetchBrands'
        })
    },
    computed: {
        ...mapState({
            brands: state => state.brands,
            searchQuery: state => state.searchQuery
        })
    },
    mounted() {
        this.fetchBrands();
    }
}
</script>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-right: 2px solid black;
    padding-right: 15px;
}

.sidebar button {
    padding: 10px;
}

.brandBtn {
    width: 60px;
    cursor: pointer;
    padding: 5px 10px;
    background-color: aqua;
}

.brandBtnActive {
    background-color: greenyellow
}
</style>
<template>
    <div class="sidebar">
        <h2>All Brands</h2>
        <div class="brandBtn" v-for="brand in brands" @click="setSearchQuery(brand.id)">
            {{ brand.title }}
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

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
        })
    },
    mounted() {
        this.fetchBrands();
    }
}
</script>

<style>
.sidebar{
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-right: 2px solid black;
    padding-right: 15px;
}
.brandBtn{
    width: 60px;
    cursor: pointer;
    padding: 5px 10px;
    background-color: aqua;
}
</style>
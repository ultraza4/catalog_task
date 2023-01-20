import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: () => ({
    brands: [],
    products: [],
    cartProducts: [],
    searchQuery: ''
  })
  ,
  getters: {
    sortedProducts(state) {
      if (state.searchQuery) {
        return state.products.filter(product => product.brand == state.searchQuery)
      } else {
        return state.products
      }
    }
  },
  mutations: {
    setBrands(state, brands) {
      state.brands = brands;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    addCartProduct(state, product) {
      if(state.cartProducts.length) {
        let isProductExists = false;
        state.cartProducts.map((item) => {
          if(item.id == product.id){
            isProductExists = true;
            item.quantity++
          }
        })
        if(!isProductExists){
          state.cartProducts.push({...product, quantity: 1})
        }
      }else{
        state.cartProducts.push({...product, quantity: 1})
      }
     
    },
    deleteProduct(state,index){
      state.cartProducts.splice(index,1)
    },
    increment(state,index){
      state.cartProducts[index].quantity++
    },
    decrement(state,index){
      if(state.cartProducts[index].quantity > 1){
        state.cartProducts[index].quantity--
      }
    }
  },
  actions: {
    async fetchBrands({ state, commit }) {
      try {
        const response = await axios.get('../data/brands.json');
        commit('setBrands', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchProducts({ state, commit }) {
      try {
        const response = await axios.get('../data/products.json');
        commit('setProducts', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    addToCartProducts({ commit }, product){
      commit('addCartProduct', product)
    },
    deleteFromCart({commit}, index) {
      commit('deleteProduct', index)
    },
    incrementCartItem({commit},index){
      commit('increment',index)
    },
    decrementCartItem({commit},index){
      commit('decrement',index)
    },
  },
  modules: {
  }
})

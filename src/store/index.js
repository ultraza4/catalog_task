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
      state.cartProducts.push({...product, quantity: 1})
    },
    deleteProduct(state,index){
      state.cartProducts.splice(index,1)
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
    }
  },
  modules: {
  }
})

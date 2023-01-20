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
    setCartProducts(state, products) {
      state.cartProducts = products;
    },
    addCartProduct(state, product) {
      state.cartProducts = [...cartProducts, {...product, qty: 1}]
    },
    addQuantity(state, product) {

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
    addToCart({state, commit}, product) {
      if(state.cartProducts.find((item,index) => item.id == product.id)) {

      }
    }
  },
  modules: {
  }
})

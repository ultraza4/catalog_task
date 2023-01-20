<template>
  <div class="cart">
    <h2>Shoping Cart</h2>
    <header>
      <span class="header-item">Item</span>
      <span class="header-item">Price</span>
      <span class="header-item">Qty</span>
      <span class="header-item">Total</span>
    </header>
    <CartItem v-for="product in cartProducts" :product="product"/>
    {{ cartProducts }}
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapState } from 'vuex';

export default{
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      cartProducts: state => state.cartProducts
    })
  }
}
</script>

<style scoped>
.cart{
  display: flex;
  flex-direction: column;
}
header{
  display: grid;
  grid-template-columns: 6fr 2fr 2fr 2fr;
  margin-bottom: 15px;
}
.header-item{
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

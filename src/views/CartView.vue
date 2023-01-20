<template>
  <div class="cart">
    <h2>Shoping Cart</h2>
    <header>
      <span class="header-item">Item</span>
      <span class="header-item">Price</span>
      <span class="header-item">Qty</span>
      <span class="header-item">Total</span>
    </header>
    <TransitionGroup name="list" tag="ul" :style="{ padding: 0 }">
      <CartItem v-for="(product, index) in cartProducts" :product="product" :key="product.id" :index="index" />
    </TransitionGroup>
    <div class="totalAmount">
      <span>Total: </span>
      <span>${{ cartTotalCost }}</span>
    </div>
    <button class="checkout">Checkout</button>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapState } from 'vuex';

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      cartProducts: state => state.cartProducts
    }),
    cartTotalCost() {
      let result = []
      if (this.cartProducts.length) {
        for (let item of this.cartProducts) {
          result.push(item.regular_price.value * item.quantity)
        }
        return result.reduce((sum, el) => {
          return sum + el
        }).toFixed(2)
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

header {
  display: grid;
  grid-template-columns: 8fr 2fr 2fr 2fr 0.5fr;
  margin-bottom: 15px;
}

.header-item {
  font-size: 1.5rem;
  font-weight: bold;
}

.totalAmount {
  align-self: flex-end;
  margin-right: 150px;
}

.totalAmount span {
  font-size: 1.6rem;
  font-weight: bold;
}

.checkout {
  font-size: 1.3rem;
  align-self: flex-end;
  padding: 5px 30px;
  margin-right: 150px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

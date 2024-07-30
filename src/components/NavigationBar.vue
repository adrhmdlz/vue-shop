<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid px-4">
      <h1 class="fw-bold">My Shop</h1>

      <div class="d-flex gap-2 align-items-center">
        <button class="btn btn-success" @click="$emit('toggle')">
          <font-awesome-icon icon="fa-solid fa-dollar-sign"></font-awesome-icon>
        </button>

        <div class="dropdown" v-if="carts.length > 0">
          <button
            type="button"
            class="btn btn-success dropdown-toggle d-flex align-items-center"
            id="cartToggle"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="badge rounded-pill" style="background-color: #1b643f">{{ cartQty }}</span>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="mx-2"></font-awesome-icon>
            <product-price :value="Number(cartTotal)"></product-price>
          </button>
          <div class="dropdown-menu dropdown-menu-end" aria-labelledby="cartToggle">
            <div v-for="(item, index) in carts" :key="index">
              <div class="dropdown-item text-nowrap text-end d-flex align-items-center gap-2">
                <span class="badge rounded-pill bg-warning align-text-top">{{ item.qty }}</span>
                {{ item.product.name }}
                <b>{{ (item.product.price * item.qty) | currencyFormat }}</b>
                <button
                  style="border: none"
                  class="badge bg-danger"
                  @click.stop="$emit('delete', index)"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ProductPrice from './ProductPrice.vue';

export default {
  name: 'navigation-bar',
  props: ['carts', 'cartQty', 'cartTotal'],
  components: {
    ProductPrice,
  },
  filters: {
    currencyFormat: function (value) {
      return '$' + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>

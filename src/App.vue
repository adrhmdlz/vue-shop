<template>
  <div id="app" class="container-fluid my-5 mx-3">
    <h1>VueShop</h1>
    <product-list :products="products" :maximum="maximum"></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  data: function () {
    return {
      maximum: 200,
      products: [],
    };
  },
  components: {
    ProductList,
  },
  mounted: async function () {
    try {
      const response = await fetch('https://hplussport.com/api/products/order/price');
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>

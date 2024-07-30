<template>
  <div id="app" class="container my-5">
    <navigation-bar
      :carts="carts"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle="toggleSliderStatus"
      @delete="deleteItem"
    ></navigation-bar>
    <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
    <product-list :products="products" :maximum="maximum" @add="addItem"></product-list>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import NavigationBar from './components/NavigationBar.vue';
import PriceSlider from './components/PriceSlider.vue';

export default {
  name: 'App',
  data: function () {
    return {
      maximum: 200,
      products: [],
      carts: [],
      sliderStatus: false,
    };
  },
  methods: {
    addItem: function (product) {
      let productIndex;
      let productExist = this.carts.filter(function (item, index) {
        if (Number(item.product.id) === Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.carts[productIndex].qty++;
      } else {
        this.carts.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (key) {
      if (this.carts[key].qty > 1) {
        this.carts[key].qty--;
      } else {
        this.carts.splice(key, 1);
      }
    },
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },
  },
  components: {
    ProductList,
    NavigationBar,
    PriceSlider,
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
  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? 'd-flex' : 'd-none';
    },
    cartTotal: function () {
      let sum = 0;
      for (let key in this.carts) {
        sum = sum + this.carts[key].product.price * this.carts[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.carts) {
        qty = qty + this.carts[key].qty;
      }
      return qty;
    },
  },
};
</script>

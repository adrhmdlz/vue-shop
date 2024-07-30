<template>
  <transition-group name="fade" tag="div" @beforeEnter="before" @enter="enter" @leave="leave">
    <div
      class="row d-none my-3 align-items-center"
      v-for="(item, index) in showItem"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-primary" @click="$emit('add', item)">+</button>
      </div>

      <div class="col-sm-4">
        <img :src="item.image" :alt="item.image_title" class="img-fluid d-block" />
      </div>

      <div class="col">
        <h3>{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <h5>
          <product-price :value="Number(item.price)"></product-price>
        </h5>
      </div>
    </div>
  </transition-group>
</template>

<script>
import ProductPrice from './ProductPrice.vue';

export default {
  name: 'product-list',
  components: {
    ProductPrice,
  },
  props: ['products', 'maximum'],
  computed: {
    showItem: function () {
      let maximum = this.maximum;
      return this.products.filter(function (item) {
        return item.price <= maximum;
      });
    },
  },
  methods: {
    before: function (element) {
      element.className = 'd-none';
    },
    enter: function (element) {
      let delay = element.dataset.index * 100;
      setTimeout(function () {
        element.className =
          'row d-flex my-3 align-items-center animate__animated animate__fadeInRight';
      }, delay);
    },
    leave: function (element) {
      let delay = element.dataset.index * 100;
      setTimeout(function () {
        element.className =
          'row d-flex my-3 align-items-center animate__animated animate__fadeOutRight';
      }, delay);
    },
  },
};
</script>

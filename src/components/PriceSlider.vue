<template>
  <transition
    name="custom"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div class="container-fluid" v-if="sliderStatus">
      <form>
        <div class="align-items-center gap-2 my-5" :class="sliderState">
          <label for="inputRange" class="form-label">Max</label>
          <input
            type="number"
            id="inputRange"
            class="form-control"
            style="width: 70px; text-align: center"
            v-model.number="maxAmount"
            @change="$emit('update:maximum', maxAmount)"
          />
          <input
            type="range"
            style="width: 100%"
            min="0"
            max="200"
            v-model.number="maxAmount"
            @input="$emit('update:maximum', maxAmount)"
          />
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'price-slider',
  data() {
    return {
      maxAmount: this.maximum,
    };
  },
  props: ['sliderStatus', 'maximum'],
  computed: {
    sliderState() {
      return this.sliderStatus ? 'd-flex' : 'd-none';
    },
  },
};
</script>

<style>
.custom-enter-active,
.custom-leave-active {
  transition: all 0.5s ease-in-out;
}
.custom-enter,
.custom-leave-to /* .custom-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

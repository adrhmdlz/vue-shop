<template>
  <span class="fw-bold">{{
    this.prefix + Number.parseFloat(this.value).toFixed(this.precision)
  }}</span>
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      default: '$',
    },
    value: Number,
    precision: {
      type: Number,
      default: 2,
    },
  },
};
</script>

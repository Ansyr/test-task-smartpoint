<template>
  <button :class="computedClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    computedClass() {
      return `btn btn-${this.theme}`;
    },
  },
};
</script>

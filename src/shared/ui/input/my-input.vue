<template>
  <input
      type="text"
      :value="inputText"
      class="form-control"
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      @input="onChangeInput"
  >
</template>

<script>
import {ref} from "vue";

export default {
  name: 'my-input',
  props: {
    size: {
      type: String,
      default: "Default"
    }
  },
  setup(props,context){
    const inputText = ref("")
    const onChangeInput = (event) => {
      inputText.value = event.target.value
      context.emit('update:modelValue',event.target.value)
    }
    return {onChangeInput,inputText}
  }
}
</script>

<style lang="scss" scoped>

</style>
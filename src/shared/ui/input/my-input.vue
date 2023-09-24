<template>
  <input
      :value="inputText"
      class="form-control"
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      @input="onChangeInput"
  >
</template>

<script lang="ts">
import {ref} from "vue";


export default {
  name: 'my-input',
  setup(_,context){

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
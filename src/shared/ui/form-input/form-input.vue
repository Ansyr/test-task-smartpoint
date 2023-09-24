<template>
  <div>
    <label :for="id" class="form-label">{{ label }}</label>
    <my-input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :id="id"
        :required="required"/>
    <div class="invalid-feedback">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import MyInput from "@/shared/ui/input/my-input.vue";

export default {
  name: "form-input",
  components: {MyInput},
  props: {
    modelValue: String,
    id: String,
    label: String,
    placeholder: String,
    errorMessage: String,
    required: Boolean,
  },

}
</script>

<script lang="ts">
import {ref, defineComponent} from "vue";
import MyButton from "@/shared/ui/button/my-button.vue";

export default defineComponent({
  components: {MyButton},
  props: {
    modelValue: Boolean,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const isOpen = ref(props.modelValue);

    const closeModal = () => {
      isOpen.value = false;
      context.emit("update:modelValue", false);
    };

    return { isOpen, closeModal};
  },
  watch: {
    modelValue(newValue) {
      this.isOpen = newValue;
    },
  },
});
</script>

<template>
    <div class="modal" v-if="isOpen">
      <div @click.stop class="modal__content">
        <slot></slot>
        <my-button theme="danger"  @click="closeModal">закрыть</my-button>
      </div>
    </div>
</template>

<style>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
}
</style>

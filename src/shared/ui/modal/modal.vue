<script lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount } from "vue";
import MyButton from "@/shared/ui/button/my-button.vue";

export default defineComponent({
  components: { MyButton },
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

    onMounted(() => {
      window.addEventListener("keydown", handleEscKey);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleEscKey);
    });

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen.value) {
        closeModal();
      }
    };

    return { isOpen, closeModal };
  },
  watch: {
    modelValue(newValue) {
      this.isOpen = newValue;
    },
  },
});
</script>


<template>
  <teleport to="body">
    <div class="modal" v-if="isOpen">
      <div @click.stop class="modal__content">
        <slot></slot>
        <div class="modal__header">
          <svg class="modal__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="closeModal">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289Z" fill="black"/>
          </svg>
          <slot name="header"></slot>
        </div>
        <div class="modal__body">
          <slot name="body"></slot>
        </div>
        <div class="modal__footer">
          <slot name="footer">

          </slot>
        </div>
      </div>
    </div>
  </teleport>
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
  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.modal__content {
  position: relative;
  margin: auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 400px;

  overflow: hidden;
  max-width: 90%;
  overflow-y: auto;
}

.modal__icon{
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
</style>

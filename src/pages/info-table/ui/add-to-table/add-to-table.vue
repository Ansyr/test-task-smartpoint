<template>
  <h1>Заполните данные</h1>
  <form class="form-group" @submit.prevent="handleSubmit">
    <my-input v-model="data.city" placeholder="Город"></my-input>
    <my-input v-model="data.population" placeholder="Население"></my-input>
    <my-input v-model="data.cars" placeholder="Машины"></my-input>
    <my-button theme="primary" type="submit">Отправить</my-button>
  </form>
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
</template>

<script>
import {computed, ref} from "vue";
import MyInput from "@/shared/ui/input/my-input.vue";
import MyButton from "@/shared/ui/button/my-button.vue";
import {useStore} from "vuex";

export default {
  components: { MyInput, MyButton },
  setup() {
    const store = useStore();
    const data = ref({
      city: "",
      population: "",
      cars: "",
    });

    const errorMessage = computed(() => store.state.infoTable.errorMessage)

    const handleSubmit = () => {
      const formData = {
        city: data.value.city,
        population: data.value.population,
        cars: data.value.cars,
      };

      store.dispatch("addToTable",formData)


    };



    return { data, handleSubmit,errorMessage};
  },
};
</script>

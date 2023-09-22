<template>
  <form @submit.prevent="handleSubmit">
    <my-input v-model="data.city" placeholder="Город"></my-input>
    <my-input v-model="data.population" placeholder="Население"></my-input>
    <my-input v-model="data.cars" placeholder="Машины"></my-input>
    <my-button theme="primary" type="submit">Отправить</my-button>
  </form>
</template>

<script>
import { ref } from "vue";
import MyInput from "@/shared/ui/input/my-input.vue";
import MyButton from "@/shared/ui/button/my-button.vue";
import {mapActions, useStore} from "vuex";

export default {
  components: { MyInput, MyButton },
  setup() {
    const data = ref({
      city: "",
      population: "",
      cars: "",
    });

    const store = useStore();

    const handleSubmit = () => {
      const formData = {
        city: data.value.city,
        population: data.value.population,
        cars: data.value.cars,
      };

      store.dispatch("addToTable",formData)


    };



    return { data, handleSubmit };
  },


  ...mapActions( {
    addToTable: "infoTable/addToTable"
  }),

};
</script>

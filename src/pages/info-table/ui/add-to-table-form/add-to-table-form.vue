<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <form-input
        class="pt-4"
        v-model="data.city"
        id="validationCity"
        placeholder="Город"
        required
        label="Город"
        error-message="errorMessage"
    />

    <form-input
        class="pt-4"
        v-model="data.population"
        id="validationPopulation"
        placeholder="Население"
        required
        label="Население"
        error-message="errorMessage"
    />
    <form-input
        class="pt-4"
        v-model="data.cars"
        id="validationCars"
        placeholder="Количество машин"
        required
        label="Количество машин"
        error-message="errorMessage"
    />
    <h6 v-if="errorMessage" class="error-message pt-3 text-danger">{{ errorMessage }}</h6>
    <div class="col-12 pt-3 pb-3">
      <my-button class="align-self-end" theme="primary" type="submit">Отправить</my-button>
    </div>

  </form>

</template>

<script>
import {computed, ref} from "vue";
import MyInput from "@/shared/ui/input/my-input.vue";
import MyButton from "@/shared/ui/button/my-button.vue";
import {useStore} from "vuex";
import FormInput from "@/shared/ui/form-input/form-input.vue";

export default {
  components: {FormInput, MyInput, MyButton },
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

      data.city = ""
      data.population = ""
      data.cars = ""
    };


    return { data, handleSubmit,errorMessage};
  },
};
</script>

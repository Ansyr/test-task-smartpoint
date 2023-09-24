<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <div>
      <label for="validationCity" class="form-label">Город</label>
      <my-input v-model="data.city"  id="validationCity" placeholder="Город" required/>
      <div class="invalid-feedback">
       {{ errorMessage }}
      </div>
    </div>
    <div>
      <label for="validationPopulation" class="form-label">Население</label>
        <my-input v-model="data.population" placeholder="Население" id="validationPopulation" required/>
        <div class="invalid-feedback">
          {{ errorMessage }}
        </div>
    </div>
    <div>
      <label for="validationCars" class="form-label">Количество машин</label>
      <my-input v-model="data.cars" placeholder="Машины" id="validationCars" required/>
      <div class="invalid-feedback">
        {{ errorMessage }}
      </div>
    </div>
    <h6  v-if="errorMessage" class="error-message pt-3 text-danger">{{ errorMessage }}</h6>
    <div class="col-12 pt-3 pb-3">
      <my-button class="align-self-end" theme="primary" type="submit">Отправить</my-button>
    </div>

  </form>

</template>

<script>
import {computed, onMounted, ref} from "vue";
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

<script lang="ts">

import {computed, ref} from "vue";

export default {

  setup(props,context){
    const data = ref({
      city: "",
      population: "",
      cars: ""
    })

    const onChangeField = computed(() => (name: string) => (event) => {
      data.value[name] = event.currentTarget.value;
    });

    console.log(data.value.city)

    return{onChangeField,data}
    }


  }
</script>


<template>
  <form @submit.prevent>
    <my-input v-model="data.city" />
    <my-input
        v-model="data.population"
    />
    <my-input
        v-model="data.cars"
    />
  </form>
</template>


<style lang="scss" scoped>

</style>
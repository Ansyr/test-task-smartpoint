<template>
  <div>

    <InfoTable/>

  </div>

</template>

<script>


import {defineComponent, ref} from "vue";
import MyTable from "@/shared/ui/table/my-table.vue";
import Modal from "@/shared/ui/modal/modal.vue";
import MyButton from "@/shared/ui/button/my-button.vue";
import AddToTable from "@/pages/info-table/ui/add-to-table/add-to-table.vue";
import MyInput from "@/shared/ui/input/my-input.vue";
import InfoTable from "@/pages/info-table/ui/info-table/info-table.vue";
import PolarAreaCity from "@/pages/info-table/ui/polar-area-city-population/polar-area-city-population.vue";


export default defineComponent({
  components: {PolarAreaCity, InfoTable}

})
</script>


<style>

</style>

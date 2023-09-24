<template>
  <div>

    <InfoTable/>

  </div>

</template>

<script>


import {defineComponent} from "vue";
import InfoTable from "@/pages/info-table/ui/info-table/info-table.vue";
import PolarAreaCity from "@/pages/info-table/ui/polar-area-city-population/polar-area-city-population.vue";


export default defineComponent({
  components: {PolarAreaCity, InfoTable}

})
</script>


<style>

</style>

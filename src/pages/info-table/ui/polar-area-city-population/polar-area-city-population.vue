<template>
  <Pie :data="totalData" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import {useStore} from "vuex";
import {computed} from "vue";

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  setup(){
    const store = useStore()
    const { options } = chartConfig

    const totalData = computed(() => {
      return {
        labels: store.getters['cityStatistic'].map(city => city.label),
        datasets: [
          {
            backgroundColor: ['#FF5733', '#33FF57', '#5733FF', '#FFFF33'], // Цвета для секторов диаграммы
            data: store.getters['cityStatistic'].map(city => city.value),
          },
        ],
      };
    });
    return { totalData, options }
  },

}
</script>

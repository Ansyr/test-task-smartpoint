<template>
  <h1 v-if="!totalData">Загрузка данных...</h1>
  <div>
    <Bar v-if="totalData" :data="totalData" :options="options" ref="chart" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig'
import {useStore} from "vuex";
import {computed, onMounted, ref, watch} from "vue";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'bar-auto-population',
  components: {
    Bar
  },
  setup(){
    const store = useStore()
    const totalData = computed(() => store.state.infoTable.statisticPopulation)

    const {options} = chartConfig

    const chart = ref(null)

    onMounted(() => {
      store.dispatch("setTotalPopulation")
    })

    watch(totalData, () => {
      if (chart.value && chart.value.$refs.chart) {
        chart.value.$refs.chart.renderChart()
      }
    })

    return  { options, totalData, chart }
  }
}
</script>

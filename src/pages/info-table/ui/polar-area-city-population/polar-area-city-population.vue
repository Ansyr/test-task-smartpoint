<template>
  <h1 v-if="!totalData">Загрузка данных...</h1>
  <div>
    <Pie v-if="totalData" :data="totalData" :options="options" ref="chart" />
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import {useStore} from "vuex";
import {computed, onMounted, Ref, ref, watch} from "vue";


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  setup(){
    const store = useStore()
    const totalData = computed(() => store.state.infoTable.statisticCity)

    const chart: Ref<any> | null = ref(null)
    onMounted(() => {
      store.dispatch("setTotalCity")
    })

    watch(totalData, () => {
      if (chart.value && chart.value.$refs.chart) {
        chart.value.$refs.chart.renderChart()
      }
    })

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    }

    return { options, totalData, chart }
  },

}
</script>

<template>
  <my-table :columns="tableColumns" :data="tableData"></my-table>
  <Modal v-model="isOpen">
    <add-to-table></add-to-table>
  </Modal>
  <MyButton @click="openModal">ADD</MyButton>
  <div>
    <PolarAreaCity></PolarAreaCity>
  </div>
  <div>
    <bar-auto-population></bar-auto-population>
  </div>

</template>

<script>
import Modal from "@/shared/ui/modal/modal.vue";
import MyTable from "@/shared/ui/table/my-table.vue";
import AddToTable from "@/pages/info-table/ui/add-to-table/add-to-table.vue";
import MyInput from "@/shared/ui/input/my-input.vue";
import MyButton from "@/shared/ui/button/my-button.vue";
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import PolarAreaCity from "@/pages/info-table/ui/polar-area-city-population/polar-area-city-population.vue";
import BarAutoPopulation from "@/pages/info-table/ui/bar-auto-population/bar-auto-population.vue";

export default {
  components: {BarAutoPopulation, PolarAreaCity, MyInput, AddToTable, MyButton, Modal, MyTable},
  setup() {
    const store = useStore()
    const isOpen = ref(false)
    const tableData = computed(() => store.getters.totalDataTable)

    const openModal = () => {
      isOpen.value = true
    }

    watch(
        () => store.getters.cityStatistic,
        (newValue, oldValue) => {
          console.log("City Statistic has changed", newValue, oldValue);
        }
    );
    return {isOpen, openModal, tableData}

  },



  data() {
    return {
      tableColumns: [
        {id: 1, key: "city", title: "Город"},
        {id: 2, key: "population", title: 'Количество людей'},
        {id: 3, key: "cars", title: 'Количество машин'},
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
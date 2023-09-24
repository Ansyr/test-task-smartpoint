<template>
  <div class="row m-2 m-5">
    <div class="col-sm pb-2">
      <MyButton @click="openModal">Добавить</MyButton>
    </div>
    <div class="row">
      <my-table :columns="tableColumns" :data="tableData"></my-table>
      <Modal v-model="isOpen">
        <div slot="header">

        </div>
        <div slot="body">
          <add-to-table></add-to-table>
        </div>
      </Modal>
      <div class="row">
        <div class="col-sm pt-4">
          <h1>
            Статистика
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h2 class="pt-4 pb-4">
            Доли жителей по городам
          </h2>
          <PolarAreaCity></PolarAreaCity>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <h2 class="pt-4 pb-4">
            Соотношение автомобили/жители
          </h2>
          <bar-auto-population></bar-auto-population>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Modal from "@/shared/ui/modal/modal.vue";
import MyTable from "@/shared/ui/table/my-table.vue";
import AddToTable from "@/pages/info-table/ui/add-to-table-form/add-to-table-form.vue";
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

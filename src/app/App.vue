<template>
  <div>
    <my-table :columns="tableColumns" :data="tableData"></my-table>
    <Modal  v-model="isOpen">Содержимое модального окна</Modal>
    <my-button theme="primary" @click="openModal">add</my-button>
  </div>
</template>

<script>


import {defineComponent, ref} from "vue";
import MyTable from "@/shared/ui/table/my-table.vue";
import Modal from "@/shared/ui/modal/modal.vue";
import MyButton from "@/shared/ui/button/my-button.vue";



export default defineComponent({
  components: {MyButton, Modal, MyTable },
  setup(){
    const isOpen = ref(false)
    const openModal = () => {
      isOpen.value = true
    }

    return {isOpen, openModal}
  },


  data() {
    return {
      tableColumns: [
        { id: 1, key: "City" , title: "Город" },
        { id: 2, key: "Population" , title: 'Количество людей' },
        { id: 3, key: "Cars", title: 'Количество машин'},
      ],

      tableData: [
        { City: "New York", Population: 8537673, Cars: 2532146 },
        { City: "Los Angeles", Population: 39776830, Cars: 6192815 },
        { City: "Chicago", Population: 2716000, Cars: 1151999 },
      ]
    };
  }
})
</script>


<style>

</style>

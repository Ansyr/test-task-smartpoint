<template>
  <table class="table">
    <thead class="thead-light">
    <tr>
      <th class="bg-primary" scope="col" v-for="column in columns" :key="column.id">
        <p class="text-white">
          {{ column.title }}
        </p>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(rowData, rowIndex) in rows" :key="rowIndex">
      <th v-for="(column, columnIndex) in columns" :key="column.id" scope="row">
        {{ rowData[columnIndex] }}
      </th>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

import {computed} from "vue";

interface column {
  id: number,
  key: string,
  title: string
}

interface TableProps {
  columns: column[]
  data: any[]
}

const props = defineProps<TableProps>()

const rows = computed(() => {
  return props.data.map((item) => props.columns.map((column) => item[column.key]));
});

</script>


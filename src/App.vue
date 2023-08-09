<template>
  <div class="flex">
      <SideMenu :cur-page-name="curPageName" @change-view="changePage"/>
      <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SideMenu from "./components/SideMenu.vue";
import { ref } from 'vue'

const curPageName = ref('Assignment')

const changePage = (item) => {
  curPageName.value = item
}

</script>

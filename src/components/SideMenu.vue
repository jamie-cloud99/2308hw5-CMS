<template>
  <div class="fixed flex min-h-screen h-full min-w-[296px] flex-col justify-between bg-gray-100 p-8">
    <div>
      <h1 class="mb-8">
        <img src="/images/logo-ANSWER.svg" alt="logo" /><a href="/"></a>
      </h1>
      <ul class="space-y-6">
        <li
          v-for="item in menuList"
          :key="item.text"
          class="relative font-bold hover:text-gray-600"
          :class="{
            'before:menu-before': props.curPageName === item.text,
            'text-success': props.curPageName === item.text,
          }"
          @click="changePage(item.text)"
        >
          <router-link :to="item.path">
            <span class="material-icons mr-4 align-bottom">
              {{ item.icon }}
            </span>
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <img
        class="mr-4 h-10 w-10 rounded-full object-cover"
        src="/images/andychen.jpeg"
        alt="andy"
      />
      <div class="">
        <p class="font-bold">Andy Chen</p>
        <p class="text-sm text-gray-600">andy0401@mail.com</p>
      </div>
    </div>
  </div>
  <div class="min-h-screen h-full w-[296px] flex-shrink-0"></div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({
  curPageName: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(['change-view'])
const menuList = reactive([
  {
    icon: "assessment",
    text: "Dashboard",
    path: '/'
  },
  {
    icon: "question_answer",
    text: "Question",
    path: ''
  },
  {
    icon: "assignment",
    text: "Assignment",
    path: '/assignment'
  },
  {
    icon: "video_library",
    text: "Course",
    path: ''
  },
  {
    icon: "people",
    text: "Admin",
    path: '/admin'
  },
  {
    icon: "settings",
    text: "Settings",
    path: ''
  },
]);

const changePage = (item) => {
  emits('change-view', item)
}




</script>

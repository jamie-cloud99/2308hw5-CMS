<template>
  <div class="divide-y divide-gray-400 border-t border-gray-400">
    <ul class="flex items-center gap-x-6 bg-gray-100 px-6 py-2">
      <li class="relative">
        <select
          class="cursor-pointer rounded border-0 bg-transparent bg-[url('')] font-bold hover:bg-gray-400"
          name="courses"
          id="courses"
        >
          <option value="all">Body Text</option>
        </select>
        <span class="material-icons absolute right-2 top-1/2 -translate-y-1/2">
          arrow_drop_down
        </span>
      </li>
      <li v-for="item in editorTool" :key="item.icon">
        <button type="button" class="rounded p-1 hover:bg-gray-400">
          <span class="material-icons align-bottom"> {{ item.icon }} </span>
        </button>
      </li>
    </ul>
    <div class="hover:ring-1 hover:ring-success pt-2 pb-4 px-3">
      <textarea
        name="reply"
        id="reply"
        placeholder="Reply an answer…"
        class="h-52 w-full border-0 focus:ring-0 placeholder:text-gray-400 resize-none overflow-y-scroll"
      ></textarea>
      <div class="flex justify-end gap-x-6 px-3">
        <button
          type="button"
          class="btn border border-success text-success hover:bg-success hover:text-white"
          @click.prevent="closeEditor"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn bg-success text-white hover:bg-success-800"
          
        >
          Reply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const editorTool = reactive([
  {
    icon: "format_bold",
    function: "",
  },
  {
    icon: "format_italic",
    function: "",
  },
  {
    icon: "format_list_bulleted",
    function: "",
  },
  {
    icon: "format_list_numbered",
    function: "",
  },
  {
    icon: "insert_photo",
    function: "",
  },
  {
    icon: "insert_link",
    function: "",
  },
  {
    icon: "code",
    function: "",
  },
]);

const emits = defineEmits(['toggle'])

const closeEditor = () => emits('toggle')

</script>

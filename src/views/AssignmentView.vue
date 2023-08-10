<template>
  <div class="container">
    <header class="mb-2 flex items-center justify-between py-8">
      <div class="flex">
        <h2 class="mr-[50px] text-2xl font-bold">Assignment</h2>
        <div class="relative">
          <select
            class="cursor-pointer border-0 bg-transparent bg-[url('')] font-bold hover:text-success focus:ring-success"
            name="courses"
            id="courses"
          >
            <option value="all">All Courses</option>
          </select>
          <span
            class="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-success"
          >
            expand_more
          </span>
        </div>
      </div>
      <HeaderBarTool />
    </header>

    <main class="mb-8">
      <div class="mb-1 flex items-center justify-between">
        <div class="relative">
          <select
            class="cursor-pointer border-0 bg-transparent bg-[url('')] font-bold hover:text-success focus:ring-success"
            name="courses"
            id="courses"
          >
            <option value="all">All (4)</option>
          </select>
          <span
            class="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-success"
          >
            expand_more
          </span>
        </div>
        <p class="text-gray-600">2 comments</p>
      </div>
      <div class="grid grid-cols-3 gap-x-[30px]">
        <div class="col-span-1">
          <ul class="divide-y divide-gray-400 border border-gray-400 rounded-sm">
            <li
              v-for="item in assignments"
              :key="item.id"
              class="space-y-1 p-3 hover:bg-gray-50"
              :class="{ 'bg-gray-100': curAssignment.id === item.id }"
            >
              <div class="flex justify-between text-xs">
                <p>{{ item.assignment }}</p>
                <p>{{ item.time }}</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="font-bold">{{ item.title }}</p>
                <p class="text-xs text-gray-600">{{ item.name }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-span-2">
          <div class="mb-4 divide-y divide-gray-400 border border-gray-400 rounded-sm">
            <div class="flex items-center justify-between bg-gray-100 p-3">
              <div class="space-y-1">
                <h4 class="text-xs">{{ curAssignment.assignment }}</h4>
                <h3 class="font-bold">{{ curAssignment.title }}</h3>
              </div>
              <span class="material-icons"> more_vert </span>
            </div>
            <div>
              <div class="flex items-start p-4 pr-8">
                <img
                  class="block h-10 w-10 rounded-full object-cover flex-shrink-0"
                  :src="getImageUrl(curAssignment.imgUrl) "
                  :alt="curAssignment.name"
                />
                <div class="pl-2">
                  <p class="mb-1 font-bold">{{ curAssignment.name }}</p>
                  <p class="mb-4 text-xs text-gray-600">
                    {{ curAssignment.time }}
                  </p>
                  <p class="mb-4 text-sm" v-html="curAssignment.message"></p>
                  <a href="#"
                    :download="curAssignment.file"
                    class="mb-4 inline-block border border-gray-400 bg-gray-100 rounded-sm px-3 py-2 pr-4"
                  >
                    <span class="material-icons mr-2 align-bottom">
                      attach_file</span
                    >
                    <span class="font-bold leading-6">{{
                      curAssignment.file
                    }}</span>
                  </a>
                  <hr class="border-gray-400" />
                </div>
              </div>
              <AssigmentReply v-if="!isEditting" :cur-reply="curReply" :get-image-url="getImageUrl"/>
              <AssignmentReplyEditor v-else @toggle="toggleEditor"/>
            </div>
          </div>
          <div v-if="!isEditting" class="flex justify-between">
            <nav class="space-x-6">
              <button type="button" class="hover:opacity-70">
                <span class="material-icons"> chevron_left </span>
              </button>
              <button type="button" class="hover:opacity-70">
                <span class="material-icons"> chevron_right </span>
              </button>
            </nav>
            <div class="space-x-4">
              <button type="button" class="btn border border-success text-success hover:bg-success hover:text-white">
                Mark as read
              </button>
              <button type="button" @click.prevent="toggleEditor" class="btn bg-success text-white hover:bg-success-800">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import AssigmentReply from "../components/AssigmentReply.vue";
import AssignmentReplyEditor from "../components/AssignmentReplyEditor.vue";
import HeaderBarTool from "../components/HeaderBarTool.vue";

const assignments = reactive([
  {
    id: 1,
    assignment: "Chapter Assignment 2",
    title: "Please check this file…",
    time: "4 hrs ago",
    name: "Emily Wang",
  },
  {
    id: 2,
    assignment: "Chapter Assignment 1",
    title: "My Homework",
    time: "12 hrs ago",
    name: "David Xu",
  },
  {
    id: 3,
    assignment: "Final Assignment",
    title: "Have a problem with this…",
    time: "18 hrs ago",
    name: "Tony Wei",
  },
  {
    id: 4,
    assignment: "Final Assignment",
    title: "Did I do it right?",
    time: "19 hrs ago",
    name: "Christina Lin",
  },
]);

const curAssignment = reactive({
  id: 1,
  assignment: "Chapter Assignment 2 / HTML&CSS",
  title: "Please check this file for me, thanks!",
  imgUrl: "emilywang.jpeg",
  name: "Emily Wang",
  time: "10:38 AM (4 hours ago)",
  message:
    "Hi Teacher, the attached file is my homework of chapter 2. And here comes a question: Why in the following code the height of the <code class='text-success font-RobotoMono bg-gray-100 rounded-sm px-1 py-0.5'>div</code> is bigger than the height of the <code class='text-success font-RobotoMono bg-gray-100 rounded-sm px-1 py-0.5 '>img</code> ? There is a gap below the image, but it doesn’t seems to be a padding/margin.<br/> What is the gap or extra space below image?",
  file: "HW-2-David.zip",
});

const curReply = reactive({
  postId: 1,
  imgUrl: "andychen.jpeg",
  name: "Andy Chen (You)",
  time: "13:24 AM (1 hours ago)",
  message:
    "Hi David, by default, an image is rendered inline, like a letter so it sits on the same line that a, b, c and d sit on. There is space below that line for the descenders you find on letters like g, j, p and q. <br/> <br/> You can: <br/> <br/> <ul class='list-disc pl-8'><li>adjust the  <code class='text-success font-RobotoMono bg-gray-100 rounded-sm px-1 py-0.5'>vertical-align</code> of the image to position it elsewhere (e.g. <code class='text-success font-RobotoMono bg-gray-100 rounded-sm px-1 py-0.5'>middle</code> ) or</li class><li>change the <code class='text-success font-RobotoMono bg-gray-100 rounded-sm px-1 py-0.5'>display</code> so it isn’t inline.</li></ul>",
});

const isEditting = ref(false)

const toggleEditor = () => {
  isEditting.value = !isEditting.value
}

const getImageUrl = (path) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href;
};

</script>

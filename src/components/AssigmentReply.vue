<template>
  <div class="flex items-start p-4 pr-8 pt-0">
    <img
      class="block h-10 w-10 flex-shrink-0 rounded-full object-cover"
      :src="getImageUrl(props.curReply.imgUrl)"
      :alt="props.curReply.name"
    />
    <div class="pl-2">
      <div class="flex items-center justify-between">
        <p class="mb-1 font-bold">{{ props.curReply.name }}</p>
        <div class="space-x-6">
          <button type="button">
            <span class="material-icons"> star_outline</span>
          </button>
          <button type="button">
            <span class="material-icons"> edit</span>
          </button>
        </div>
      </div>

      <p class="mb-4 text-xs text-gray-600">
        {{ props.curReply.time }}
      </p>
      <p class="mb-4 text-sm" v-html="props.curReply.message"></p>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  curReply: {
    type: Object,
    default: () => ({}),
  },
  getImageUrl: {
    type: Function,
    default: () => {},
  },
});

const { getImageUrl } = toRefs(props);
</script>

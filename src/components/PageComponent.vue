<template>
  <nav aria-label="Page navigation" class="flex justify-end">
    <ul class="flex divide-x divide-success rounded-sm border border-success">
      <li>
        <a
          class="relative block px-1 py-1 text-sm text-success transition-all duration-300 hover:bg-success-100"
          :class="{'pointer-events-none':!props.pages.havePre}"
          ><span class="material-icons align-bottom"> chevron_left </span></a
        >
      </li>
      <li
        aria-current="page"
        v-for="i in props.pages.totalPages"
        :key="'page' + i"
      >
        <a
          class="relative block px-3 py-1.5 text-sm font-medium transition-all duration-300 "
          href="#!"
          :class="props.pages.curPage === i ? classGroup : 'hover:bg-success-100'"
          >{{ i }}
        </a>
      </li>
      <li>
        <a
          class="relative block px-1 py-1 text-sm text-success transition-all duration-300 hover:bg-success-100"
          href="#!"
          :class="{'pointer-events-none':!props.pages.haveNext}"
          ><span class="material-icons align-bottom"> chevron_right </span></a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  pages: {
    type: Object,
    default: () => ({}),
  },
});

const classGroup = "bg-success text-white ";
</script>

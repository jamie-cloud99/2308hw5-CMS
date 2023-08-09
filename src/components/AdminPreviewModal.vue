<template>
  <div
    ref="modal"
    data-te-modal-init
    class="fixed left-1/2 top-1/2 z-[1055] hidden -translate-x-1/2 -translate-y-1/2 overflow-hidden"
    id="Modal"
    tabindex="-1"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div
      data-te-modal-dialog-ref
      class="scrollbar-hidden overflow-y-auto rounded-sm opacity-0 transition-all duration-300 ease-in-out"
    >
      <div class="w-[480px] rounded-sm bg-white p-8 shadow-lg">
        <div class="flex gap-x-6" data-te-modal-body-ref>
          <img
            src="/images/emir.jpeg"
            alt="emir"
            class="block h-[140px] w-[140px] object-cover"
          />
          <div class="flex-grow">
            <div class="mb-2 flex items-center justify-between">
              <p class="font-bold leading-6">{{ curStaff.id }}</p>
              <button
                @click="closeModal"
                type="button"
                class="hover:opacity-75"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <span class="material-icons align-bottom"> close </span>
              </button>
            </div>
            <p class="">{{ curStaff.accessLevel }}</p>
            <h4 class="mb-2 text-2xl font-bold">{{ curStaff.name }}</h4>
            <p class="mb-4 text-sm text-gray-600">{{ curStaff.email }}</p>
            <div>
              <button
                @click="toggleCollapse"
                class="flex w-full cursor-pointer items-center justify-between"
                type="button"
              >
                <p class="rounded-sm bg-gray-100 px-2 py-1 text-sm">
                  {{ verification }}
                </p>
                <span
                  :class="isCollapsed ? 'rotate-0' : 'rotate-180'"
                  class="material-icons align-bottom text-success transition-transform duration-200 ease-in-out"
                >
                  expand_more
                </span>
              </button>
              <div
                class="overflow-hidden transition-all duration-500 ease-in-out"
                :class="isCollapsed ? 'max-h-0' : 'max-h-20'"
              >
                <div class="flex gap-x-4 pt-8">
                  <button
                    type="button"
                    class="btn block border border-danger text-danger hover:bg-danger hover:text-white"
                    data-te-modal-dismiss
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    class="btn block bg-success text-white hover:bg-success-800"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Modal, initTE } from "tw-elements";
import { ref, computed } from "vue";

const modal = ref(null);
const adminModal = ref(null);

const isCollapsed = ref(true);

defineExpose({
  adminModal,
});

const props = defineProps({
  staff: {
    type: Object,
    default: () => ({}),
  },
});

const curStaff = computed(() => {
  return { ...props.staff };
});

const verification = computed(() => {
  return props.staff.verified === "Yes" ? "Verified" : "Unverified";
});

const closeModal = () => {
  adminModal.value.hide();
};
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

initTE({ Modal });

onMounted(() => {
  adminModal.value = new Modal(modal.value);
});
</script>

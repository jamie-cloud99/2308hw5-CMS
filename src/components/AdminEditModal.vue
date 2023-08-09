<template>
  <div
    ref="modal"
    data-te-modal-init
    class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1055] hidden overflow-hidden"
    id="Modal"
    tabindex="-1"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div
      data-te-modal-dialog-ref
      class="scrollbar-hidden  max-h-[500px] w-[480px] overflow-y-auto rounded-sm opacity-0 transition-all duration-300 ease-in-out"
    >
      <div class="rounded-sm bg-white px-8 shadow-lg">
        <!--Modal header-->
        <div class="flex items-center justify-between py-8">
          <h4 class="text-2xl font-bold">
            {{ modalTitle }}
          </h4>
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

        <!--Modal body-->
        <div class="pb-6" data-te-modal-body-ref>
          <h5 class="mb-4 text-xl font-bold">Account</h5>
          <div class="mb-4">
            <label for="name" class="mb-1 text-sm">Name</label>
            <input
              id="name"
              type="text"
              class="block h-12 w-full rounded-sm border-gray-900"
              :class="inputClassGroup"
              v-model="curStaff.name"
              :readonly="!accountNew"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="mb-1 text-sm">Email</label>
            <input
              id="email"
              type="email"
              class="block h-12 w-full rounded-sm border-gray-900"
              :class="inputClassGroup"
              v-model="curStaff.email"
              :readonly="!accountNew"
            />
          </div>
          <hr class="mb-6 border-gray-400" />
          <h5 class="mb-4 text-xl font-bold">Verification</h5>
          <div class="mb-6">
            <div v-if="curStaff.verified !== 'Yes'">
              <p class="mb-4 font-bold leading-6">
                <span class="material-icons mr-2 align-bottom text-danger">
                  warning </span
                >Unverified
              </p>
              <button
                type="button"
                class="btn block w-full border border-gray-400 py-4 text-success"
              >
                Send Verification Mail
              </button>
            </div>
            <div v-else>
              <div class="mb-4 flex items-center justify-between">
                <p class="font-bold leading-6">
                  <span class="material-icons mr-2 align-bottom text-success">
                    check_circle </span
                  >Verified
                </p>
                <p class="text-sm">2020/4/12</p>
              </div>
              <button
                type="button"
                disabled
                class="btn pointer-events-none block w-full border border-gray-400 py-4 text-gray-400"
              >
                Send Verification Mail
              </button>
            </div>
          </div>
          <hr class="mb-6 border-gray-400" />
          <h5 class="mb-4 text-xl font-bold">Access Level</h5>
          <div class="mb-6">
            <div class="relative">
              <select
                required
                class="form-select block w-full border-gray-900 bg-[url('')] py-4 pl-4 invalid:text-gray-600 focus:border-success focus:ring-success"
                name="level"
                id=""
                v-model="curStaff.accessLevel"
              >
                <option value="" class="text-gray-600" disabled selected>
                  -Choose access level-
                </option>
                <option value="Admin" class="text-gray-900">Admin</option>
                <option value="User">User</option>
              </select>
              <span
                class="material-icons absolute right-2 top-1/2 -translate-y-1/2"
              >
                expand_more
              </span>
            </div>
          </div>
          <hr class="mb-6 border-gray-400" />
          <h5 class="mb-4 text-xl font-bold">Custom Access</h5>

          <div class="mb-6">
            <div class="mb-4">
              <input
                class="form-checkbox mr-2 text-success focus:text-success focus:ring-success"
                type="checkbox"
                name="Lecture"
                id="Lecture"
              />
              <label for="Lecture" class="align-middle leading-6"
                >Lecture</label
              >
            </div>
            <div class="mb-4">
              <input
                class="form-checkbox mr-2 text-success focus:text-success focus:ring-success"
                type="checkbox"
                name="Coupon"
                id="Coupon"
              />
              <label for="Coupon" class="align-middle leading-6">Coupon</label>
            </div>
            <div class="mb-4">
              <input
                class="form-checkbox mr-2 text-success focus:text-success focus:ring-success"
                type="checkbox"
                name="Message"
                id="Message"
              />
              <label for="Message" class="align-middle leading-6"
                >Message</label
              >
            </div>
            <div class="mb-4">
              <input
                class="form-checkbox mr-2 text-success focus:text-success focus:ring-success"
                type="checkbox"
                name="Setting"
                id="Setting"
              />
              <label for="Setting" class="align-middle leading-6"
                >Setting</label
              >
            </div>
            <div class="mb-4">
              <input
                class="form-checkbox mr-2 text-success focus:text-success focus:ring-success"
                type="checkbox"
                name="Task Menu"
                id="Task Menu"
              />
              <label for="Task Menu" class="align-middle leading-6"
                >Task Menu</label
              >
            </div>
          </div>
          <div v-if="!accountNew">
            <hr class="mb-6 border-gray-400" />
            <h5 class="mb-4 text-xl font-bold">Deactivate Account</h5>
            <p class="mb-4 leading-6 text-danger">
              <span class="material-icons mr-2 align-bottom"> warning </span
              >This cannot be undone!
            </p>
             <button
                type="button"
                class="btn block w-full border  border-danger py-4 text-danger hover:bg-danger hover:text-white"
              >
                Send Verification Mail
              </button>
          </div>
        </div>

        <!--Modal footer-->
        <div class="flex items-center justify-end gap-x-4 pb-4">
          <button
            @click="closeModal"
            type="button"
            class="btn block border border-success text-success hover:bg-success hover:text-white"
            data-te-modal-dismiss
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Cancel
          </button>
          <button v-if="accountNew"
            type="button"
            class="btn block bg-success text-white hover:bg-success-800"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Add
          </button>
          <button v-else
            type="button"
            class="btn block bg-success text-white hover:bg-success-800"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { Modal, initTE } from "tw-elements";
import { ref, watch, toRefs } from "vue";

const props = defineProps({
  accountNew: {
    type: Boolean,
    default: true,
  },
  staff: {
    type: Object,
    default: () => ({}),
  },
});

const modal = ref(null);
const adminModal = ref(null);
const curStaff = ref({});
const { staff, accountNew } = toRefs(props);

const modalTitle = computed(() => {
  return accountNew.value ? "New Admin" : "Edit Admin";
});

const inputClassGroup = computed(() => {
  return accountNew.value
    ? "focus:border-success focus:ring-success"
    : "bg-gray-100 border-0 focus:ring-0";
});

const closeModal = () => {
  adminModal.value.hide();
};

watch(staff, () => {
  curStaff.value = { ...staff.value };
});

defineExpose({
  adminModal,
});

initTE({ Modal });

onMounted(() => {
  adminModal.value = new Modal(modal.value);
});
</script>

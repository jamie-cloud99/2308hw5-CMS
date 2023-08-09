<template>
  <div class="container">
    <header class="mb-2 flex items-center justify-between py-8 font-bold">
      <div class="flex">
        <h2 class="mr-[50px] text-2xl">Admin</h2>
        <button
          type="button"
          class="inline-block leading-6 hover:text-success"
          @click="openEditModal(true)"
        >
          <span class="material-icons mr-2 align-bottom text-success">
            add
          </span>
          Add New Admin
        </button>
      </div>
      <HeaderBarTool />
    </header>

    <table class="mb-16 w-full border-collapse px-2 text-left">
      <thead>
        <tr class="border-b border-gray-900 pb-1">
          <th class="">
            ID
            <button type="button" class="">
              <span class="material-icons align-bottom text-lg text-success">
                arrow_downward
              </span>
            </button>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Verified</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="person in adminStaff"
          :key="person.id"
          class="border-b border-gray-400 hover:bg-gray-100"
        >
          <td class="py-4">{{ person.id }}</td>
          <td class="py-4">{{ person.name }}</td>
          <td class="py-4">{{ person.email }}</td>
          <td class="py-4">{{ person.verified }}</td>
          <td class="py-4">
            <button type="button" @click="openPreviewModal(person)">
              <span class="material-icons hover:text-success">
                visibility
              </span>
            </button>
          </td>
          <td class="py-4">
            <button type="button" @click="openEditModal(false, person)">
              <span class="material-icons hover:text-success"> edit </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mb-8">
      <PageComponent :pages="pages" />
    </div>
  </div>

  <AdminEditModal ref="editModal" :account-new="isNew" :staff="curPerson"/>
  <AdminPreviewModal ref="previewModal" :staff="curPerson" />
</template>

<script setup>
import { reactive, ref } from "vue";
import HeaderBarTool from "../components/HeaderBarTool.vue";
import PageComponent from "../components/PageComponent.vue";
import AdminEditModal from "../components/AdminEditModal.vue";
import AdminPreviewModal from "../components/AdminPreviewModal.vue";

const adminStaff = reactive([
  {
    id: "#1",
    name: "Emir Wicks",
    email: "emir.wicks@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#2",
    name: "Zaina Goldsmith",
    email: "zaina.goldsmith@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#3",
    name: "Mahima Lopez",
    email: "mahima.lopez@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#4",
    name: "Pharrell Murray",
    email: "pharrell.murray@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#5",
    name: "Annika Mcbride",
    email: "annika.mcbride@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#6",
    name: "Fatimah Clark",
    email: "fatimah.clark@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#7",
    name: "Klaudia Rhodes",
    email: "klaudia.rhodes@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#8",
    name: "Tillie Lucero",
    email: "tillie.lucero@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#9",
    name: "Sabrina Stephenson",
    email: "sabrina.stephenson@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
  {
    id: "#10",
    name: "Annie Smith",
    email: "annie.smith@mail.com",
    verified: "Yes",
    accessLevel: 'Admin'
  },
]);
const pages = reactive({
  curPage: 1,
  totalPages: 3,
  haveNext: true,
  havePre: false,
});
const isNew = ref(true);
const curPerson = ref();

const editModal = ref(null);
const previewModal = ref(null);



const openEditModal = (status, person) => {
  const staff =  status ? { accessLevel: ''} : person
  selectPerson(staff)
  isNew.value = status;
  editModal.value.adminModal.show();
};

const selectPerson = (person) => {
  curPerson.value = { ...person };
}

const openPreviewModal = (person) => {
  selectPerson(person)
  previewModal.value.adminModal.show();
};
</script>

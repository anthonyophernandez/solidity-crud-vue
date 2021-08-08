<template>
  <!-- Form -->
  <InsertForm :insertUser="insertUser" />
  <!-- List -->
  <button class="max-w-sm px-6 py-3 mt-6 ml-1 btn" @click="load">
    <span v-if="!state.isLoaded">Load</span>
    <span v-else>Hide</span>
  </button>
  <div v-if="state.isLoaded" class="grid-layout p-1">
    <UserCard
      v-for="user in state.users"
      :key="user.id"
      :user="user"
      :deleteUser="deleteUser"
    />
  </div>
  <EditForm
    v-if="state.users.length > 0 && state.isLoaded"
    :updateUserEmail="updateUserEmail"
    :updateUserAge="updateUserAge"
  />
  <NotificationList />
</template>

<script setup>
import NotificationList from "./components/NotificationsList.vue";
import UserCard from "./components/UserCard.vue";
import InsertForm from "./components/InsertForm.vue";
import EditForm from "./components/EditForm.vue";

import { reactive } from "vue";
import { userCrud } from "./modules/helper.js";

const state = reactive({
  users: [],
  isLoaded: false,
});

async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

async function load() {
  state.isLoaded = !state.isLoaded;
  state.users = [];
  if (state.isLoaded) {
    const userCount = await userCrud.getUserCount();
    for (let i = 0; i < userCount; i++) {
      const address = await userCrud.getUserAtIndex(i);
      const user = await userCrud.getUser(address);
      state.users.push(user);
    }
  }
}

async function insertUser(address, email, age) {
  await requestAccount();
  await userCrud.insertUser(address, email, age);
  state.isLoaded = false;
}

async function deleteUser(address) {
  await requestAccount();
  await userCrud.deleteUser(address);
  state.isLoaded = false;
}

async function updateUserEmail(address, email) {
  if (address && email) {
    await requestAccount();
    await userCrud.updateUserEmail(address, email);
    state.isLoaded = false;
  }
}

async function updateUserAge(address, age) {
  if (address) {
    await requestAccount();
    await userCrud.updateUserAge(address, age);
    state.isLoaded = false;
  }
}
</script>

<style>
.btn {
  @apply font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none;
}
.grid-layout {
  @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2;
}
</style>

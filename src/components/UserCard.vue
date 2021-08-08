<template>
  <div class="user-card">
    <div class="title">user {{ user.id }}</div>
    <div class="bg-gray-100">
      <span class="field">
        <span class="label"> Address: </span>
        {{ user.address }}
      </span>
      <span class="field">
        <span class="label"> Email: </span>
        {{ user.email }}
      </span>
      <span class="field">
        <span class="label"> Age: </span>
        {{ user.age }}
      </span>
      <div class="w-full flex justify-center items-center">
        <button
          class="max-w-sm px-6 py-3 my-2 btn-red"
          @click="deleteUser(user.address)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  user: Object,
  deleteUser: Function,
});
</script>

<style scoped>
.user-card {
  @apply w-full mx-auto m-5 rounded-t-lg bg-gray-200 text-gray-800 border-2 border-gray-300;
}
.title {
  @apply text-center uppercase tracking-widest px-4 py-3;
}
.field {
  @apply block text-sm px-3 py-1;
}
.label {
  @apply text-gray-500 uppercase tracking-widest text-xs;
}
.btn-red {
  @apply font-medium tracking-widest text-xs text-white uppercase bg-red-600 shadow-lg focus:outline-none hover:bg-red-500 hover:shadow-none;
}
</style>

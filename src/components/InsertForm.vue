<template>
  <div class="flex flex-col sm:flex-row gap-2 w-full p-1 mt-2">
    <span class="max-w-sm">
      <label for="address" class="block label">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        v-model="state.address"
        class="block input"
      />
    </span>
    <span class="max-w-sm">
      <label for="email" class="block label">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="state.email"
        class="block input"
      />
    </span>
    <span class="max-w-sm">
      <label for="age" class="block label">Age</label>
      <input
        type="number"
        name="age"
        id="age"
        v-model.number="state.age"
        class="block input"
      />
    </span>
    <button
      class="max-w-sm px-6 py-3 mt-6 btn"
      @click="insertUser(state.address, state.email, state.age)"
    >
      Insert
    </button>
  </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";

const state = reactive({
  address: null,
  email: null,
  age: null,
});

const props = defineProps({
  insertUser: Function,
});
</script>

<style scoped>
.label {
  @apply text-xs font-semibold text-gray-600 uppercase;
}
.input {
  @apply w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner;
}
.btn {
  @apply font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none;
}
</style>

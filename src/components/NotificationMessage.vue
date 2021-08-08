<template>
  <div class="alert" role="alert" :class="[typeClass]">
    {{ notification.message }}
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  notification: Object,
});

const typeClass = computed(() => {
  if (props.notification.type === "success") {
    return "success";
  } else if (props.notification.type === "error") {
    return "error";
  }
});

setTimeout(() => {
  store.dispatch("removeNotification", props.notification);
}, 3000);
</script>

<style scoped>
.alert {
  @apply py-3 px-5 mb-4 rounded-md text-sm border;
}
.success {
  @apply bg-green-100 text-green-900 border-green-400;
}
.error {
  @apply bg-red-100 text-red-900 border-red-200;
}
</style>

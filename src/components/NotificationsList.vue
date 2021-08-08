<template>
  <div class="notification-list">
    <NotificationMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script setup>
import NotificationMessage from "./NotificationMessage.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const notifications = computed(() => store.state.notifications);
</script>

<style>
.notification-list {
  @apply fixed bottom-0 right-0 mr-2 max-w-sm;
}
</style>

import { createStore } from "vuex";

export const store = createStore({
  state: {
    notifications: [],
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
      });
    },
    REMOVE_NOTIFICATION(state, notification) {
      state.notifications = state.notifications.filter(
        (n) => n.id != notification.id
      );
    },
  },
  actions: {
    addNotification({ commit }, notification) {
      commit("PUSH_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
  },
  getters: {},
});

import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {},
  }),
  getters: {},
  actions: {
    logIn(payload) {
      return axios
        .post("https://jsonplaceholder.typicode.com/posts", payload)
        .then((resp) => {
          this.user = resp.data;
          return resp.data;
        })
        .catch((error) => {
          throw error;
        });
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user", //nama userStorenya
  state: () => ({
    user: false,
    // jika data gada pengecekan false kalo ada data jadi objek
  }),
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user,
  },
  actions: {
    //mengambil data Api
    async fetchUser() {
      try {
        const {} = await axios.get(
          "https://zullkit-backend.belajarkoding.com/api/user",
          {
            headers: {
              AuthorizationL:
                localStorage.getItem("token_type") +
                "" +
                localStorage.getItem("access_token"),
            },
            //mengambil token dari lokal storage
          }
        );
        this.user = data;
      } catch (error) {
        this.user = false;
      }
    },
  },
});

<script setup>
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";

import AuthButton from "./AuthButton.vue";
import Logo from "./Logo.vue";
import NavigationLinks from "./NavigationLinks.vue";
import UserInfo from "./UserInfo.vue"

const userStore = useUserStore(); //memanggil useUserStore ke dalam userStore
const getUser = computed(() => useStore.getUser); // memanggil yang ada di getters pinia useUserStoreP
const isLoggedIn = computed(() => useStore.isLoggedIn);
const user = computed(() => useStore.user); //memakai state dari userStore 

onMounted(() => {
  userStore.fetchUser()
  //menjalankan fetchuser yangada di pinia 
  //untuk memanggil data dan mengupdate data di pinia dan mengupdate data global
})
</script>

<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <Logo />
      <UserInfo v-if="isLoggedIn" />
      <AuthButton v-else/>
      <NavigationLinks />
    </div>
  </nav>
</template>

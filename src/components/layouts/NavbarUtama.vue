<script setup>
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";

import AuthButton from "./AuthButton.vue";
import Logo from "./Logo.vue";
import NavigationLinks from "./NavigationLinks.vue";

const useStore = useUserStore(); //memanggil useStore di pinia  useUserStore
const getUser = computed(() => useStore.getUser); // memanggil yang ada di getters pinia useUserStoreP
const isLoggedIn = computed(() => useStore.isLoggedIn);
const user = computed(()=> useStore.user); //memanggil langsung di useStorenya

onMounted (()=> {
    userStore.fetchUser()
    //menjalankan fetchuser yangada di pinia untuk memanggil data
})
</script>

<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto my-2"
    >
      <Logo />
      <NavigationLinks />
      <AuthButton />
    </div>
  </nav>
</template>

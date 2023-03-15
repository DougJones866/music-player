<template>
  <the-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <app-player />

  <the-auth />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheAuth from "@/components/TheAuth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";
import AppPlayer from "@/components/Player.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheAuth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>

<template>
  <div class="bg-black text-white">
    <div class="container mx-auto">
      <nav class="flex items-center">
        <router-link
          to="../components/SignUp.vue"
          class="inline-block px-16 py-4 transition-colors hover:bg-orange-300 duration-300 hover:text-black"
          >Register</router-link
        >
        |
        <router-link
          to="../components/SignIn.vue"
          class="inline-block px-16 py-4 transition-colors hover:bg-orange-300 duration-300 hover:text-black"
          >LogIn</router-link
        >
        |
        <router-link
          to="../components/NewTask.vue"
          class="inline-block px-16 py-4 transition-colors hover:bg-orange-300 duration-300 hover:text-black"
          >ToDos</router-link
        >
        |
        <router-link
          to="../views/About.vue"
          class="inline-block px-16 py-4 transition-colors hover:bg-orange-300 duration-300 hover:text-black"
          >About Me</router-link
        >
      </nav>
    </div>
  </div>

  <router-view />
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

const router = useRouter();
const userStore = useUserStore();
</script>

<style></style>

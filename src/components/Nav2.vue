<template>
  <div class="bg-black text-white">
    <div class="container mx-auto flex justify-end">
      <nav class="flex items-center">
        |
        <button
          type="submit.prevent"
          @click="signOut"
          class="inline-block px-16 py-4 transition-colors hover:bg-orange-300 duration-300 hover:text-black"
        >
          Log Out
        </button>
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

async function signOut() {
  await userStore.signOut();
  router.push("/");
}
</script>

<style></style>

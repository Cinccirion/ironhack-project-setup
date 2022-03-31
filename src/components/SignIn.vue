<template>
  <div class="w-full items-center justify-center">
    <h1 class="text-5xl font-family:Liberation Mono text-orange-600 m-10">
      Welcome to your Order Task App
    </h1>
  </div>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error Handling -->

    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!-- LogIn -->

    <br />
    <form
      @submit.prevent="signIn"
      Class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg bg-gray-700"
    >
      <h1 Class="text-3xl text-at-light-green mb-4 text-orange-600">Sign In</h1>
      <div class="flex flex-col mb-2">
        <input
          type="text"
          placeholder="Email"
          required
          id="email"
          class="p-2 text-gray-500 focus:outline-none border-2 border-orange-600 rounded-md"
          v-model="email"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          required
          id="password"
          class="p-2 text-gray-500 focus:outline-none border-2 border-orange-600 rounded-md w-full"
          v-model="password"
        />
      </div>
      <br />
      <button
        type="submit"
        class="w-15 bg-orange-600 border-2 rounded-md text-white"
      >
        LogIn
      </button>

      <p class="text-white">
        Have you already no account?
        <PersonalRouter
          :route="route"
          :redirectText="redirectText"
          class="text-orange-600"
        />, please.
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "../components/PersonalRouter.vue";
import { useUserStore } from "../store/user";
import { supabase } from "../supabase";

// Constants to catch userInput on signIn form
const email = ref(null);
const password = ref(null);
const user = useUserStore();
const router = useRouter();
const route = "/auth/sign-up";

// Error Message to showcase userInputErrors
const errorMsg = ref(null);

// Props to use in my personal router

const redirectText = "Register";

async function signIn() {
  try {
    await user.signIn(email.value, password.value);
    redirect.push({ path: "/" });
  } catch (error) {
    errorMsg.value = "Invalid login details, try again";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
}
</script>

<style></style>

<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error Handling -->

    <div v-if="errorMsg" class="mb-10 p-4 rounded-md bg-light-grey">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div>

    <!-- Register -->
    <div>
      <h1 class="text-4xl font-family:Liberation Mono font-extrabold">
        Welcome to your Order Task App
      </h1>
    </div>

    <form
      @submit.prevent="signUp"
      Class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg"
    >
      <h1 Class="text-3xl text-at-light-green mb-4 text-orange-600">
        Register
      </h1>
      <div class="flex flex-col mb-2">
        <input
          type="text"
          placeholder="Email"
          required
          id="email"
          class="p-2 text-gray-500 focus:outline-none border-2 border-orange-200 rounded-md"
          v-model="email"
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          required
          id="password"
          class="p-2 text-gray-500 focus:outline-none border-2 border-orange-200 w-full rounded-md"
          v-model="password"
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Repeat Password"
          required
          id="confirmPassword"
          class="p-2 text-gray-500 focus:outline-none border-2 border-orange-200 w-full rounded-md"
          v-model="confirmPassword"
        />
      </div>
      <br />
      <button submit="signUp">Register</button>
      <br />
      <p>
        Already have an account? go to
        <PersonalRouter
          :route="route"
          :redirectText="redirectText"
          class="text-orange-600"
        />
      </p>
    </form>
    <!-- <button>Pulsa pa enrregistrarte</button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
//import { UserStore } from '../store/user';
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import PersonalRouter from "../components/PersonalRouter.vue";
import { useUserStore } from "../store/user";

const errorMsg = ref("");
const password = ref("");
const confirmPassword = ref("");
const email = ref("");
const router = useRouter();
const route = "/auth";
const redirectText = "Sign In";
const redirect = useRouter();

async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      redirect.push({ path: "/auth" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
  } else {
    errorMsg.value = "Error: Passwords do not match";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
}
</script>

<style></style>

<template>
  <div>
    <!-- Error Handling -->

    <div v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>

    <!-- LogIn -->

    <h1>Bienvenío a esto de las responsabilidades de cá uno</h1>
    <form>
      <h1>Interna</h1>
      <div>
        <input
          type="text"
          placeholder="Emilio"
          required
          id="email"
          v-model="email"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Clave secreta"
          required
          id="password"
          v-model="password"
        />
      </div>
      <br />

      <button type="submit">Penetra</button>
      <p>
        ¡Ah!, ¿Que no tiés una cuenta entoavía? 
        <PersonalRouter :route="route" :redirectText="redirectText" />
      </p>
    </form>
    <!-- <button>Pulsa pa Penetrar</button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "../components/PersonalRouter.vue";

// Constants to catch userInput on signIn form
const email = ref(null);
const password = ref(null);

// Error Message to showcase userInputErrors
const errorMsg = ref(null);

// Props to use in my personal router
const route = "/auth/sign-up";
const redirectText = "Anda y enregistrate, zagalique";

async function signIn() {
  try {
    await useUserStore().signIn(email.value, password.value);
    // If (error) throw error;
    redirect.push({ patch: "/" });
  } catch (error) {
    errorMsg.value = "Error: ${error.message}";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
}
</script>

<style></style>

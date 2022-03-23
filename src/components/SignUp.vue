<template>
  <div>
    <!-- Error Handling -->

    <div v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>

    <!-- Register -->

    <h1>Bienvenío a esto de las responsabilidades de cá uno</h1>
    <form>
      <h1>Regístrate aquín</h1>
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

      <div>
        <input
          type="password"
          placeholder="Repite la clave secreta"
          required
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>
      <br />
      <button type="submit">Enrregistrate</button>
      <p>
        ¡Ah!, ¿Que tiés ya  una cuenta?
        <PersonalRouter :route="route" :redirectText="redirectText" />
      </p>
    </form>
    <!-- <button>Pulsa pa enrregistrarte</button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "../components/PersonalRouter.vue";

// Constants to catch userInput on signUp form
const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);

// Error Message to showcase userInputErrors
const errorMsg = ref(null);

// Props to use in my personal router
const route = "/auth";
const redirectText = "Afluye en tu cuenta, bonique";

// The function that is going to be used in order to send the info of the user to supaBase in order to signUp
async function signUp() {
  if (password.value === confirmPassword.value) {
    try {
      await useUserStore().signUp(email.value, password.value);
      // If (error) throw error
      redirect.push({ path: "/auth" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    Return;
  }
  errorMsg.value = "Las contraseñas no son iguales, so borrico";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
}
</script>

<style></style>

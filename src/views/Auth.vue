<template>

<div>
  <SignIn v-model:email="email" v-model:password="password"/> 
  
  </div>

<pre>{{$data}} </pre>

</template>

<script>
import { ref }  from 'vue'
import SignIn from "../components/SignIn.vue";

const component = ref(false);

export default {
  name: 'App',
  
  components: {
    SignIn,
   
  },
  
  setup() {
const email = ref("tonyfernandez24@hotmail.com");
const password = ref("Torrano0");
  
  return {
      email, password
  }
}
}




</script>

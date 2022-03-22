<template>
<div class="SignIn-Container">
    Welcome to the Vue Task App
    <div Class="SignIn-Form">
    <h1>Sign In</h1>
     <input
        :value="email"
        @input="event => $emit('update:email', event.target.value)"
        type="email"
        name="email"
        placeholder="Email"
    /> <br>
    <input
        :value="password"
        @input="event => $emit('update:password', event.target.value)"
        type="password"
        name="password"
        placeholder="Password"
    />
    <br>
    <button>Log In</button>
    </div>
    <button>Click to Sign Up</button>
    </div>
</template>

<script>
    
    export default {
        name: 'LoginForm',
        props: [ "email", "password"],
      
    }
</script>

<style>
.SignIn-Form {
    Border: solid black 2px;
}

</style>
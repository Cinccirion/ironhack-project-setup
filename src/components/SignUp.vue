<template>
<div class="SignUp-Container">
    Welcome to the Vue Task App
    <div Class="SignUp-Form">
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
    <input
        :value=" password"
        @input="event => $emit('update:repeat password', event.target.value)"
        type="password"
        name="repeat password"
        placeholder="Repeat Password"
    />
    <br>
    <button>Register</button>
    </div>
    <button>Click to Sign Up</button>
    </div>
</template>

<script>
    
    export default {
        name: 'SignUpForm',
        props: [ "email", "password", "repeat password"],
      
    }
</script>

<style>
.SignUp-Form {
    Border: solid black 2px;
}

</style>
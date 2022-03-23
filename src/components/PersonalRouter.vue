<template>
  <router-link :to="route">{{ redirectText }}</router-link>
</template>

<script setup>
defineProps({
  route: String,
  redirectText: String,
});
</script>

<style></style>

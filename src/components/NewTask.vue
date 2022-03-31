<template>
  <div
    id="newCard"
    class="p-8 bg-white shadow-mg rounded flex items-center justify-between border-light-grey-600 w-2/5 shadow-md"
  >
    <div>
      <div v-for="(task, index) in tasks" :key="index">{{ task.title }}</div>
      <div class="text-gray-500 text-sm">
        {{ timestamp }}
      </div>
    </div>
    <div class="space-x-2">
      <button class="px-2 text-red-600" title="remove todo">&times;</button>
      <button class="px-2 text-green-600" title="Mark as done">&check;</button>
      <button class="px-2 text-orenage-600" title="Mark as undone">
        &#8630;
      </button>
      <button class="mt-12">
        <svg
          class="h-5 w-8 text-yellow-500"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          stroke-width=""
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style></style>

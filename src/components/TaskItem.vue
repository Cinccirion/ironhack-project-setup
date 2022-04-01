<template>
  <NewTask />

  <div class="container bg-orange-600">
    <h1 class="mt-8 text-5xl text-white flex justify-center mt-12">
      To Do or Not To Do
    </h1>

    <div class="mt-12">
      <div class="grid grid-cols-12 gap-4">
        <div
          class="col-span-6 space-y-4 overflow-y-auto px-1"
          style="height: 500px"
        >
          <div
            v-for="(todo, index) in datosTask"
            :key="'todo' + index"
            id="newCard"
            class="p-8 bg-white shadow-mg rounded flex items-center justify-between border-light-grey-600 shadow-md"
          >
            <div>
              <input
                :class="{ done: todo.is_complete }"
                v-model="todo.title"
                :disabled="!editingTodo"
                @keydown.enter="editTask(todo)"
                type="text"
              />
              <div class="text-gray-500 text-sm">
                {{ todo.inserted_at.slice(0, 19) }}
              </div>
            </div>
            <div class="space-x-2">
              <button
                class="px-2 text-red-600"
                title="remove todo"
                @click="removeTodo(todo)"
              >
                &times;
              </button>
              <button
                class="px-2 text-green-600"
                title="Mark as done"
                @click="isComplete(todo)"
                v-if="isComplete(todo)"
              >
                &check;
              </button>
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
                  @click="editTask(todo)"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                  />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>

          <div
            v-if="todos.length === 0"
            class="px-8 py-16 bg-white text-gray-700 shadow-md rounded text-sm ml-4 mt-12"
          >
            You don't have task to do
          </div>
        </div>

        <div class="col-span-6 mt-12">
          <div class="p-8 bg-white shadow-md rounded w-5/6">
            <h2 class="text-xl">Add a todo</h2>
            <input
              id="addATodoText"
              type="text"
              class="p-2 mt-4 border rounded w-full"
              v-model="newTodo"
              @keydown.enter="addTask3"
            />
            <button @click.prevent="addTask3">👈</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../store/user";
import { ref } from "vue";
import { useTaskStore } from "../store/task";

const user = supabase.auth.user();
const userStore = useUserStore();
const taskStore = useTaskStore();
const insertTask = ref("");
// los nuevos arrays
const newTodo = ref("");
// Para los que cogeremos
const datosTask = ref([]);
const todos = ref([]);

async function fetchAllTask() {
  const thisTask = await taskStore.fetchTasks();
  console.log(thisTask);
  datosTask.value = thisTask;
}
fetchAllTask();

async function addTask3() {
  await taskStore.addTodo2(newTodo.value);
  newTodo.value = "";
  fetchAllTask();
}

async function removeTodo(todo) {
  const id = todo.id;
  await taskStore.removeTodo(id);
  fetchAllTask();
}

const editingTodo = ref(false);
const beforeEditTodo = ref("");

async function editTask(todo) {
  if (editingTodo.value === false) {
    beforeEditTodo.value = todo.title;
    editingTodo.value = true;
    console.log("Tonychachacha");
  } else {
    const res = await useTaskStore().editTask(todo.title, todo.id);
    console.log(res);
    editingTodo.value = false;
  }
}

async function isComplete(todo) {
  const id = todo.id;
  todo.is_complete = !todo.is_complete;
  await taskStore.isComplete(id, todo.is_complete);
  fetchAllTask();
  console.log("puta vida");
}
</script>

<style></style>

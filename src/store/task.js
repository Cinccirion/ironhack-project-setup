import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    async addTodo2(title) {
      const { data, error } = await supabase.from("tasks").insert([
        {
          title: title,
          is_complete: false,
          user_id: useUserStore().user.id,
        },
      ]);
    },

    async editTodo(taskId, editedTask) {
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: editedTask })
          .match("id", taskId);
        if (error) throw error;
      } catch (error) {
        console.log(error);
      }
    },

    async CompletedTodo(taskId, status) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: status })
        .match({ id: taskId });
      if (error) throw error;
    },

    async removeTodo(taskId) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: taskId });
      if (error) throw error;
    },
  },
});

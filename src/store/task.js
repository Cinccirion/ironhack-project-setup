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

    async editTask(name, id) {
      console.log(name, id);
      try {
        const { data, error } = await supabase
          .from("tasks")
          .update({ title: name })
          .match({ id: id });
        if (error) throw error;
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    async removeTodo(taskId) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: taskId });
      if (error) throw error;
    },


    async isComplete(taskId, status){
      const { data, error } = await supabase
      .from("tasks")
      .update({is_complete: status})
      .match({id: taskId})
      if(error) throw error;
    },

  },
});

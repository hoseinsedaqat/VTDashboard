import { RootState } from "@/store/type";
import { ActionTree } from "vuex";
import { TaskState } from "./type";

export const actions:ActionTree<TaskState,RootState> = {
    async "ADD_TODO"(context,todo) {

        await context.commit('ADD_TODO',todo)
    
    },

    async "DELETE_TODO"(context,idx) {

        await context.commit('DELETE_TODO',idx)
    
    },

    async "UPDATE_TODO"(context,idx) {

        await context.commit('UPDATE_TODO',idx)
    
    }
}
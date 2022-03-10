import { MutationTree } from "vuex";
import { TaskState } from "./type";
import setLocalStorage from "@/Utils/UseLocalStorage";

export const mutations:MutationTree<TaskState> = {

    "ADD_TODO"(state,todo) {

        state.tasks.push({id:todo.id,todo:todo.todo})
        setLocalStorage('adminTask',state.tasks)
    
    },

    "DELETE_TODO"(state,idx) {

        state.tasks.splice(idx,1)
        setLocalStorage('adminTask',state.tasks)
    
    },

    "REMAIN_TASK"(state) {

        if(localStorage.getItem('adminTask')){
            state.tasks = JSON.parse(localStorage.getItem('adminTask') || '{}')
        }
    
    },

    "UPDATE_TODO"(state,idx) {

        state.tasks[idx.id].todo = idx.newTask
        setLocalStorage('adminTask',state.tasks)
    
    }

}
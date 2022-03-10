import { RootState } from "@/store/type";
import { GetterTree } from "vuex";
import { TaskState } from "./type";

export const getters:GetterTree<TaskState,RootState> = {

    fetchTasks(state) {
        return state.tasks
    }

}
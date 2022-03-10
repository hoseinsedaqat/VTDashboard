import { RootState } from "@/store/type"
import { Module } from "vuex"
import { TaskState } from "./type"
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'


const state:TaskState = {

    tasks: []

}

export const task:Module<TaskState,RootState> = {

    state,

    getters,

    mutations,
    
    actions

}
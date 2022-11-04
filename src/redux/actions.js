import { ADD_EDIT_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO, REMOVE_EDITID, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "./utils";

export const addTodo=(title)=>{
    return {
        type:ADD_TODO,
        payload:{
            title
        }
    }
}


export const toggleCompleted=(id)=>{
    return {
        type:TOGGLE_COMPLETED,
        payload:{
            id
        }
    }
}


export const deleteTodo=(id)=>{
    return {
        type:DELETE_TODO,
        payload:{
            id
        }
    }
}

export const toggleImportant=(id)=>{
    return {
        type:TOGGLE_IMPORTANT,
        payload:{
            id
        }
    }
}

export const editTodo=(id)=>{
    return {
        type:EDIT_TODO,
        payload:{
            id
        }
    }
}

export const remvoeeditid=()=>{
    return {
        type:REMOVE_EDITID
    }
}

export const addedittodo=(id,title)=>{
    return{
        type:ADD_EDIT_TODO,
        payload:{
            id,
            title
        }
    }
}








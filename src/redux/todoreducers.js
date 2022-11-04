import shortid from "shortid";

import { todos } from "./initial-state";
import { ADD_EDIT_TODO, ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "./utils";

const saveData = (todo) => {
  localStorage.setItem("todos", JSON.stringify(todo));
};

function todoreducer(state = todos, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { title } = action.payload;
      const newTodo = {
        id: shortid(),
        title,
        completed: false,
        important: false
      };
      saveData([...state, newTodo]);
      return [...state, newTodo];
    }

    case TOGGLE_COMPLETED: {
      const { id } = action.payload;
      const newTodo = state.map((value) => {
        if (value.id === id) {
          value.completed = !value.completed;
        }
        return value;
      });
      saveData(newTodo);
      return newTodo;
    }

    case TOGGLE_IMPORTANT: {
      const { id } = action.payload;
      const newTodo = state.map((value) => {
        if (value.id === id) {
          value.important = !value.important;
        }
        return value;
      });
      saveData(newTodo);
      return newTodo;
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const newTodo = state.filter((value) => value.id !== id);
      saveData(newTodo);
      return newTodo;
    }

    case ADD_EDIT_TODO:{
      const {id,title}=action.payload;
      const newTodo = state.map((value) => {
        if (value.id === id) {
          value.title = title;
        }
        return value;
      });
      saveData(newTodo);
      return newTodo;
    }

    default:
      return state;
  }
}

export default todoreducer;

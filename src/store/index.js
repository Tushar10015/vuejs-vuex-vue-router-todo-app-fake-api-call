import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex((t) => t.id === updatedTodo.id);
      state.todos[index] = updatedTodo;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("setTodos", response.data);
    },
    async addTodo({ commit }, todo) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      commit("addTodo", response.data);
    },
    async updateTodo({ commit }, todo) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        todo
      );
      commit("updateTodo", response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("deleteTodo", id);
    },
  },
});

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
// import {response} from 'axios'
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    todos: [

    ]
  },
  getters: {
    allTodo: state => {
      return state.todos
    }
  },
  mutations: {
    login(state,dataLogin) {
      axios.post('http://127.0.0.1:8000/api/auth/login', dataLogin)
        .then((response) => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      
      
    },
    load_todo(state) {
      axios.get('http://127.0.0.1:8000/api/todos')
        .then(response => {
          state.todos = response.data.todo
        })
        .catch(() => {
          console.log('error')
        })


    },
    add_todo(state, todo) {
      state.todos.push(todo)
    },
    done_todo(state, idTodo) {
      state.todos.forEach(elelment => {
        if (elelment.id == idTodo) {
          elelment.done = !elelment.done
        }
      });
    },
    delete_todo(state, idTodo) {
      state.todos = state.todos.filter(todo => todo.id != idTodo)
    },
    edit_todo(state, idTodo) {
      state.todos.forEach(elelment => {
        elelment.editing = false
        if (elelment.id == idTodo) {
          elelment.editing = !elelment.editing
        }

      });
    },
    change_content(state, todo) {
      // state.todos.forEach(elelment =>{
      //   if(elelment.id == todo.id){
      //     elelment.content = todo.content
      //     elelment.editing = false
      //   }
      // });

      //c2

      let index = state.todos.findIndex((t) => t.id == todo.id)
      if (index != -1) {
        state.todos[index] = todo
      }
    },

    done_all(state) {
      state.todos.forEach(element => {
        element.done = true
      });
    },
    clear_all(state) {
      state.todos = state.todos.filter(todo => !todo.done)
    },
    truncate(str) {
      return (str.length > 100) ? str.substr(0, 99) + '&hellip;' : str;
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo)
    },
    doneTodo({ commit }, idTodo) {
      commit("done_todo", idTodo)
    },
    deleteTodo({ commit }, idTodo) {
      commit("delete_todo", idTodo)
    },
    editTodo({ commit }, idTodo) {
      commit('edit_todo', idTodo)
    },
    changeContent({ commit }, todo) {
      commit('change_content', todo)
    },
    doneAll({ commit }) {
      commit('done_all')
    },
    clearAll({ commit }) {
      commit('clear_all')
    },
    truncate({ commit }, str) {
      commit('truncate', str)
    },
    loadTodo({ commit }) {
      commit('load_todo')
    },
    login({ commit },dataLogin) {
      commit('login', dataLogin)
    }

  },
  modules: {

  }
});
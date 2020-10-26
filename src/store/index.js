import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        todos:[
            {id:1, content: 'learn about vuex', done:false, editing:false},
            {id:2, content: 'content2', done:false,editing:false},
            {id:3, content: 'content3', done:false,editing:false  },
        ]
    },
    getters:{
        allTodo: state =>{
           return state.todos
        }
    },
    mutations:{
        add_todo(state, todo){
            state.todos.push(todo)
        },
        done_todo(state,idTodo){
            state.todos.forEach(elelment =>{
              if(elelment.id == idTodo){
                elelment.done = ! elelment.done
              }
            });
        },
        delete_todo(state,idTodo){
           state.todos = state.todos.filter(todo => todo.id != idTodo)
        },
        edit_todo(state,idTodo){
           state.todos.forEach(elelment => {
             if(elelment.id == idTodo){
               elelment.editing = !elelment.editing
             }
           });
        },
        change_content(state,todo){
          // state.todos.forEach(elelment =>{
          //   if(elelment.id == todo.id){
          //     elelment.content = todo.content
          //     elelment.editing = false
          //   }
          // });

          //c2

          let index = state.todos.findIndex((t)=>t.id == todo.id)
          if(index != -1){
            state.todos[index] = todo
          }
        },

        done_all(state){
          state.todos.forEach(element =>{
            element.done = true
          });
        },
        clear_all(state){
          state.todos = state.todos.filter(todo => !todo.done)
        }
    },
    actions:{
        addTodo({commit}, todo){
            commit("add_todo", todo)
        },
        doneTodo({commit},idTodo){
          commit("done_todo",idTodo)
        },
        deleteTodo({commit},idTodo){
          commit("delete_todo",idTodo)
        },
        editTodo({commit},idTodo){
          commit('edit_todo', idTodo)
        },
        changeContent({commit},todo){
          commit('change_content',todo)
        },
        doneAll({commit}){
          commit('done_all')
        },
        clearAll({commit}){
          commit('clear_all')
        }
    },
    modules:{

    }
});
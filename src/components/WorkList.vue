<template>
  <div class="list-user">
    <h1>List Work</h1>
    <input type="text" class="todo-input" 
    placeholder="What needs to be done" 
    @keyup.enter="addTodoNew()" 
    v-model="newTodo">

    <div class="done-todo">
        <button type="button" class="btn btn-info" @click="doneAll()">
          All
        </button>
        <button type="button" class="btn btn-info btn-clear" @click="clearAll()">
          Clear
        </button>
    </div>
    <div v-for="todo in allTodo "
        :key="todo.id"
        >
        
      <work v-bind:todo="todo" class="hover"/>
    </div>
    
  </div>
</template>

<script>
import work from "./Work.vue"
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import {v1} from 'uuid'
export default {
  data () {
    return {
      newTodo: '',
    }
  },
  name: "work-list",
  components: {
    work
  },
  computed:{
      ...mapGetters(["allTodo"])
  },
  methods:{
    ...mapActions(["addTodo"]),
    addTodoNew(){
      this.addTodo({
          id: v1(),
          content: this.newTodo,
          done:false,
          editing:false
      })
      this.newTodo = ''
    },
    changeStatusWork(data){
          var id = data.id
          this.$emit('changeStatus',id)
    },
    
    
  },
 
};
</script>

<style lang="scss">
  .list-user{
      background-color: white;
      max-width: 500px;
      margin-left: 500px ;
      border: 50px;
  }
  .todo-input{
    width: 100%;
    padding: 8px 18px;
    border: 1px solid blue; 
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 20px;
  }
  .hover{
    :hover{
      background-color: burlywood;;
    }
  }
  .done-todo{
    margin-top: 5px;
  }
  .btn-clear{
    margin-left: 5px;
  }
</style>>


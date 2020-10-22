<template>
  <div class="list-user">
    <h1>List Work</h1>
    <input type="text" class="todo-input" 
    placeholder="What needs to be done" 
    @keyup.enter="addWork()" 
    v-model="newTodo">

    <div class="done-todo">
        <button type="button" class="btn btn-info" @click="doneAll()">
          All
        </button>
        <button type="button" class="btn btn-info btn-clear" @click="clearAll()">
          Clear
        </button>
    </div>
    <work v-for="work in workOB "
            :key="work.id"
            v-bind:dowork="work"
            v-on:changeStatus="changeStatusWork"
            v-on:remoteTodo="remoteTodo"
            v-on:editTodo="editTodo"
            v-on:changeContent="changeContent"
            v-on:cancelContent="cancelContent"
            class="hover"
    />
    
  </div>
</template>

<script>
import work from "./Work";
export default {
  data () {
    return {
      newTodo: '',
      idForTodo: 1
    }
  },
  name: "work-list",
  props: {
    workOB: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    work
  },
  methods:{
      changeStatusWork(data){
          var id = data.id
          this.$emit('changeStatus',id)
      },
      addWork(){
        if(this.newTodo.trim().length == 0){
          alert('aaa')
          return
        }
        this.workOB.push({
            id: this.idForTodo,
            content: this.newTodo,
            status:false,
            editing:false
        });
        this.idForTodo++
        this.newTodo= ''
      },
      remoteTodo(id){
        var idTodo = id
        this.$emit('remoteTodo',idTodo)
      },
      editTodo(id){
          this.$emit('editTodo',id)
      },
      changeContent(dataContent){
        this.$emit('changeContent',dataContent)
      },
      cancelContent(dataCancel){
        this.$emit('cancelContent',dataCancel)
      },
      doneAll(){
         this.workOB.forEach(element => {    
            element.status = true
          });
      },
      clearAll(){
         this.$emit('clearAll')
      }
      
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


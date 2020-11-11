<template>
  <div class="list-user">
      <h1>List Work</h1>
    <div class="container-input">
      <input
        type="text"
        class="todo-input"
        placeholder="What needs to be done"
        @keyup.enter="addTodoNew()"
        v-model="newTodo"
      />

      <div class="done-todo">
        <button type="button" class="btn btn-info" @click="doneAll()">All</button>
        <button type="button" class="btn btn-info btn-clear" @click="clearAll()">Clear</button>
      </div>
    </div>
    <div v-for="todo in allTodo " :key="todo.id">
      <work v-bind:todo="todo" class="hover" />
    </div>
  </div>
</template>

<script>
import work from "./Work.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  name: "work-list",
  created(){
    this.loadTodo()
  },
  components: {
    work
  },
  computed: {
    ...mapGetters(["allTodo"])
  },
  methods: {
    ...mapActions(["addTodo", "doneAll", "clearAll","loadTodo"]),
    addTodoNew() {
      this.addTodo({
        id: v1(),
        content: this.newTodo,
        done: false,
        editing: false
      });
      this.newTodo = "";
    }
  }
};
</script>

<style lang="scss">
.list-user {
  background-color: white;
  width: 500px;
  margin-left: 500px;
  height: 400px;
  border: 50px;
  overflow: auto;
  
  
}
.todo-input {
  width: 500px;
  padding: 8px 18px;
  border: 1px solid blue;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 20px;
}
.hover {
  :hover {
    background-color: burlywood;
  }
}
.done-todo {
  margin-top: 5px;
}
.btn-clear {
  margin-left: 5px;
}
.container-input{
  margin-bottom: 5px;
}
</style>>


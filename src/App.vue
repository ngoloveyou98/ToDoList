<template>
  <div id="app">
    <comp-header />

    <WorkList
      v-bind:workOB="listWork"
      v-on:changeStatus="changeStatus"
      v-on:remoteTodo="remoteTodo"
      v-on:editTodo="editTodo"
      v-on:changeContent="changeContent"
      v-on:cancelContent="cancelContent"
    />
  </div>
</template>

<script>
import CompHeader from "./components/ComHeader.vue";
import WorkList from "./components/WorkList.vue";

export default {
  data() {
    return {
      title: "this is tille",
      listWork: [
        { id: 1, content: "learn about install Vue CLI", status: true, editing: false },
        { id: 2, content: "content 2", status: true, editing: false },
        { id: 3, content: "content 3", status: false, editing: false }
      ]
    };
  },

  name: "App",
  components: {
    CompHeader,
    WorkList
  },
  methods: {
    changeStatus(id) {
      this.listWork.forEach(element => {
        if (element.id == id) {
          element.status = !element.status;
        }
      });
    },
    remoteTodo(idTodo) {
      this.listWork.forEach((value, index) => {
        if (value.id == idTodo) {
          this.listWork.splice(index, 1);
        }
      });
    },
    editTodo(id){
      this.listWork.forEach(element => {
        if (element.id == id) {
          element.editing = !element.editing;
        }
      });
    },
    changeContent(dataContent){
      this.listWork.forEach(element => {
        if (element.id == dataContent.id) {
          element.content = dataContent.content
          element.editing = false
        }
      });
    },
    cancelContent(dataCancel){
      this.listWork.forEach(element => {
        if (element.id == dataCancel.id) {
          element.content = dataCancel.content
          element.editing = false
        }
      });
    }
    
   
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-size: 20px;
}
</style>

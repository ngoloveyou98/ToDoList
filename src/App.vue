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
      v-on:clearAll="clearAll"
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
          element.editing = true;
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
    },
    clearAll(){
      this.listWork = this.listWork.filter(list => !list.status)
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

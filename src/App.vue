<template>
  <div id="app">
      <comp-header />
      
      <WorkList v-bind:workOB="listWork" />
      
  </div>
</template>

<script>
import CompHeader from './components/ComHeader.vue'
import WorkList from './components/WorkList.vue'

export default {
  data() {
    return {
      title:'this is tille',
      listWork: [
        { id: 1, content: "learn about install Vue CLI", status: false },
        { id: 2, content: "content 2", status: true },
        { id: 3, content: "content 3", status: false }
      ]
    };
  },

  name: "App",
  components: {
     CompHeader,
     WorkList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>

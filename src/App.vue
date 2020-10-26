<template>
  <div id="app">
    <comp-header />

    <WorkList />
  </div>
</template>

<script>
import CompHeader from "./components/ComHeader.vue";
import WorkList from "./components/WorkList.vue";

export default {
  props: {
  },
  name: "App",
  components: {
    CompHeader,
    WorkList
  },
 
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
  position: relative;
}
</style>

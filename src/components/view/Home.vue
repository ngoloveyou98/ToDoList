<template>
  <div id="home">
    
    <comp-header />
    <WorkList />
  </div>
</template>

<script>
import CompHeader from "../ComHeader";
import WorkList from "../WorkList";

export default {
  
  name: "home",
  components: {
    CompHeader,
    WorkList
  },
 
};
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-size: 20px;
  position: relative;
}
</style>

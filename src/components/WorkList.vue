<template>
  <div class="list-user">
    <h1>List Work</h1>
    <work v-for="work in workOB"
            :key="work.id"
            v-bind:dowork="work"
            v-on:changeStatus="changeStatusWork"
    />
    
  </div>
</template>

<script>
import work from "./Work";
export default {
  name: "work-list",
  props: {
    workOB: {
      type: Object,
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
          console.log(data.content)
      }
  }
};
</script>

<style>
.list-user{
    height: 500px;
    background-color: blanchedalmond;
    width: 500px;
    margin-left: 600px ;
}
</style>
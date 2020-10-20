<template>
  <div class="work" >
    <b-form-checkbox 
    size="lg" 
    v-model="dowork.status"
    class="work-checkbox"
    @change="selectWork()"
    >
    {{dowork.content}}
    </b-form-checkbox>

  </div>
</template>

<script>
export default {
  name: "work",
  props: {
    dowork: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  methods:{
      selectWork(){
          console.log("event click")
          var data = {
                id:this.dowork.id,
                content : this.dowork.content,
                status : this.dowork.status
          }
          this.$emit('changeStatus',data)
      }
  }
};
</script>

<style>

</style>
<template>
  <div class="work" >
    <div class="custom-control custom-checkbox todo-list" >
      <input
        type="checkbox"
        class="custom-control-input work-checkbox"
        :id="dowork.id"
        :checked="dowork.status"
        @change="selectWork()"
      />

      <label  class="custom-control-label" 
        :for="dowork.id"
        >
        <div v-if="!dowork.editing" @dblclick="editTodo(dowork.id)" :class="{complete: dowork.status}">
          {{ dowork.content }}
        </div>
        <div v-else>
          <input v-focus type="text" :value="dowork.content" 
          @keyup.enter="changeContent(dowork, $event)" 
          @keyup.esc ="cancelContent(beforEditCache, dowork.id)"
          class="input-hover"
          />
        </div>
      </label>
      <b-icon icon="x-circle" scale="2" variant class="icon" @click="removeTodo(dowork.id)"></b-icon>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      beforEditCache:''
    }
  },
  name: "work",
  props: {
    dowork: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  directives: {
    focus: {
      focus: {
      // directive definition
        mounted(el) {
          el.focus()
        }
      }
    }
  },
  methods: {
    selectWork() {
      // console.log("event click");
      var data = {
        id: this.dowork.id,
        content: this.dowork.content,
        status: this.dowork.status
      };
      this.$emit("changeStatus", data);
    },
    removeTodo(id) {
      this.$emit("remoteTodo", id);
    },
    editTodo(id){
      this.beforEditCache = this.dowork.content
      
      this.$emit('editTodo',id)
    },
    changeContent(dowork, $event){
      if($event.target.value.trim() == ''){
        return
      }
      var dataContent = {
        id: dowork.id,
        content: $event.target.value
      }
      this.$emit('changeContent',dataContent)
    },
    cancelContent(beforEditCache,id){
      var dataCancel ={
        id: id,dataCancel,
        content: beforEditCache
      }
      this.$emit('cancelContent',dataCancel)
    }
  },
  
};
</script>

<style lang="scss">
.work {
  margin-top: 10px;
  font-size: 20px;
}
.work-checkbox {
  // font-size: 24px;
  margin-top: 10px;
}
.icon {
  cursor: pointer;
  float: right;
}
.todo-editing {
  margin-left: 100px;
}
.complete{
  text-decoration: line-through;
  color: gray;
}
.todo-list{
  background: blanchedalmond;
  border-radius: 10px;
  padding: 10px;
}
.input-hover{
  :hover{
    background-color: white;
  }
}
</style>>


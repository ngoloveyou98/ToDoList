<template>
  <div class="work" >
    <div class="custom-control custom-checkbox todo-list" >
      <input
        type="checkbox"
        class="custom-control-input work-checkbox"
        :id="todo.id"
        :checked="todo.done"
        @change="doneTodoI(todo.id)"
      />

      <label  class="custom-control-label" 
        :for="todo.id"
        >
        <div v-if="!todo.editing"  :class="{complete: todo.done}">
          {{ todo.content }}
        </div>
        <div v-else>
          <input v-focus type="text" :value="todo.content" 
          @keyup.enter="changeContentI(todo.id, $event)"
          @keyup.esc ="cancelContent(beforEditCache, todo.id)"
          class="input-hover"
          />
        </div>
      </label>
      <b-icon icon="pencil" class="icon icon-edit" @click="editTodo(todo.id)" ></b-icon>
      <b-icon icon="x-circle" scale="2" variant class="icon" @click="deleteTodo(todo.id)"></b-icon>
      
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      beforEditCache:''
    }
  },
  name: "work",
  props: {
    todo: {
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
    ...mapActions(['doneTodo','deleteTodo','editTodo','changeContent']),
    doneTodoI(id){
      this.doneTodo(id)
    },
    changeContentI(id,$event){
      
      var content = $event.target.value
      this.changeContent(id,content)
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
  position: absolute;
  right: 1px;
  
}
.icon-edit{
  right: 30px;
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


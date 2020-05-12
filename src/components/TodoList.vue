<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>Todo List</h1>
      </div>
    </div>
    <div class="row mb-3 ">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <h3>Not Completed</h3>
        <ul class="list-group m-2">
          <todo
            v-for="(todo, index) in todos.filter(
              todo => todo.completed === false
            )"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    listName: String
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      localStorage.removeItem("Todos");
      localStorage.setItem("Todos", JSON.stringify(this.todos));
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      localStorage.removeItem("Todos");
      localStorage.setItem("Todos", JSON.stringify(this.todos));
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      localStorage.removeItem("Todos");
      localStorage.setItem("Todos", JSON.stringify(this.todos));
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      localStorage.removeItem("Todos");
      localStorage.setItem("Todos", JSON.stringify(this.todos));
    }
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("Todos"));
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h1>Completed</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group m-4">
          <todo
            v-for="(todo, index) in todos.filter(
              todo => todo.completed === true
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
  components: { Todo }
};
</script>

<style scoped lang="scss"></style>

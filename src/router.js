import Vue from "vue";
import Router from "vue-router";
import TodoList from "./components/TodoList.vue";
import Completed from "./components/Completed.vue";
import Todo from "./components/Todos.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: TodoList
    },
    {
      path: "/todo",
      name: "todos",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Todo
    },
    {
      path: "/done",
      name: "done",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Completed
    }
  ]
});

<template>
  <header class="header">
    <h1>Todo-List</h1>
    <div id="nav">
      <router-link to="/" class="to-home" name="home">Home</router-link> |
      <router-link to="/todo" class="to-todo" name="todo">Todo</router-link> |
      <router-link to="/done" class="to-done" name="done">Done</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}
</style>

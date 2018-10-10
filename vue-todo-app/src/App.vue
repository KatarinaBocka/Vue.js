<template>
  <div id="app" class="container">
    <img class="logo" src="./assets/logo.png">
    <TodoList/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld"
import TodoList from "./components/TodoList"
export default {
  name: 'App',
  components: {
    TodoList,
    HelloWorld
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
.logo {
  display: block;
  max-width: 150px;
  margin: 0 auto;
}

</style>

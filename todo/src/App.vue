<script setup lang="ts">
import todo from './components/todo.vue'  // import component todo
</script>

<template>
  <div class="page-container">
    <div class="content-container">
      <h1 class="todo-title">TodoList</h1>
      <todo />
    </div>
  </div>
</template>

<style>
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-title {
  text-align: center;
  margin: 2rem 0;
  color: #333;
  font-size: 2rem;
  font-weight: bold;
}
</style>

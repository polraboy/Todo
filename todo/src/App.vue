<script setup lang="ts">
import Todo from './components/Todo.vue'  // ใช้ตัวพิมพ์ใหญ่
</script>

<template>
  <div class="page-container">
    <div class="content-container">
      <h1 class="todo-title">TodoList</h1>
      <Todo />  <!-- ใช้ตัวพิมพ์ใหญ่ -->
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

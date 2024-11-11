<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const newTask = ref('')

const addTodo = () => {
  if (newTask.value.trim()) {
    store.dispatch('addTodo', newTask.value)
    newTask.value = ''
  }
}

const deleteTodo = (id: number) => {
  store.dispatch('deleteTodo', id)
}

const toggleStatus = (id: number) => {
  store.dispatch('toggleStatus', id)
}
</script>

<template>
  <div class="todo-container">
    <div class="input-container">
      <input 
        v-model="newTask" 
        type="text" 
        placeholder="เพิ่มรายการใหม่..."
        @keyup.enter="addTodo"
        class="todo-input"
      >
      <button @click="addTodo" class="add-button">เพิ่ม</button>
    </div>
    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>รายการ</th>
            <th>สถานะ</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in store.getters.allTodos" :key="todo.id">
            <td>{{ index + 1 }}</td>
            <td :class="{ 'completed': todo.status }">{{ todo.task }}</td>
            <td>
              <input 
                type="checkbox" 
                :checked="todo.status"
                @change="toggleStatus(todo.id)"
              >
            </td>
            <td>
              <button class="delete-button" @click="deleteTodo(todo.id)">ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  width: 80%;
  max-width: 800px;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.add-button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #45a049;
}

.table-container {
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.delete-button {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #cc0000;
}

.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
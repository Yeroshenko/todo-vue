<template>
  <vs-list>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      v-on:remove-todo="removeTodo"
    />
  </vs-list>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style></style>

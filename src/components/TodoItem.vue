<template>
  <vs-list-item
    class="list-item"
    :title="todo.title | uppercase"
    v-bind:class="{ done: todo.completed }"
  >
    <div class="list-item__buttons">
      <vs-checkbox :checked="todo.completed" @change="todo.completed = !todo.completed" />
      <vs-button color="danger" @click="$emit('remove-todo', todo.id)">remove</vs-button>
    </div>
  </vs-list-item>
</template>

<script>
export default {
  props: {
    todo: {
      id: Number,
      title: String,
      completed: Boolean
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase().trim()
    }
  }
}
</script>

<style>
.list-item {
  padding: 12px;
}

.list-item.done {
  color: grey;
  text-decoration: line-through;
}

.list-item .material-icons {
  font-size: 16px;
}

.list-item__buttons {
  display: flex;
}
</style>

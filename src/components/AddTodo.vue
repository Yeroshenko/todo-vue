<template>
  <form @submit.prevent="onSubmit">
    <vs-input class="add-todo__input" v-model="title" label-placeholder="Task name" />
    <vs-button button="submit" color="primary" type="filled">Add todo</vs-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },

  methods: {
    async onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        await this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style>
.add-todo__input {
  display: inline-block;
  margin-right: 20px;
}
</style>

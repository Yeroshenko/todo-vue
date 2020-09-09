<template>
  <div>
    <AddTodo @add-todo="addTodo" />
    <vs-select label="Filters" v-model="filter">
      <vs-select-item
        :key="index"
        :value="item.value"
        :text="item.text"
        v-for="(item, index) in options"
      />
    </vs-select>
    <TodoList :todos="filteredTodos" @remove-todo="removeTodo" v-if="filteredTodos.length" />
    <p v-else>No todos</p>
    <vs-button color="primary" type="filled" to="/">Home page</vs-button>
  </div>
</template>

<script>
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

export default {
  name: 'App',

  data() {
    return {
      todos: [],
      filter: 'all',
      options: [
        { text: 'All', value: 'all' },
        { text: 'Completed', value: 'completed' },
        { text: 'Not completed', value: 'not completed' }
      ]
    }
  },

  beforeCreate() {
    this.$vs.loading({
      type: 'corners',
      background: '#FFFFFF'
    })
  },

  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json
          this.$vs.loading.close()
        }, 1000)
      })
  },

  // watch: {
  //   filter(value) {
  //     alert(value)
  //   }
  // },

  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not completed') {
        return this.todos.filter(t => !t.completed)
      }

      return this.todos
    }
  },

  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },

    addTodo(todo) {
      this.todos.push(todo)
    }
  },

  components: { TodoList, AddTodo }
}
</script>

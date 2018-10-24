<template>
  <button v-if="showClearCompletedBtn" @click="clearCompleted">Clear Completed</button>
</template>

<script>
  export default {
    name: 'TodoClearCompleted',
    props: {
      showClearCompletedBtn: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      clearCompleted() {
        eventBus.$emit('clearCompletedTodos');
      }
    }
  }
</script>

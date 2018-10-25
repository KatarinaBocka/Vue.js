<template>
  <button v-if="showClearCompletedBtn" @click="clearCompleted">Clear Completed</button>
</template>

<script>
  export default {
    name: 'TodoClearCompleted',
    computed: {
      showClearCompletedBtn() {
        return this.$store.getters.showClearCompletedBtn;
      }
    },
    methods: {
      clearCompleted() {
        this.$store.dispatch('clearCompleted')
      }
    }
  }
</script>

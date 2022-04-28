<script>
import TaskList from "./components/icons/TaskList.vue";
export default {
  components: { TaskList },
  data() {
    return {
      toDo: [
        { text: "teste1", id: 1 },
        { text: "teste2", id: 2 },
      ],
      Done: [
        { text: "teste3", id: 1 },
        { text: "teste4", id: 2 },
      ],
    };
  },
};
</script>

<template>
  <main>
    <TaskList :tasks="toDo" />
    <TaskList :tasks="Done" />
  </main>
</template>

<style></style>

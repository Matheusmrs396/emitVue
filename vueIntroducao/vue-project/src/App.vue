<script>
import TaskList from "./components/icons/TaskList.vue";
export default {
  components: { TaskList },
  methods: {
    movimentaTask(origem, destino) {
      
    },
  },
  data() {
    return {
      toDo: {
        items: [
          { text: "teste1", id: 1 },
          { text: "teste2", id: 2 },
        ],
        title: "toDo",
        next: "Done",
      },
      Done: {
        items: [
          { text: "teste3", id: 3 },
          { text: "teste4", id: 4 },
        ],
        title: "Done",
        back: "toDo",
      },
    };
  },
};
</script>

<template>
  <main>
    <TaskList :tasks="toDo" @movimentaTask="movimentaTask" />
    <TaskList :tasks="Done" />
  </main>
</template>

<style></style>

<script>
export default {
  props: ["tasks"],
};
</script>

<template>
  <ul>
    <li v-for="item in tasks.items" :key="item.id">
      {{ item.text }}
      <input
        type="button"
        value="Avançar"
        @click="$emit('movimentaTask', tasks.title, tasks.next)"
      />
      <input type="button" value="Retornar" />
    </li>
  </ul>
</template>

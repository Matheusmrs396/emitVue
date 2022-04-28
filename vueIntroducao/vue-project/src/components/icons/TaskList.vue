<script>
export default {
  props: ["tasks"],
};
</script>

<template>
  <ul>
    <li v-for="item in tasks" :key="item">
      {{ item.text }}
    </li>
  </ul>
</template>

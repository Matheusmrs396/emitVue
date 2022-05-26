<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/categorias">Categoria</RouterLink> |
    <RouterLink to="/produtos">Produto</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
}
header {
  height: 10%;
  background-color: aqua;
  color: rgb(0, 0, 0);
  font-size: 1.5em;
  align-items: center;
}
main {
  padding: 10px;
}
</style>

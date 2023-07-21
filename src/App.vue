<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TestVue from "./components/TestVue.vue";
</script>

<template>
  <div>
    <div style="display: flex; gap: 10px">
      <router-link class="link" to="/">HelloWorld </router-link>
      <router-link class="link" to="/test"> Test </router-link>
    </div>
    <div style="width: 100%; height: 1px; background: #535bf2"/>
    <router-view></router-view>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App'
});
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
::-webkit-scrollbar {width:8px;}
div::-webkit-scrollbar{width:6px; height:10px;}
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

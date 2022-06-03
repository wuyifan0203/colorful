<template>
  <nav-bar :title="'Welcome'" :config="navConfig"></nav-bar>
  <div class="container">
    <color-item></color-item>
    <color-item></color-item>
    <color-item></color-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import ColorItem from "../components/ColorItem.vue";
import { navConfig } from "../config/navConfig";

export default defineComponent({
  name: "home",
  components: {
    NavBar,
    ColorItem,
  },
  setup() {
    const start = () => {
      console.log("let 's start .");
    };

    return {
      start,
      navConfig,
    };
  },
});
</script>


<style>
.container {
  position: relative;
  max-width: 1320px;
  margin: auto;
  padding: 0 30px;
  background-color: #f6f6f6;
}
</style>
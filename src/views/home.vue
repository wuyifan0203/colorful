<template>
  <nav-bar :title="'Welcome'" :config="navConfig"></nav-bar>
  <div class="container">
    <color-item v-for="item in styleConfig" :key="item.title" :item="item"></color-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "../components/NavBar.vue";
import ColorItem from "../components/ColorItem.vue";
import { navConfig } from "../config/navConfig";
import { styleConfig } from "../config/styleConfig";

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
      styleConfig
    };
  },
});
</script>


<style>
.container {
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1320px;
  margin: auto;
  padding: 0 30px;
  background-color: #f6f6f6;
}
</style>
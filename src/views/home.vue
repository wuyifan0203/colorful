<template>
<main>
  <nav-bar :title="'Welcome'" :config="navConfig"></nav-bar>
  <div class="container">
    <color-item v-for="item in styleConfig" :key="item.title" :item="item" @item-click="itemClick"></color-item>
  </div>
  <div class="full_gradient" :class="[currentItem ? 'state-complete':'']" :style="currentItem?.css" @click="hideProp"></div>
</main>
</template>

<script lang="ts">
import { defineComponent,ref} from "vue";
import NavBar from "../components/NavBar.vue";
import ColorItem from "../components/ColorItem.vue";
import { navConfig } from "../config/navConfig";
import { Item, styleConfig } from "../config/styleConfig";

export default defineComponent({
  name: "home",
  components: {
    NavBar,
    ColorItem,
  },
  setup() {
    const currentItem = ref();
    const itemClick = (item:Item) => {
      currentItem.value = item;
    };

    const hideProp = () =>  {
      currentItem.value = null;
    }

    return {
      currentItem,
      navConfig,
      styleConfig,
      itemClick,
      hideProp
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

.full_gradient {
    z-index: 5000;
    position: fixed;
    height: 3000px;
    width: 3000px;
    left: 0;
    top: 0;
    border-radius: 50%;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92);
    background-color: #eee;
    cursor: url(./../assets/image/closeMouse.svg), crosshair;
}

.state-complete {
    transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92), height 0.2s ease, width 0.2s ease;
    transform: none;
    border-radius: 0;
    height: 100vh !important;
    width: 100vw !important;
    left: 0 !important;
    top: 0 !important;
}

</style>
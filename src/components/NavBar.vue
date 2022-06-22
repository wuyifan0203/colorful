<template>
  <nav class="nav">
    <div class="nav_container">
      <h2>
        <a href="">{{ title }}</a>
      </h2>
      <div class="nav_link">
        <a v-for="item in config" :key="item.target" :href="item.target" target="_blank">
          {{ item.title }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent,PropType } from "vue";
import { navItem } from "../config/navConfig";
export default defineComponent({
  name: "navBar",
  props: {
    title: {
      type:String,
      default:''
    },
    config: {
      type:Object as PropType<navItem[]>,
      default:{
        target:'',
        title:''
      }
    }
  },
  setup(props) {
  },
});
</script>


<style lang="scss" scoped>
a {
  text-decoration-line: none;
  color: #333;
}
.nav {
  position: fixed;
  z-index: 10;
  display: block;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid #ebebeb;
  background-color: rgba(255, 255, 255, 0.9);

  &_container {
    max-width: 1320px;
    margin: auto;
    padding: 0 30px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 50px;
  }
  &_link {
    a {
      margin: 0 5px;
      display: inline-block;
    }
  }
}
</style>
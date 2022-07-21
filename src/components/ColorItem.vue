<template>
  <div class="color_item">
    <span class="color_item_title">{{ item.index }} {{ item.title }}</span>
    <a href="" class="color_item_download_button">
      <i class="iconfont icon-xiazai-wenjianxiazai-02"></i>
    </a>
    <div
      class="color_item_background"
      :style="item.css"
      @click="backClick"
    ></div>
    <div
      class="color_item_color_box"
      v-if="item.color1 !== '' || item.color2 !== ''"
    >
      <span class="color_item_color">{{ item.color1 }}</span>
      <span class="color_item_arrow_symbol">→</span>
      <span class="color_item_color">{{ item.color2 }}</span>
    </div>
    <div class="color_item_color_box" v-else>
      <span class="color_item_color">Many colors</span>
    </div>
    <button class="color_item_copy_button" @click="copyEvent">Copy CSS</button>
    <div class="color_item_done_copy">
      <div class="color_item_done_copy_box">
        <span class="color_item_emoji">%%%</span>
        <br />
        <span class="color_item_word">right</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Item } from "../config/styleConfig";
export default defineComponent({
  name: "colorItem",
  props: {
    item: {
      type: Object as PropType<Item>,
      require: true,
      default: {
        title: "",
        css: "",
        color1: "",
        color2: "",
        index: "",
      },
    },
  },
  emits: ["itemClick"],
  setup(props, { emit }) {
    const textRef = ref(null);

    const copyEvent = () => {
      setTimeout(function () {
        navigator.clipboard.writeText(props.item.css).then(
          function () {
            alert("复制成功");
          },
          function () {
            alert("复制失败");
          }
        );
      }, 300);
    };

    const backClick = () => {
      emit("itemClick", props.item);
    };
    return {
      textRef,
      copyEvent,
      backClick,
    };
  },
});
</script>

<style lang="scss" scoped>
button,
input {
  border: none;
  background: 0 0;
}
.color_item {
  position: relative;
  //   float: left;
  width: calc(33.3333% - 20px);
  height: 420px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(36 37 38 / 8%);
  border-radius: 8px;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 50px;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  &:hover {
    box-shadow: 0px 6px 20px rgb(36 37 38 / 13%);
    transition: box-shadow 0.25s ease, transform 0.25s ease;
  }
  &_title {
    position: absolute;
    left: 36px;
    top: 29px;
    font-size: 0.8125em;
    color: #333435;
    letter-spacing: 0.03em;
  }
  &_download_button {
    position: absolute;
    z-index: 1;
    top: 28px;
    right: 26px;
    padding-right: 30px;
    text-indent: -5px;
    font-size: 13px;
    color: black;
    text-decoration: none;
    transition: color 0.2s ease, text-indent 0.2s ease;
  }
  &_background {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    border-radius: 50%;
    height: 250px;
    width: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: url(../assets/image/mouse.svg), pointer;
  }
  &_color_box {
    position: absolute;
    left: 35px;
    bottom: 34px;
  }
  &_color {
    font-size: 0.8125em;
    color: #333435;
  }
  &_arrow_symbol {
    margin: 0 8px 0 10px;
    font-weight: 700;
  }
  &_copy_button {
    position: absolute;
    right: 30px;
    bottom: 31px;
    font-size: 0.8125em;
    color: #333435;
    letter-spacing: 0.03em;
    cursor: pointer;
    &:hover:before {
      width: 100%;
    }
    &:hover:after {
      opacity: 1;
      left: 100%;
    }
    &::after {
      z-index: 10;
      width: 30%;
      background-color: #fff;
      opacity: 0;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 1px;
      width: 13%;
      background-color: #333435;
      transition: opacity 0.25s ease, transform 0.25s ease,
        width 0.3s cubic-bezier(0.68, 0.05, 0.46, 1.02), left 0.2s 0.2s ease-out;
    }
  }
  &_copy_css {
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transition: opacity 0.25s ease;
    &::before {
      content: "";
      width: 100%;
      padding-bottom: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: auto;
      z-index: 1;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.9);
      transform: scale(0);
      transform-origin: center;
      transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92);
    }
  }
  &_copy_text {
    opacity: 0;
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: 300px;
    padding: 0 30px;
    transition: opacity 0.25s ease;
    text-align: center;
    margin: auto;
    width: 100%;
    border: none;
    background-color: transparent;
    height: 70px;
    resize: none;
  }
  &_done_copy {
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    transition: opacity 0.25s ease;
  }
  &_done_copy:before {
    content: "";
    width: 100%;
    padding-bottom: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: auto;
    z-index: 1;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.7s cubic-bezier(0.47, 0.04, 0.22, 0.92);
  }
  &_done_copy_box {
    opacity: 0;
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
    text-align: center;
    transition: opacity 0.25s ease;
  }
  &_emoji {
    font-size: 50px;
    margin-bottom: 10px;
  }
  &_word {
    font-size: 0.8125em;
  }
}
</style>
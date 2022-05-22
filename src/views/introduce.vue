<template>
<div>introduce</div>
  <button @click="start">start</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"introduce",
    setup() {
        const start = () => {
            console.log("let 's start .");
            
        }

        return {
            start
        }
        
    },
})
</script>


<style>

</style>
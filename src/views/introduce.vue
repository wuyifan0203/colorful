<template>
<div>introduce</div>
  <button @click="start">start</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name:"introduce",
    setup() {
        const router = useRouter();
        const start = () => {
            console.log("let 's start .");
            router.push('/home');
        }

        return {
            start
        }
        
    },
})
</script>


<style>

</style>
<script setup>
import { ref } from 'vue'
// import Mapcop from './mapCom.vue'


defineProps({
    input:""
})

</script>

<template>
    <input class="input" type="text" v-model="input" placeholder="Please input" />
</template>

<style scoped>
    .input{
        width: 30rem;
        height: 2rem;
    }
</style>

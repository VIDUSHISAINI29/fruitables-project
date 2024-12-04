<script setup>
import {  onMounted } from 'vue';

const props = defineProps({
   uri: String
})

onMounted(()=> {
   console.log(props.uri)
})

</script>

<template>
   <h1>This is Fruit {{props.uri }}</h1>
</template>

<style scoped></style>
<script setup>
import DetailPage from "@/components/DetailPage.vue";
import ItemsPage from "@/views/ItemsPage.vue";

import { globalInput } from "@/stores/global";
// import Hero from '@/components/Hero.vue'


const global = globalInput();
</script>
<template>
  <div class="tw-flex tw-justify-center tw-flex-wrap tw-w-full">
    

    <ItemsPage v-if="global.showDetail === false" />
    <DetailPage v-else />
    
    
  </div>
</template>
<style>
.nav {
  background-color: #ffa726;
}

.homeHead {
  background-color: #ff5c16;
}
.logo span {
  color: #8bc34a;
}
</style>

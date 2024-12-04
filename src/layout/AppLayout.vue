<script setup>
import navbar from "@/layout/Navbar.vue";
import sidebar from "@/layout/Sidebar.vue";
import hero from "@/components/Hero.vue";
</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-relative">
    <navbar />

    <div class="tw-flex tw-w-full tw-flex-col">
      <hero />
      <sidebar />
    </div>

  </div>
</template>

<style scoped>
/* .routed{
      height: 86vh;
   } */
</style>

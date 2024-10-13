<template>
  <a-layout>
    <a-layout-header class="!bg-white">
      <a-menu mode="horizontal">
        <a-menu-item key="1"
          ><router-link to="/">Todo</router-link></a-menu-item
        >
        <a-menu-item key="2"
          ><router-link to="/about">About Us</router-link></a-menu-item
        >
        <a-menu-item key="3"
          ><router-link to="/contact">Contact Us</router-link></a-menu-item
        >
      </a-menu>
    </a-layout-header>
    <a-layout-content class="p-4">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="text-center !text-green-700">
      ©2024 Created</a-layout-footer
    >
  </a-layout>
</template>

<script>
export default {};
</script>

<style scoped>
/* Tailwind CSS for layout spacing */
.p-4 {
  padding: 16px;
}
</style>

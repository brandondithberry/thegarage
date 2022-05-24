<template>
  <footer class="w-full p-6">
    <p class="text-center">
      Copyright © {{ currentYear }} The Garage - All Rights Reserved |
      <a class="underline" href="https://brandondithberry.com" target="_blank"
        >Site by Brandon Dith-Berry</a
      >
    </p>
  </footer>
</template>

<style scoped>
footer {
  z-index: 4000;
  opacity: 0;
  animation: fadein 2s ease 2s forwards;
}
</style>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script> 
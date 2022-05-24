<template>
  <section>
    <div class="center">
      <h1>Thanks for your RSVP!</h1>
      <a class="btn" href="/">Return</a>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
section {
  @apply absolute flex flex-col place-content-center place-items-center text-center top-0 left-0 w-full h-full;
  box-shadow: inset 0px -10px 100px #2b96c1;
  animation: glitch-clouds 10s linear alternate-reverse infinite;
  background: radial-gradient(#03001377, #00000077);
  z-index: 3000;

  .center {
    @apply flex flex-col;
    animation: glitch-text 10s linear infinite;
  }
}
</style>
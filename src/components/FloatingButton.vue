<template>
  <button class="rounded-btn fab ease select-none">
    <span class="icon">&plus;</span>
  </button>
</template>

<script>
export default {
  name: 'FloatingButton',
};
</script>

<style lang="postcss">
.fab {
  @apply bg-accent h-24 w-24 text-6xl m-10 text-white fixed pin-b pin-r m-10;
}

.fab:hover {
  @apply bg-accent-light;
}

</style>

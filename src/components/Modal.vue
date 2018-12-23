<template>
  <div v-if="visible" class="modal" @click.self="visible = false">
    <div class="modal_box">
      <span class="absolute pin-t pin-b pin-r p-4">
        <span class="h-12 w-12 text-grey hover:text-grey-darkest" role="button">
          &times;
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style scoped lang="postcss">
.modal {
  @apply fixed pin z-50 overflow-auto bg-smoke-light flex;
}

.modal_box {
  @apply relative p-8 bg-white w-full max-w-md h-full md:h-aut m-auto flex-col flex;
}
</style>

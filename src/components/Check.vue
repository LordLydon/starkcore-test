<template>
  <label
      class="check rounded-btn ease select-none"
      :class="{'checked': this.isChecked}">
    <span class="icon">&#10004;</span>
    <input class="hidden"
        type="checkbox"
        v-model="isChecked"
        @change="$emit('input', $event.target.checked)">
  </label>
</template>

<script>
export default {
  name: 'Check',
  props: ['value'],
  data() {
    return {
      isChecked: this.value,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.isChecked = val;
      },
    },
  },
};
</script>

<style lang="postcss">
.check {
  @apply bg-grey-darker h-12 w-12 text-2xl text-grey;
}

.check.checked {
  @apply bg-accent text-white;
}
</style>

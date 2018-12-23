<template>
  <div>
    <div class="form-switch inline-block align-middle">
      <label :class="{'form-switch-label': true, 'checked': this.isToggleOn}">
        <input ref="checkbox"
              :value="value"
              v-model="isToggleOn"
              @change="$emit('input', $event.target.checked)"
              type="checkbox"
              class="form-switch-checkbox" />
      </label>
    </div>
</div>
</template>

<script>
export default {
  name: 'Toggle',
  props: ['value'],
  data() {
    return {
      isToggleOn: this.value,
    };
  },
};
</script>

<style lang="postcss">
  /* CHECKBOX TOGGLE SWITCH */
  .form-switch {
      @apply relative select-none w-16 mr-2 leading-normal;
  }
  .form-switch-checkbox {
      @apply hidden;
  }
  .form-switch-label {
      @apply block overflow-hidden cursor-pointer bg-primary border rounded-full h-9 shadow-inner;
      transition: background-color 0.2s ease-in;
  }
  .form-switch-label:before {
      @apply absolute block bg-white pin-y w-9 border rounded-full -ml-1 shadow;

      right: 50%;
      content: "";
      transition: all 0.2s ease-in;
  }
  .form-switch-label.checked {
      @apply bg-accent shadow-none;
  }
  .form-switch-label.checked:before {
      @apply pin-r;
  }
</style>

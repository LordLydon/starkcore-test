<template>
  <div class="smart_filter">
    <section class="smart_filter_section title p-4">
      <img class="h-5 " src="@/assets/img/LIGHTBULB.png" alt="lightbult" />
      <span class="p-2 bottom_border">Smart Filters</span>
    </section>
    <section class="smart_filter_section flex-col p-4">
      <div class="sort_item">
        <img src="@/assets/img/SALE.png" alt="sale" title="On sale.">
        <Toggle v-model="sale" />
      </div>
      <div class="sort_item">
        <img src="@/assets/img/CALENDAR.png" alt="date" title="Due today.">
        <Toggle v-model="date" />
      </div>
      <div class="sort_item">
        <img src="@/assets/img/HEART.png" alt="likes" title="Delivered.">
        <Toggle v-model="likes" />
      </div>
    </section>
    <section class="smart_filter_section flex-col p-5">
      <span class="flex-1 m-2">Status</span>
      <input
        class="flex-1 py-3 my-2 rounded-lg border border-grey-dark text-center text-xs"
        type="search"
        v-model="filter"
        placeholder="Search">
      <button
        class="flex-1 uppercase bg-white p-2 m-2 w-full font-bold hover:bg-grey-lighter ease">
        Delivered
      </button>
    </section>
  </div>
</template>

<script>
import Toggle from './Toggle.vue';

export default {
  name: 'SmartFilter',
  data() {
    return {
      filter: '',
      sale: false,
      date: false,
      likes: false,
    };
  },
  components: { Toggle },
};
</script>

<style scoped lang="postcss">
.smart_filter {
  @apply flex flex-col items-center my-4 px-2 relative;
}

.smart_filter::after {
  @apply bg-grey-dark absolute pin-r;
  content: "";
  top: 10%;
  width: 0.1rem;
  height: 80%;
  z-index: 10;
}

.smart_filter_section {
  @apply flex flex-1 items-center w-full relative;
}

.smart_filter_section.title {
  @apply justify-center;
}

.smart_filter .smart_filter_section:not(:first-of-type)::before {
  @apply bg-grey-dark absolute pin-t;
  content: "";
  left: 10%;
  height: 0.1rem;
  width: 80%;
  z-index: 10;
}

.sort_item {
  @apply py-2 flex flex-1 w-full justify-between items-center;
}

.sort_item img {
  @apply h-12;
}
</style>

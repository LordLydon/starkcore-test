<template>
  <div class="flex flex-col items-center p-2 text-black border">
    <span class="flex flex-1 py-2">Smart Filters</span>
    <section class="flex flex-1 py-2">

    </section>
    <section class="flex flex-1 flex-col py-2">
      <span class="flex-1 m-2">Status</span>
      <input class="flex-1 p-2 m-2 text-center text-xs" type="search" v-bind="filter" placeholder="Search">
      <button class="flex-1 uppercase bg-white p-2 m-2 font-bold hover:bg-grey-lightest ease">Delivered</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SmartFilter',
  data() {
    return new {
      filter: ""
    }
  }
}
</script>

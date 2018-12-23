<template>
  <div class="package_display">
    <section class="package_section date_section w-1/6">
      <span>{{ this.formattedDate }}</span>
    </section>
    <section class="package_section locations_section ">
      <img class="h-6" src="@/assets/img/LOCATION_ARROW.png" alt="arrow">
      <div class="flex flex-col items-center justify-around text-grey-darker px-4 h-full">
        <span>{{ this.formattedOrigin }}</span>
        <img class="h-8" src="@/assets/img/DROPDOWN_ARROW.png" alt="to">
        <span>{{ this.formattedDestination }}</span>
      </div>
    </section>
    <section class="package_section status_section justify-around flex-1">
      <img class="h-18" src="@/assets/img/TRUCK.png" alt="On it's way">
      <span class="text-4xl text-grey-darker">{{ this.formattedPrice }}</span>
      <div class="flex bg-red h-8 w-8 items-center justify-center rounded">
        <span class="text-center text-2xs text-white">{{ this.package.items }}</span>
      </div>
      <button class="flex h-8 w-8 items-center justify-center">
        <span class="icon text-3xl text-grey-darker -transy-10">&#8942;</span>
      </button>
    </section>
  </div>
</template>

<script>
import { formatMoney } from '@/helpers';

export default {
  name: 'PackageDisplay',
  props: ['value'],
  data() {
    return {
      package: this.value,
    };
  },
  computed: {
    formattedDate() {
      return this.package.deliveryDate.format('dddd Do h:mm A');
    },
    formattedOrigin() {
      return this.formatLocation(this.package.origin);
    },
    formattedDestination() {
      return this.formatLocation(this.package.destination);
    },
    formattedPrice() {
      return formatMoney(this.package.price.value, this.package.price.currency);
    },
  },
  methods: {
    formatLocation(location) {
      return `${location.city}, ${location.state}, ${location.postalCode}`;
    },
  },
};
</script>

<style lang="postcss">
.package_display {
  @apply bg-white flex-1 flex h-32 p-2 w-full rounded-3xl text-grey-dark items-center;
}

.package_section {
  @apply flex items-center px-6 justify-center flex-row h-full;
}

.package_section + .package_section {
  @apply relative;
}

.package_section + .package_section::before {
  @apply bg-grey-light absolute pin-l;
  content: "";
  top: 10%;
  width: 0.1rem;
  height: 80%;
  z-index: 10;
}
</style>

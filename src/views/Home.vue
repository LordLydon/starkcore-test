<template>
  <div class="home">
    <section class="flex justify-between">
      <Check v-model="allSelected" @input="toggleAll($event)" />
      <input class="search_box" type="search" v-model="filter" placeholder="Search">
    </section>
    <section class="transaction_display">
      <div class="flex mt-6 items-center" v-for="pckg in this.sortedPackages" :key="pckg.id" >
        <Check class="mr-6" v-model="pckg.selected" @input="checkSelected()"/>
        <PackageDisplay :value="pckg" @edit="editPackage($event)" />
      </div>
    </section>
  </div>
</template>

<script>
import PackageDisplay from '@/components/PackageDisplay.vue';
import Check from '@/components/Check.vue';
import moment from 'moment';

export default {
  name: 'home',
  data() {
    return {
      packages: [
        {
          id: 0,
          status: 0,
          selected: false,
          deliveryDate: moment(new Date(2018, 12, 22, 9, 10, 11)),
          origin: {
            city: 'Houston',
            state: 'TX',
            postalCode: 33619,
          },
          destination: {
            city: 'Atlanta',
            state: 'GA',
            postalCode: 30123,
          },
          items: 1,
          price: {
            value: 250.00,
            currency: 'USD',
          },
        },
        {
          id: 1,
          status: 1,
          deliveryDate: moment(new Date(2018, 12, 22, 9, 10, 11)),
          selected: true,
          origin: {
            city: 'Houston',
            state: 'TX',
            postalCode: 33619,
          },
          destination: {
            city: 'Atlanta',
            state: 'GA',
            postalCode: 30123,
          },
          items: 1,
          price: {
            value: 250.00,
            currency: 'USD',
          },
        },
      ],
      filter: '',
    };
  },
  computed: {
    filteredPackages() {
      return this.packages;
    },
    sortedPackages() {
      return this.filteredPackages;
    },
  },
  components: {
    PackageDisplay,
    Check,
  },
  methods: {
    toggleAll($event) {
      this.filteredPackages.forEach((p) => { p.selected = $event; });
    },
    checkSelected() {
      this.allSelected = this.filteredPackages.reduce((sel, p) => sel && p.selected, true);
    },
  },
};
</script>

<style lang="postcss">
.search_box {
  @apply flex-1 py-3 my-2 rounded-lg pin-r max-w-xs;
  @apply border border-grey-dark text-center text-xs;
}
</style>

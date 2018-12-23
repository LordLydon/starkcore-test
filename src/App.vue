<template>
  <div id="app" class="flex p-6 bg-grey container m-auto">
    <aside class="app_aside flex items-center flex-col p-2">
      <img src="@/assets/img/COMPANY_LOGO.png" alt="starkcore logo" class="h-24">
      <SmartFilter/>
    </aside>
    <main class="flex flex-auto flex-col px-6">
      <NavBar/>
      <router-view/>
    </main>
    <FloatingButton/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SmartFilter from '@/components/SmartFilter.vue';
import FloatingButton from '@/components/FloatingButton.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    SmartFilter,
    FloatingButton,
  },
};
</script>


<style lang="postcss">
body {
  @apply bg-grey min-h-screen w-screen;
}

#app {
  @apply antialiased text-center font-sans;
}

.ease {
  transition: ease 0.2s;
}

.rounded-btn {
  @apply flex rounded-full;
}

.icon {
  @apply m-auto;
  transform: translate(0, -10%);
}

</style>

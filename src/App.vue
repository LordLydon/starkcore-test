<template>
  <div id="app" class="flex p-6 min-h-screen w-screen">
    <aside class="flex items-center flex-col p-2">
      <img src="@/assets/img/COMPANY_LOGO.png" alt="starkcore logo" class="h-32 w-32">
      <SmartFilter/>
    </aside>
    <main class="flex flex-auto flex-col p-2">
      <NavBar/>
      <router-view/>
    </main>
    <FloatingButton/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SmartFilter from "@/components/SmartFilter.vue";
import FloatingButton from "@/components/FloatingButton.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SmartFilter,
    FloatingButton
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e6e6e6;
}

.ease {
  transition: ease 0.2s;
}
</style>

<template>
  <nav class="flex mb-6 font-bold text-xs">
    <ul class="list-reset flex flex-1">
      <li class="navbar_item active">
        <router-link to="/">
          <img class="navbar_icon" src="../assets/img/HOME.png" alt="home" />
          <span class="navbar_text">Home</span>
        </router-link>
      </li>
      <li class="navbar_item">
        <router-link to="/messages">
          <img src="../assets/img/MESSAGES.png" alt="messages" class="navbar_icon">
          <span class="navbar_text">Messages</span>
        </router-link>
      </li>
      <li class="navbar_item">
        <router-link to="/wishlist">
          <img src="../assets/img/WISHLIST.png" alt="wishlist" class="navbar_icon">
          <span class="navbar_text">Wishlist</span>
        </router-link>
      </li>
      <li class="navbar_item">
        <router-link to="/settings">
          <img src="../assets/img/SETTINGS.png" alt="settings" class="navbar_icon">
          <span class="navbar_text">Settings</span>
        </router-link>
      </li>
      <li class="navbar_item">
        <router-link to="/account">
          <img src="../assets/img/MY_ACCOUNT.png" alt="my account" class="navbar_icon">
          <span class="navbar_text">My Account</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped lang="postcss">
.navbar_item {
  @apply flex flex-1 flex-col items-center;
}

.navbar_item a:hover {
  @apply bg-accent text-white;
}

.navbar_item a.router-link-exact-active {
  @apply bg-primary text-white;
}

.navbar_item a.router-link-exact-active:hover {
  @apply bg-accent;
}

.navbar_item a {
  @apply flex flex-1 flex-col items-center h-full w-full p-2 bg-white;
  @apply text-black normal-case no-underline;
  transition: ease 0.2s;
}

.navbar_icon {
  @apply h-8 w-8;
}
</style>

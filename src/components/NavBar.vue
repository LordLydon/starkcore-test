<template>
  <nav class="flex m-6 mt-0 font-bold text-xs">
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
        <router-link to="/my-account">
          <img src="../assets/img/MY_ACCOUNT.png" alt="my account" class="navbar_icon">
          <span class="navbar_text">My Account</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar_item {
  @apply flex;
  @apply flex-1;
  @apply flex-col;
  @apply items-center;
}

.navbar_item a:hover {
  @apply bg-blue-dark;
  @apply text-white;
}

.navbar_item a.router-link-exact-active {
  @apply bg-blue-darker;
  @apply text-white;
}

.navbar_item a {
  @apply flex;
  @apply flex-1;
  @apply flex-col;
  @apply items-center;
  @apply normal-case;
  @apply no-underline;
  @apply h-full;
  @apply w-full;
  @apply p-2;
  @apply bg-white;
  @apply text-black;
  transition: ease 0.2s;
}

.navbar_icon {
  @apply h-8;
  @apply w-8;
}
</style>


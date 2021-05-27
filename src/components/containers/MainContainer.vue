<template>
  <div>
    <div class="bg-gray-800 h-16 shad">
      <div class="flex">
        <div class="text-gray-400 text-xl pt-4 flex flex-row flex-shrink">
          <router-link
            to="/"
            class="flex mx-6 hover:text-gray-100 cursor-pointer"
            >Home</router-link
          >
        </div>
        <div
          class="text-gray-400 text-xl pt-4 flex flex-grow flex-row-reverse space-x-8"
        >
          <a
            class="flex mx-6 hover:text-gray-100 cursor-pointer"
            href="//alphase.com"
            target="_blank"
            >Alphase</a
          >
          <a
            class="flex hover:text-gray-100 cursor-pointer"
            href="//github.com/AlphaseStudios/Alphabot-dashboard"
            target="_blank"
            >Github</a
          >
          <router-link
            to="/account"
            class="flex hover:text-gray-100 cursor-pointer"
            >Account</router-link
          >
          <router-link
            to="/dashboard/pick"
            class="flex hover:text-gray-100 cursor-pointer"
            >Dashboard</router-link
          >
        </div>
      </div>
    </div>
    <div
      :class="!$route.name ? '' : $route.name.includes('dashboard') && $route.name !== 'dashboard pick' ? '' : 'container mx-auto px-52 mt-3'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.shad {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
</style>

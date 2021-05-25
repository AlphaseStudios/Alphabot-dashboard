<template>
  <div>
    <div class="bg-gray-800 h-16">
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
            to="/dashboard"
            class="flex hover:text-gray-100 cursor-pointer"
            >Dashboard</router-link
          >
        </div>
      </div>
    </div>
    <div class="container mx-auto px-52">
      <slot></slot>
    </div>
  </div>
</template>

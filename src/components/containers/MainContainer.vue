<template>
  <div>
    <div class="bg-gray-800 h-16 shad">
      <Responsive :screen="['tablet', 'desktop']">
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
      </Responsive>
      <Responsive :screen="['mobile']" class="text-white">
        <button
          class="rounded border-2 border-gray-600 w-12 h-12 mt-2 ml-2"
          @click="mobileNav = true"
        >
          <img src="@/assets/hamburger.svg" class="w-14 h-14 pb-3" />
        </button>
        <div v-if="mobileNav" class="fixed h-full w-full z-50 bg-black top-0 pt-10 bg-opacity-75">
          <div
            class="bg-gray-800 fixed z-50 w-72 h-80 rounded m-auto left-0 right-0 overflow-scroll"
          >
            <div class="text-gray-400 text-2xl pt-5 flex-col space-y-2">
              <button class="flex bg-red-400 bg-opacity-25 mx-4 p-2 rounded" @click="mobileNav = false">Dismiss</button>
              <router-link
                to="/"
                class="flex focus:bg-blue-500 focus:bg-opacity-25 bg-blue-400 bg-opacity-25 mx-4 p-2 rounded"
                >Home</router-link
              >
              <a
                class="flex focus:bg-blue-500 focus:bg-opacity-25 bg-blue-400 bg-opacity-25 mx-4 p-2 rounded"
                href="//alphase.com"
                target="_blank"
                >Alphase</a
              >
              <a
                class="flex focus:bg-blue-500 focus:bg-opacity-25 bg-blue-400 bg-opacity-25 mx-4 p-2 rounded"
                href="//github.com/AlphaseStudios/Alphabot-dashboard"
                target="_blank"
                >Github</a
              >
              <router-link
                to="/account"
                class="flex focus:bg-blue-500 focus:bg-opacity-25 bg-blue-400 bg-opacity-25 mx-4 p-2 rounded"
                >Account</router-link
              >
              <router-link
                to="/dashboard/pick"
                class="flex focus:bg-blue-500 focus:bg-opacity-25 bg-blue-400 bg-opacity-25 mx-4 p-2 rounded"
                >Dashboard</router-link
              >
            </div>
          </div>
        </div>
      </Responsive>
    </div>
    <div
      :class="
        !$route.name
          ? ''
          : $route.name.includes('dashboard') &&
            $route.name !== 'dashboard pick'
          ? ''
          : 'transition-all duration-300 container xl:px-52 mx-auto px-2 mt-3'
      "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Responsive from '@/components/Responsive.vue';

@Component({
  components: {
    Responsive,
  },
})
export default class MainContainer extends Vue {
  private mobileNav = false;
}
</script>

<style scoped>
.shad {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}
</style>

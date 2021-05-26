<template>
  <div class="bg-gray-850 text-gray-400 p-3 text-xl height-nonav w-52">
    <div v-for="(cats, cat, index) of categories" :key="index" class="mb-4">
      <div>
        {{ Object.keys(categories)[index] }}
        <button
          class="transition-all duration-75 ml-1 w-full rounded px-3 p-1 flex hover:text-gray-200 hover:bg-green-400 hover:bg-opacity-25 cursor-pointer"
          @click="clickListener(Object.keys(categories)[index], i)"
          v-for="(n, i) of cats"
          :key="i"
        >
          >
          <div class="ml-2">{{ n }}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
  @Prop({ required: true }) private categories: Record<string, Array<string>> | undefined;

  clickListener (cat: string, i: number): void {
    if (this.$route.params.category === cat.toString() && this.$route.params.index === i.toString()) return;
    this.$router.push({ name: 'dashboard category', params: { serverId: this.$route.params.serverId, category: cat, index: i.toString() } });
  }
}
</script>

<style scoped>
.height-nonav {
  height: calc(100vh - 4rem);
}
</style>

<template>
  <div class="bg-gray-850 text-gray-400 p-3 text-xl height-nonav w-52">
    <div v-for="(cats, cat, index) of categories" :key="index" class="mb-4">
      <div>
        <div class="p-1 rounded mr-1 mb-1" :class="Object.keys(categories)[index] === active.cat ? 'bg-blue-500 bg-opacity-25' : ''">
        {{ Object.keys(categories)[index] }}
        </div>
        <button
          class="transition-all duration-75 ml-1 mb-1 w-full rounded px-3 p-1 flex hover:text-gray-200 hover:bg-green-400 hover:bg-opacity-25 cursor-pointer"
          :class="active.cat === Object.keys(categories)[index] && active.index === i ? 'bg-blue-500 bg-opacity-25' : ''"
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

  private active = { cat: '', index: 1 };

  mounted (): void {
    if (!this.$route.params.category && !this.$route.params.index) return;
    this.active.cat = this.$route.params.category;
    this.active.index = parseInt(this.$route.params.index, 10);
  }

  clickListener (cat: string, i: number): void {
    if (this.$route.params.category === cat.toString() && this.$route.params.index === i.toString()) return;
    this.$router.push({ name: 'dashboard category', params: { serverId: this.$route.params.serverId, category: cat, index: i.toString() } });
    this.active.cat = cat;
    this.active.index = i;
    console.log(cat, i, this.active);
  }
}
</script>

<style scoped>
.height-nonav {
  height: calc(100vh - 4rem);
}
</style>

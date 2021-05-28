<template>
  <div class="flex flex-row">
    <div class="bg-gray-825 text-gray-400 p-3 text-xl height-nonav w-52">
      <div v-for="(cats, cat, index) of categories" :key="index" class="mb-4">
        <div>
          <button
            class="transition-all duration-75 -ml-2 mb-1 w-full rounded px-3 p-1 flex hover:text-gray-200 hover:bg-green-400 hover:bg-opacity-25 cursor-pointer"
            :class="
              Object.keys(categories)[index] === active.cat
                ? 'bg-blue-500 bg-opacity-25'
                : ''
            "
            @click="active = { cat: Object.keys(categories)[index], index: 0 }"
            :title="Object.keys(categories)[index]"
          >
            <div class="truncate">{{ Object.keys(categories)[index] }}</div>
          </button>
          <button
            class="transition-all duration-75 ml-1 mb-1 w-full rounded px-3 p-1 flex hover:text-gray-200 hover:bg-green-400 hover:bg-opacity-25 cursor-pointer"
            :class="
              active.cat === Object.keys(categories)[index] &&
              active.index === i
                ? 'bg-blue-500 bg-opacity-25'
                : ''
            "
            @click="clickListener(Object.keys(categories)[index], i)"
            v-for="(n, i) of cats"
            :key="i"
            :title="n"
          >
            >
            <div class="ml-2 truncate">{{ n }}</div>
          </button>
        </div>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
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
    this.$emit('active', { category: this.active.cat, index: this.active.index });
  }

  clickListener (cat: string, i: number): void {
    if (this.$route.params.category === cat.toString() && this.$route.params.index === i.toString()) return;
    this.$router.push({ name: 'dashboard category', params: { serverId: this.$route.params.serverId, category: cat, index: i.toString() } });

    this.active.cat = cat;
    this.active.index = i;
    this.$emit('active', { category: cat, index: i });
  }
}
</script>

<style scoped>
.height-nonav {
  height: calc(100vh - 4rem);
}
</style>

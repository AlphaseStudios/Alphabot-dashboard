<template>
  <div class="border border-gray-200 rounded p-2" :class="`w-${width}`">
    <div class="-space-y-2">
      <div class="text-xl text-medium"><slot name="title" /></div>
      <div
        class="text-md text-medium text-gray-300 hover:text-gray-400 cursor-text"
      >
        <slot name="subtitle" />
      </div>
    </div>
    <div>
      <slot />
    </div>
    <div class="mt-2"><slot name="footer" /></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class BorderCard extends Vue {
  @Prop({ default: '80' }) private width: string | undefined;
}
</script>

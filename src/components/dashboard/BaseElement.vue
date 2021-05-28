<template>
  <div class="bg-gray-850 w-80 h-80 hover:shadow-lg rounded-lg p-2">
    <div class="flex-col -space-y-2">
      <div class="text-xl font-medium">{{ title }}</div>
      <div class="text-gray-500 text-lg">{{ subtitle }}</div>
    </div>
    <div class="max-h-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseElement extends Vue {
  @Prop({ required: true, default: 'Error' }) private title: string | undefined;

  @Prop({ default: '' }) private subtitle: string | undefined;
}
</script>

<template>
  <div>
    <button
      class="rounded text-white transition duration-300 ease-in-out bg-blurple-500 px-3 py-2 hover:bg-blurple-300 hover:shadow-md"
      v-bind:class="[scaleAnim ? 'transform hover:scale-110' : '', width == null ? '' : `w-${width}`]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class Button extends Vue {
  @Prop({ required: false }) private scaleAnim: boolean | undefined;

  @Prop({ required: false }) private width: string | undefined;
}
</script>

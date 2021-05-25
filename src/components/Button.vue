<template>
  <div>
    <button ref="btn" @click="onClickHandler"
      class="rounded text-white transition duration-300 ease-in-out px-3 py-2 hover:shadow-md"
      v-bind:class="[scaleAnim ? 'transform hover:scale-110' : '', `w-${width}`, `bg-${color} hover:bg-${hoverColor}`]"
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
  @Prop({ required: false, default: false }) private scaleAnim: boolean | undefined;

  @Prop({ required: false, default: 'auto' }) private width: string | undefined;

  @Prop({ required: false, default: 'blurple-500' }) private color: string | undefined;

  @Prop({ required: false, default: 'blurple-300' }) private hoverColor: string | undefined;

  onClickHandler (e: Event): void {
    this.$emit('click', e);
  }
}
</script>

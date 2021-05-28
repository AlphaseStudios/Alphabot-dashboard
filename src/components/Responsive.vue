<template>
  <div>
    <slot v-if="show"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface Screens {
  mobile: number,
  tablet: number;
  laptop: number;
  desktop: number;
}

type Screen = keyof Screens;

@Component
export default class Responsive extends Vue {
  @Prop({ default: 'tablet' }) private screen: keyof Screens | undefined;

  private show = false;

  private screens: Screens = {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1280,
  };

  mounted (): void {
    window.addEventListener('resize', this.sizeListener);
    this.sizeListener();
  }

  sizeListener (): void {
    const selected: number = this.getSelectedSize() || 0;
    if (window.screen.width < selected) {
      this.show = false;
    } else this.show = true;
  }

  getSelectedSize (): number | null {
    let px: number | null = null;
    Object.keys(this.screens).map((item: string) => {
      if (Object.keys(this.screens).includes(item)) {
        if (this.screen && this.screen === item) {
          px = this.screens[item as Screen];
        }
      } else px = null;
      return px;
    });
    return px;
  }
}
</script>

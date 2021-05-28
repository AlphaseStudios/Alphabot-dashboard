<template>
  <div>
    <slot v-if="show"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface Screens {
  mobile: { min: number, max: number },
  tablet: { min: number, max: number },
  laptop: { min: number, max: number },
  desktop: { min: number, max: number },
}

type Screen = keyof Screens;

@Component
export default class Responsive extends Vue {
  @Prop({ default: ['tablet'] }) private screen: Array<keyof Screens> | undefined;

  private show = false;

  private screens: Screens = {
    mobile: {
      min: 0,
      max: 640,
    },
    tablet: {
      min: 640,
      max: 1024,
    },
    laptop: {
      min: 1024,
      max: 1280,
    },
    desktop: {
      min: 1280,
      max: 100000,
    },
  };

  mounted (): void {
    window.addEventListener('resize', this.sizeListener);
    this.sizeListener();
  }

  sizeListener (): void {
    const selected: { min: number, max: number } = this.getSelectedSize() || this.screens.mobile;
    if (window.screen.width > selected.min && window.screen.width < selected.max) {
      this.show = true;
    } else this.show = false;
  }

  getSelectedSize (): { min: number, max: number } | null {
    let px: { min: number, max: number } | null = null;
    const BreakException = {};
    try {
      Object.keys(this.screens).map((item: string) => {
        if (Object.keys(this.screens).includes(item)) {
          if (this.screen && this.screen.includes(item as Screen)) {
            px = { min: this.screens[item as Screen].min, max: this.screens[this.screen[this.screen.length - 1] as Screen].max };
            throw BreakException;
          }
        } else px = null;
        return px;
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }

    return px;
  }
}
</script>

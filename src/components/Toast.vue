<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="show"
      key="1"
      class="shadow-2xl bg-darker max-w-sm fixed bottom-0 left-10 right-10 m-auto inset-x-0 mb-2 p-2 rounded-md"
    >
      <div class="text-gray-200 flex">
        <div class="flex-1 pt-1" :title="title"><slot class="truncate" /></div>
        <div class="flex-1">
          <div class="flex flex-row-reverse">
            <button
              class="transition-all duration-300 p-1 rounded text-blue-500 font-medium bg-blue-400 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-25"
              @click="show = false"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Toast extends Vue {
  @Prop({ default: '' }) private title: string | undefined;

  private show = false;

  public toggle (duration = 2500): void {
    this.show = true;
    setTimeout(() => { this.show = false; }, duration);
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.325s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0 !important;
}
</style>

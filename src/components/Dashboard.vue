<template>
  <div class="bg-gray-875 text-gray-200 widthheight p-2">
    <div class="text-2xl">Dashboard</div>
    <BaseElement title="Test" subtitle="Some cool subtitle">
      <div class="flex flex-col h-full">
        <div class="order-last">How are you doingg</div>
        <Button color="green-600" hoverColor="green-700" width="full">d</Button>
      </div>
    </BaseElement>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import BaseElement from '@/components/dashboard/BaseElement.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    BaseElement,
    Button,
  },
})
export default class Dashboard extends Vue { }
</script>

<style>
.widthheight {
  width: calc(100vw - 13rem);
  height: calc(100vh - 4rem);
}
</style>

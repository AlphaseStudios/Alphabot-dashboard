<template>
  <div>
    <div class="text-3xl">Page not found.</div>
    <div class="text-2xl text-gray-400">
      The requested page '{{ $route.path }}' does not exist.
    </div>
    <div class="flex space-x-3 mt-3">
      <Button @click="$router.go(-1)">Go back</Button>
      <Button @click="$router.push({ name: 'home' })">Home</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/Button.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Button,
  },
})
export default class Notfound extends Vue { }
</script>

<template>
  <div>
    <p>Heyy</p>
    <Button @click="login()" :scaleAnim="true">Login using discord</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import config from '../../config';

@Component({
  components: {
    Button,
  },
})
export default class Login extends Vue {
  login (): void {
    window.location.href = `${config.backend}/oauth/discord`;
  }
}
</script>

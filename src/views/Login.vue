<template>
  <div>
    <p>Heyy</p>
    <button @click="login()">Login using discord</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import config from '../../config';

export default class Login extends Vue {
  login (): void {
    window.location.href = `${config.backend}/oauth/discord`;
  }
}
</script>

<template>
  <div>
    <p>Heyy</p>
    <BorderCard>
      <template v-slot:title>Title</template>
      <template v-slot:subtitle>Sub</template>
      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </div>
      <template v-slot:footer>
        <Button @click="login()" width="full" :scaleAnim="false">Login using discord</Button>
      </template>
    </BorderCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import BorderCard from '@/components/BorderCard.vue';
import config from '../../config';

@Component({
  components: {
    Button,
    BorderCard,
  },
})
export default class Login extends Vue {
  login (): void {
    window.location.href = `${config.backend}/oauth/discord`;
  }
}
</script>

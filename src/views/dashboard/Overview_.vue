<template>
  <div>
    serverId: {{ serverId }}<br />
    Farewell message: <span ref="data">...</span>
  </div>
</template>

<script lang="ts">
import feathersClient from '@/feathers-client';
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { ServerData } from '@/helpers/interfaces';

@Component
export default class Overview extends Vue {
  @Prop() private serverId: string | undefined;

  mounted (): void {
    console.log('serverId: ', this.serverId);
    feathersClient.service('guild').get(this.serverId, { test: 'testd' }).then((data: ServerData | null) => {
      console.log(data);
      // eslint-disable-next-line no-underscore-dangle
      if (data != null) (this.$refs.data as HTMLSpanElement).innerHTML = data.fMsg || 'error';
    }).catch((err: Error) => { console.log(err); });
  }
}
</script>

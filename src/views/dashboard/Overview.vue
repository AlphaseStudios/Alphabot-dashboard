<template>
  <div>
    <SideBar :categories="{'Main': ['adfassdadsasdassdasdasda', 'b', 'c', 'd', 'e', 'f', 'w'], 'If that name act fits imma eat a child': ['2', '3'], '3': ['t', 't']}" @active="logActive"></SideBar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue';

@Component({
  components: {
    SideBar,
  },
})
export default class Overview extends Vue {
  @Prop() private serverId: string | undefined;

  mounted (): void {
    /* console.log('serverId: ', this.serverId);
    feathersClient.service('guild').get(this.serverId, { test: 'testd' }).then((data: ServerData | null) => {
      console.log(data);
      // eslint-disable-next-line no-underscore-dangle
      if (data != null) (this.$refs.data as HTMLSpanElement).innerHTML = data.fMsg || 'error';
    }).catch((err: Error) => { console.log(err); }); */
  }

  logActive (obj: Record<string, number>): void {
    console.log(obj.category, obj.index);
  }
}
</script>

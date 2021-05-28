<template>
  <div>
    <Responsive :screen="['tablet', 'desktop']">
      <SideBar
        :categories="{
          Main: ['adfassdadsasdassdasdasda', 'b', 'c', 'd', 'e', 'f', 'w'],
          'If that name act fits imma eat a child': ['2', '3'],
          '3': ['t', 't'],
        }"
        @active="logActive"
      >
        <template v-slot:content>
          <Dashboard></Dashboard>
        </template>
      </SideBar>
    </Responsive>
    <Responsive :screen="['mobile']">
      <div class="text-2xl">Information:</div>
      Mobile dashboard is not supported yet.
    </Responsive>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue';
import Dashboard from '@/components/Dashboard.vue';
import Responsive from '@/components/Responsive.vue';

@Component({
  components: {
    SideBar,
    Dashboard,
    Responsive,
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

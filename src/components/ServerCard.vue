<template>
  <div>
    <div
      class="transition-all duration-300 border-gray-200 border-dashed bg-gray-300 border-2 rounded-2xl h-28 w-full flex flex-row cursor-pointer
      hover:border-gray-500 hover:bg-gray-600 hover:text-gray-200 text-gray-800 group"
    >
      <img
        ref="img"
        src="@/assets/discord-defaults/blurple.png"
        class="flex w-auto p-2 rounded-full"
      />
      <div class="flex w-full rounded-r-2xl flex-wrap content-center">
        <div class="grid grid-flow-col grid-cols-1 grid-rows-2">
          <div class="text-2xl"><slot name="server">&lt;slot v-slot:server&gt;</slot></div>
          <div class="text-md text-gray-600 transition duration-300 group-hover:text-gray-400"><slot name="description">&lt;slot v-slot:description&gt;</slot></div>
        </div>
      </div>
      <div class="flex flex-wrap content-center justify-end mr-4">
        <Button color="green-600" hoverColor="green-500" @click="onClickHandler">Go to dashboard</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class ServerCard extends Vue {
  @Prop({ required: true, default: '' }) private serverId: string | undefined;

  @Prop({ required: false }) private imgSrc: string | undefined;

  mounted (): void {
    console.log('prop: ', this.imgSrc);
    if (this.imgSrc) (this.$refs.img as HTMLImageElement).src = this.imgSrc;
  }

  onClickHandler (): void {
    console.log('click');
    this.$router.push({ name: 'dashboard overview', params: { serverId: this.serverId == null ? '' : this.serverId } });
  }
}
</script>

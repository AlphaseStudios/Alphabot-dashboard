<template>
  <div>
    My servers
    <BasicCard class="mt-3">
      <div>
        <ServerCard :class="index > 0 ? 'mt-2' : ''"
          imgSrc="../../discord-defaults/red.png"
          v-for="(item, index) of items"
          :key="index" :serverId="index"
        >
          <template v-slot:img
            ><img src="@/assets/discord-white.svg"
          /></template>
          <template v-slot:server>{{ item.name }}</template>
          <template v-slot:description>{{ item.description }}</template>
        </ServerCard>
      </div>
    </BasicCard>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import ServerCard from '@/components/ServerCard.vue';
import BasicCard from '@/components/BasicCard.vue';
import Vue from 'vue';

@Component({
  components: {
    ServerCard,
    BasicCard,
  },
})
export default class Server extends Vue {
  private item = '';

  private index = 0;

  private items = [{ name: 'hello', description: 'world' }, { name: '2', description: '2' }, { name: 'three', description: '3' }];
}
</script>

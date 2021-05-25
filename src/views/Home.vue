<template>
  <div>
    <p class="text-5xl font-medium mt-2 mb-8">Component showcase</p>
    <div>
      <div class="text-3xl">Buttons</div>
      <div class="text-gray-600 text-lg mb-3">
        Below you can see the different button styles used on this site.
      </div>
      <ul class="space-y-8">
        <li>
          <Button>Hover</Button>
          <div class="bg-gray-800 text-white p-3 rounded mt-3 mb-3">
            &lt;Button&gt;...&lt;/Button&gt;
          </div>
        </li>
        <li>
          <Button :scaleAnim="true">Hover + Scale</Button>
          <div class="bg-gray-800 text-white p-3 rounded mt-3 mb-3">
            &lt;Button :scaleAnim="true"&gt;...&lt;/Button&gt;
          </div>
        </li>
        <li>
          <Button width="full">Full width</Button>
          <div class="bg-gray-800 text-white p-3 rounded mt-3 mb-3">
            &lt;Button width="full"&gt;...&lt;/Button&gt;
          </div>
          <div class="text-gray-500">
            Also works with other widths. (like 50)
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-16">
      <div class="text-3xl">Cards</div>
      <div class="text-xl mb-3">Those are the current available card styles:</div>
      <Card>
        <template v-slot:title>Elias Val</template>
        <template v-slot:subtitle>Sr. software engineer at Alphase</template>
        <template
          >One of our team members, Elias Val, age 15, is a Sr. software
          developer at the small game studio called Alphase. He helped make the
          well-known bot Alphabot!</template
        >
        <template v-slot:footer>I am a neet footer</template>
      </Card>
    </div>
    <div>4</div>
    <div>5</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Button,
    Card,
  },
})
export default class Home extends Vue { }
</script>

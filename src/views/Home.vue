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
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button,
  },
})
export default class Home extends Vue { }
</script>

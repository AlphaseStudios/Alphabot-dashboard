<template>
  <div id="app">
    <MainContainer>
      <router-view />
    </MainContainer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import MainContainer from './components/containers/MainContainer.vue';

@Component({
  components: {
    MainContainer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Poppins;
  color: #2c3e50;
}
</style>

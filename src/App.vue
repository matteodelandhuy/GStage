<template>
  <div id="app">
    
    <app-accueil></app-accueil>
    <app-form></app-form>
    

  </div>
</template>

<script>
import Vue from 'vue';

import Accueil from './components/Accueil.vue';
import Form from './components/Form.vue'


export default {
  name: 'App',
  components: {
    appAccueil: Accueil,
    appForm: Form
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

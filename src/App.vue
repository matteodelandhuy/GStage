<template>
 <div class="container">
  <div class="page">
    <h2><span>Formulaire</span></h2>
    <form id="dynform" method="POST" class="panel-body form-horizontal" v-on:submit.prevent="displayForm">
      <div class="row">
        <div class="col-md-12 ">
          <form-question v-for="question in questions" :question="question" :key="question.id"></form-question>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Soumettre</button>
    </form>
  </div>
</div>
</template>

<script>
import Formulaire from './components/Formulaire.js'


export default {
  name: 'App',
  components: {
    Formulaire
  }
}
</script>


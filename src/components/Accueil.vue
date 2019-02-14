<template>

<div id="example-1">
  <h1>GStage</h1>

  <table>
    <tbody>
        <tr>
            <td id="first">{{ FirstOnglet }}</td>
            <td id="second">{{ SecondOnglet }}</td>
            <td id="third">{{ ThirdOnglet }}</td>
        </tr>
    </tbody>
  </table>


</div>


 
 


</template>

<script>
import Vue from 'vue';




export default {
  name: 'app-accueil',
  data () {
    return {
      FirstOnglet: 'Mon compte',
      SecondOnglet: 'Soumettre un formulaire',
      ThirdOnglet: 'Espace communautaire',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table{
  width: 100%;
  height: 400px;;
  margin-top: 200px; 
  border-width: 10px;
}

td{
 font-size: 50px;
 color:white;
 font-style: italic;
 background-color: black

}

td:hover {
  background-color: gold;
}

h1{
  font-size: 80px;
}
</style>

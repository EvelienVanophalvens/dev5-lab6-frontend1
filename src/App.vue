<script setup>
import Scores from './components/Scores.vue'



</script>

<template>
  <div id="teams">
    <div id="teamA">
      <Scores teamName="team1"/>
      </div>
    <div id="teamB">
      <Scores teamName="team2"/>
    </div>
  </div>
</template>

<style scoped>
  #teams {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  #teamsA {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  #teamsB {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>

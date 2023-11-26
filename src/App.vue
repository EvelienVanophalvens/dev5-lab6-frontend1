<script setup>
import Scores from './components/Scores.vue'
import Socket from './components/Websocket.js'



</script>

<template>
  <div id="teams">
    <div id="teamA">
      <Scores teamName="team1" :socket="Socket"/>
      </div>
    <div id="teamB">
      <Scores teamName="team2" :socket="Socket"/>
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

<script setup>
import Scores from './components/Scores.vue'
import socket from './components/Websocket.js';

</script>

<template>
  <div id="teams">
    <div id="teamA">
      <Scores teamName="team1" :socket="socket"/>
      </div>
    <div id="teamB">
      <Scores teamName="team2" :socket="socket"/>
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

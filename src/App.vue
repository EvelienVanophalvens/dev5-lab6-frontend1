<script setup>
import Scores from './components/Scores.vue'

</script>

<template>
  <div id="teams">
    <div id="teamA">
      <Scores teamName="Team A"/>
      </div>
    <div id="teamB">
      <Scores teamName="Team B" />
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

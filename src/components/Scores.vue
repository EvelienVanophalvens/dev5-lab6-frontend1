<script setup>
import DropdownTeam from './DropdownTeam.vue';
import { ref, onMounted } from 'vue';



//teamName

const props = defineProps(['teamName', 'socket']);

console.log(props.socket);

const parentSelectedTeam = ref('');

const updateTeam = (value, teamName) => {
  if (teamName === props.teamName && parentSelectedTeam.value !== value) {
    parentSelectedTeam.value = value;
    console.log(`update team for ${props.teamName}: ${parentSelectedTeam.value}`);
    let team = {
      teamName: props.teamName,
      selectedTeam: parentSelectedTeam.value
    };
    props.socket.send(JSON.stringify(team));
  }
};


const points = ref(0);

onMounted(() => {
    //points
    const addBtn = document.querySelector(`.${props.teamName.toLowerCase()} .btn #addPoint`);

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            points.value += 1;
            let point = {
                teamName: props.teamName,
                points: points.value
            };
            props.socket.send(JSON.stringify(point));
            
        });
    }

    const addPenaltyBtn = document.querySelector(`.${props.teamName.toLowerCase()} .btn #addPenalty`);
    if (addPenaltyBtn) {
        addPenaltyBtn.addEventListener('click', () => {
            points.value -= 1;
            let point = {
                teamName: props.teamName,
                points: points.value
            };
            props.socket.send(JSON.stringify(point));
        });
    }

    const timeOutBtn = document.querySelector(`.${props.teamName.toLowerCase()} #timeOut`);
    const timeout = document.querySelector(`.${props.teamName.toLowerCase()} .timeout`);
    if (timeOutBtn) {
    timeOutBtn.addEventListener('click', () => {
        // Set the initial value when the button is clicked
        timeout.innerHTML = 'timeout';
        let timeOut = {
            teamName: props.teamName,
            timeout: true
        };
        props.socket.send(JSON.stringify(timeOut));
        // Reset the innerHTML to an empty string after 30 seconds
        setTimeout(() => {
            timeout.innerHTML = '';
            let timeOut = {
                teamName: props.teamName,
                timeout: false
            };
        props.socket.send(JSON.stringify(timeOut));
        }, 30000);
    });

}
});



</script>

<template>
    <div :class="teamName">
    <p>{{teamName}}</p>
    <DropdownTeam  @update:modelValue="value => updateTeam(value, teamName)"/>
    </div>
    <div :class="teamName" class="info" >
        <div >
            <div class="btn">
                <p> Add point</p>
                <button class="add" id="addPoint">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </div>
            <div class="btn">
                <p> Add Penalty Point</p>
                <button class="add" id="addPenalty">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>
        </div>
        <div class="btn">
            <p>Timeout</p>
            <div class="add" id="timeOut">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
            </div>
        </div>
        <div>
            <div class="points">
                <p>{{points}}</p>
            </div>
        </div>
        <div class="timeout"></div>
    </div>
</template>

<style scoped>
    .add {
        display: flex;
        border: 1px solid black;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
        margin: 5px;
        font-size: 40px;
    }
    .points {
        display: flex;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
        margin: 5px;
        font-size: 90px;
    }
    .btn p{
        margin: 0;
    }

    .btn {
        margin: 32px;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .timeout {
        display: flex;
        width: 100px;
        height: 50px;
        align-items: center;
        justify-content: center;
        margin: 20px;
        font-size: 40px;
    }

</style>

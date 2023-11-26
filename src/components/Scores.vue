<script setup>
import DropdownTeam from './DropdownTeam.vue';

</script>

<template>
    <div>
    <DropdownTeam />
    </div>
    <div>
        <div>
            <p> Add point</p>
            <div class="add">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
        </div>
        <div>
            <p> Add Penalty Point</p>
            <div class="add">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
            </div>
        </div>
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
</style>

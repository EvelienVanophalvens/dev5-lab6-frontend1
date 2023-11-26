<script setup>

</script>

<template>
    <div class="dropdown">
    <label for="teams" id="label">Team:</label>
    <select name="teams" id="teams">
    <option value="wolvertem">Wolvertem Sporting</option>
    <option value="meiseA">VC Knodde Meise A</option>
    <option value="meiseB">VC Knodde Meise B</option>
    <option value="gooik">Govok Cammaert Gooik B</option>
    <option value="lennik">VC lennik Dames C</option>
    <option value="hofstadeZemst">HZ 93 Hofstade-Zemst C</option>
    <option value="opwijk">Volley Opwijk B</option>
    <option value="halle">KLB Sonnenbeemd Halle</option>
    <option value="zaventem">v.c. Zavath Zaventem A</option>
    <option value="lot">Davoc Lot</option>
    <option value="machelen">VBT Machelen B</option>
    </select>
        
    </div>
</template>

<style scoped>
    .dropdown {
        display: flex;
        flex-direction: column;
        width: 500px;
    }
    
    #label {
        font-size: 20px;
        margin: 10px;
    }
    #teams {
        font-size: 20px;
        margin: 10px;
    }
</style>

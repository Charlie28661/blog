<script setup>
import config from '../config.js'
</script>


<template>
    <hr class="decorLine">
    <div class="copy">
        &copy; 2025 {{ config.username }} All Rights Reserved.
    </div>
</template>

<style scoped>
    .decorLine {
        width: 60%;
        height: 2px;
        background-color: #ccc;
        border: none;
        margin: 10px auto;
        margin-top: 50px;
    }

    .copy{
        text-align: center;
        margin-top: 30px;
        margin-bottom: 15px;
        color: #ccc;
    }
    
</style>
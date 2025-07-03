<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const segments = computed(() =>
route.path.split('/').filter(Boolean))

const formattedPath = computed(() =>
segments.value
    .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join(' > ')
)
</script>


<template>
    <div class="container">
        <div v-if="segments.length">
            <router-link to="/" class="home-link">Home</router-link>
            <span> > {{ formattedPath }}</span>
        </div>
    </div>
</template>

<style scoped>
    .container{
        margin: auto;
        margin-top: 30px;
        width: 70%;
    }

    .home-link {
        color: rgb(70, 126, 193);
    }

    .url-link{
        color: grey;
    }
</style>
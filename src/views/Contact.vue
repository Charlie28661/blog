<script setup>
import { ref, onMounted } from 'vue'

const Contact = ref(null)

onMounted(async () => {
    try {
        const res = await fetch('/data/Contact.json')
        Contact.value = await res.json()
    } catch (err) {
        console.error('載入失敗', err)
    }
})
</script>

<template>
    <div class="container">
        <h1>Building</h1>
    </div>
</template>

<style scoped>
    .container{
        margin: auto;
        width: 80%;
        margin-top: 40px;
    }
</style>
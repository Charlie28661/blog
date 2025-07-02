<script setup>
import { ref, onMounted } from 'vue'
import config from '../config.js'

const Contact = ref(null)

onMounted(async () => {
try {
    const res = await fetch('/data/Contact.json')
    Contact.value = await res.json()
} catch (err) {
    console.error('載入失敗', err)
}
})

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav>
        <div class="navName">
            <RouterLink to="/">{{ config.username }}`s Blog</RouterLink>
        </div>
        <div class="hamburger" @click="toggleMenu">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="navSelector" :class="{ open: isMenuOpen }">
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/links">Links</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </nav>
    <hr class="decorLine">

</template>

<style scoped>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 18px;
        background-color: #2b2b2b;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .navName{
        font-size: 18px;
        font-weight: bold;
    }

    .navSelector{
        display: flex;
        gap: 30px;
        font-size: 16px;
    }

    .navSelector a::after{
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: white;
        transition: .4s;
    }
    
    .navSelector a:hover::after{
        width: 100%;
    }

    .navSelector .router-link-active::after {
        width: 100%;
    }

    .decorLine {
        width: 95%;
        height: 2px;
        background-color: rgb(61, 67, 73);
        border: none;
        margin-top: -5px;
    }


    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        gap: 6px;
    }

    .hamburger div {
        width: 25px;
        height: 3px;
        background-color: white;
    }


    @media (max-width: 768px) {

        .hamburger {
            display: flex;
        }

        .navSelector {
            position: absolute;
            top: 60px;
            right: 0;
            background-color: #2b2b2b;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            display: none;
            padding: 10px 20px;
            box-sizing: border-box;
            word-break: break-word;
        }

        .navSelector.open {
            display: flex;
        }
    }
</style>
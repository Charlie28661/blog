<script setup>
import { ref, onMounted } from 'vue'

const Links = ref(null)
const Friends = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/data/Links.json')
    Links.value = await res.json()
  } catch (err) {
    console.error('載入失敗', err)
  }

  try {
    const res = await fetch('/data/Friends.json')
    Friends.value = await res.json()
  } catch (err) {
    console.error('載入失敗', err)
  }
})
</script>

<template>
    <div class="friendsSection">
        <h1>Friends Links</h1>
        <div class="friendsContainer" v-for="friendsDatas in Friends">  
            <a :href="friendsDatas.website" class="friendsLink" target="_blank">
                <img :src="friendsDatas.img" :alt="friendsDatas.name" class="friendsImgs">
                <div class="friendsTextGroup">
                    <div class="friendsName">{{ friendsDatas.name }}</div>
                    <div class="friendsDescription">{{ friendsDatas.description }}</div>
                </div>
            </a>
        </div>

    </div>
</template>

<style scoped>

    .friendsSection{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .friendsImgs{
        height: 70px;
        width: 70px;
        border-radius: 40px;
        margin-left: 10px;
        border: 2px solid #4fc3f7;
    }

    .friendsContainer {
        background-color: rgb(67, 71, 76);
        width: 300px;
        height: 90px;
        border-radius: 10px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin: 10px;
        border-left: 3px solid #4fc3f7;
        border-right: 3px solid #4fc3f7;
    }

    .friendsName {
        font-size: 18px;
    }

    .friendsLink {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
    }

    .friendsContainer:hover {
        transform: scale(1.03);
        box-shadow: 0 0 10px rgba(0, 188, 212, 0.5);
        transition: 0.3s;
    }

    .friendsDescription{
        margin-top: 5px;
        color: rgb(220, 220, 220);
        font-size: 16px;
    }

    .friendsTextGroup{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-left: 15px;
        margin-top: -15px;
    }
</style>
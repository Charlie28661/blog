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
    <div class="contactSection">
        <h1>Contact Me</h1>
        <div class="contactContainer" v-for="contactDatas in Contact">  
            <a :href="contactDatas.link" class="contactLink" target="_blank">
                <img :src="contactDatas.img" :alt="contactDatas.name" class="contactImgs">
                <div class="contactTextGroup">
                    <div class="contactName">{{ contactDatas.platform }}</div>
                    <div class="contactDescription">{{ contactDatas.account }}</div>
                </div>
            </a>
        </div>

    </div>
</template>

<style scoped>

    .contactSection{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contactImgs{
        height: 70px;
        width: 70px;
        border-radius: 40px;
        margin-left: 10px;
        border: 2px solid #4fc3f7;
    }

    .contactContainer {
        background-color: rgb(67, 71, 76);
        width: 300px;
        height: 90px;
        border-radius: 10px;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin: 10px;
        border-left: 3px solid #4fc3f7;
        border-right: 3px solid #4fc3f7;
    }

    .contactName {
        font-size: 18px;
    }

    .contactLink {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
    }

    .contactContainer:hover {
        transform: scale(1.03);
        box-shadow: 0 0 10px rgba(0, 188, 212, 0.5);
        transition: 0.3s;
    }

    .contactDescription{
        margin-top: 5px;
        color: rgb(220, 220, 220);
        font-size: 16px;
    }

    .contactTextGroup{
        display: flex;
        flex-direction: column;
        overflow: hidden;
        margin-left: 15px;
        margin-top: -15px;
    }
</style>
<script setup>
import { ref, onMounted } from 'vue'

const Project = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/data/Projects.json')
    Project.value = await res.json()
  } catch (err) {
    console.error('載入失敗', err)
  }
})
</script>

<template>
    <div class="container">
        <div class="grid-container">
            <div v-for="project in Project" :key="project.title" class="card">
            <div class="image-container">
                <img :src="project.image" :alt="project.title" />
            </div>
            <div class="card-content">
                <h2>{{ project.title }}</h2>
                <div class="tags">
                <span v-for="tag in project.tags" :key="tag" class="tag"># {{ tag }}</span>
                </div>
                <p class="desc">{{ project.description }}</p>
                <a :href="project.githubLink"><button class="demo-btn">View on Github</button></a>
            </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
    .container{
        margin: auto;
        width: 70%;
        margin-top: 40px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
    }

    .card {
        background-color: rgb(67, 71, 76);
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .image-container {
        padding: 1rem;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.75rem;
    }

    .card-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex-grow: 1;
        margin-top: -50px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: -15px;
    }

    .tag {
        background-color: #2e7d32;
        font-size: 0.8rem;
        padding: 0.2rem 0.6rem;
        border-radius: 999px;
    }

    .desc {
        font-size: 1rem;
        line-height: 1.4;
        color: #ccc;
        margin-top: 3px;
    }

    .demo-btn {
        align-self: flex-start;
        background-color: #666;
        color: white;
        padding: 0.4rem 1rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 0.9rem;
        cursor: pointer;
        transition: background 0.3s;
        margin-top: -5px;
    }

    .demo-btn:hover {
        background-color: white;
        color: black;
    }
</style>
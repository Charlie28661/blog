<script setup>
import { ref, onMounted } from 'vue'

const About = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/data/About.json')
    About.value = await res.json()
  } catch (err) {
    console.error('載入失敗', err)
  }
})
</script>

<template>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    
    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">school</span>&nbsp;&nbsp;Educational Background</b>
        <div v-for="datas in About">
            <div v-for="edu in datas.educationalBackground">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ edu.school }} </div>
                    <div class="cvTime"> {{ edu.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ edu.department }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">groups</span>&nbsp;&nbsp;Work Experience</b>
        <div v-for="datas in About">
            <div v-for="work in datas.workExperience">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.department }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.company }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">badge</span>&nbsp;&nbsp;Professional Roles</b>
        <div v-for="datas in About">
            <div v-for="work in datas.professionalRoles">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.team }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.role }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">library_books</span>&nbsp;&nbsp;Specialized Training</b>
        <div v-for="datas in About">
            <div v-for="work in datas.specializedTraining">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.course }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.team }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">workspace_premium</span>&nbsp;&nbsp;Competitive Achievements</b>
        <div v-for="datas in About">
            <div v-for="work in datas.competitiveAchievements">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.competitive }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.reward }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">license</span>&nbsp;&nbsp;Specialized Certificates</b>
        <div v-for="datas in About">
            <div v-for="work in datas.specializedCertificates">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.certificate }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.level }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">co_present</span>&nbsp;&nbsp;Lecturing Experience</b>
        <div v-for="datas in About">
            <div v-for="work in datas.lecturingExperience">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.course }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.role }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">record_voice_over</span>&nbsp;&nbsp;Public Speaking Experience</b>
        <div v-for="datas in About">
            <div v-for="work in datas.publicSpeakingExperience">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle">主題：「{{ work.subject }}」</div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.loc }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">handshake</span>&nbsp;&nbsp;Community Contribution</b>
        <div v-for="datas in About">
            <div v-for="work in datas.communityContribution">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.activity }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.role }} </div>
                </div>
                </div>
            </div>
        </div>
        <hr class="decorLine">
    </div>

    <div class="container">
        <b class="sectionText"><span class="material-symbols-outlined">menu_open</span>&nbsp;&nbsp;Other Experience</b>
        <div v-for="datas in About">
            <div v-for="work in datas.otherExperience">
                <div class="row">
                    <div class="subSection">
                    <div class="cvTitle"> {{ work.activity }} </div>
                    <div class="cvTime"> {{ work.time }} </div>
                </div>
                <div class="subSection">
                    <div class="cvSubTitle"> {{ work.role }} </div>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .material-symbols-outlined {
        font-size: 30px;
        color: rgb(70, 126, 193);
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 200,
        'opsz' 24
    }

    .container{
        margin: auto;
        width: 70%;
        margin-top: 40px;
    }

    .sectionText{
        font-size: 26px;
    }

    .cvTitle{
        font-size: 22px;
    }

    .cvSubTitle{
        font-size: 18px;
        color: rgb(220, 220, 220);
    }

    .cvTime{
        font-size: 18px;
        margin-top: 10px;
        color: rgb(220, 220, 220);
    }

    .subSection{
        display: flex;
        justify-content: space-between;
    }

    .row{
        margin-top: 20px;
    }

    .decorLine {
        width: 100%;
        height: 2px;
        background-color: rgb(61, 67, 73);
        border: none;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        
        .subSection{
            display: grid;
        }

        .container{
            width: 80%;
        }

        .sectionText{
            font-size: 20px;
        }

        .cvTitle{
            font-size: 18px;
        }

        .cvSubTitle{
            font-size: 16px;
        }
        
        .cvTime{
            font-size: 12px;
        }

    }
</style>
<template>
    <div class="template1">
        <div class="main-image"><img :src="projectimagemain"></div> <!-- <img src="@/assets/display-template.png"> -->
        <h1 class="project-name">{{currentRouteName}}</h1>
        <p class="project-description">{{projectdescription}}</p>
        <div class="project-documentation">
            <div id="column1">
                <!-- <div class="placeholder"><img src="@/assets/placeholder.png"></div>
                <div class="placeholder"><img src="@/assets/placeholder.png"></div> -->
            </div>
            <div id="column2">
            </div>
        </div>
    </div>
</template>

<script>
import json from "../assets/project-info.json"

export default{
    name: "template1",
    computed: {
        currentRouteName(){
            return this.$route.name;
        }
    },
    mounted() {
        console.log(json);
        const obj = JSON.stringify(json)
        const data = JSON.parse(obj)
        const currentRouteName = this.$route.name;

        for(var i = 0; i<data.length;i++){
            // console.log("Hello this is loop number  " + i + " and the title is " + data[i].projecttitle)
            if(data[i].projecttitle == currentRouteName){
                // console.log("Im matching " + data[i].projectdescription);
                this.projectdescription = data[i].projectdescription;
                this.projectimagemain = data[i].projectimagemain; 
            }
        }
    },
    data() {
        return{
            projectdescription: '',
            projectimagemain: ''
        }
    }
}

</script>


<style scoped>
.main-image{
    width: 100%;
    margin: 0 auto;
}
.project-name{
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #587485;
  margin-top: -4rem;
  margin-left: 2rem;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  width: 100%;
}
.project-description{
    letter-spacing: 0.1rem;
    line-height: 2rem;
}
.project-documentation{
    width: 100%;
    display: flex;
    margin-top: 4rem;
}

#column1, #column2{
    width: 50%;
}
.placeholder{
    width: 90%;
    margin-bottom: 3rem;
}

</style>
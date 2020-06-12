<template>
    <div rel="preload" class="template1">
        <h1 class="project-name">{{currentRouteName}}</h1>
        <div class="main-image"><img :src="projectimagemain"></div> <!-- <img src="@/assets/display-template.png"> -->
        <p class="project-description">{{projectdescription}}</p>
        <div class="project-documentation">
            <div class="placeholder"><img :src="image1"></div>
            <div class="placeholder"><img :src="image2"></div>
            <div class="placeholder"><img :src="image3"></div>  
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
                this.image1 = data[i].image1; 
                this.image2 = data[i].image2; 
                this.image3 = data[i].image3; 
                this.image4 = data[i].image4; 
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
    margin-bottom: 2rem;
}
.template1{
    margin-top: 3rem
}

.project-name{
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #587485;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-left: 2rem;
  z-index: 50;
  position: absolute;
  margin-top: -4rem;
}
.project-description{
    letter-spacing: 0.1rem;
    line-height: 2rem;
}
.project-documentation{
    width: 100%;
    display: block;
    margin-top: 4rem;
}
.placeholder{
    margin-bottom: 4rem;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

      .project-name{
          font-size: 1rem;
          text-align: left;
          line-height: 3.5rem;
          margin-left: 0;
          width: 100%;
          margin-top: 2.5rem;
          text-align: center;

      }
  
  .placeholder{
      margin-bottom: 2rem;
  }
  }

</style>
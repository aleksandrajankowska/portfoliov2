<template>
<div id="container">
    <div class="template2">
        <h1 class="project-name">{{currentRouteName}}</h1>
        <div rel="preload" class="landing">
            <div class="main-image"><img :src="projectimagemain"></div>
            <p class="project-description">{{projectdescription}}</p>
        </div>
        <div class="project-documentation">
            <div class="placeholder"><img :src="image1"></div>
            <div class="placeholder" style="float: right"><img :src="image2"></div>
            <div class="placeholder" style="float: right"><img :src="image4"></div>
            <div class="placeholder"><img :src="image3"></div>
        </div>
    </div>
</div>
</template>

<script>
import json from "../assets/project-info.json"

export default{
    name: "template2",
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
            projectimagemain: '',
            image1: ''
        }
    }
}
</script>


<style scoped>
.template1{
    width: 85rem;
    margin: 0 auto;
}
.landing{
    display: flex;
    z-index: -1;
    margin-top: 4rem;
}
.main-image{
    width: 45%;
    height: auto;
}
.project-name{
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #587485;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-top: -4rem;
  margin-left: 2rem;
  z-index: 50;
  position: absolute;
}
.project-description{
    letter-spacing: 0.1rem;
    line-height: 2rem;
    width: 50%;
    margin-top: 10rem;
    margin-left: 3rem;
}
.project-documentation{
    width: 100%;
    display: block;
    margin-top: 4rem;
    /* margin-bottom: 4rem; */
}

.placeholder{
    display: inline-block;
    margin-bottom: 4rem;
}

.placeholder img{
    width: 36rem;
    height: auto;
}


@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

      .landing{
          display: block;
      }

      .project-name{
          font-size: 2rem;
          text-align: left;
          line-height: 3.5rem;
          margin-left: 0;
          width: 100%;
          margin-top: 1.5rem;
          text-align: center;
      }

      .project-description{
          margin-top: 2rem;
          width: 100%;
          margin-left: 0;
          display: block;
          font-size: 0.8rem;
      }

      .main-image{
          display: block;
          width: 100%;
      }

      .project-documentation{
          display: block;
      }

      .placeholder{
          margin-bottom: 2rem;
      }

}

/* .placeholder:hover img{
    transform: scale(2);
} */


</style>
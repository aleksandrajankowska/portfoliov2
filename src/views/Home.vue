<template>
  <div class="container">
    <app-header></app-header>
    <div rel="preload" class="home">

      <div class="row">
        <div class="column">
          <router-link to="/project-frenzy"><img src="@/assets/display-photos/project-frenzy.png" alt="Project Frenzy"></router-link>
          <div class="text">
            <router-link to="/project-frenzy"><h2 class="project-title">PROJECT<br>FRENZY</h2></router-link>
          </div>
        </div>
        
        <div class="column">
          <router-link to="/taco-i-dawid"><img src="@/assets/display-photos/taco-i-dawid.png" alt="Taco I Dawid"></router-link>
          <div class="text">
            <router-link to="/taco-i-dawid"><h2 class="project-title">TACO I<br>DAWID</h2></router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
           <router-link to="/wybory-parlamentarne-2019"><img src="@/assets/display-photos/wybory.png" alt="Wybory"></router-link>
           <div class="text">
            <router-link to="/wybory-parlamentarne-2019"><h2 class="project-title"><br>WYBORY</h2></router-link>
          </div>
        </div>
        <div class="column">
          <router-link to="/nova"><img src="@/assets/display-photos/nova.png" alt="Nova"></router-link>
          <div class="text">
            <router-link to="/nova"><h2 class="project-title"><br>NOVA</h2></router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <router-link to="/dragon-aio"><img src="@/assets/display-photos/dragon.png" alt="Dragon"></router-link>
          <div class="text">
             <router-link to="/dragon-aio"><h2 class="project-title">DRAGON<br>AIO</h2></router-link>
          </div>
        </div>
        <div class="column">
           <router-link to="/project-indsutries"><img src="@/assets/display-photos/project-industries.png" alt="Project Indsutries"></router-link>
          <div class="text">
             <router-link to="/project-industries"><h2 class="project-title">PROJECT<br>INDUSTRIES</h2></router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // import json from '@/assets/project-info.json'
  // console.log(json);
  // export default{
  //   data(){
  //     return{
  //       myJson: json
  //     }
  //   }
  // }
import Header from "@/components/Header.vue"

export default {
  name: 'home',
  title: 'Foo Page',
  components: {
    'app-header': Header
  }
}


</script>
<style>
@import "../assets/main-style.scss";
.home{
  margin: 0 auto;
  max-width: 110rem;
  margin-bottom: 4rem;
  /* margin-top: 4rem; */

}
/* Container for flexboxes */

.row {
  display: flex;
  width: 100%;
  margin-top: -0.5rem;
}

.text{
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  margin-top: -13.8rem;
}

.project-title{
  font-size: 7rem;
  line-height: 7rem;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #587485;
  bottom: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

/* Create four equal columns */
img{
  max-width: 100%;
  max-height: 50rem;
  transition: .5s ease;
  /* outline: 1px solid #ACCCCF; */
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

    .row{
      display: block;
      margin-top: 0;
    }

}

@media only screen and (min-width: 1370px)  { 

  .column:hover .text{
    opacity: 1;
  }

  .column:hover img{
    opacity: 0.3;
  }
    

}


</style>

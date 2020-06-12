<template>
<div class="container">
  <div rel="preload" class="about">
    <h1 class="project-name">HI, I'M OLA.</h1>
    <img id="me" src="@/assets/ola.png" alt="Ola Picture">
    <p class="project-description">Hi, and welcome to my portfolio. My name is Aleksandra (or Ola) Jankowska and I'm a Front End Developer and a Digital Designer. I was born in Warsaw, Poland and am currently living in New York, USA. I graduated the Parsons School of Design with a degree in Design & Technology, as well as two minors; Communication Design and Creative Entrepreneurship. My designs aim to create a seamless yet entertaining experience for the user. I believe that the only way to grow is to learn.<br><br>Feel free to look through my resume <a href="https://drive.google.com/file/d/1J7ZdV4d-yAqAwIgddnXuTo8lLwMXUAI-/view?usp=sharing" target="_blank">here.</a></p>
  </div>
</div>
</template>
<script>

</script>

<style scoped>
.about{
  display: flex;
  width: 100%;
  padding-bottom: 4rem;
}
#me{
  width: 30rem;
  height: 30rem;
}
.project-name{
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #587485;
  margin-left: 2rem;
  font-size: 5rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  position: absolute;
  margin-top: 26rem;
}
.project-description{
    letter-spacing: 0.1rem;
    line-height: 2rem;
    margin-top:5rem;
}

.project-description a{
  font-weight: 700;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

    .about, #me{
      display: block;
    }

    #me{
      width: 100%;
      height: auto;
    }
    
    .project-name{
      font-size: 3rem;
      width: 100%;
      margin-left: 0;
      position: absolute;
    }

    .project-description{
      margin-top: 5rem;
      display: block;
    }
  }
</style>

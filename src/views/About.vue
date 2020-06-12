<template>
<div class="container">
  <div class="about">
    <img id="me" src="@/assets/ola.png">
    <p class="project-description">Hi, and welcome to my portfolio. My name is Aleksandra (or Ola) Jankowska and I'm a Front End Developer and a Digital Designer. I was born in Warsaw, Poland and am currently living in New York, USA. I graduated the Parsons School of Design with a degree in Design & Technology, as well as two minors; Communication Design and Creative Entrepreneurship. My designs aim to create a seamless yet entertaining experience for the user. I believe that the only way to grow is to learn.<br><br>Feel free to look through my resume <a href="https://drive.google.com/file/d/1J7ZdV4d-yAqAwIgddnXuTo8lLwMXUAI-/view?usp=sharing" target="_blank">here.</a></p>
  </div>
  <h1 class="project-name">HI, I'M OLA.</h1>
</div>
</template>
<script>

</script>

<style scoped>
.about{
  display: flex;
  width: 100%;
}
#me{
  width: 30rem;
  height: 30rem;
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
}
.project-description{
    letter-spacing: 0.1rem;
    line-height: 2rem;
    margin-top:5rem;
}

.project-description a{
  font-weight: 700;
}
</style>

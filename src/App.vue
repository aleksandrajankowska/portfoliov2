<template>
    <div id="app">
      <div id="nav">
        <router-link to="/"><p>OLA JANKOWSKA</p></router-link>
            <ul>
                <router-link to="/"><li>WORK</li></router-link>
                <router-link to="/about"><li>ABOUT</li></router-link>
            </ul>
      </div>
      <router-view />
      <div id="footer">
        <div id="text">
          <div id="line"></div>
          <br>
          <p>Come say hi.</p>
          <ul id="socials">
            <li><a href="mailto:aleksandra.jankowska42@gmail.com"><img src="@/assets/mail.png" alt="Mail Me"></a></li>
            <li><a href="https://github.com/aleksandrajankowska" target="_blank"><img src="@/assets/github.png" alt="Github"></a></li>
            <li><a href="https://www.linkedin.com/in/aleksandra-jankowska-28a3bb126/?locale=en_US" target="_blank"><img src="@/assets/linked.png" alt="LinkedIn"></a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style>
#app{
  margin: 0 auto;
  width: 88%;
  /* outline: 2px solid blue; */
}
li, a, p {
    text-decoration: none;
    color: #587485;
}
html, body, ul{
  body: 0;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  color: #587485;
}
 #nav{
        display: inline-block;
        font-size: 1rem;
        margin: 0 auto;
        width: 100%;
        padding-top: 2rem;
        margin-bottom: 2rem;
        letter-spacing: 0.3rem;
    }
    p{
        display: inline;
    }
    li{
        display: inline-block;
        margin-left:3rem;
    }
    ul, li{
        text-decoration: none;
        list-style: none;
    }
    ul{
        float:right;
    }
  #line{
    outline: 1px solid #587485;
    width: 100%;
    border-radius: 50%;
  }
  #socials{
    display: inline-block;
  }
  #footer{
    display: block;
    width: 100%;
    height: 5rem;
    position: relative;
  }
  #socials img{
    width: 2rem;
    height:auto;
    display: flex;
    /* outline: 2px solid red; */
  }

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 
  
  #footer{
  }

  #socials li{
    margin-left: 1rem;
  }

  #nav, #nav li, #nav ul, #nav p{
    display: block;
    text-align: center;
    width: 100%;
    margin-left: 0;
    margin-bottom: 1rem;
  }
  
  }
</style>

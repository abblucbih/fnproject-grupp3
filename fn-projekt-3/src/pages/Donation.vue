<template>
  <div id="js-view">
    <video autoplay loop playsinline muted id="myVideo">
      <source src="https://github.com/abbguslof/MazeGame/raw/main/images/VideoForFn.mp4" type="video/mp4">
    </video>
        <div class="donationSite">
          <div class="donation_images">
              <div onclick="location.href='https://oceana.org/';" class="donationFlex"><img id="oceanaimg" src="..\assets\oceana2.jpg"/><p class="donationText"><strong>Oceana</strong><br>Restoring the ocean could feed 1 hihi haha brrrrrrr<br> billion people a healthy seafood hej ho var produktiv <br>meal every day ett äppla om dagen håller doktorn borta<br>Vi tar 10%!<br></p>
              </div>
              <div onclick="location.href='https://saveourseas.com/'" class="donationFlex"><p class="donationText"><strong>Save our seas</strong><br> Bice Since 2003, the Save Our Seas icated<br> to protecting life in our oceans, especially sharks and rays.<br> We support passionate and innovative researchers<br>Vi kanske tar 10%</p><img id="saveourseasimg" src="..\assets\SaveOurSeas.jpg"/>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PageIndex'
  })
  </script>

<style scoped>
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -100;
    top: 0;
  }
.donation_images{
  cursor: pointer;
  opacity: 1;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: stretch;
  }

  #oceanaimg,
  #saveourseasimg{
    height: 45vh;
    width: 40vw;
    border-radius: 5px;
    background-size: cover;
  }

  .donationLink{
    color: #0000EE;
    text-decoration: underline;
  }

  .donationText{
    font-size:20px ;
    margin: 10px;
  }

  .donationSite{
    background-color: rgba(0,0,0,0);
    padding:1%;
    padding-top: 4rem;
  }

  .donationFlex{
    display:flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    transition: all .2s ease-in-out;
    padding:1%;
    border-radius: 10px;
    background-color:rgba(240,248,255,0.8)
  }

  .donationFlex:hover{
    transform: scale(1.01);
    background-color:rgba(240,248,255,0.9);
      box-shadow:
      0 0 15px 7.5px rgba(240,248,255, 0.5),
      0 0 25px 15px rgba(240,248,255, 0.3),
      0 0 35px 22.5px rgba(240,248,255, 0.2);
  }

  </style>

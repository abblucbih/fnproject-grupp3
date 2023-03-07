<template>
  <q-page class="flex flex-center">
    <section id="header" style="width: 100%; top: 0; ">
      <div class="overlay"></div>
      <video poster="oceanVideo.mp4" autoplay loop muted>
        <source type="video/mp4" src="https://github.com/abbguslof/MazeGame/raw/main/images/VideoForFn.mp4" />
      </video>

      <div class="postWindow">
        <div class="post">
          <!-- HEADER -->
          <div style="display: flex; justify-content: space-between;">
            <h3>Lorem, ipsum.</h3>
            <button><img src="https://cdn-icons-png.flaticon.com/512/1160/1160705.png" style="width: 100%;"></button>
          </div>
          <!-- CONTENT -->
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, maiores!</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis impedit harum officia corrupti hic
            consectetur, dolore eligendi atque reprehenderit, iste unde dolorem veritatis cum laboriosam!</p>
          <img src="S-T-O-ocean.jpg" style="width: 100%; object-fit: cover;">
        </div>

        <!-- RADBRYTARE -->
        <hr>

        <!-- MER POSTS -->

        <div class="post">
          <!-- HEADER -->
          <div style="display: flex; justify-content: space-between;">
            <h3>Lorem, ipsum.</h3>
            <button><img src="https://cdn-icons-png.flaticon.com/512/1160/1160705.png" style="width: 100%;"></button>
          </div>
          <!-- CONTENT -->
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, maiores!</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis impedit harum officia corrupti hic
            consectetur, dolore eligendi atque reprehenderit, iste unde dolorem veritatis cum laboriosam!</p>
          <img src="S-T-O-ocean.jpg" style="width: 100%; object-fit: cover;">
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Fish'
})
</script>


<style>
#header video {
  position: fixed;
  width: 100%;
  height: 100vh;
  margin-top: 0;
  object-fit: cover;
  z-index: -1;
}

#header {
  width: 100%;
  height: 100vh;
}

.main-page {
  height: 100vh;
  width: 100%;
  position: relative;
}

#main {
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
  position: relative;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right,
      rgba(34, 35, 46, 0.7),
      rgba(0, 194, 203, 0.3));
  z-index: 1;
}

#oceanVideo {
  position: fixed;
}

.postWindow {
  display: flex;
  gap: 1rem;
  margin-inline: auto;
  background-color: rgba(255, 255, 255, 0.75);
  outline: solid 2px #00e2b9;
  border-radius: .25rem;
  width: 70svw;
  min-height: 100svh;
  position: relative;
  z-index: 10;
  margin-block: 8svh;
  box-shadow: 0 -0rem 32px 0 rgba(0, 0, 0, 0.45);
}

.post {
  margin-inline: auto;
  background-color: rgba(255, 255, 255);
  outline: solid 2px #00e2b9;
  border-radius: .25rem;
  width: 50%;
  position: relative;
  z-index: 10;
  margin-bottom: 1.5rem;
  padding: 3rem;
  box-shadow: 0 -0rem 32px 0 rgba(0, 0, 0, 0.25);
}

.post h3 {
  margin-block: 0;
}

.post button {
  background-color: white;
  outline: solid 2px #00e2b9;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  width: 3rem;
  transition: 200ms;
}

.post button:hover {
  outline: solid 2px rgb(235, 235, 235);
  background-color: rgb(235, 235, 235);
}

.postWindow hr {
  border: 0;
  height: 2px;
  margin-bottom: 1.5rem;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0));
}

@media screen and (max-aspect-ratio: 3/4) {
  video {
    width: auto;
    height: 100%;
  }

  .postWindow {
    min-width: 80%;
  }

  .postWindow {
    padding: 0;
  }

  .post {
    padding: 2rem;
  }
}


@media screen and (max-aspect-ratio: 5/4) {

  .postWindow {
    padding: 0;
    display: block;
  }

  .post {
    padding: 2rem;
    width: 100%;
  }
}

@media screen and (min-aspect-ratio: 3/4) {
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  video {
    width: 100%;
    height: auto;
  }

  html {
    height: 100%;
  }

  .postWindow {
    min-width: 60%;
    padding: 2rem;
  }

  .post {
    padding: 3rem;
  }
}
</style>

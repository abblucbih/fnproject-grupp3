<template>
<q-page class="flex flex-center">
  <section id="header" style="width: 100%; top: 0; ">
    <div class="overlay"></div>
    <video poster="oceanVideo.mp4" autoplay loop muted>
      <source type="video/mp4" src="https://github.com/abbguslof/MazeGame/raw/main/images/VideoForFn.mp4" />
    </video>

    <div class="postWindow">
      <!-- POST -->
      <div class="post" v-for="sea in bookmarked" :key="sea.id">
        <h3>{{ sea.title }}</h3>
        <h6>{{ sea.description }}</h6>
        <img :src="sea.path" style="width: 100%; object-fit: cover;">
        <hr>
         <div class="full-width full-height flex col justify-center">
            <button @click="delBookMark(sea.bookId)"><img
                src="https://www.flaticon.com/svg/vstatic/svg/3917/3917378.svg?token=exp=1677711304~hmac=05ca95a066c061c07149b5d5990a1087" style="width: 2vw;" /></button>
                </div>
      </div>
    </div>
  </section>
</q-page>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const user = ref(JSON.parse(localStorage.getItem('user')))
const bookmarked = ref([])

// get all bookemarked owned by the user then another api request to get them from the correct post table
const getBookmarked = async () => {
  user.value = JSON.parse(localStorage.getItem('user'))
  try {
    const api = await axios.post(`http://localhost:3000/bookM`, { userId: user.value.id })
    const data = api.data
   for(var i = 0; i <data.length; i++){
     const response = await axios.post(`http://localhost:3000/post/${api.data[i].table}`, { postId: api.data[i].postId })
     bookmarked.value.push({bookId:api.data[i].id, title: response.data[0].title, description: response.data[0].description, path: response.data[0].path })
   }
  } catch (error) {
    console.log(error.message)
  }
}
const delBookMark = async (postId) => {
  try{
  const response = await axios.post(`http://localhost:3000/delBook`, { postId:postId })
  if(response.status == 200){

      bookmarked.value = []
      getBookmarked()
  }
}catch(error){
  console.log(error.message)
}
}

const updateList = async () => {
  bookmarked.value = []
}
onMounted(() => {
  getBookmarked()
  window.addEventListener('userLoggedOut', updateList) // listen to the event
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
  width: 100%;
  position: relative;
  z-index: 10;
  margin-bottom: 1.5rem;
  padding: 3rem;
  box-shadow: 0 -0rem 32px 0 rgba(0, 0, 0, 0.25);
}

.post h3 {
  margin-block: 0;
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


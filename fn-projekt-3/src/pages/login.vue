<template>
  <q-page class="flex flex-center">
    <section id="header" style="width: 100%; top: 0; ">
      <div class="overlay"></div>
        <video poster="oceanVideo.mp4" autoplay loop muted>
          <source type="video/mp4" src="https://github.com/abbguslof/MazeGame/raw/main/images/VideoForFn.mp4" />
        </video>

        <div class="login-box">
          <h2> L O G I N </h2>
          <form>
            <div class="user-box">
              <input type="text" v-model="email">
              <label>Email</label>
            </div>
            <div class="user-box">
              <input type="password" v-model="password">
              <label>Password</label>
            </div>
            <div class="buttonRow">
              <button @click="findUser" class="cursor-pointer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
              <a href="#/signup" id="noAccountButton">
                Don't have an account?
              </a>
            </div>
          </form>
        </div>
    </section>
  </q-page>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
const email = ref("")
const password = ref("")
const findUser = async () => {
  try {
    const api = await axios.post('http://localhost:3000/auth', { email: email.value, password: password.value })
    console.log(api.data)

    localStorage.setItem('user', JSON.stringify({
      name: api.data.name,
      email: api.data.email,
      password: api.data.password,
      id: api.data.id
    }));
    const event = new CustomEvent('userLoggedIn')
    window.dispatchEvent(event) // dispatch the event
    console.log("user saved to local storage")

  } catch (error) {
    console.log(error.message)
  }
  email.value = ""
  password.value = ""
}
</script>

<style>
#header video {
  position: absolute;
  /* top: -31vh; */
  /* left: 0; */
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(34, 35, 46, 0.6),
    rgba(0, 194, 203, 0.2)
  );
  z-index: 1;
}

#oceanVideo {
  position: fixed;
}

@media screen and (max-aspect-ratio: 3/4) {
  /* body {
    background-color: white;
  } */

  video {
    width: auto;
    height: 100%;
  }

  .login-box {
    width: 90vw;
  }

  .login-box form button {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: none;
  border: none;
}
}
@media screen and (min-aspect-ratio: 3/4) {
  body {
    /* background: -webkit-linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
    background: -o-linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
    background: -moz-linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60));
    background: linear-gradient(rgb(35, 35, 45), rgb(55, 55, 60)); */
    font-family: sans-serif;
    margin:0;
    padding:0;
  }

  video {
    width: 100%;
    height: auto;
  }

  html {
  height: 100%;
  }

  .login-box {
    width: 400px;
  }

}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 4vh;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.95);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,0.9);
  border-radius: 10px;
  z-index: 10;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  font-size: 36px;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  color: #ffffff97;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #00e2b9;
  font-size: 12px;
}

.login-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #00e2b9;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;

  display: flex;
  align-items:center;
  justify-content:center;
}

#noAccountButton:hover {
  background: #00e2b9;
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 5px #00ba98d1,
    0 0 5px #00ba98d1,
    0 0 25px #00ba98d1,
    0 0 50px #00ba98d1;
}

.login-box button:hover {
  background: #00e2b9;
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 5px #00ba98d1,
              0 0 25px #00ba98d1,
              0 0 50px #00ba98d1,
              0 0 100px #00ba98d1;
}

.login-box a span,
.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1)  {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e2b9);
  animation: btn-anim1 2s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00e2b9);
  animation: btn-anim2 2s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00e2b9);
  animation: btn-anim3 2s linear infinite;
  animation-delay: 1s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #00e2b9);
  animation: btn-anim4 2s linear infinite;
  animation-delay: 1.5s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

#noAccountButton {
  border: none;
  background: none;

  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;

  position: relative;
  display: inline-block;
  padding: 5px 10px;
  color: rgba(0, 216, 175, 0.65);
  text-decoration: none;
  font-size: 11px;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.submitButton {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: none;
  border: none;
}

.buttonRow {
  display: flex;
  flex-direction: column;
}
</style>

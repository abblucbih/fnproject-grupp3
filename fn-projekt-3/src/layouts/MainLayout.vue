<template>
  <q-layout view="lHh Lpr lFf">
    <div style="width: 100%; z-index: 100" class="navBackdrop"></div>
    <q-header elevated class="bg-transparent text-white z-max fixed navBar" style="height: 0;">
      <q-toolbar class="toolBar">
        <div class="col menuButtonDiv">

          <q-btn flat dense round label="OCEAN DATA PROJECT" aria-label="Menu" @click="toggleLeftDrawer"
            class="float-left menuButton"
            style="font-size: 16px; letter-spacing: 10px; text-decoration: none; color: #fff; padding-block: 0.5rem;" />
          <p v-if="user" class="nameDisplay"> {{ user.name }}</p>
        </div>

        <div class="col text-center">
          <router-link to="/" class="headHome" tag="button">OCEAN DATA PROJECT</router-link>
        </div>

        <div class="col loginSignup text-right column">
          <router-link v-if="user" to="/bookMarked" class="signupButton" tag="button">Bookmarks</router-link>
          <router-link v-if="user" to="/donation" class="signupButton" tag="button">Donations</router-link>
          <router-link v-if="user" to="/login" @click="logOut" class="signupButton" tag="button">Sign Out</router-link>
          <router-link v-if="!user" to="/login" class="loginButton" tag="button">Log In</router-link>
          <router-link v-if="!user" to="/signup" class="signupButton" tag="button">Sign up</router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-below bordered class="bg-blue-grey-2 text-blue-grey-9 EL">
      <q-list class="block">

        <q-item-label header>
          <div style="height: 2vh; width: 100%"></div>
        </q-item-label>

        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          style="height: 4rem; width: 100%; border-bottom: 1.5px solid rgba(255,255,255,0.4);"
        /> -->
        <div class="EL_loginSignup col column w-full">
          <router-link to="/" class="navButton col text-blue-grey-9" tag="button">Home</router-link>
          <hr>
          <div v-if="!user">
          <router-link v-if="!user" to="/login" class="navButton col text-blue-grey-9" tag="button">Log In</router-link>
          <hr>
          <router-link v-if="!user" to="/signup" class="navButton col text-blue-grey-9" tag="button">Sign up</router-link>
          <hr>
          </div>
          <div  v-if="user">
          <router-link  to="/bookMarked" class="navButton col text-blue-grey-9" tag="button">Bookmarks</router-link>
          <hr>
          <router-link to="/login" @click="logOut" class="navButton col text-blue-grey-9" tag="button">Log Out</router-link>
          <hr>
          </div>
          <br>
          <router-link to="/Fish" class="oceanButton col text-blue-grey-9"><img class="SelectSvg" href=""
              src="..\assets\blackfishylogo.svg" style="width: 100%;" /></router-link>
          <br>
          <hr><br>
          <router-link to="/sea" class="oceanButton col text-blue-grey-9"><img class="SelectSvg" href=""
              src="..\assets\blackoceqaonlgogo.svg" style="width: 100%;" /></router-link>
          <hr>
          <router-link to="/donation" class="navButton col text-blue-grey-9" tag="button">Donate</router-link>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue"

const leftDrawerOpen = ref(false)
  const toggleLeftDrawer = async () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

const state = ref(JSON.parse(localStorage.getItem('state')))
const user = ref(JSON.parse(localStorage.getItem('user')))


const logOut = async () => {
  localStorage.removeItem("user")
  const event = new CustomEvent('userLoggedOut')
  window.dispatchEvent(event) // dispatch the event
}
const update = async () => {
  state.value = JSON.parse(localStorage.getItem('state'))
  user.value = JSON.parse(localStorage.getItem('user'))
}

onMounted(() => {
  window.addEventListener('stateChanged', update) // listen to the event
})
</script>

<style>
.navBackdrop {
  position: fixed;
  background: rgba(17, 24, 39, 0.25);
  background: linear-gradient(180deg,
      rgba(17, 24, 39, 0.8) 0%,
      rgba(16, 24, 39, 0.3) 25%,
      rgba(16, 24, 39, 0.3) 50%,
    );
  height: 55px
}

.navBar {
  background: rgba(17, 24, 39, 0.25);
  background: linear-gradient(180deg,
      rgba(17, 24, 39, 0.5) 0%,
      rgba(16, 24, 39, 0.3) 25%,
      rgba(17, 24, 39, 0.15) 50%,
      rgba(252, 255, 255, 0) 75%);
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  /* box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5); */
  color: white;
}

input {
  background: rgba(255, 255, 255, 1);
  border: none;
  position: relative;
  display: block;
  outline: none;
  height: 60%;
  width: 25vw;
  /* margin: 0 auto; */
  color: white;
  /* -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5); */
  /* box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.5); */
}

::-webkit-input-placeholder {
  color: #fff;
}

:-moz-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

:-ms-input-placeholder {
  color: #fff;
}

.loginSignup {
  padding: 1rem;
  display: inline-block;
  text-transform: uppercase;
  font-weight: normal;
}

.EL {
  padding-inline: 1rem;
}

.EL_loginSignup {
  padding-block: 1rem;
  display: block;
  text-transform: uppercase;
  font-weight: normal;
  width: 100%;
}

.EL_loginSignup hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.EL_loginSignup .navButton,
.EL_loginSignup .fishButton,
.EL_loginSignup .oceanButton {
  display: block;
  width: 100%;
  text-align: center;
  padding-inline: 1rem;
  padding-block: 0.6rem;
  text-decoration: none;
  border-radius: 0.25rem;
  text-shadow: 0 0 4px rgba(0, 5, 17, 0.4);
  transition: 400ms;
}

.loginSignup .loginButton {
  color: #00e2b9;
  padding-inline: 1rem;
  padding-block: 0.6rem;
  text-decoration: none;
  border-radius: 0.25rem;
  text-shadow: 0 0 8px rgba(0, 5, 17, 1);
  transition: 400ms;
}

.loginSignup .loginButton:hover {
  background-color: #00e2b9;
  color: #000;
  box-shadow: 0 0 2px #00ba98d1,
    0 0 10px #00ba98d1,
    0 0 25px #00ba98d1,
    0 0 50px #00ba98d1;

}

.loginSignup .signupButton {
  color: #fff;
  padding-inline: 1rem;
  padding-block: 0.6rem;
  text-decoration: none;
  border-radius: 0.25rem;
  text-shadow: 0 0 8px rgba(0, 5, 17, 1);
  transition: 400ms;
}

.loginSignup .signupButton:hover {
  color: #ffa442;
  text-shadow: 0 0 2px #c46f00d1,
    0 0 10px #c46f00d1,
    0 0 25px #c46f00d1,
    0 0 50px #c46f00d1;
}

.headHome {
  font-size: 22px;
  letter-spacing: 10px;
  text-decoration: none;
  color: #fff;
}

.menuButton {
  display: none;
}

.nameDisplay {
  margin: 0;
  padding: 1rem;
  font-size: 18px;
  font-weight: 600;
}

@media screen and (max-aspect-ratio: 1/1) {
  .loginSignup {
    display: none;
  }

  .headHome {
    font-size: 16px;
    text-align: left;
  }

  .navBar {
    display: flex;
    flex-direction: row-reverse;
  }

  .navBackdrop {
    height: 3rem
  }

  .toolBar {
    display: block;
  }


  .EL .headHome {
    margin-top: 4rem;
  }

  .menuButton {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .headHome {
    display: none;
  }

  .nameDisplay {
    display: none;
  }
}
</style>

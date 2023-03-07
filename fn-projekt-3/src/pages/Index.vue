<template>
<div id="js-view">
  <div class="page">
    <div class="cover parallax has-dark-cover">
      <div class="cover__logo">
        <router-link to="/Fish"><img class="SelectSvg" href="" src="..\assets\blackfishylogo.svg" style="-webkit-filter: invert(100%); filter: invert(100%); max-width: 400px;" alt="fhisyman" /></router-link>
        <router-link to="/Sea"><img class="SelectSvg" href="" src="..\assets\blackoceqaonlgogo.svg" style="-webkit-filter: invert(100%); filter: invert(100%); max-width: 400px;" alt="waterthing" /></router-link>
      </div>
      <div class="parallax__container">
        <video src="https://github.com/abbguslof/MazeGame/raw/main/images/VideoForFn.mp4" autoplay="" muted="" loop=""
          playsinline=""></video>
      </div>
    </div>

    <div class="wrapper">
      <div class="about">
        <p>Information om vårat projekt. bla bla bla.
          <br><br>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          <br><br>Vårt projekt! blablbalba
        </p>
        <div class="project__caption">
          <p>ett porjekt av <br>abb nissar bla bla</p>
        </div>
      </div>
      <div class="box project project--duo">
        <div class="project__images">
          <div class="project__image project__image--l">
            <img src="..\assets\happyfish.jpg">
          </div>
          <div class="project__image project__image--r project__image--parallax">
            <img src="..\assets\mosthappyfish.jpg">
          </div>
        </div>

        <div class="project__caption">
          <h2>Vår databas bilder</h2>
          <p>skapades 2023 bla bla <br>
            alla fiskar i havet! :) :) :) :)</p>

        </div>

      </div>
      <div class="projects bricks">




        <div class="box project project--text  project--shift">
          <p>Mer information! Kolla på coola surfaren! rent hav mer fisk :)</p>
        </div>







        <div class="box project project--border item">

          <div class="project__image project__image--l" style="color:#deeaf4">

            <img src="..\assets\coderman.jpg">

          </div>

          <div class="project__caption">
            <h2>Bild 69</h2>
            <p>Det här är en ... mycket bra</p>

          </div>
        </div>



      </div>
      <div class="project project--full">

        <img src="..\assets\coderfish.png">
      </div>
      <div class="projects bricks">









        <div class="box project project--border  project--shift">

          <div class="project__image project__image--l item" style="color:#F6F6F6">

            <a href="https://github.com/abbindustrigymnasium/fn-projekt-3/tree/main"><img
                src="..\assets\Code.jpg"></a>

          </div>

          <div class="project__caption">
            <h2>en blick in i källkoden!</h2>
            <p><a class="footer-address"
                href="https://github.com/abbindustrigymnasium/fn-projekt-3/tree/main"><u>View now</u></a></p>

          </div>
        </div>




        <div class="box project project--text ">
          <p>vi gillar open source! "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          </p>
        </div>
      </div>






    </div> <!--  wrapper -->



  </div> <!--  .page -->
</div> <!--  #js-view -->

<div class="footer">
  <p> -  Årkrus 2 Spets Grupp 3 bla bla  - </p>
  <div class="footerlink">
    <a class="hoverlinkfooter" href="https://twitter.com/BarackObama"> https://twitter.com/BarackObama </a>
    <a class="hoverlinkfooter" href="MyBestAndFavouriteEmail@EmialServiceHotmail.com"> MyBestAndFavouriteEmail@EmialServiceHotmail.com </a>
    <a class="hoverlinkfooter" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> https://www.youtube.com/watch?v=dQw4w9WgXcQ </a>
    <a class="hoverlinkfooter" href="https://nokflex.nok.se/"> https://nokflex.nok.se/ </a>
    <a class="hoverlinkfooter" href="https://github.com/abbjetmus/FN-projekt"> https://github.com/abbjetmus/FN-projekt </a>
  </div>
</div>
</template>

<script setup>





</script>

<style scoped>
html {
  box-sizing: border-box
}

*,
:after,
:before {
  box-sizing: inherit
}
.footer {
  position: relative;
  font-size: 45px;
  z-index: 100;
  color: black;
  background-color: rgba(255, 255, 255, .45);
  font-weight: 1000;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
}

.footerlink {
  display: flex;
  overflow-x: hidden;
  justify-content: space-evenly;
  font-size: 25px;
  color: #D3D3D3;
}
.hoverlinkfooter:hover {
  color: #0000EE;
  text-decoration: underline;
  transform: scaleX(1.1) scaleY(1.1);
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}

body {
  margin: 0
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block
}

audio,
canvas,
progress,
video {
  display: inline-block
}

audio:not([controls]) {
  display: none;
  height: 0
}

progress {
  vertical-align: baseline
}

[hidden],
template {
  display: none
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects
}

a:active,
a:hover {
  outline-width: 0
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted
}

b,
strong {
  font-weight: inherit;
  font-weight: bolder
}

dfn {
  font-style: italic
}

h1 {
  font-size: 2em;
  margin: .67em 0
}

mark {
  background-color: #ff0;
  color: #000
}

small {
  font-size: 80%
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

img {
  border-style: none
}

svg:not(:root) {
  overflow: hidden
}
.SelectSvg:hover{
  transition-duration: 0.25s;
  transform: scaleX(1.075) scaleY(1.075);
  filter: invert(100%);
  cursor: pointer;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em
}

figure {
  margin: 1em 40px
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible
}

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0
}

optgroup {
  font-weight: 700
}

button,
input {
  overflow: visible
}

button,
select {
  text-transform: none
}

[type=reset],
[type=submit],
button,
html [type=button] {
  -webkit-appearance: button
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0
}

[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: .35em .625em .75em
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal
}

textarea {
  overflow: auto
}

[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: .54
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

body {
  height: 100%;
  width: 100%;
  color: #000;
  background-image: url(http://localhost:8888/---conradin---/images/marble.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;

  font-size: 1.52768vw;
  line-height: 1.4;
  font-weight: 400;
  font-family: garamond-premier-pro-display, serif;
  padding-top: .01em
}

@media screen and (max-width:767px) {
  body {
    font-size: 19px
  }
}

h1,
h2,
h3 {
  font-family: garamond-premier-pro-display, serif;
  font-weight: 400
}

p {
  display: block
}

#symbols {
  display: none
}

a {
  text-decoration: none;
  color: #000;
  transition: color .3s
}

li,
ul {
  list-style: none
}

button,
li,
ul {
  margin: 0;
  padding: 0
}

button {
  background: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none
}

button:focus {
  outline: none
}

svg {
  width: 100%;
  height: 100%
}

dd,
dl,
dt,
figure {
  margin: 0;
  padding: 0
}

img {
  width: 100%
}

img,
video {
  display: block
}

.IIV::-webkit-media-controls-play-button,
.IIV::-webkit-media-controls-start-playback-button {
  opacity: 0;
  pointer-events: none;
  width: 5px
}

@media screen and (max-width:767px) {
  br {
    display: none
  }
}

.wf-loading a,
.wf-loading h1,
.wf-loading h2,
.wf-loading h3,
.wf-loading p {
  opacity: 0
}

.wf-active a,
.wf-active h1,
.wf-active h2,
.wf-active h3,
.wf-active p {
  opacity: 1
}

a,
button,
input,
label,
select,
textarea {
  -webkit-tap-highlight-color: transparent
}

::-webkit-input-placeholder {
  color: #fff;
  opacity: 1
}

::-moz-placeholder {
  color: #fff;
  opacity: 1
}

:-ms-input-placeholder {
  color: #fff;
  opacity: 1
}

:-moz-placeholder {
  color: #fff;
  opacity: 1
}

input:-webkit-autofill,
input:-webkit-autofill:focus input:-webkit-autofill,
input:-webkit-autofill:hover,
select:-webkit-autofill,
select:-webkit-autofill:focus,
select:-webkit-autofill:hover,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus {
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0 1000px hsla(0, 0%, 100%, 0) inset;
  transition: background-color 5000s ease-in-out 0s
}

#preloader {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  z-index: 9;
  transform: translate3d(0, -100%, 0);
  overflow: hidden
}

#preloader,
.preloader__logo {
  position: fixed;
  transition: transform 1.5s ease .3s
}

.preloader__logo {
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100vh);
  width: 15.7vw;
  height: 2.3236vw;
  color: #000;
  pointer-events: none
}

@media screen and (max-width:767px) {
  .preloader__logo {
    width: 45vw;
    height: 6.66vw
  }
}

.is-loading #preloader {
  transform: translateZ(0)
}

.is-loading .preloader__logo {
  transform: translate3d(-50%, -1.1618vw, 0)
}

.row {
  margin: 0 auto;
  width: 76.384vw;
  position: relative;
  padding: 0 4.1664vw;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: start;
  align-items: flex-start;
  transform: translateZ(0)
}

@media screen and (max-width:767px) {
  .row {
    width: 100%;
    -ms-flex-flow: column wrap;
    flex-flow: column wrap;
    padding: 0 30px
  }

  .row.reversed {
    -ms-flex-flow: column-reverse wrap;
    flex-flow: column-reverse wrap
  }
}

.row.row--full {
  width: 100%;
  padding: 0
}

.row .col {
  padding: 0;
  width: 50%
}

@media screen and (max-width:767px) {
  .row .col {
    width: 100%
  }
}

.row .col:first-child {
  padding: 0 6.944vw 0 0
}

@media screen and (max-width:767px) {
  .row .col:first-child {
    padding: 0
  }
}

.row .col.col--pad {
  padding: 0 1.3888vw;
  text-align: justify
}

@media screen and (max-width:767px) {
  .row .col.col--pad {
    padding: 0
  }
}

.row .col.col--rightpad {
  padding: 0 1.3888vw 0 0;
  text-align: justify
}

@media screen and (max-width:767px) {
  .row .col.col--rightpad {
    padding: 0
  }
}

.row .col.col--leftpad {
  padding-left: 2.7776vw
}

@media screen and (max-width:767px) {
  .row .col.col--leftpad {
    padding-left: 0
  }
}

.row .col.col--image {
  padding: 0 0 2.7776vw 8.3328vw
}

@media screen and (max-width:767px) {
  .row .col.col--image {
    padding: 0 0 2.7776vw
  }
}

.flip--left {
  max-width: 84.0256vw
}

@media screen and (max-width:767px) {
  .flip--left {
    max-width: calc(100% - 30px)
  }
}

.content {
  margin: 0 auto;
  width: 76.384vw;
  padding: 9.30496vw 4.1664vw 0;
  position: relative
}

@media screen and (max-width:767px) {
  .content {
    width: 100%;
    padding: 30px 30px 0
  }
}

.content.content--about {
  padding-top: 6.944vw
}

.page-section {
  margin: 0 auto 9.30496vw
}

.page-section.page-section--smallpad {
  margin: 0 auto 6.944vw
}

.page-section.page-section--wider {
  padding: 0 6.944vw;
  text-align: justify
}

@media screen and (max-width:767px) {
  .page-section.page-section--wider {
    padding: 0
  }
}

.page-section.page-section--list {
  padding: 0 6.944vw
}

.page-section.page-section--list .small-title {
  padding-left: 30%
}

@media screen and (max-width:767px) {

  .page-section.page-section--list,
  .page-section.page-section--list .small-title {
    padding: 0
  }
}

.page-section.page-section--centered {
  padding: 0 15.2768vw;
  text-align: justify
}

@media screen and (max-width:767px) {
  .page-section.page-section--centered {
    padding: 0
  }
}

.page-title {
  font-size: 2.7776vw;
  line-height: 1.35;
  margin: 0
}

@media screen and (max-width:767px) {
  .page-title {
    font-size: 24px
  }
}

.image--round {
  border-radius: 50%;
  overflow: hidden
}

.blockquote {
  font-family: garamond-premier-pro-display, serif;
  font-weight: 500;
  font-size: 3.33312vw;
  line-height: 1.15;
  max-width: 70%;
  margin-left: 0
}

.blockquote.blockquote--long {
  max-width: 80%
}

@media screen and (max-width:767px) {
  .blockquote {
    font-size: 26px;
    padding-right: 30px
  }

  .blockquote,
  .blockquote.blockquote--long {
    max-width: 100%
  }
}

.about-text p {
  margin-top: 1.25em
}

.small-title {
  font-size: 1.66656vw
}

@media screen and (max-width:767px) {
  .small-title {
    font-size: 16px
  }
}

.border-title {
  position: relative;
  padding-left: 2.7776vw
}

@media screen and (max-width:767px) {
  .border-title {
    padding-left: 20px
  }
}

.border-title:before {
  content: '';
  width: 1px;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  height: 100%;
  background: #000
}

@media screen and (max-width:767px) {
  .about-title {
    font-size: 24px
  }
}

.parallax {
  overflow: hidden;
  position: relative;
  z-index: 0
}

.parallax__container {
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  z-index: 0;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translateZ(0)
}

.list {
  margin-top: 2em
}

.list .list-item {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

@media screen and (max-width:767px) {
  .list .list-item {
    display: block
  }
}

.list .list-item h3 {
  text-align: right;
  width: 30%;
  padding-right: 5%
}

@media screen and (max-width:767px) {
  .list .list-item h3 {
    text-align: left;
    width: 100%;
    padding-right: 0
  }
}

.list .list-item .list-content {
  width: 70%
}

.list .list-item .list-content p {
  margin-top: 0
}

@media screen and (max-width:767px) {
  .list .list-item .list-content {
    width: 100%
  }

  .list .list-item .list-content p {
    margin-top: 1em
  }
}

.menu {
  position: fixed;
  overflow: hidden;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8;
  background: transparent;
  transform: translate3d(0, -100%, 0);
  transition: transform .51s cubic-bezier(.23, 1, .32, 1);
  box-sizing: border-box;
  padding: 10vh 6.944vw
}

.menu,
.menu a {
  color: #fff
}

.menu .menu__content {
  position: relative;
  z-index: 2
}

.menu:after {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  opacity: 1;
  transform: translateZ(0)
}

.has-nav .menu {
  transform: translateZ(0);
  transition: transform .71s cubic-bezier(.23, 1, .32, 1)
}

.has-nav .main-nav .main-nav__item {
  opacity: 1;
  transform: translateZ(0);
  transition: transform .91s cubic-bezier(.165, .84, .44, 1), opacity .91s ease
}

.has-nav .main-nav .main-nav__item:nth-child(4n + 1) {
  transition-delay: .6s
}

.has-nav .main-nav .main-nav__item:nth-child(4n + 2) {
  transition-delay: .5s
}

.has-nav .main-nav .main-nav__item:nth-child(4n + 3) {
  transition-delay: .4s
}

.has-nav .main-nav .main-nav__item:nth-child(4n) {
  transition-delay: .3s
}

.has-nav .logo.logo--menu {
  opacity: 1;
  transform: translateZ(0);
  transition: transform 1.31s cubic-bezier(.165, .84, .44, 1), opacity 1.31s ease;
  transition-delay: .23s
}

.has-nav .menu__animated {
  opacity: 1;
  transform: translateZ(0);
  transition: transform 1.11s cubic-bezier(.165, .84, .44, 1), opacity 1.11s ease
}

.has-nav .menu__animated.address {
  transition-delay: .11s
}

.has-nav .menu__animated.social {
  transition-delay: .16s
}

.main-nav {
  text-align: center
}

.main-nav .main-nav__item {
  line-height: 1.4;
  opacity: 0;
  transform: translate3d(0, -10vh, 0);
  transition-delay: 1s;
  transition: transform .31s cubic-bezier(.165, .84, .44, 1), opacity .21s ease
}

@media screen and (max-width:767px) {
  .main-nav .main-nav__item {
    line-height: 1.6
  }
}

.main-nav .main-nav__item:nth-child(4n + 1) {
  transition-delay: .15s
}

.main-nav .main-nav__item:nth-child(4n + 2) {
  transition-delay: .1s
}

.main-nav .main-nav__item:nth-child(4n + 3) {
  transition-delay: .05s
}

.main-nav .main-nav__item:nth-child(4n) {
  transition-delay: 0
}

.main-nav a {
  font-size: 3.74976vw;
  font-family: garamond-premier-pro-display, serif;
  display: inline-block
}

@media screen and (max-width:767px) {
  .main-nav a {
    font-size: 32px
  }
}

.main-nav a:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  transform: scaleX(0) translateZ(0);
  margin-top: -4px;
  transition: transform .31s cubic-bezier(.165, .84, .44, 1)
}

.main-nav a .is-active:after,
.main-nav a:hover:after {
  transform: scaleX(1) translateZ(0);
  transition: transform .51s cubic-bezier(.165, .84, .44, 1)
}

.logo {
  display: block;
  width: 6.5968vw;
  height: .97216vw;
  margin: 0 auto 1.3888vw;
  line-height: 1;
  font-size: .97216vw
}

@media screen and (max-width:767px) {
  .logo {
    width: 63px;
    height: 10px
  }
}

.logo.logo--menu {
  color: #fff;
  margin-top: 0;
  z-index: 6;
  transform: translate3d(0, -40vh, 0)
}

.logo.logo--menu,
.menu__animated {
  opacity: 0;
  transition: transform .61s cubic-bezier(.165, .84, .44, 1), opacity .61s ease
}

.menu__animated {
  transform: translate3d(0, -10vh, 0)
}

.social {
  font-family: garamond-premier-pro-display, serif;
  text-transform: uppercase;
  letter-spacing: .1em;
  font-size: .90272vw;
  margin-top: 5vh;
  transition-delay: 0
}

@media screen and (max-width:767px) {
  .social {
    font-size: 10px
  }
}

.social a {
  margin-right: 1.3888vw;
  display: inline-block
}

.social a:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: #fff;
  transform: scaleX(0);
  transition: transform .31s cubic-bezier(.165, .84, .44, 1)
}

.social a .is-active:after,
.social a:hover:after {
  transform: scaleX(1);
  transition: transform .51s cubic-bezier(.165, .84, .44, 1)
}

.menu__content {
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-flow: column wrap;
  flex-flow: column wrap;
  position: relative;
  z-index: 2
}

#barloader {
  position: fixed;
  height: 4px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transform: translate3d(0, -100%, 0);
  transition: transform .3s ease
}

#barloader #barloader__bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #fff
}

.initializing #barloader #barloader__bar {
  background: #000
}

.nprogress-busy #barloader {
  transform: translateZ(0);
  transition: transform .3s
}

.initializing .footer__bg,
.initializing .project-footer {
  opacity: 0
}

.start {
  width: 100%;
  height: 100%;
  overflow: hidden
}

.start .menu {
  transition: transform 1.2s cubic-bezier(.23, 1, .32, 1)
}

.start .arrow.arrow--left,
.start .hamburger {
  opacity: 0;
  visibility: hidden
}

.start .project-footer {
  opacity: 0;
  transition: none
}

.start .box {
  transition-duration: 0s
}

.from-bottom .footer__bg,
.from-top .footer__bg {
  transform: translateZ(0);
  z-index: 7
}

.has-bg .menu:after {
  opacity: 0
}

.has-bg .footer__bg {
  transform: translateZ(0);
  z-index: 7
}

.animate-bg .menu:after {
  opacity: 0
}

.animate-bg .footer__bg {
  transform: translateZ(0);
  z-index: 7;
  transition: transform .51s cubic-bezier(0, .14, .19, 1)
}

.animate-bg .project-footer {
  opacity: 0;
  transition: none
}

.footer__bg {
  color: #fff;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden
}

.footer__bg .bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity .71s ease;
  transform: translateZ(0)
}

.footer__bg .bg .bg_video,
.footer__bg .bg img,
.footer__bg .bg video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;'
}

.footer__bg .bg img,
.footer__bg .bg video {
  transform: translateZ(0)
}

.footer__bg .bg.is-visible {
  opacity: 1;
  transition: opacity .51s ease
}

.footer__bg .bg.is-loading {
  opacity: .3;
  transition: opacity .51s ease
}

.hamburger {
  position: fixed;
  top: 23px;
  right: 2.91648vw;
  z-index: 8;
  padding: 15px;
  display: inline-block;
  cursor: pointer;
  transform: translateZ(0);
  transition: opacity .3s ease, visibility .3s ease;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible
}

@media screen and (max-width:767px) {
  .hamburger {
    top: 10px;
    right: 9px
  }
}

.hamburger.hamburger--white .hamburger-box,
.has-cover.has-dark-cover .arrow.arrow--left,
.has-cover.has-dark-cover .hamburger .hamburger-box {
  color: #fff
}

.hamburger-box {
  height: 24px;
  width: 20px;
  position: relative;
  box-sizing: border-box;
  line-height: 20px;
  display: inline-block;
  color: #000;
  transition: color .3s ease
}

.hamburger-box:after,
.hamburger-box:before {
  content: '';
  position: absolute;
  top: 7px;
  left: 50%;
  margin-top: -1.5px;
  margin-left: -10px;
  display: block;
  height: 3px;
  width: 20px;
  border-radius: 2px;
  transform-origin: center center;
  background-color: currentColor;
  transition: top .1s cubic-bezier(.215, .61, .355, 1) .25s, transform .25s cubic-bezier(.215, .61, .355, 1) 0s
}

.hamburger-box:after {
  top: 19px
}

.is-active .hamburger-box {
  color: #fff
}

.is-active .hamburger-box:after,
.is-active .hamburger-box:before {
  top: 50%;
  transition: top .1s cubic-bezier(.215, .61, .355, 1) 0s, transform .25s cubic-bezier(.215, .61, .355, 1) .1s
}

.is-active .hamburger-box:before {
  transform: rotate(45deg)
}

.is-active .hamburger-box:after {
  transform: rotate(-45deg)
}

.is-loading .cover .cover__logo {
  color: #000
}

.cover {
  height: 100vh;
  width: 100%
}

.cover .cover__logo {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 7%;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  margin: -14vw 0 0;
  /*width: 15.7vw;
    height: 2.3236vw;*/
  color: #fff;
  z-index: 4;
  transition: color .3s ease
}

@media screen and (max-width:767px) {
  .cover .cover__logo {
    width: 45vw;
    height: 6.66vw;
    margin: 0;
    transform: translate(-50%, -50%)
  }
}

.cover img,
.cover video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  background: #000
}

.arrow {
  width: 26px;
  height: 14px;
  color: #fff;
  position: absolute;
  cursor: pointer;
  left: 50%;
  bottom: 15vh;
  transform: translate3d(-50%, 0, 0)
}

.arrow:hover svg {
  animation: a .83s infinite ease-out
}

.arrow.arrow--down {
  cursor: default;
  line-height: 14px;
  font-size: 14px
}

@media screen and (max-width:767px) {
  .arrow.arrow--down {
    width: 26px;
    height: 14px
  }
}

.arrow.arrow--left {
  position: fixed;
  z-index: 8;
  width: 31px;
  height: 39px;
  padding: 10px;
  color: #000;
  bottom: auto;
  top: 32px;
  font-size: 19px;
  line-height: 1;
  left: 3.26368vw;
  transform: translateZ(0);
  transition: opacity .3s ease, visibility .3s ease, color .2s
}

@media screen and (max-width:767px) {
  .arrow.arrow--left {
    top: 20px;
    left: 14px
  }
}

.arrow.arrow--left svg {
  transform: translateZ(0)
}

.arrow.arrow--left:hover svg {
  animation: b .83s infinite ease-out
}

.arrow.arrow--left.arrow--white,
.has-nav .arrow.arrow--left {
  color: #fff
}

@keyframes a {
  0% {
    transform: translateZ(0)
  }

  50% {
    transform: translate3d(0, 50%, 0)
  }

  to {
    transform: translateZ(0)
  }
}

@keyframes b {
  0% {
    transform: translateZ(0)
  }

  50% {
    transform: translate3d(-50%, 0, 0)
  }

  to {
    transform: translateZ(0)
  }
}

.about {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 3.05536vw;
  line-height: 1.25;
  text-align: center;
  max-width: 70vw;
  margin: 0 auto;
  padding: 5.9024vw 0
}

@media screen and (max-width:767px) {
  .about {
    max-width: 80.9523809524vw;
    padding: 2em 0 2.2em;
    font-size: 24px
  }

  .about br {
    display: none
  }
}

.about .about__logo {
  display: block;
  width: 8.40224vw;
  height: 1.24992vw;
  margin: 0 auto 1.3888vw;
  line-height: 1;
  font-size: 1.24992vw
}

@media screen and (max-width:767px) {
  .about .about__logo {
    width: 63px;
    height: 10px
  }
}

.about p {
  margin: 1em 0
}

.home-footer {
  padding: 1.3888vw 16vw;
  font-family: garamond-premier-pro-display, serif;
}

.is-home .arrow--left {
  display: none
}

.projects {
  margin: 0 auto;
  padding: 0;
  width: 76.384vw;
  position: relative
}

.projects:after {
  clear: both;
  content: "";
  display: block
}

@media screen and (max-width:767px) {
  .projects {
    width: 100%
  }
}

.projects.featured {
  margin: 0 auto;
  padding: 9.0272vw 0 10.416vw
}

@media screen and (max-width:767px) {
  .projects.featured {
    padding: 50px 0 10px
  }
}

.projects.featured .small {
  font-size: 1.52768vw
}

@media screen and (max-width:767px) {
  .projects.featured .small {
    font-size: 10px
  }
}

.projects.featured .project {
  padding: 0 4.1664vw
}

@media screen and (max-width:767px) {
  .projects.featured .project {
    padding: 24px 30px
  }
}

.projects .project {
  display: block;
  position: relative;
  vertical-align: top;
  padding: 0 4.1664vw 11.1104vw;
  width: 50%;
  box-sizing: border-box;
  float: left
}

@media screen and (max-width:767px) {
  .projects .project {
    width: 100%;
    padding: 0 30px 24px
  }
}

.projects .project h2 {
  font-size: .97216vw;
  letter-spacing: .1em;
  font-weight: 700;
  text-transform: uppercase
}

@media screen and (max-width:767px) {
  .projects .project h2 {
    font-size: 12px
  }
}

.projects .project p {
  font-size: 1.52768vw
}

@media screen and (max-width:767px) {
  .projects .project p {
    font-size: 20px
  }
}

.projects .project.project--shift {
  padding-top: 6.944vw
}

@media screen and (max-width:767px) {
  .projects .project.project--shift {
    padding-top: 0
  }
}

.projects .project.project--text {
  padding: 0 7.2912vw 9.7216vw 4.1664vw
}

@media screen and (max-width:767px) {
  .projects .project.project--text {
    padding: 0 60px 24px 30px
  }
}

.projects .project.project--text p {
  font-size: 3.05536vw;
  line-height: 1.2;
  margin: 0
}

@media screen and (max-width:767px) {
  .projects .project.project--text p {
    font-size: 27px
  }
}

.projects .project.project--text.project--shift {
  padding-top: 3.472vw
}

@media screen and (max-width:767px) {
  .projects .project.project--text.project--shift {
    padding-top: 0
  }
}

.projects .project a {
  display: block
}

.projects .project a:hover .project__image img {
  transform: scale3d(1.1, 1.1, 1);
  transition: transform 3s ease
}

.projects .project a:hover .project__image--bg img {
  transition: none
}

.projects .project a:hover .project__image--bground img,
.projects .project a:hover .project__image--border img {
  transition: none;
  transform: scaleX(1)
}

.projects .project a:hover .project__caption:after {
  transform: scaleX(1) translateZ(0)
}

.projects .project__image {
  position: relative;
  width: 100%;
  overflow: hidden
}

.projects .project__image img {
  transform: scaleX(1) translateZ(0);
  transition: transform 3000s ease
}

.projects .project__image.project__image--bg img {
  position: absolute;
  left: 0;
  top: 30%;
  max-width: 90%;
  transition: none
}

.projects .project__image.project__image--bg:before {
  content: '';
  background: currentColor;
  display: block;
  width: 90%;
  height: 0;
  padding-top: 134%;
  margin-left: 10%
}

.projects .project__image.project__image--bground {
  overflow: visible
}

.projects .project__image.project__image--bground img {
  position: relative;
  left: 0;
  top: 0;
  z-index: 2;
  max-width: 100%;
  transition: none
}

.projects .project__image.project__image--bground .circle {
  content: '';
  position: absolute;
  z-index: 0;
  background: currentColor;
  display: block;
  width: 100%;
  border-radius: 50%;
  height: 0;
  padding-top: 100%;
  bottom: 0
}

.projects .project__image.project__image--round {
  border-radius: 50%;
  transform: translateZ(0)
}

.projects .project__image.project__image--circle img {
  position: absolute;
  left: 0;
  top: 0
}

.projects .project__image.project__image--circle:before {
  content: '';
  background: #f2f2f2;
  display: block;
  width: 100%;
  height: 0;
  padding-top: 100%;
  margin-left: 0
}

.projects .project__image--border {
  overflow: visible;
  margin-top: 2.0832vw
}

@media screen and (max-width:767px) {
  .projects .project__image--border {
    margin-top: 20px
  }
}

.projects .project__image--border img {
  transition: none
}

.projects .project__image--border .border {
  content: '';
  display: block;
  position: absolute;
  left: 2.0832vw;
  top: -2.0832vw;
  width: 86%;
  height: 100%;
  border: 3px solid currentColor;
  box-sizing: border-box;
  z-index: 3;
  transform: translateZ(0)
}

@media screen and (max-width:767px) {
  .projects .project__image--border .border {
    left: 20px;
    top: -26px;
    width: calc(100% - 40px)
  }
}

.project--duo {
  margin: 0 auto;
  padding: 0 4.1664vw;
  margin-bottom: 11.1104vw;
  width: 76.384vw;
  position: relative
}

.project--duo:after {
  clear: both;
  content: "";
  display: block
}

@media screen and (max-width:767px) {
  .project--duo {
    width: 100%;
    padding: 0 30px;
    margin-bottom: 72px
  }
}

.project--duo:hover .project__image--l img {
  transform: scale(1000.1);
  transition: transform 1000s ease
}

.project--duo .project__image {
  width: 50%
}

@media screen and (max-width:767px) {
  .project--duo .project__image {
    width: 100%
  }
}

.project--duo .project__image--l {
  overflow: hidden
}

@media screen and (max-width:767px) {
  .project--duo .project__image--l {
    width: 80%;
    margin: 0 auto
  }
}

.project--duo .project__image--l img {
  transform: scale(1) translateZ(0);
  transition: transform 3s ease
}

.project--duo .project__image--r img {
  width: 110%;
  transform: translate3d(-9%, 0, 0);
  max-width: 120%
}

@media screen and (max-width:767px) {
  .project--duo .project__image--r img {
    width: 100%;
    max-width: 100%;
    transform: translate3d(0%, 0%, 0);
    position: relative;
    left: 0;
    top: 0;
    margin: 30px 0;
  }
}

.project--duo .project__images {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-align: center;
  align-items: center
}

.project--duo a:hover .project__caption:after {
  transform: scaleX(1) translateZ(0)
}

.project__caption {
  position: relative;
  /*padding-left: 2.0832vw;*/
  margin-top: 3.05536vw;
  transform: translateZ(0)
}

@media screen and (max-width:767px) {
  .project__caption {
    padding-left: 20px;
    margin-top: 30px
  }

  .project__caption br {
    display: block
  }
}

.project__caption h2 {
  font-size: .97216vw;
  letter-spacing: .1em;
  font-weight: 700;
  text-transform: uppercase
}

@media screen and (max-width:767px) {
  .project__caption h2 {
    font-size: 12px;
    margin-bottom: 8px
  }
}

.project__caption p {
  font-size: 1.52768vw;
  line-height: 1.35
}

@media screen and (max-width:767px) {
  .project__caption p {
    font-size: 20px;
    margin-top: 8px
  }
}

.project__caption:before {
  background: #d9d7da
}

.project__caption:after,
.project__caption:before {
  content: '';
  /*width: 1px;*/
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  height: 100%
}

.project__caption:after {
  background: #000;
  transform: scale3d(0, 0, 1) translateZ(0);
  transition: transform .51s ease;
  transform-origin: top center
}

.project--full {
  position: relative;
  margin-bottom: 11.1104vw;
  width: 100%;
  height: 100vh
}

.project--full img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;'
}

.project--full .project__caption {
  position: absolute;
  width: 29.8592vw;
  left: 15.99vw;
  bottom: 10vh;
  color: #fff
}

@media screen and (max-width:767px) {
  .project--full .project__caption {
    width: calc(100% - 60px);
    left: 30px
  }
}

.project--full .project__caption p {
  margin-bottom: 0
}

.project--full .project__caption:before {
  background: #fff
}

.project--full a:hover .project__caption:after {
  transform: scaleX(1)
}

.header {
  padding: 8.3328vw 3.25% 0
}

@media screen and (max-width:767px) {
  .header {
    padding: 60px 0 0
  }
}

.header__title {
  text-align: center;
  font-size: 4.99968vw;
  margin: 3.61088vw 0 4.99968vw
}

@media screen and (max-width:767px) {
  .header__title {
    font-size: 24px;
    margin: 20px 0 30px;
    padding: 0 10%
  }
}

.project-container {
  padding: 9.0272vw 17.36vw 0
}

.project-container:after {
  clear: both;
  content: "";
  display: block
}

@media screen and (max-width:767px) {
  .project-container {
    font-size: 24px;
    padding: 9.0272vw 0 0
  }
}

.project-container.project-container--last,
.project-container:last-child {
  padding: 9.0272vw 17.36vw
}

@media screen and (max-width:767px) {

  .project-container.project-container--last,
  .project-container:last-child {
    padding: 9.0272vw 0
  }
}

.project-container.project-image--full {
  margin: 0;
  padding: 0
}

@media screen and (max-width:767px) {
  .project-container.project-image--full {
    padding: 0;
    max-width: 100%
  }

  .project-container.project-image--full .project-image {
    padding: 0
  }
}

.project-container.project-image--full .project-image {
  padding: 0
}

.project-container.project-image--full.full-height {
  height: 100vh
}

.project-container.project-image--full.full-height img,
.project-container.project-image--full.full-height video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;'
}

.project-container.project-image--full.full-height .project-image {
  width: 100%;
  height: 100vh
}

.project-container.project-image--full.full-height .project-image img,
.project-container.project-image--full.full-height .project-image video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;'
}

.project-image {
  width: 100%
}

@media screen and (max-width:767px) {
  .project-image {
    padding: 0 30px;
    max-width: 100%
  }
}

.project-image.is-browser:before {
  content: '';
  display: block;
  height: 16px;
  width: 100%;
  background: #cdcdcd;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px
}

.project-image video {
  width: 100%
}

.project-image:first-child {
  margin-top: 0
}

.project-image img {
  -webkit-filter: blur(7px);
  filter: blur(7px);
  transition: -webkit-filter .5s ease;
  transition: filter .5s ease;
  transition: filter .5s ease, -webkit-filter .5s ease
}

.project-image img.lazyloaded {
  -webkit-filter: none;
  filter: none
}

.description {
  font-size: 1.52768vw;
  padding: 7.6384vw 5.5552vw 6.944vw
}

@media screen and (max-width:767px) {
  .description {
    font-size: 16px;
    padding: 7.6384vw 30px 6.944vw
  }
}

.description .description__services {
  margin-top: 4.1664vw
}

.description .description__content {
  text-align: justify
}

.description .description__content a {
  display: inline-block
}

.description .description__content a:after {
  content: '';
  display: block;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  margin-top: -1px;
  background: #000;
  transition: transform .3s ease;
  transform-origin: right center
}

.description .description__content a:hover:after {
  transform: scaleX(1);
  transform-origin: left center
}

.description p {
  font-weight: 500
}

.description__link {
  display: inline-block
}

.description__link:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(1);
  transform-origin: left center;
  transition: transform .31s cubic-bezier(.23, 1, .32, 1)
}

.description__link.is-active:after,
.description__link:hover:after {
  transform: scaleX(0)
}

.description__title {
  font-size: 2.22208vw
}

@media screen and (max-width:767px) {
  .description__title {
    font-size: 24px
  }
}

.project-image--group .group__container {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center
}

.project-image--group .project-image__item {
  width: 30%;
  margin-top: 11.1104vw
}

.project-image--group .project-image__item.project-image--last {
  display: none
}

.project-image--group .project-image__item:nth-child(3n + 2) {
  margin: 0 5%
}

@media screen and (max-width:767px) {
  .project-image--group {
    display: block;
    overflow: hidden;
    padding: 0;
    width: calc(100% - 60px);
    margin: 0 auto
  }

  .project-image--group .group__container {
    width: 400%;
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    transform: translateZ(0)
  }

  .project-image--group .group__container:after {
    clear: both;
    content: "";
    display: block
  }

  .project-image--group .project-image__item {
    width: calc(100vw - 60px);
    margin-top: 0
  }

  .project-image--group .project-image__item.project-image--last {
    display: block
  }

  .project-image--group .project-image__item:nth-child(3n + 2) {
    margin: 0
  }
}

.load-next {
  overflow: hidden
}

.load-next .wrapper {
  opacity: 0
}

.load-next #stage {
  position: fixed
}

.load-next [data-fill=p2] {
  opacity: 1
}

#awwwards {
  position: absolute;
  bottom: 24vw;
  left: 0;
  width: 90px;
  height: 135px;
  text-indent: -666em;
  overflow: hidden;
  z-index: 9;
  transition: all 1s ease
}

@media screen and (max-width:767px) {
  #awwwards {
    display: none
  }
}

#awwwards a {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 90px;
  height: 135px;
  background-repeat: no-repeat;
  background-size: 90px 135px
}

.client-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-top: 2em
}

.client-list li {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  position: relative;
  line-height: 2;
  width: 46%
}

.client-list li:first-child,
.client-list li:nth-child(2) {
  border-top: 1px solid rgba(0, 0, 0, .1)
}

@media screen and (max-width:767px) {
  .client-list li {
    font-size: 20px
  }
}

.client-list li:before {
  content: '';
  opacity: .75;
  display: inline-block;
  margin-right: .6944vw;
  height: 100%;
  width: .83328vw;
  height: .6944vw;
  background: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="10px" viewBox="0 0 12 10"><polygon fill="currentColor" points="7.122,0.393 6.392,1.123 9.753,4.483 0,4.483 0,5.517 9.753,5.517 6.392,8.877 7.122,9.607 11.73,5 "/></svg>') no-repeat 0;
  background-size: contain
}

@media screen and (max-width:767px) {
  .client-list li:before {
    width: 12px;
    height: 10px;
    margin-right: 10px
  }
}

.services {
  width: 100%;
  background: #c7e3ee;
  padding: 9.7216vw 0 11.1104vw
}

.services .services__title {
  font-size: 3.05536vw;
  line-height: 1.2
}

@media screen and (max-width:767px) {
  .services .services__title {
    font-size: 22px;
    padding: 30px 0
  }
}

.services .services__title p {
  margin-top: 4.99968vw
}

@media screen and (max-width:767px) {
  .services .services__title p {
    margin: 20px 0 50px
  }
}

.services .services__list h3 {
  margin: 0 0 3.472vw
}

.services .services__list ul {
  border-top: 1px solid rgba(0, 0, 0, .1)
}

.services .services__list li {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  position: relative;
  line-height: 2
}

@media screen and (max-width:767px) {
  .services .services__list li {
    font-size: 20px
  }
}

.services .services__list li:before {
  content: '';
  opacity: .75;
  display: inline-block;
  margin-right: .6944vw;
  height: 100%;
  width: .83328vw;
  height: .6944vw;
  background: url('data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="10px" viewBox="0 0 12 10"><polygon fill="currentColor" points="7.122,0.393 6.392,1.123 9.753,4.483 0,4.483 0,5.517 9.753,5.517 6.392,8.877 7.122,9.607 11.73,5 "/></svg>') no-repeat 0;
  background-size: contain
}

@media screen and (max-width:767px) {
  .services .services__list li:before {
    width: 12px;
    height: 10px;
    margin-right: 10px
  }
}

.awards {
  width: 100%;
  background: #f6ece0;
  padding: 9.7216vw 0 11.1104vw
}

.awards .awards__title {
  font-size: 3.05536vw;
  line-height: 1.2
}

.awards .awards__title p {
  margin-top: 4.99968vw
}

@media screen and (max-width:767px) {
  .awards .awards__title p {
    margin: 20px 0 50px
  }
}

@media screen and (max-width:767px) {
  .awards .awards__title {
    font-size: 19px;
    padding: 30px 0
  }
}

.awards .awards__list {
  font-size: 1.52768vw;
  line-height: 1.45
}

@media screen and (max-width:767px) {
  .awards .awards__list {
    font-size: 19px
  }
}

.awards .awards__list h3 {
  margin: 0 0 3.472vw
}

.small {
  font-family: garamond-premier-pro-display, serif;
  font-size: .97216vw;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin: 0
}

@media screen and (max-width:767px) {
  .small {
    font-size: 10px
  }
}

.small.section-title {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 6.944vw
}

#js-view {
  position: relative;
  z-index: 3;
  overflow-x: hidden;
}

.box,
.projects {
  transform: translateZ(0)
}

.box {
  opacity: 1;
  transition: opacity .5s ease-in, transform 1.7s cubic-bezier(0, .14, .19, 1)
}

.box.hide {
  opacity: 0;
  transform: translate3d(0, 10%, 0)
}

.box.in-view {
  opacity: 1
}

.box.in-view,
.project--full {
  transform: translateZ(0)
}

.wrapper {
  position: relative;
  z-index: 3;
  background: #fff;
  overflow: hidden
}

.before-footer {
  height: 100vh;
  width: 100%;
  position: relative;
  pointer-events: none;
  z-index: 5;
  transition: opacity .91s cubic-bezier(0, .14, .19, 1), transform .91s ease
}

.is-home .before-footer {
  display: none
}

.wrapper {
  transform: translateZ(0);
  transition: transform .91s ease
}

.footer-visible .project-footer {
  z-index: 4;
  opacity: 1;
  transform: translateZ(0);
  transition: opacity .91s cubic-bezier(0, .14, .19, 1), z-index 0s ease .91s
}

.footer-visible .project-footer h3 {
  opacity: 1;
  transition-delay: .45s
}

@media screen and (max-width:767px) {
  .footer-visible .project-footer {
    z-index: 2
  }
}

.footer-visible .footer__bg {
  transform: translateZ(0)
}

.footer-visible .wrapper {
  transform: translate3d(0, -50vh, 0)
}

@media screen and (max-width:767px) {
  .footer-visible .wrapper {
    transform: translateZ(0)
  }
}

.footer-visible .before-footer {
  transform: translateZ(0);
  pointer-events: none
}

@media screen and (max-width:767px) {
  .footer-visible .before-footer {
    pointer-events: none
  }
}

.footer-visible .arrow--left,
.footer-visible .hamburger .hamburger-box {
  color: #fff
}

.footer-visible .project-footer .projects-menu li {
  opacity: 1
}

.footer-visible .project-footer .projects-menu li:nth-child(10) {
  transition-delay: 0s
}

.footer-visible .project-footer .projects-menu li:nth-child(9) {
  transition-delay: .05s
}

.footer-visible .project-footer .projects-menu li:nth-child(8) {
  transition-delay: .1s
}

.footer-visible .project-footer .projects-menu li:nth-child(7) {
  transition-delay: .15s
}

.footer-visible .project-footer .projects-menu li:nth-child(6) {
  transition-delay: .2s
}

.footer-visible .project-footer .projects-menu li:nth-child(5) {
  transition-delay: .25s
}

.footer-visible .project-footer .projects-menu li:nth-child(4) {
  transition-delay: .3s
}

.footer-visible .project-footer .projects-menu li:nth-child(3) {
  transition-delay: .35s
}

.footer-visible .project-footer .projects-menu li:nth-child(2) {
  transition-delay: .4s
}

.footer-visible .project-footer .projects-menu li:nth-child(1) {
  transition-delay: .45s
}

.project-footer {
  padding-bottom: 4.1664vw;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
  height: 100vh;
  width: 100%;
  z-index: 2;
  transition: opacity .91s cubic-bezier(0, .14, .19, 1), z-index 0s ease 0s;
  transform: translateZ(0);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center
}

@media screen and (max-width:767px) {
  .project-footer {
    padding-bottom: 0
  }
}

.project-footer .overlay {
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  pointer-events: none;
  will-change: opacity;
  transform: translateZ(0)
}

.project-footer .row {
  transform: translateZ(0)
}

.project-footer .home-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.3888vw 6vw;

}

@media screen and (max-width:767px) {
  .project-footer .home-footer {
    display: none
  }
}

.project-footer h3 {
  font-size: .97216vw;
  text-transform: uppercase;
  letter-spacing: .1em;
  opacity: 0;
  transition: opacity 1s;
  transition-delay: 0s
}

@media screen and (max-width:980px) {
  .project-footer h3 {
    font-size: 14px
  }
}

@media screen and (max-width:767px) {
  .project-footer h3 {
    font-size: 10px;
    display: none
  }
}

.project-footer .row {
  z-index: 2
}

.project-footer .projects-menu {
  font-size: 5.4vh;
  line-height: 1.3;
  padding: 0
}

.project-footer .projects-menu li {
  opacity: 0;
  transition: opacity 1s
}

.project-footer .projects-menu li:nth-child(1) {
  transition-delay: 0s
}

.project-footer .projects-menu li:nth-child(2) {
  transition-delay: .05s
}

.project-footer .projects-menu li:nth-child(3) {
  transition-delay: .1s
}

.project-footer .projects-menu li:nth-child(4) {
  transition-delay: .15s
}

.project-footer .projects-menu li:nth-child(5) {
  transition-delay: .2s
}

.project-footer .projects-menu li:nth-child(6) {
  transition-delay: .25s
}

.project-footer .projects-menu li:nth-child(7) {
  transition-delay: .3s
}

.project-footer .projects-menu li:nth-child(8) {
  transition-delay: .35s
}

.project-footer .projects-menu li:nth-child(9) {
  transition-delay: .4s
}

.project-footer .projects-menu li:nth-child(10) {
  transition-delay: .45s
}

@media (min-aspect-ratio:980 / 700) {
  .project-footer .projects-menu {
    font-size: 5.4vh
  }
}

@media (max-aspect-ratio:980 / 700) {
  .project-footer .projects-menu {
    font-size: 3.6vw
  }
}

@media screen and (max-width:767px) {
  .project-footer .projects-menu {
    font-size: 8vw
  }
}

.project-footer .projects-menu a {
  font-family: garamond-premier-pro-display, serif;
  display: inline-block;
  color: currentColor
}

.project-footer .projects-menu a:after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left center;
  margin-top: -4px;
  transition: transform .31s cubic-bezier(.165, .84, .44, 1)
}

.project-footer .projects-menu a .is-active:after,
.project-footer .projects-menu a:hover:after {
  transform: scaleX(1);
  transition: transform .51s cubic-bezier(.165, .84, .44, 1)
}

.project-footer .footer-container {
  height: 100vh;
  background-color: #000;
  padding: 12vh 0 17.8vh
}

/*# sourceMappingURL=style.css.map */


.cover__logo img {
  height: auto;
  width: 100%;
  object-fit: fill;
  font-family: sans-serif;
  background: transparent;
}


* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.item {
  position: relative;
  overflow: hidden;

}

.item img {
  max-width: 100%;

  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.item:hover img {
  -moz-transform: scale(1000.1);
  -webkit-transform: scale(1000.1);
  transform: scale(1000.1);
}

@media (orientation: portrait) {
  .project--full {
    height: auto;
  }

  .project--full {
    height: auto;
  }

  .project--full img {
    width: 100%;
    height: auto;
    object-fit: fill;
    font-family: 'object-fit: fill;';
  }
}
</style>

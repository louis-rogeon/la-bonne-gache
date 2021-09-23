<template>
  <Header />
  <Body />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue"; // @ is an alias to /src
import Body from "@/components/Body.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

@Options({
  components: {
    Header,
    Body,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: $black;
}
html {
  height: initial;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  font-family: $text-font;
  font-weight: lighter;
  text-align: center;
  color: $black;
}
h1 {
  margin: 50px 0;
  font-size: 3em;
}
h2 {
  margin: 0;
  padding: 30px 0;
  font-size: 2.5em;
}
h3 {
  margin: 50px 0;
  font-size: 2em;
}
h5 {
  margin: 10px 0;
  font-size: 1.2em;
}
</style>

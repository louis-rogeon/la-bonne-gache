<template>
  <header>
    <SocialNetworksBanner />
    <div id="menu">
      <router-link id="logo" to="/">
        <img src="logo.jpg"/>
        La Bonne Gache
      </router-link>
      <NavBar />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SocialNetworksBanner from "@/components/SocialNetworksBanner.vue"; // @ is an alias to /src
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

@Options({
  components: {
    SocialNetworksBanner,
    NavBar
  },
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: fixed;
  height: 140px;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 100;

  #menu {
    display: flex;
    height: 90px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #logo {
      flex-shrink: 3;
      color: $black;
      font-size: 2rem;
      font-family: $logo-font;

      img {
        height: 70px;
        width: 70px;
        vertical-align: middle;
      };
    }
  }
}

@media screen and (max-width:979px){
  header {
    #menu {
      position: absolute;
      top: 0;
      justify-content: space-between;


      #logo {
        margin-left: 30px;
        font-size: 1.5rem;

        img {
          height: 60px;
          width: 60px;
        }
      }
    }
  }
}
</style>

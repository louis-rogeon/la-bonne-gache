<template>
<div id="navbar">
  <nav :class="{'active': isBurgerActive}">
    <router-link to="/concept" @click="collapseMenu">Le Concept</router-link>
    <router-link to="/nos-producteurs" @click="collapseMenu">Nos producteurs</router-link>
    <router-link to="/evenements" @click="collapseMenu">Évènements</router-link>
    <router-link to="/privatisation" @click="collapseMenu">Privatisation</router-link>
    <router-link to="/infos-contact" @click="collapseMenu">Infos & Contact</router-link>
  </nav>

  <div class="burger" :class="{'active': isBurgerActive}" @click="toggleIsBurgerActive">
    <span class="burger-line"></span>
    <span class="burger-line"></span>
    <span class="burger-line"></span>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isBurgerActive: false
    }
  },
  methods: {
    toggleIsBurgerActive() {
      this.isBurgerActive = !this.isBurgerActive
    },
    collapseMenu() {
      this.isBurgerActive = false;
    }
  }
})
</script>

<style scoped lang="scss">
#navbar {
  nav {
    height: 90px;
    line-height: 90px;
    font-family: $text-font;

    > * {
      display: inline-block;
      height: 100%;
      margin-left: 40px;
      font-size: 1em;
      color: black;

      &:hover {
        color: $primary;
        transition: color ease $transition-time;
      }

      &.router-link-active {
        color: $primary;
        border-bottom: 2px solid $primary
      }
    }
  }

  .burger {
    display: none;
  }
}

@media screen and (max-width:979px){
  #navbar {
    nav {
      display: none;

      &.active {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 100px;
        background-color: $white;

        > * {
          display: block;
          height: 70px;
          margin-right: 40px;
          text-align: center;

          &.router-link-active {
            border-bottom: 0;
            font-weight: bold;
          }
        }
      }
    }

    .burger {
      position: relative;
      display: inline-block;
      margin-right: 20px;
      height: 30px;
      width: 40px;
      cursor: pointer;
      z-index: 300;

      &-line {
        position: absolute;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 4px;
        border-radius: 5px;
        background-color: $primary;

        &:nth-child(1) {
          top: 0;
        }

        &:nth-child(2) {
          top: 13px;
        }

        &:nth-child(3) {
          top: 26px;
        }
      }

      &.active {
        .burger-line {
          top: 11px;
          transform: rotate(-45deg);

          &:nth-child(1) {
            top: 11px;
            transform: rotate(45deg);
          }
        } 
      }
    }
  }
}
</style>
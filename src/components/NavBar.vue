<template>
<div id="navbar">
  <nav>
    <router-link to="/concept">Notre Concept</router-link>
    <router-link to="/nos-producteurs">Nos producteurs</router-link>
    <router-link to="/evenements">Évènements</router-link>
    <router-link to="/privatisation">Privatisation</router-link>
    <router-link to="/infos-contact">Infos & Contact</router-link>
  </nav>

  <div class="burger" :class="{'active': isBurgerActive}" @click="toggleIsBurgerActive">
    <span class="burger-line"></span>
    <span class="burger-line"></span>
    <span class="burger-line"></span>
  </div>
</div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isBurgerActive: false
    }
  },
  // methods: {
  //   toggleIsBurgerActive() {
  //     this.isBurgerActive = !this.isBurgerActive
  //   }
  // }
}
</script>

<style scoped lang="scss">
#navbar {
  nav {
    height: 90px;
    line-height: 90px;

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
    }
  }
}
</style>
<template>
  <section id="body">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#body {
  max-width: 100%;
  margin-top: 140px;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <section id="social-networks-banner">
    <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
  </section>
</template>

<style scoped lang="scss">
#social-networks-banner {
  height: 50px;
  width: 100%;
  padding-left: 40px;
  line-height: 50px;
  background-color: rgb(246, 240, 169);

  a {
    &:not(:first-child) {
      margin-left: 20px;
    }

    .fab {
      font-size: 20px;
    }
  }
}

@media screen and (max-width:979px){
  #social-networks-banner {
    position: absolute;
    top: 90px;
  }
}
</style>
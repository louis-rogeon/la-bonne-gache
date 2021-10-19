<template>
  <section id="social-networks-banner">
    <a href="https://www.facebook.com/Labonnegache" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.instagram.com/labonnegache" target="_blank"><i class="fab fa-instagram"></i></a>
  </section>
</template>

<style scoped lang="scss">
#social-networks-banner {
  height: 50px;
  width: 100%;
  padding-left: 40px;
  line-height: 75px;
  background-color: $white;
  text-align: center;

  a {
    &:not(:first-child) {
      margin-left: 100px;
    }

    .fab {
      color: $primary;
      font-size: 20px;
    }
  }
}

@media screen and (max-width:979px){
  #social-networks-banner {
    position: absolute;
    top: 90px;
    text-align: left;
    line-height: 50px;
  }
}
</style>
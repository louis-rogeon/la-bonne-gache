<template>
  <div class="home" title="1920x1080">
    <h1>La Bonne Gâche</h1>
    <div class="home-actions">
      <router-link to="/evenements" class="o-btn large o-btn--white o-btn--outlined-white" variant="white" outlined>Les évènements à venir</router-link>
      <router-link to="/privatisation" class="o-btn large o-btn--white o-btn--outlined-white" variant="white" outlined>Privatiser</router-link>
      <router-link to="/infos-contact" class="o-btn large o-btn--white o-btn--outlined-white" variant="white" outlined>Informations & contact</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    height: 840px;
    padding-top: 7%;
    color: white;

    background-image: url(/home_stock.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: rgb(35, 72, 56);

    .home-actions {
      margin-top: 5%;
      text-align: center;

      .o-btn {
        margin: 10px 20px;
      }
    }
  }
</style>
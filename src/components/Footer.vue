<template>
  <footer>
    <span id="footer-copyright">&copy; 2021 - La Bonne Gâche. Développé avec enthousiasme par Louis Rogeon</span>
    <span id="footer-contact">44 rue de la Croix Rousse, 69004 Lyon. Tél : 04 72 21 21 21</span>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  font-size: .8rem;
  background-color: $primary;
  color: white;
}
</style>

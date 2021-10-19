<template>
<div class="infos-contact">
  <h2>Infos & Contact</h2>
  <div class="infos-contact-content">
    <div class="overlapping-insert our-story" title="1920x1080">
      <div class="content">
        <h3>Nous rencontrer</h3>
        <table>
          <tr>
            <td>Lundi</td><td>FERME</td>
          </tr>
          <tr>
            <td>Mardi</td><td>FERME</td>
          </tr>
          <tr>
            <td>Mercredi</td><td>17h - 0h</td>
          </tr>
          <tr>
            <td>Jeudi</td><td>17h - 0h</td>
          </tr>
          <tr>
            <td>Vendredi</td><td>17h - 1h</td>
          </tr>
          <tr>
            <td>Samedi</td><td>12h - 1h</td>
          </tr>
          <tr>
            <td>Dimanche</td><td>12h - 0h</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="alongside-insert our-story">
      <div class="content">
        <h3>Nous trouver</h3>
        <p class="address"><a class="link" href="https://goo.gl/maps/cfr1zK54gVfBDAK89">37, rue Imbert Colomes, 69001 Lyon</a></p>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.9785073738353!2d4.833202515567778!3d45.77162097910581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eafc903a82ad%3A0xba3d6b7a9baac78e!2s37%20Rue%20Imbert-Colom%C3%A8s%2C%2069001%20Lyon!5e0!3m2!1sfr!2sfr!4v1634664462280!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <p>
          Station de métro le plus proche : <strong>Croix Paquet</strong><br/> 
          Station de Velov la plus proche : <strong>1035 -  Quai Lassagne</strong>
        </p>
      </div>
      <div class="image">
        <img src="/cha_stock-min.jpg" title="490x490" alt="Le Mot de Charlotte" />
      </div>
    </div>
    <div class="alongside-insert our-story">
      <div class="image">
        <img src="/val_stock-min.jpg" title="490x490" alt="Le Mot de Valentin" />
      </div>
      <div class="content social-networks">
        <h3>Suivez-nous sur les réseaux</h3>
        <p>
          <a class="logo-link" href="https://www.facebook.com/Labonnegache" target="_blank"><i class="fab fa-facebook-square"></i></a>
          <a class="logo-link" href="https://www.instagram.com/labonnegache" target="_blank"><i class="fab fa-instagram"></i></a>
        </p>
      </div>
    </div>
    <div class="alongside-insert our-story">
      <div class="content contact">
        <h3>Nous contacter</h3>
        <p>
          <a class="logo-link" href="tel:+33412345678" target="_blank"><i class="fas fa-phone-square-alt"></i>+33412345678</a>
        </p>
        <p>
          <a class="logo-link" href="mailto:myemailaddress@provider.com" target="_blank"><i class="fas fa-envelope"></i>myemailaddress@provider.com</a>
        </p>
      </div>
      <div class="image">
        <img src="/cha_stock-min.jpg" title="490x490" alt="Le Mot de Charlotte" />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const center = { lat: 45.771621, lng: 4.8332025 };
    const markerOptions = { position: center, title: 'La Bonne Gâche' };
    return { center, markerOptions };
  }
})
</script>

<style scope lang="scss">
table {
  margin: 0 auto;

  td {
    padding: 5px 10px;

    &:first-child {
      position: relative;
      &::after {
        content: ':';
        position: absolute;
        right: 0;
      }
    }

    &:last-child {
      font-weight: bold;
    }
  }
}

.map {
  display: inline-block;
  height: 200px;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}

.address {
  font-weight: bold;
  color: $primary;
}

.contact, .social-networks {
  h3 {
    margin-bottom: 100px;
  }
}

.contact {
  > p {
    margin-top: 50px; 
    i {
      margin-right: 20px;
    }
  }
}
</style>
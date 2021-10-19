<template>
  <section class="producers" :class="{'panel-active': isPanelActive }">
    <div class="side-panel">
      <div class="producer-list">
        <ul>
          <li v-for="item in producers" :key="item.id" @click="toggleFocus(item)" :class="{'active': activeProducer.id === item.id}">
            <div class="logos">
              <img v-for="logo in item.logos" :key="logo.id" :src="logo" />
            </div>
            <h5 class="product-name">
              {{ item.name }}
            </h5>
            <h6 class="product-producer">{{ item.producer }}</h6>
            <ul class="bullet-list">
              <li v-for="bullet in item.bullets" :key="bullet.id">
                {{ bullet }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <o-button rounded expanded @click="isPanelActive = false;">Retour</o-button>
    </div>
    <div class="map">
      <GoogleMap
        api-key="AIzaSyDwaLfc1pyWMmiGC72OoxgDhxENY4qIx-k"
        style="width: 100%; height: 100%"
        :center="activeProducer.position ? activeProducer.position : center"
        :zoom="5"
        >
        <Marker  v-for="item in producers" :key="item.id" :options="item" @click="toggleFocus(item)" />
      </GoogleMap>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import abSvg from '@/assets/svg/ab.svg';
import fairTradeSvg from '@/assets/svg/fairtrade.svg';
import glutenFreeSvg from '@/assets/svg/gluten-free.svg';

export default defineComponent({
  components: { GoogleMap, Marker },
  data() {
    return {
      isPanelActive: false,
      center: { lat: 45.8016117, lng: 5.6885236 },
      activeProducer: { id: null, position: this.center },
      producers: [
        { id: 'bs', position: { lat: 45.8016117, lng: 5.6885236 }, name: 'Orange/Orange sanguine', important: "Alternative à l'Orangina", producer: 'Mona – Appie', bullets: [
          "Brassé dans le Val d’Oise",
          "100% naturel : sans arôme (naturel ou de synthèse), sans conservateur, sans colorant, sans additif",
          "Jus et purées de fruits BIO et issus de l’agriculture française ou de l’Union Européenne"
        ], logos: [abSvg]},
        { id: 'app', position: { lat: 48.8884983, lng: 2.4105476 }, name: 'Limonade/Limonade citron vert', producer: 'Brasseurs Savoyards', bullets: [
          "Brassé en Savoie",
          "Respect du terroir",
          "Eau des Alpes",
          "Traçabilité des matières premières sélectionnées",
          "Aucuns conservateurs ni additifs",
          "Réduction des déchets"
        ]},
        { id: 'comcola', position: { lat: 45.7579293, lng: 4.7650904 }, name: 'Cola/Cola Sans Sucres', producer: 'Community Cola', bullets: [
          "Brassé en Allemagne",
          "Vocation sociale : 5 centimes/bouteille reversés à une association locale « Au tambour ». Elle vient en aide aux femmes victimes de précarité et violences",
          "Extraits naturels de noix de cola et avec du sucre issu du commerce équitable (Cola 0 = sans aspartame)"

        ], logos: [glutenFreeSvg, fairTradeSvg]},
        { id: 'hys', position: { lat: 45.7579293, lng: 4.7650904 }, name: 'Tonic/Ginger Beer', producer: 'Hysope', bullets: [
            "100% français : arômes, étiquettes, embouteillage",
            "Médaille d’or (Ginger Beer) et médaille d’argent (Tonic) 2021 au Spirit Business"
        ]},
        { id: 'bis', position: { lat: 45.4898477, lng: 4.5649533 }, name: 'Jus de fruits', producer: 'Bissardon', bullets: [
          "Auvergne-Rhône-Alpes, dans un rayon de 80 km autour de Saint-Paul-en-Jarez entre le Massif du Pilat et les Monts du Lyonnais",
          "Partenariat avec plus de 250 arboriculteurs issus d’exploitations familiales et favorisant une culture raisonnée des fruits",
          "Sans additifs, sans arômes et sans conservateurs"

        ]},
        { id: 'fils', position: { lat: 48.8848432, lng: 2.2884456 }, name: 'Cide de Pommes/Poires', producer: 'Fils de Pomme', bullets: [
          "Pommes et poires 100% françaises récoltées en ultra-local et mises en cuve à moins de 90km de Paris", 
          "Aucun ajout de sucre, de conservateur ou de produit chimiques",
          "Déchets (Marc de pommes) sont 100% recyclés et revalorisé (alimentation bovins)",
          "Ambassadeurs du recyclage (partenariat avec Adelph)",
          "Finance la sauvegarde des abeilles en Normandie"
        ]}
      ]
    }
  },
  setup() {
    return {
      abSvg,
      fairTradeSvg,
      glutenFreeSvg
    };
  },
  methods: {
    toggleFocus(producer: any) {
      this.activeProducer = producer.id === this.activeProducer.id
        ? { id: null, position: producer.position }
        : producer;
      this.isPanelActive = true;
    }
  }
})
</script>

<style scoped lang="scss">
.producers {
  height: calc(100vh - 190px);

  .map {
    display: inline-block;
    height: 100%;
    width: 70%;
  }

  .side-panel {
    display: inline-block;
    height: 100%;
    width: 30%;
    background-color: $white;
    overflow: hidden;
    overflow-y: auto;

    > .producer-list {
      > ul {
        margin: 0;
        padding: 20px;
        list-style: none;

        > li {
          margin: 0;
          padding: 20px;
          border-top: 1px solid rgba($grey-dark, .1);
          border-left: 1px solid rgba($grey-dark, .1);
          box-shadow: 2px 2px 2px rgba($grey-dark, .2);
          cursor: pointer;

          &:not(:first-child) {
            margin-top: 10px;
          }

          &:hover {
            transform: translate(-2px, -2px);
            box-shadow: 4px 4px 4px rgba($grey-dark, .2);
          }

          &.active {
            .bullet-list {
              display: block;
            }
          }

          .logos {
            margin-top: -10px;
            text-align: center;

            img {
              height: 30px;
              width: 30px;
              margin: 0 10px;
            }
          }

          .product-name {
            position: relative;
            margin: 0;
            font-weight: initial;
            font-size: 1.2rem;
            color: $primary;
          }

          .product-producer {
            margin: 0;
            font-weight: bold;
            font-size: 1rem;
          }

          .bullet-list {
            display: none;
            margin: 20px 0;
            font-size: .9rem;
            transition: all ease .3s;
          }
        }
      }
    }

    .o-btn {
      display: none;
    }
  }
}

@media screen and (max-width:979px) {
  .producers {
    height: calc(100vh - 190px);

    &.panel-active {
      .side-panel {
        position: fixed;
        top: 50%;
        left: 50%;
        display: block;
        transform: translate(-50%, -50%);
      }

      .map {
        display: none;
      }
    }

    .map {
      width: 100%;
    }

    .side-panel {
      display: none;
      height: 85vh;
      width: 85vw;
      border: 2px solid rgba($grey-dark, .5);
      border-radius: 10px;
      box-shadow: 4px 4px 4px rgba($grey-dark, .7);
      z-index: 300;

      > .producer-list {
        height: calc(100% - 110px);
        overflow-y: auto;
      }

      .o-btn {
        position: absolute;
        bottom: 20px;
        display: block;
        height: 70px;
        width: calc(100% - 100px);
        margin: 20px 50px 0;

        &__wrapper {
          font-size: 1.5rem
        }
      }
    }
  }
}
</style>

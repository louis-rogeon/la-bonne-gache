<template>
<h2>Il était une fois ...</h2>
<div class="presentation">
  <div class="overlapping-insert our-story" title="1920x1080">
    <div class="content">
      <h3>... La Bonne Gâche</h3>
      <p>
        C’est l’histoire de deux amoureux, Charlotte et Valentin. Des amoureux de vins, de bières et de bons produits.
        Epicuriens, bons vivants oui…mais c’est aussi une volonté de consommer différemment.
        Une envie de participer à leur manière à la vie locale.
        Tout cela, dans la bonne humeur, du partage et de la bonne musique ! 
      </p>
    </div>
  </div>
  <div class="alongside-insert our-story">
    <div class="content">
      <h3>Petit mot des patrons</h3>
      <p>
        C’était un rêve de créer notre bébé et devenir patron. Un bar à notre image sans prise de tête avec des produits sélectionnés par nos soins. 
        Nous voulons privilégier un retour aux sources, comme avant, avec une vie plus simple, plus écolo et plus humaine !
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
    <div class="content">
      <h3>C’est quoi une gâche ?</h3>
      <div class="gache-definition">
        <p class="head"><span class="word">Gâche</span> <span class="pronunciation">\ɡɑʃ\</span> féminin</p>
        <p class="def"><span class="context">(Argot)</span><span class="meaning">Place, emploi, situation</span></p>
        <p class="def"><span class="context">(En particulier)</span><span class="meaning">Dans l’argot des poilus, c’est une bonne place, une planque.</span></p>
        <p class="def"><span class="context">(Lyonnais)</span><span class="meaning">Une place pour s’asseoir, se garer, se poser.</span></p>  
      </div>
    </div>
  </div>
  <h3>Les Commandements de La Bonne Gâche</h3>
  <ul>
    <li>
      <h5><span class="bullet-point">1.</span>Une bonne gâche tu seras</h5>
      <p>Toujours passer un bon moment bien entouré : par de bons amis et de bons produits</p>
    </li>
    <li>
      <h5><span class="bullet-point">2.</span>Une nouvelle manière de consommer, tu trouveras</h5>
      <p>Proposer des produits de qualité et au plus possible, bons pour la santé (Agriculture Biologique)</p>
    </li>
    <li>
      <h5><span class="bullet-point">3.</span>Les producteurs et l’économie locale, tu respecteras</h5>
      <p>Se fournir majoritairement auprès de producteurs locaux ou français partageant cette même logique de durabilité, avec des produits frais et de qualité. Les rémunérer au prix juste</p>
    </li>
    <li>
      <h5><span class="bullet-point">4.</span>Le lien entre les clients et les producteurs, tu deviendras</h5>
      <p>Promouvoir nos petits producteurs auprès des clients et les faire grandir avec nous</p>
    </li>
    <li>
      <h5><span class="bullet-point">5.</span>De la bonne musique, tu proposeras</h5>
      <p>House, techno, reggae, old school, funk… Une ambiance adaptée au mood de la journée. Toi aussi, participe à cette ambiance lors des soirées « Ramène ton vinyle » !</p>
    </li>
    <li>
      <h5><span class="bullet-point">6.</span>Dans la vie locale de quartier, tu t’inscriras</h5>
      <p>Devenir un acteur majeur des pentes via l’organisation d’évènements locaux, associatifs, culturels et musicaux</p>
    </li>
    <li>
      <h5><span class="bullet-point">7.</span>Les déchets, tu recycleras</h5>
      <p>Réduire les déchets au maximum et lorsque cela n’est pas possible, les recycler correctement (plastique, verre, carton, biodéchets)</p>
    </li>
    <li>
      <h5><span class="bullet-point">8.</span>Une seconde vie, tu donneras</h5>
      <p>Construire avec l’existant. Récupérer et recycler. Consommer intelligemment</p>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">
ul {
  width: 680px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 0;
  text-align: center;
  list-style: none;

  li {
    &:not(:first-child) {
      margin-top: 30px;
    }

    h5 {
      color: rgb(35, 72, 56); 

      .bullet-point {
        margin-right: 20px;
      }
    }

    p {
      margin: 0;
    }
  }
}
.content {
  .gache-definition {
    .head {
      margin: 30px 0;
      text-align: left;
      font-style: italic;
    }

    .def {
      margin: 10px 0;
      text-align: left;

      .context {
        margin-right: 20px;
        font-size: .8rem;
        font-weight: bold;
      }

      .meaning {
        font-size: .9rem;
      }
    }

    .word {
      font-weight: bold;
      font-style: normal;
    }

    .pronunciation {
      color: blue;
    }
  }
}
</style>

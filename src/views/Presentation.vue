<template>
  <div class="presentation">
    <h2>Le Concept de La Bonne Gâche</h2>
    <div class="overlapping-container our-story" title="1920x1080">
      <div class="content">
        <h3>Notre Histoire</h3>
        <p>
          La Bonne Gâche, c’est l’histoire de deux amoureux, Charlotte et Valentin. Des amoureux de vins, de bières et de bons produits. Epicuriens, bons vivants oui… Mais c’est aussi une volonté de consommer différemment. Une envie de participer à leur manière à la vie locale. Tout cela, dans la bonne humeur, le partage et une ambiance rétro-chic ! 
        </p>
      </div>
    </div>
    <div class="alongside-container our-story">
      <div class="content">
        <h3>Le Mot de la Patronne</h3>
        <p>
          <em>Au temps de nos grands-parents, la vie était plus simple, plus écolo, plus humaine. C’est ce retour aux sources que nous souhaitons privilégier à La Bonne Gâche.</em> <strong>Charlotte</strong>
        </p>
      </div>
      <div class="image">
        <img src="/cha_stock.jpg" title="490x490" alt="Le Mot de Charlotte" />
      </div>
    </div>
    <div class="alongside-container our-story">
      <div class="image">
        <img src="/val_stock.jpg" title="490x490" alt="Le Mot de Valentin" />
      </div>
      <div class="content">
        <h3>Le Mot du Patron</h3>
        <p>
          <em>Bon là wallha j'avais la flemme d'écrire un texte, pour l'instant y'a que néné qui en a fait un. L'investissement fournit par chaque partie n'est peut-être pas vraiment équivalent</em> <strong>Valentin</strong>  
        </p>
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
  padding: 50px;
  background-color: white;

  h3 {
    margin-bottom: 70px;
  }

  p {
    font-size: 1em;
    line-height: 1.6em;
    text-align: center;

    em {
      font-style: italic;
      margin-right: 40px;

      &::before, &::after {
        position: relative;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: .7em;
      }
      &::before {
        top: -10px;
        left: -10px;
        content: "\f10d";
      }
      &::after {
        top: -10px;
        right: -10px;
        content: "\f10e";
      }
    }
  }
}
.overlapping-container {
  height: 620px;
  min-width: 980px;
  position: relative;
  background-image: url(/cha_val_stock.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(35, 72, 56);
  
  .content {
    position: absolute;
    width: 490px;
    bottom: 0;
    left: 50%;
  }
  .image {
    height: 620px
  }
}
.alongside-container {
  min-width: 980px;
  height: 490px;
  position: relative;

  .content, .image {
    position: absolute;
    top: 0%;
    display: inline-block;
    height: 490px;
    width: 490px;
    background-color: rgb(240, 237, 230);
    overflow: hidden;
  }
  .image img {
    width: 150%;
    height: 100%;
  }
  div:first-child {
    right: 50%;
  }
  div:last-child {
    left: 50%;
  }
}
</style>

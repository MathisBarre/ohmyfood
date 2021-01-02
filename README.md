# ohmyfood

Troisième projet du parcours "Développeur web" chez OpenClassroom. L'objectif d'intégrer puis de dynamiser une page web avec des animations CSS en utilisant le préprocesseur Sass

Vous pouvez retrouver le [brief complet ici](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DW_P3/Brief%20cre%CC%81atif%20-%20Ohmyfood!.pdf)

![screenshot du site](./src/img/screenshot.png)

## Objectifs

1. Développer un site proposant le menu de 4 grands restaurants parisiens.
2. Permettre la réservation en ligne et la composition de menus.

## Livrables

### Pages à intégrer selon les maquettes

- **Page d’accueil**
- **Pages de menu (x4)**

### Animation

**Boutons**
- Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir. L’ombre portée devra également être plus visible.
- À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, unbouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra se remplir progressivement. Pour cette première version, l’effet peut être apparaître au survol au lieu du clic.

**Page d’accueil**
- Quand l’application aura plus de menus, un “loading spinner” sera nécessaire. Sur cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini,toute proposition est donc la bienvenue tant qu’elle est cohérente avec la chartegraphique du site.

**Pages de menu**
- À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe “Entrée”, “Plat” et “Dessert”. Un exemple de l’effet attendu est fourni.
- Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser dela droite vers la gauche. Pour cette première version, l’effet peut apparaître au survolau lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension. Un exemple de l’effet attendu est fourni

## Technologies

**Autorisés:** HTML / CSS / Sass

**Recommandée:** HTML / Sass

**Interdit:** Javascript / Frameworks CSS / Inline CSS

## Notes

**Polices :**
- Logo & titres: Shrikhand
- Texte: Roboto

**Couleurs :**
- Primaire: #9356DC
- Secondaire: #FF79DA
- Tertiaire: #99E2D0

**Contraintes :**
- Approche mobile-first: oui
- Maquette mobile : oui
- Maquette desktop : à improviser
- Validation W3C HTML : à passer, warning autorisés
- Validation W3C CSS : à passer, warning autorisés
- Compatibilité : Dernières versions de Chrome, Firefox & Safari

## Convention nommage commit 

Gitmoji https://gitmoji.carloscuesta.me/

## Tester le projet

Pour tester simplement & rapidement, veuillez préférer visiter la démo en ligne : [ohmyfood.mathisbarre.com](https://ohmyfood.mathisbarre.com/)

Sinon, clonez le projet
```terminal
git clone https://github.com/MathisBarre/MathisBarre_3_04112020.git
```
Installez les dépendances
```terminal
yarn install
```
Et lancez le serveur !
```terminal
yarn dev
```
Vous pouvez aussi build le projet pour la production : 
```terminal
yarn build
```
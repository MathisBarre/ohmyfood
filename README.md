# ohmyfood

Troisième projet du parcours "Développeur web" chez OpenClassroom. L'objectif d'intégrer puis de dynamiser une page web avec des animations CSS en utilisant le préprocesseur Sass

Vous pouvez retrouver le [brief complet ici](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DW_P3/Brief%20cre%CC%81atif%20-%20Ohmyfood!.pdf)

## Objectifs

1. Développer un site proposant le menu de 4 grands restaurants parisiens.
2. Permettre la réservation en ligne et la composition de menus.

## Livrables

### Contenu des pages

**Page d’accueil (x1)**
- Affichage de la localisation des restaurants. À terme il sera possible de choisir sa localisation pour trouver des restaurants proches d’un certain lieu.
- Une courte présentation de l’entreprise.
- Une section contenant les 4 menus sous forme cartes. Au clic sur la carte,l’utilisateur est redirigé vers la page du menu.

**Pages de menu (x4)**
- 4 pages contenant chacune le menu d’un restaurant.

**Footer**
- Le footer est identique sur toutes les pages.
- Au clic sur “Contact”, un renvoi vers une adresse mail est effectué.

**Header**
- Le header est présent sur toutes les pages.
- Sur la page d’accueil, il contient le logo du site.
- Sur les pages de menu, il contient en plus un bouton de retour vers la page d’accueil

### Animation

**Boutons**
- Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir.L’ombre portée devra également être plus visible.
- À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, unbouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra seremplir progressivement. Pour cette première version, l’effet peut être apparaître ausurvol au lieu du clic.

**Page d’accueil**
- Quand l’application aura plus de menus, un “loading spinner” sera nécessaire. Sur cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini,toute proposition est donc la bienvenue tant qu’elle est cohérente avec la chartegraphique du site.

**Pages de menu**
- À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe “Entrée”, “Plat” et “Dessert”. Un exemple de l’effet attendu est fourni.
- Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus.Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser dela droite vers la gauche. Pour cette première version, l’effet peut apparaître au survolau lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points desuspension. Un exemple de l’effet attendu est fourni

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
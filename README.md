# Budget-monitor 💸 

Budget-monitor est une petite application destinée à suivre mes dépenses au fil des mois.

L'appli est uploadée sur Vercel, voici le [lien](https://budget-monitor-react.vercel.app/) ! 

## Présentation 🌟

Mon objectif était de monter une petite application React permettant un suivi dynamique de données. J'ai souhaité mettre en place un suivi de mes dépenses mensuelles, un peu de la même manière que ce qui est fait par les applications bancaires.

Je voulais faire une application simple à utiliser, avec deux composants principaux et l'entièreté des informations qui s'affichent dynamiquement sur une home page.

J'ai utilisé Vite pour monter rapidement l'application sur le framework React. 

L'application est prévue pour être utilisée sur un pc, mais j'ai également fait une version responsive pour mobile pour l'utiliser sur téléphone.

## Comment ça marche ? 📖

### Section budget

Le tableau Budget permet de sélectionner le mois souhaité et d'afficher les informations correspondantes.
- Sélection du mois et de l'année
- Affichage des revenus du mois (avec un salaire par défaut). Il est possible d'éditer les revenus du mois en cliquant sur l'icone.
- Affichage des informations de suivi du mois avec 
    - Le nombre de dépenses
    - Le total dépensé
    - Le total disponible
    - Le ratio dépensé / disponible format pourcentage et format progress bar

Les informations se mettent dynamiquement à jour à chaque changement. La progress bar passe au jaune puis au rouge à l'approche du maximum pour alerter sur le ratio.

[Image]

### Section dépenses

Le tableau des dépenses est affiché en dessous du suivi budgétaire. On y retrouve pour le mois sélectionné la liste des dépenses avec : 
- La date
- Le libellé
- Un tag pour caractériser la dépense 
- Le montant de la dépense

[image]

#### Ajouter une dépenses
On peut ajouter une dépense en cliquant sur le bouton Ajouter une dépense. Une modale s'ouvre avec un formulaire permettant de saisir les informations de la dépense.

#### Editer une dépense
L'édition d'une dépense se fait en cliquant sur l'icone d'édition sur la dépense. Une modale s'ouvre avec un formulaire permettant de saisir les infos à modifier. Par défaut, la modale s'ouvre sur les infos actuelles.

#### Supprimer une dépense
La suppresion d'une dépense se fait simplement en cliquant sur la corbeille sur la dépense.

A noter que chaque action utilisateur est confirmée par un toast.

[image]

## Technologies utilisées 🛠️

- **HTML**
- **SCSS**
- **JavaScript**
- **React**
- **Vite**

## Auteur 👩‍💻👨‍💻

C'est moi ! Si vous voulez en savoir plus sur moi ou discuter de ce projet ou d'autres sujets intéressants, n'hésitez pas à me suivre ou à m'envoyer un message.
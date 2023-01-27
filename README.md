# Remede_Agency-Argent-Bank
![Capture_d_écran_2023-01-27_152610-removebg-preview](https://user-images.githubusercontent.com/94462048/215110418-1039d6a7-7a07-4528-9cce-4f308938884c.png)



## Scénario 

Vous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications web.
L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes front-end

![Capture_d_écran_2023-01-27_152626-removebg-preview](https://user-images.githubusercontent.com/94462048/215110619-df54de74-13bd-4652-83f2-2f899b2e6b9c.png)


## Contraintes techniques

#### Phase 1 “ Authentification des utilisateurs” :

- Créer l’application web complète et responsive avec React avec la base HTML / CSS fournis
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- L'utilisateur peut visiter la page d'accueil
- L'utilisateur peut se connecter au système
- L'utilisateur peut se déconnecter du système
- L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
- L'utilisateur peut modifier le profil et conserver les données dans la base de données.

#### Phase 2 “ Transactions”: 
- Spécifier chaque endpoint de l’API avec les informations suivantes : 
- La méthode HTTP 
- La route
- La description
- Les paramètres possibles
- Les différentes réponses


## Stacks utilisées

- React
- React Router
- Redux
- Vite
- Typescript
- Sass

## Justification du choix des stacks : 

#### Vite :

- Vite améliore le temps de démarrage du serveur de développement en divisant d'abord les modules d'une application en deux catégories : les dépendances et le code source.

#### TypeScript  :

- Éviter les erreurs cachées 
- Plus facile de remanier le code sans le casser de manière significative.
- S’orienter plus facilement dans des systèmes complexes et à grande échelle
- Code plus facile à maintenir contrairement au Javascript ou sa complexité à croître de manière exponentielle à chaque nouvelle ligne de code.

#### Sass :

- Permet de gérer des feuilles de styles de manière dynamique, à l'aide de variables, de conditions, de fonctions, de boucles et d'expressions.
- Permet d'écrire plus rapidement du CSS.
- Créer des vendors automatiquement ce qui permet donc d’avoir un rendu identique sur chaque navigateur.


## Maquettes

#### Phase 1 :
<img width="961" alt="edit-user-name" src="https://user-images.githubusercontent.com/94462048/215109696-d9d20bca-037c-4975-a866-5c13ecbf286d.png">

#### Phase 2 :
<img width="963" alt="transactions" src="https://user-images.githubusercontent.com/94462048/215109811-6c59147d-c41b-4c6f-a8cd-5479608cc7b7.png">


## Installer l'application Backend

Pour installer l'application backend, ouvrez un terminal (Git Bash, par exemple) et rendez-vous à l'aide du terminal dans le dossier: (l'emplacementChoisi)/back

Executez la commande:

npm install

L'installation des différentes dépendances devrait s'effectuer automatiquement.


## Lancer l'application Backend. ( Une fois l'application installée )

(l'emplacementChoisi)/back

Executez la commande:

npm run dev

L'application devrait se lancer, et si les précédentes étapes ont correctement fonctionné, le terminal devrait vous afficher les informations suivantes:


```

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./server/server.js`
Server listening on http://localhost:3001
Database successfully connected


```

## Installer l'application Frontend.

Pour installer l'application frontend, ouvrez un nouveau terminal, cette fois-ci rendez-vous dans le dossier

(l'emplacementChoisi)/

Executez la commande:

npm install L'installation des différentes dépendances de l'application frontend s'opèrera.


## Lancer l'application Frontend

Comme pour l'application backend, une fois les dépendances installées, dans le dossier

(l'emplacementChoisi)/

Executez dans votre terminal la commande

npm run dev

Si les précédentes étapes ont correctement fonctionné, le terminal affichera le message suivant:

```
> argentbank@0.0.0 dev
> vite


  VITE v4.0.4  ready in 802 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

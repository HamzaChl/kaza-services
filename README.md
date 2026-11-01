# Kaza Services

Site vitrine React + TypeScript + Vite. Livraison de colis et distribution de presse en Belgique.

## Développement

Node.js **24.x** et npm. Avec nvm :

```sh
nvm install
nvm use
npm ci
npm run dev
```

## Vérifications et build

```sh
npm run check
npm run preview
```

`check` exécute ESLint, TypeScript puis le build Vite. Le site compilé se trouve dans `dist/`.

## Déploiement sur Vercel

La configuration est définie dans `vercel.json` et `package.json` :

| Paramètre | Valeur |
| --- | --- |
| Framework | Vite |
| Root Directory | Racine du dépôt (`./`) |
| Node.js | 24.x |
| Installation | `npm ci` |
| Build | `npm run check` |
| Output Directory | `dist` |
| Variables d’environnement | Aucune requise actuellement |

### Depuis un dépôt Git

1. Committer les sources, `public/`, `package.json`, `package-lock.json` et les fichiers de configuration, puis pousser le dépôt sur GitHub, GitLab ou Bitbucket.
2. Dans Vercel : **Add New → Project**, importer ce dépôt.
3. Conserver les paramètres ci-dessus et lancer **Deploy**.
4. Configurer le domaine dans les réglages du projet si nécessaire.

### Depuis le terminal, sans dépôt distant

Depuis la racine du projet, avec un compte Vercel :

```sh
npx vercel
```

Cette commande permet d’associer le dossier à un projet et de créer un déploiement de prévisualisation. Après vérification de cette prévisualisation :

```sh
npx vercel --prod
```

Le dossier `.vercel/`, les fichiers `.env*` et les configurations locales ne doivent pas être commités. Aucun identifiant Vercel n’est nécessaire dans le code.

## Routage et fichiers publics

La règle SPA de `vercel.json` permet d’ouvrir et d’actualiser directement les pages React Router :

- `/`
- `/services` (également `#colis` et `#presse`)
- `/couverture`
- `/a-propos`
- `/contact` (également `?service=presse`)

Les images et polices sont servies depuis `public/`. Respecter la casse exacte des chemins, notamment **`/Logos-co/`**, pour le déploiement Linux. Ne pas appliquer `cleanUrls: true` avec cette destination `/index.html` sans adapter le routage.

Après déploiement, vérifier les accès directs aux cinq pages, les logos, le menu mobile, les ancres des services et le téléchargement du formulaire.

## Fonctionnement du contact

Le formulaire prépare un fichier texte téléchargeable. Il **n’envoie aucun e-mail**, n’enregistre rien sur un serveur et ne nécessite aucun secret. Le déploiement Vercel conserve ce fonctionnement ; la réception des demandes par e-mail nécessite une intégration distincte.

## Références

- [Vite sur Vercel et routage SPA](https://vercel.com/docs/frameworks/frontend/vite)
- [Configuration Vercel](https://vercel.com/docs/project-configuration/vercel-json)
- [Versions de Node.js](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)

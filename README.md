# Noisy Kin-Ball

Nouvelle version du site du Noisy Kin-Ball. L’application utilise les API et la
structure App Router de Next.js, avec un contenu statique extrait de l’ancien
WordPress.

## Développement local

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

## Vérifications

```bash
npm run lint
npm run build
```

## Contenu WordPress

Les contenus publiés sont stockés dans `content/wordpress-content.json`. Pour
les régénérer à partir de l’export SQL conservé dans le workspace :

```bash
python3 scripts/extract-wordpress.py ../work/db-export/if0_37183962_noisykb.sql content
```

Le script ne reprend que les pages et articles publiés. Il supprime les éléments
de mise en page Elementor et conserve un HTML éditorial restreint.

## Ajouter une actualité

Dans cette première version, les actualités sont issues du fichier JSON. Pour
ajouter un article manuellement, dupliquer un objet de type `post`, modifier son
titre, son slug, ses dates, son résumé et son `bodyHtml`, puis relancer le build.

## Médias

`content/media-manifest.json` contient les 167 médias référencés par WordPress.
Leur présence locale n’est pas garantie : le FTP fourni ne contenait pas les
originaux de la médiathèque.

## Déploiement

Le projet est conçu pour être versionné dans Git et déployé automatiquement.
Avant la bascule du domaine, vérifier les routes, les redirections, les liens de
formulaire et tous les médias utilisés.

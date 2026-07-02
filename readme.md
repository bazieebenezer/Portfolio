# AGENTS.md — Portfolio (Bazié Josias)

Site statique HTML/CSS/JS vanilla. Portfolio one-page déployé sur Vercel.

## Architecture

```
index.html        → page unique
css/main.min.css  → CSS minifié (sources dans css/src/ : variables.css, style.css, responsive.css)
js/main.js        → toute la logique front
data/cv_simplix.pdf
assets/{images,icons,videos}/
```

## Commandes

Aucun outil de build (`package.json` inexistant). Pour modifier le CSS :
1. Éditer les sources dans `css/src/`
2. Minifier manuellement vers `css/main.min.css` (aucun script automatisé)

## Déploiement

- Hébergé sur Vercel (canonical : `https://simplixp.vercel.app`)
- Déploiement via l'interface Vercel (pas de config ni CI visible dans le dépôt)

## Dépendances (CDN)

- GSAP + ScrollTrigger (`cdnjs`)
- Lucide icons (`unpkg`)
- EmailJS (`cdn.jsdelivr.net`)

## Particularités

- **i18n FR/EN** : traductions intégrées dans `js/main.js:251` (objet `translations`), pas de fichiers séparés
- **EmailJS** : clé publique et IDs (service/template) en dur dans `js/main.js:832,845`
- **Thème** : dark/light mode stocké dans `localStorage` (clé : `theme`)
- **Langue** : stockée dans `localStorage` (clé : `language`)
- **Dashboard animations** : rejouées à chaque changement de langue via `typeCode()` / `typeTerminal()` / `animateDots()`
- **Bouton CV** : lien direct vers `./data/cv_simplix.pdf` (téléchargement)
- **Pas de tests** ni de CI/CD dans le dépôt
- **Pas de fichier de configuration** (pas de `vercel.json`, `.env`, etc.)
